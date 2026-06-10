"use client";

import React, { useState, useEffect, useRef, useId, ReactNode } from "react";

interface DropdownProps {
  label?: ReactNode;
  children: ReactNode;
  align?: "left" | "right";
  containerClassName?: string;
  buttonClassName?: string;
  panelClassName?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultOpen?: boolean;
}

export const Dropdown = ({
  label = "Options",
  children,
  align = "left",
  containerClassName = "relative inline-block",
  buttonClassName = "inline-flex gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100 focus:ring focus:ring-gray-100 disabled:cursor-not-allowed disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-400",
  panelClassName = "absolute mt-2 w-60 divide-y divide-gray-100 rounded-lg border border-gray-100 bg-white text-left text-sm shadow-lg",
  open: controlledOpen,
  onOpenChange,
  defaultOpen = false,
}: DropdownProps) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : uncontrolledOpen;

  const setOpen = React.useCallback((value: boolean) => {
    if (!isControlled) {
      setUncontrolledOpen(value);
    }
    onOpenChange?.(value);
  }, [isControlled, onOpenChange]);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const id = useId();
  const buttonId = `dropdown-button-${id}`;

  const toggle = () => {
    if (isOpen) {
      close(true);
    } else {
      setOpen(true);
      buttonRef.current?.focus();
    }
  };

  const close = React.useCallback((focusAfter = false) => {
    if (!isOpen) return;
    setOpen(false);
    if (focusAfter) {
      buttonRef.current?.focus();
    }
  }, [isOpen, setOpen]);

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;

    const handleOutsideClick = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        close(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, close]);

  // Close on escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
        close(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, close]);

  // Close on focus moving outside
  useEffect(() => {
    if (!isOpen) return;

    const handleFocusIn = (event: FocusEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        close(false);
      }
    };

    document.addEventListener("focusin", handleFocusIn);
    return () => {
      document.removeEventListener("focusin", handleFocusIn);
    };
  }, [isOpen, close]);

  const alignClass = align === "left" ? "left-0" : "right-0";

  return (
    <div ref={containerRef} className={containerClassName}>
      <button
        ref={buttonRef}
        onClick={toggle}
        aria-expanded={isOpen}
        aria-controls={buttonId}
        type="button"
        className={buttonClassName}
      >
        {label}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          ref={panelRef}
          id={buttonId}
          className={`${panelClassName} ${alignClass} z-10`}
          style={{ transformOrigin: align === "left" ? "top left" : "top right" }}
        >
          {children}
        </div>
      )}
    </div>
  );
};
