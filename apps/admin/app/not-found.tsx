"use client";

import Link from "next/link";
import { LayoutDashboard, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-[var(--color-bg)] px-4">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gold/10 rounded-full blur-[80px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <h1 className="text-[120px] md:text-[180px] font-black leading-none bg-gradient-to-b from-white via-white to-white/20 bg-clip-text text-transparent tracking-tighter select-none font-h">
          404
        </h1>
        
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent my-8 opacity-50" />
        
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-wide font-h">
          System Module Not Found
        </h2>
        <p className="text-muted max-w-md mx-auto mb-10 text-sm md:text-base leading-relaxed">
          The administrative route you are trying to access does not exist or has been deprecated. Please verify the URL.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link href="/" className="btn btn-gold group flex items-center justify-center gap-2 px-8 py-3.5">
            <LayoutDashboard size={18} className="group-hover:scale-110 transition-transform" />
            <span>Return to Dashboard</span>
          </Link>
          <button 
            onClick={() => window.history.back()} 
            className="btn btn-outline group flex items-center justify-center gap-2 px-8 py-3.5 border-white/10 hover:border-white/30 hover:bg-white/5 text-white"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  );
}
