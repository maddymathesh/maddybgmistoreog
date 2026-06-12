/* eslint-disable @typescript-eslint/no-unused-vars, @next/next/no-img-element */
"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  ShoppingCart, Lock, Banknote, CheckCircle, Gamepad2, Star, Send,
  AlertTriangle, Info, ChevronDown, ChevronUp, Sparkles, Award, Clock,
  MapPin, Coins, ExternalLink, ShieldCheck, Check, Link2,
  ShieldAlert, HelpCircle, CheckCircle2, Key, RefreshCw, UserCheck, Globe, CalendarClock
} from "lucide-react";
import CountUp from "../../components/CountUp";

const WhatsAppIcon = ({ size = 16 }: { size?: number }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    fill="currentColor"
    style={{ display: "inline-block", verticalAlign: "middle" }}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.46h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const TelegramIcon = ({ size = 16 }: { size?: number }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    fill="currentColor"
    style={{ display: "inline-block", verticalAlign: "middle" }}
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.53-1.4.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.42-1.4-.88.03-.24.38-.49 1.04-.74 4.07-1.77 6.79-2.93 8.16-3.5 3.89-1.61 4.7-1.89 5.23-1.9.11 0 .37.03.54.17.14.12.18.28.2.45-.02.07-.02.16-.03.25z" />
  </svg>
);

interface StepBadgeProps {
  num: string;
  color: string;
}

function StepBadge({ num, color }: StepBadgeProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "24px",
        height: "24px",
        borderRadius: "50%",
        backgroundColor: `${color}15`,
        border: `1px solid ${color}35`,
        color: color,
        fontSize: "11px",
        fontWeight: 800,
        fontFamily: "var(--font-h)",
        flexShrink: 0,
        marginTop: "2px"
      }}
    >
      {num}
    </div>
  );
}

export default function Buy() {
  const [activeOption, setActiveOption] = useState(0);
  const [bookingExpanded, setBookingExpanded] = useState(false);
  const [f2fExpanded, setF2fExpanded] = useState(false);
  const [escrowExpanded, setEscrowExpanded] = useState(false);
  const [unlinkTab, setUnlinkTab] = useState(1);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const bookingRef = useRef<HTMLDivElement>(null);
  const f2fRef = useRef<HTMLDivElement>(null);
  const escrowRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Booking calculator state
  const [calcValue, setCalcValue] = useState(100000);
  const bookingFee = Math.round(calcValue * 0.1);
  const balance = calcValue - bookingFee;

  const ruleChipStyle = (color: string) => ({
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    padding: "6px 14px",
    borderRadius: "30px",
    fontSize: "12px",
    fontWeight: 700,
    fontFamily: "var(--font-h)",
    textTransform: "uppercase" as const,
    letterSpacing: "0.5px",
    cursor: "pointer",
    border: `1px solid ${color}`,
    color: color,
    background: `${color}14`,
    transition: "all 0.2s",
    textDecoration: "none"
  });

  const timelineDot = (n: number, highlight: boolean) => ({
    width: "34px", height: "34px", borderRadius: "50%",
    background: highlight ? "linear-gradient(135deg, var(--color-gold), var(--color-orange))" : "rgba(17,21,32,0.8)",
    border: highlight ? "2px solid var(--color-gold)" : "1px solid rgba(255,215,0,0.25)",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: "14px", fontWeight: 700, color: highlight ? "#000" : "var(--color-gold)",
    flexShrink: 0
  });

  return (
    <>
      <div style={{ background: "var(--color-bg)", color: "#fff", minHeight: "100vh" }}>
        {/* HERO BANNER */}
        <section style={{
          position: "relative", width: "100%",
          minHeight: "80vh", overflow: "hidden",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <img
            src="/buy-banner.jpg"
            alt="BGMI Battlefield"
            style={{
              position: "absolute", inset: 0, width: "100%", height: "100%",
              objectFit: "cover", objectPosition: "center 40%",
              filter: "brightness(0.5)",
            }}
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to bottom, rgba(8,10,15,0.5) 0%, transparent 30%, transparent 50%, rgba(8,10,15,0.97) 100%)",
          }} />
          <div style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(ellipse at 20% 50%, rgba(255,215,0,0.06) 0%, transparent 60%)",
          }} />

          <div style={{
            position: "relative", zIndex: 2, textAlign: "center",
            padding: "0 5%", maxWidth: "860px",
          }}>
            <div className="badge mb-4 animate-pulse">
              <ShoppingCart size={14} /> Premium Buying Portal
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black font-h leading-none mb-6 drop-shadow-[0_4px_15px_rgba(0,0,0,0.85)] uppercase">
              Acquire Your Ultimate<br />
              <span className="g">BGMI Account</span>
            </h1>
            <p className="text-muted text-sm sm:text-base md:text-lg max-w-[640px] mx-auto mb-10 drop-shadow-[0_2px_5px_rgba(0,0,0,0.7)] font-medium">
              Choose from secured instant-delivery stocks, explore daily channel listings, or request personalized custom sourcing tailored to your budget and exact skin requirements.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/readystocks" style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "14px 30px", borderRadius: "10px",
                background: "linear-gradient(135deg, var(--color-gold), var(--color-orange))",
                color: "#000", fontFamily: "var(--font-h)", fontWeight: 700,
                fontSize: "14px", textDecoration: "none", letterSpacing: "0.5px",
                boxShadow: "0 4px 20px rgba(255,215,0,0.3)", transition: "transform 0.2s"
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "none"}>
                <Gamepad2 size={16} /> Browse Ready Stocks
              </Link>
              <button onClick={() => scrollTo(optionsRef)} style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "14px 30px", borderRadius: "10px",
                background: "rgba(255,255,255,0.05)", cursor: "pointer",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "#fff", fontFamily: "var(--font-h)", fontWeight: 700,
                fontSize: "14px", letterSpacing: "0.5px", transition: "all 0.2s"
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--color-gold)"; e.currentTarget.style.background = "rgba(255,215,0,0.04)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}>
                <Info size={16} /> Learn Buying Paths
              </button>
            </div>

            {/* Quick Deal Mode Navigation */}
            <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap", marginTop: "28px" }}>
              <button onClick={() => { setBookingExpanded(true); setTimeout(() => scrollTo(bookingRef), 100); }}
                style={ruleChipStyle("var(--color-gold)")}>
                <Coins size={12} /> Booking System
              </button>
              <button onClick={() => { setF2fExpanded(true); setTimeout(() => scrollTo(f2fRef), 100); }}
                style={ruleChipStyle("var(--color-orange)")}>
                <MapPin size={12} /> F2F Deal Rules
              </button>
              <button onClick={() => { setEscrowExpanded(true); setTimeout(() => scrollTo(escrowRef), 100); }}
                style={ruleChipStyle("#a855f7")}>
                <ShieldCheck size={12} /> Escrow System
              </button>
            </div>
          </div>
        </section>

        {/* ESSENTIAL TRANSACTION RULES */}
        <section style={{ padding: "50px 5% 20px", maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{
            background: "linear-gradient(135deg, rgba(239,68,68,0.05) 0%, rgba(249,115,22,0.05) 100%)",
            border: "1px dashed rgba(249,115,22,0.4)", borderRadius: "20px",
            padding: "32px 30px", boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
            position: "relative", overflow: "hidden"
          }}>
            <div style={{ position: "absolute", top: "-50px", right: "-50px", width: "150px", height: "150px", background: "radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
              <AlertTriangle size={24} style={{ color: "var(--color-orange)", filter: "drop-shadow(0 0 8px rgba(249,115,22,0.4))" }} />
              <h2 style={{
                fontFamily: "var(--font-h)", fontSize: "clamp(20px,3vw,24px)",
                fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", margin: 0, color: "#fff"
              }}>
                Essential Transaction & Booking Rules
              </h2>
            </div>
            <p style={{ color: "var(--color-muted)", fontSize: "13px", marginBottom: "28px", paddingLeft: "36px" }}>
              Every deal — account, X-suit, or supercar — follows these strict rules. Click any rule to expand full details.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: "20px" }}>
              {[
                {
                  num: "01", title: "10% Non-Refundable Booking Fee",
                  short: "A 10% non-refundable booking fee applies to all deals (accounts, X-suits, supercars). For a ₹100K account, that's ₹10K upfront. Failure to pay the balance cancels the booking with no refund.",
                  linkLabel: "Full Booking System Details",
                  linkRef: bookingRef,
                  setExp: setBookingExpanded,
                  color: "var(--color-gold)"
                },
                {
                  num: "02", title: "Full Payment Before Handover",
                  short: "100% payment clearance is strictly mandatory before any account credentials, social bindings, or login methods are handed over. No partial payment guarantees immediate delivery.",
                  linkLabel: null, color: "var(--color-gold)"
                },
                {
                  num: "03", title: "F2F Meetup Guidelines",
                  short: "Face-to-Face deals are for accounts above ₹80,000 only. 10% booking fee is mandatory. Meetup is at a common midpoint public location. Buyer covers all travel, stay, and food costs for the seller/agent.",
                  linkLabel: "Full F2F Deal System Details",
                  linkRef: f2fRef,
                  setExp: setF2fExpanded,
                  color: "var(--color-orange)"
                },
                {
                  num: "04", title: "ID Verification (Rare Cases)",
                  short: "In rare scenarios, a government ID (Aadhaar, PAN, or DL) may be requested for security verification. All documents are handled securely and kept strictly confidential.",
                  linkLabel: null, color: "var(--color-gold)"
                },
                {
                  num: "05", title: "Escrow via Trusted Middlemen",
                  short: "Escrow is only permitted through trusted YouTubers, streamers, or dealers mutually recognized by both parties. Buyer is responsible for the escrow fee.",
                  linkLabel: "Full Escrow System Details",
                  linkRef: escrowRef,
                  setExp: setEscrowExpanded,
                  color: "#a855f7"
                },
              ].map((rule) => (
                <div key={rule.num} style={{ display: "flex", gap: "14px" }}>
                  <div style={{
                    width: "32px", height: "32px", borderRadius: "50%",
                    background: "rgba(249,115,22,0.12)", border: "1px solid rgba(249,115,22,0.3)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--color-orange)", fontWeight: 700, flexShrink: 0,
                    fontSize: "13px", fontFamily: "var(--font-h)"
                  }}>{rule.num}</div>
                  <div>
                    <strong style={{ color: "#fff", display: "block", fontSize: "15px", marginBottom: "6px", fontFamily: "var(--font-h)", letterSpacing: "0.5px" }}>
                      {rule.title}
                    </strong>
                    <span style={{ color: "var(--color-muted)", fontSize: "13px", lineHeight: "1.6", display: "block", marginBottom: "10px" }}>
                      {rule.short}
                    </span>
                    {rule.linkLabel && rule.setExp && (
                      <button
                        onClick={() => {
                          rule.setExp!(true);
                          setTimeout(() => scrollTo(rule.linkRef), 150);
                        }}
                        style={{
                          display: "inline-flex", alignItems: "center", gap: "6px",
                          fontSize: "12px", fontWeight: 700, color: rule.color,
                          background: "transparent", border: "none", cursor: "pointer",
                          fontFamily: "var(--font-h)", letterSpacing: "0.5px",
                          textTransform: "uppercase", padding: 0
                        }}>
                        <Coins size={12} /> {rule.linkLabel} →
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OPTIONS GRID SECTION */}
        <section id="buying-options" ref={optionsRef} className="py-20 px-[5%] max-w-[1400px] mx-auto">
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <span className="badge mb-3">Buying Methods</span>
            <h2 className="text-3xl sm:text-5xl font-black font-h uppercase tracking-wide text-white">Three Ways to Acquire Your <span className="g">BGMI Account</span></h2>
            <p className="text-muted max-w-[600px] mx-auto mt-4 text-sm sm:text-base">
              Select from three curated buying modes. Each card explains the full flow — including Booking, F2F, and Escrow details — with expandable inline guides.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* OPTION 1: READY-TO-PLAY ACCOUNTS */}
            <div className={`why-us-card relative overflow-hidden flex flex-col h-full`} style={{ borderColor: activeOption === 0 ? "#3b82f6" : "rgba(59,130,246,0.3)", boxShadow: activeOption === 0 ? "0 0 20px rgba(59,130,246,0.15)" : "none", transition: "all 0.3s" }} onMouseEnter={() => setActiveOption(0)}>
              <div style={{ flex: 1 }}>
                <span className="badge mb-4" style={{ background: "rgba(59,130,246,0.1)", color: "#60a5fa", borderColor: "rgba(59,130,246,0.25)" }}><Star size={12} style={{ display: "inline", marginRight: "4px" }} /> Ready To Play</span>
                <h3 className="text-xl sm:text-2xl font-black font-h mb-3 text-white">Ready To Play Accounts</h3>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  Pre-secured, verified accounts listed directly on our website or channels. Fully safe with unlinking completed — inspect inventory, specs, pricing, and login structures before purchasing.
                </p>

                <div className="text-[11px] font-bold text-muted uppercase tracking-[1px] mb-4">Secure Ready-To-Play Steps:</div>
                <div className="space-y-5">
                  <div className="flex gap-4 items-start">
                    <StepBadge num="1" color="#3b82f6" />
                    <div>
                      <h5 className="font-h text-sm font-bold text-white mb-1">Browse & Review</h5>
                      <p className="text-xs text-muted leading-relaxed m-0">Ready-to-Play accounts are pre-secured and listed on our website or channels, fully safe with unlinking done. Review inventory, specs, pricing, and login info before choosing.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <StepBadge num="2" color="#3b82f6" />
                    <div>
                      <h5 className="font-h text-sm font-bold text-white mb-1">Contact Support</h5>
                      <p className="text-xs text-muted leading-relaxed m-0">After reviewing, contact us via the website or directly on WhatsApp/Telegram to confirm the availability of your chosen account.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <StepBadge num="3" color="#3b82f6" />
                    <div>
                      <h5 className="font-h text-sm font-bold text-white mb-1">Choose Deal Mode</h5>
                      <p className="text-xs text-muted leading-relaxed m-0 mb-2">Select your transaction method: secure online transfer or Face-to-Face (F2F) meetup. F2F is reserved strictly for accounts above ₹80K.</p>
                      <button onClick={() => { setF2fExpanded(true); setTimeout(() => scrollTo(f2fRef), 100); }} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-[10px] font-bold text-orange-500 uppercase tracking-wider hover:bg-orange-500/20 transition-colors">
                        <MapPin size={10} /> F2F Rules
                      </button>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <StepBadge num="4" color="#3b82f6" />
                    <div>
                      <h5 className="font-h text-sm font-bold text-white mb-1">Upfront Booking</h5>
                      <p className="text-xs text-muted leading-relaxed m-0 mb-2">Pay a 10% non-refundable booking fee to hold the account. For online deals, pay in full at once or pay the booking fee to hold the account for 24-48 hrs.</p>
                      <button onClick={() => { setBookingExpanded(true); setTimeout(() => scrollTo(bookingRef), 100); }} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-[10px] font-bold text-yellow-500 uppercase tracking-wider hover:bg-yellow-500/20 transition-colors">
                        <Coins size={10} /> Booking Rules
                      </button>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <StepBadge num="5" color="#3b82f6" />
                    <div>
                      <h5 className="font-h text-sm font-bold text-white mb-1">Full Payment Processing</h5>
                      <p className="text-xs text-muted leading-relaxed m-0">Only after full payment clearance, handover starts. In F2F deals, cash is counted or live transfer completed in person.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <StepBadge num="6" color="#3b82f6" />
                    <div>
                      <h5 className="font-h text-sm font-bold text-white mb-1">Secure Binding</h5>
                      <p className="text-xs text-muted leading-relaxed m-0">Official invoice provided for all secure online deals, guarantee timeline, and account safe space.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/5">
                <Link href="/readystocks" className="btn w-full justify-center text-[12px] tracking-[1.5px] flex items-center justify-center gap-2" style={{ 
                  background: "linear-gradient(135deg, #1d4ed8, #3b82f6)", 
                  color: "#fff", 
                  border: "1px solid rgba(59, 130, 246, 0.4)", 
                  boxShadow: "0 4px 15px rgba(37, 99, 235, 0.25)",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  padding: "14px 24px",
                  borderRadius: "24px",
                  fontWeight: 800,
                  textTransform: "uppercase"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.02) translateY(-1px)";
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(37, 99, 235, 0.5)";
                  e.currentTarget.style.background = "linear-gradient(135deg, #3b82f6, #60a5fa)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(37, 99, 235, 0.25)";
                  e.currentTarget.style.background = "linear-gradient(135deg, #1d4ed8, #3b82f6)";
                }}>
                  <Gamepad2 size={15} className="shrink-0" />
                  <span>VIEW READY-TO-PLAY ACCOUNTS</span>
                  <span className="ml-0.5 font-sans">→</span>
                </Link>
              </div>
            </div>

            {/* OPTION 2: MARKET-AVAILABLE ACCOUNTS */}
            <div className={`why-us-card relative overflow-hidden flex flex-col h-full`} style={{ borderColor: activeOption === 1 ? "#a855f7" : "rgba(168,85,247,0.3)", boxShadow: activeOption === 1 ? "0 0 20px rgba(168,85,247,0.15)" : "none", transition: "all 0.3s" }} onMouseEnter={() => setActiveOption(1)}>
              <div style={{ flex: 1 }}>
                <span className="badge mb-4" style={{ background: "rgba(168,85,247,0.1)", color: "#c084fc", borderColor: "rgba(168,85,247,0.25)" }}># Daily Listings</span>
                <h3 className="text-xl sm:text-2xl font-black font-h mb-3 text-white">Available Accounts in Market</h3>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  Access a massive, fast-moving daily catalog of verified accounts by joining our premium communities. Listings range from budget-friendly options to premium high-end accounts.
                </p>

                <div className="text-[11px] font-bold text-muted uppercase tracking-[1px] mb-4">Feed Booking Steps:</div>
                <div className="space-y-5">
                  <div className="flex gap-4 items-start">
                    <StepBadge num="1" color="#a855f7" />
                    <div>
                      <h5 className="font-h text-sm font-bold text-white mb-1">Join Channels</h5>
                      <p className="text-xs text-muted leading-relaxed m-0">Join our official WhatsApp or Telegram channels via the buttons below to access our daily verified listing feed.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <StepBadge num="2" color="#a855f7" />
                    <div>
                      <h5 className="font-h text-sm font-bold text-white mb-1">Browse Daily Listings</h5>
                      <p className="text-xs text-muted leading-relaxed m-0">We post verified accounts daily — from ₹5K to several lakhs. Review listings and choose the account that matches your preferences perfectly.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <StepBadge num="3" color="#a855f7" />
                    <div>
                      <h5 className="font-h text-sm font-bold text-white mb-1">Choose Deal Mode</h5>
                      <p className="text-xs text-muted leading-relaxed m-0 mb-2">Select your transaction mode: secure online transfer or Face-to-Face (F2F) meetup. F2F is only allowed for accounts above ₹80K and requires upfront booking.</p>
                      <div className="flex gap-2 flex-wrap">
                        <button onClick={() => { setF2fExpanded(true); setTimeout(() => scrollTo(f2fRef), 100); }} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-[10px] font-bold text-orange-500 uppercase tracking-wider hover:bg-orange-500/20 transition-colors">
                          <MapPin size={10} /> F2F Rules
                        </button>
                        <button onClick={() => { setEscrowExpanded(true); setTimeout(() => scrollTo(escrowRef), 100); }} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-[10px] font-bold text-purple-400 uppercase tracking-wider hover:bg-purple-500/20 transition-colors">
                          <ShieldCheck size={10} /> Escrow Option
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <StepBadge num="4" color="#a855f7" />
                    <div>
                      <h5 className="font-h text-sm font-bold text-white mb-1">Upfront Booking Deposit</h5>
                      <p className="text-xs text-muted leading-relaxed m-0 mb-2">The 10% non-refundable booking deposit locks your chosen account regardless of mode. Alternatively, full payment secures immediate handover.</p>
                      <button onClick={() => { setBookingExpanded(true); setTimeout(() => scrollTo(bookingRef), 100); }} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-[10px] font-bold text-yellow-500 uppercase tracking-wider hover:bg-yellow-500/20 transition-colors">
                        <Coins size={10} /> Booking Rules
                      </button>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <StepBadge num="5" color="#a855f7" />
                    <div>
                      <h5 className="font-h text-sm font-bold text-white mb-1">Payment Security Check</h5>
                      <p className="text-xs text-muted leading-relaxed m-0">All payments must clear to our accounts before any credentials are shared. Escrow verification may apply if opted.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <StepBadge num="6" color="#a855f7" />
                    <div>
                      <h5 className="font-h text-sm font-bold text-white mb-1">Secure Binding</h5>
                      <p className="text-xs text-muted leading-relaxed m-0">Once cleared, our admin links your provided email and number to the account for secure handover.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/5 flex flex-col gap-2.5">
                <a 
                  href="https://whatsapp.com/channel/0029VbAuBtrIXnlpr3jvnN13" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn w-full justify-center text-[11px] tracking-[1.5px] flex items-center justify-center gap-2" 
                  style={{ 
                    background: "rgba(10, 12, 16, 0.6)", 
                    color: "#25D366", 
                    border: "1px solid rgba(37, 211, 102, 0.25)", 
                    padding: "13px 20px",
                    borderRadius: "24px",
                    fontWeight: 800,
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
                    textTransform: "uppercase"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "linear-gradient(135deg, #25D366, #128C7E)";
                    e.currentTarget.style.color = "#000";
                    e.currentTarget.style.border = "1px solid transparent";
                    e.currentTarget.style.boxShadow = "0 8px 20px rgba(37, 211, 102, 0.35)";
                    e.currentTarget.style.transform = "scale(1.02) translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(10, 12, 16, 0.6)";
                    e.currentTarget.style.color = "#25D366";
                    e.currentTarget.style.border = "1px solid rgba(37, 211, 102, 0.25)";
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.25)";
                    e.currentTarget.style.transform = "none";
                  }}
                >
                  <WhatsAppIcon size={14} />
                  <span>WHATSAPP CHANNEL</span>
                </a>
                <a 
                  href="https://t.me/maddy_bgmistore" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn w-full justify-center text-[11px] tracking-[1.5px] flex items-center justify-center gap-2" 
                  style={{ 
                    background: "rgba(10, 12, 16, 0.6)", 
                    color: "#229ED9", 
                    border: "1px solid rgba(34, 158, 217, 0.25)", 
                    padding: "13px 20px",
                    borderRadius: "24px",
                    fontWeight: 800,
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
                    textTransform: "uppercase"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "linear-gradient(135deg, #229ED9, #0088cc)";
                    e.currentTarget.style.color = "#000";
                    e.currentTarget.style.border = "1px solid transparent";
                    e.currentTarget.style.boxShadow = "0 8px 20px rgba(34, 158, 217, 0.35)";
                    e.currentTarget.style.transform = "scale(1.02) translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(10, 12, 16, 0.6)";
                    e.currentTarget.style.color = "#229ED9";
                    e.currentTarget.style.border = "1px solid rgba(34, 158, 217, 0.25)";
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.25)";
                    e.currentTarget.style.transform = "none";
                  }}
                >
                  <TelegramIcon size={14} />
                  <span>TELEGRAM CHANNEL</span>
                </a>
              </div>
            </div>

            {/* OPTION 3: CUSTOM REQUIREMENTS */}
            <div className={`why-us-card relative overflow-hidden flex flex-col h-full`} style={{ borderColor: activeOption === 2 ? "#ea580c" : "rgba(234,88,12,0.3)", boxShadow: activeOption === 2 ? "0 0 20px rgba(234,88,12,0.15)" : "none", transition: "all 0.3s" }} onMouseEnter={() => setActiveOption(2)}>
              <div style={{ flex: 1 }}>
                <span className="badge badge-orange mb-4"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-1 inline-block"></span> Customized Sourcing</span>
                <h3 className="text-xl sm:text-2xl font-black font-h mb-3 text-white">Customized Requirement Account</h3>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  Have highly specific demands? We search our extensive nationwide seller network to find you the best matching accounts within your custom budget.
                </p>

                <div className="text-[11px] font-bold text-muted uppercase tracking-[1px] mb-4">Custom Sourcing Steps:</div>
                <div className="space-y-5">
                  <div className="flex gap-4 items-start">
                    <StepBadge num="1" color="#ea580c" />
                    <div>
                      <h5 className="font-h text-sm font-bold text-white mb-1">Contact & Requirements</h5>
                      <p className="text-xs text-muted leading-relaxed m-0">Reach out via WhatsApp or Telegram, specifying your exact requirements (gun skins, X-suits, outfits) and your maximum budget.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <StepBadge num="2" color="#ea580c" />
                    <div>
                      <h5 className="font-h text-sm font-bold text-white mb-1">Feasibility Discussion</h5>
                      <p className="text-xs text-muted leading-relaxed m-0">We discuss feasibility with our seller network, adjusting requirements or budget if needed based on current market availability.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <StepBadge num="3" color="#ea580c" />
                    <div>
                      <h5 className="font-h text-sm font-bold text-white mb-1">10% Security Deposit</h5>
                      <p className="text-xs text-muted leading-relaxed m-0 mb-2">After requirements and budget are finalized, pay a 10% security deposit to begin sourcing (e.g., ₹10K for a ₹100K account target).</p>
                      <button onClick={() => { setBookingExpanded(true); setTimeout(() => scrollTo(bookingRef), 100); }} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-[10px] font-bold text-yellow-500 uppercase tracking-wider hover:bg-yellow-500/20 transition-colors">
                        <Coins size={10} /> How Booking Works
                      </button>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <StepBadge num="4" color="#ea580c" />
                    <div>
                      <h5 className="font-h text-sm font-bold text-white mb-1">Sourcing Search (24-48 hrs)</h5>
                      <p className="text-xs text-muted leading-relaxed m-0">We search our nationwide seller network immediately. If no match is found within 24-48 hours, the full deposit is refunded unconditionally.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <StepBadge num="5" color="#ea580c" />
                    <div>
                      <h5 className="font-h text-sm font-bold text-white mb-1">Deposit Converts to Booking</h5>
                      <p className="text-xs text-muted leading-relaxed m-0">If a match is found, the security deposit becomes a non-refundable booking fee to lock the listing and prevent seller sale.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <StepBadge num="6" color="#ea580c" />
                    <div>
                      <h5 className="font-h text-sm font-bold text-white mb-1">F2F Deal Conditions</h5>
                      <p className="text-xs text-muted leading-relaxed m-0 mb-2">Face-to-Face deals can be opted for custom requests above ₹80K provided the booking process has been held.</p>
                      <button onClick={() => { setF2fExpanded(true); setTimeout(() => scrollTo(f2fRef), 100); }} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-[10px] font-bold text-orange-500 uppercase tracking-wider hover:bg-orange-500/20 transition-colors">
                        <MapPin size={10} /> F2F Rules
                      </button>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <StepBadge num="7" color="#ea580c" />
                    <div>
                      <h5 className="font-h text-sm font-bold text-white mb-1">Secure Binding</h5>
                      <p className="text-xs text-muted leading-relaxed m-0">After full payment completion (F2F or Online), the account details are fully secured, verified, and linked to your phone and email.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/5 flex flex-col gap-2.5">
                <a 
                  href="https://wa.me/+919025391516?text=Hi%20Maddy!%20I%20have%20a%20custom%20BGMI%20account%20requirement" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn w-full justify-center text-[11px] tracking-[1.5px] flex items-center justify-center gap-2" 
                  style={{ 
                    background: "rgba(10, 12, 16, 0.6)", 
                    color: "#25D366", 
                    border: "1px solid rgba(37, 211, 102, 0.25)", 
                    padding: "13px 20px",
                    borderRadius: "24px",
                    fontWeight: 800,
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
                    textTransform: "uppercase"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "linear-gradient(135deg, #25D366, #128C7E)";
                    e.currentTarget.style.color = "#000";
                    e.currentTarget.style.border = "1px solid transparent";
                    e.currentTarget.style.boxShadow = "0 8px 20px rgba(37, 211, 102, 0.35)";
                    e.currentTarget.style.transform = "scale(1.02) translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(10, 12, 16, 0.6)";
                    e.currentTarget.style.color = "#25D366";
                    e.currentTarget.style.border = "1px solid rgba(37, 211, 102, 0.25)";
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.25)";
                    e.currentTarget.style.transform = "none";
                  }}
                >
                  <WhatsAppIcon size={14} />
                  <span>REQUEST ON WHATSAPP</span>
                </a>
                <a 
                  href="https://t.me/MBSxMADDY17?text=Hi%20Maddy!%20I%20have%20a%20custom%20BGMI%20account%20requirement" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn w-full justify-center text-[11px] tracking-[1.5px] flex items-center justify-center gap-2" 
                  style={{ 
                    background: "rgba(10, 12, 16, 0.6)", 
                    color: "#229ED9", 
                    border: "1px solid rgba(34, 158, 217, 0.25)", 
                    padding: "13px 20px",
                    borderRadius: "24px",
                    fontWeight: 800,
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
                    textTransform: "uppercase"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "linear-gradient(135deg, #229ED9, #0088cc)";
                    e.currentTarget.style.color = "#000";
                    e.currentTarget.style.border = "1px solid transparent";
                    e.currentTarget.style.boxShadow = "0 8px 20px rgba(34, 158, 217, 0.35)";
                    e.currentTarget.style.transform = "scale(1.02) translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(10, 12, 16, 0.6)";
                    e.currentTarget.style.color = "#229ED9";
                    e.currentTarget.style.border = "1px solid rgba(34, 158, 217, 0.25)";
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.25)";
                    e.currentTarget.style.transform = "none";
                  }}
                >
                  <TelegramIcon size={14} />
                  <span>REQUEST ON TELEGRAM</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* TIMELINE EXPANDABLE DETAILS */}
        <section className="py-10 px-[5%] max-w-[1200px] mx-auto flex flex-col gap-6">
          {/* Booking System */}
          <div ref={bookingRef} className="why-us-card relative overflow-hidden flex flex-col w-full !p-0" style={{ border: bookingExpanded ? "1px solid var(--color-gold)" : "1px solid rgba(255,215,0,0.15)" }}>
            <button
              onClick={() => setBookingExpanded(!bookingExpanded)}
              className="w-full flex justify-between items-center bg-transparent border-none text-left cursor-pointer p-6"
            >
              <div className="flex items-center gap-4">
                <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(255,215,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-gold)" }}>
                  <Link2 size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-black font-h text-white m-0 tracking-wide">10% Non-Refundable Booking System</h3>
                  <span className="text-muted text-xs block mt-1">Tap to expand full booking rules, calculator & examples</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 text-gold text-[10px] font-bold uppercase tracking-wider">
                  <ExternalLink size={12} /> Full Page
                </span>
                {bookingExpanded ? <ChevronUp size={20} className="text-gold" /> : <ChevronDown size={20} className="text-muted" />}
              </div>
            </button>

            {bookingExpanded && (
              <div className="px-6 pb-6 pt-2 border-t border-white/5">
                <p className="text-muted text-sm leading-relaxed mb-6 max-w-[800px]">
                  The booking system allows buyers to temporarily reserve an account or item by paying a <strong className="text-gold">10% advance booking amount</strong>. This fee is <strong className="text-red-500">strictly non-refundable</strong> and applies to all deals — accounts, X-suits, and supercars.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
                  <div className="flex items-center gap-3 p-3 rounded-xl border border-white/5 bg-white/[0.02] text-xs text-muted">
                    <Check size={14} className="text-gold" /> Confirms buyer commitment
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl border border-white/5 bg-white/[0.02] text-xs text-muted">
                    <Lock size={14} className="text-gold" /> Temporarily locks the account for you
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl border border-white/5 bg-white/[0.02] text-xs text-muted">
                    <ShieldCheck size={14} className="text-gold" /> Prevents other buyers purchasing it
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl border border-white/5 bg-white/[0.02] text-xs text-muted">
                    <AlertTriangle size={14} className="text-red-500" /> Non-refundable upon cancellation
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl border border-white/5 bg-white/[0.02] text-xs text-muted">
                    <Clock size={14} className="text-gold" /> 24-hour balance payment window
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl border border-white/5 bg-white/[0.02] text-xs text-muted">
                    <MapPin size={14} className="text-orange-500" /> Mandatory for all F2F deals
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 p-6 rounded-2xl border border-white/5 bg-[#0a0c10]">
                  <div>
                    <span className="text-[10px] font-bold text-muted uppercase tracking-[1px] block mb-6">Booking Examples</span>
                    <div className="space-y-4 text-sm">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5">
                        <span className="text-muted">₹100,000 Account</span>
                        <span className="text-gold font-bold">₹10,000 booking</span>
                      </div>
                      <div className="flex justify-between items-center pb-4 border-b border-white/5">
                        <span className="text-muted">₹50,000 X-Suit</span>
                        <span className="text-gold font-bold">₹5,000 booking</span>
                      </div>
                      <div className="flex justify-between items-center pb-4 border-b border-white/5">
                        <span className="text-muted">₹200,000 Account</span>
                        <span className="text-gold font-bold">₹20,000 booking</span>
                      </div>
                    </div>
                  </div>

                  <div className="pl-0 lg:pl-8 border-l-0 lg:border-l border-white/5">
                    <span className="text-[10px] font-bold text-muted uppercase tracking-[1px] block mb-4">Live Calculator (₹)</span>
                    <div className="relative mb-6">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gold font-bold">₹</span>
                      <input 
                        type="text" 
                        value={calcValue.toLocaleString("en-IN")} 
                        onChange={(e) => { const v = Number(e.target.value.replace(/[^0-9]/g, "")); setCalcValue(v || 0); }}
                        className="w-full bg-[#111520] border border-white/10 rounded-xl py-4 pl-10 pr-4 text-white font-h font-bold text-lg outline-none focus:border-gold" 
                      />
                    </div>
                    <input 
                      type="range" 
                      min="10000" 
                      max="500000" 
                      step="5000" 
                      value={calcValue}
                      onChange={(e) => setCalcValue(Number(e.target.value))}
                      className="w-full accent-gold cursor-pointer mb-8" 
                    />
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted">Booking Fee (10%)</span>
                        <span className="text-gold font-bold">₹{bookingFee.toLocaleString("en-IN")}</span>
                      </div>
                      <div className="flex justify-between pt-3 border-t border-white/5">
                        <span className="text-muted">Remaining Balance</span>
                        <span className="text-white font-bold">₹{balance.toLocaleString("en-IN")}</span>
                      </div>
                    </div>
                    <div className="mt-4 flex items-start gap-2 text-[10px] text-muted">
                      <AlertTriangle size={12} className="text-gold shrink-0 mt-0.5" />
                      Booking valid for 24 hours unless otherwise discussed.
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/5 flex items-start gap-3 mb-6">
                  <AlertTriangle size={16} className="text-red-500 shrink-0 mt-0.5" />
                  <p className="text-xs text-red-200/80 m-0 leading-relaxed font-medium">"No refund will be issued after successful booking confirmation. Please confirm your decision carefully."</p>
                </div>

                <div className="flex justify-end">
                  <Link href="/terms" className="btn btn-gold text-xs tracking-wider px-6 py-3">
                    FULL BOOKING SYSTEM PAGE →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* F2F Meetup */}
          <div ref={f2fRef} className="why-us-card relative overflow-hidden flex flex-col w-full !p-0" style={{ border: f2fExpanded ? "1px solid var(--color-orange)" : "1px solid rgba(249,115,22,0.15)" }}>
            <button
              onClick={() => setF2fExpanded(!f2fExpanded)}
              className="w-full flex justify-between items-center bg-transparent border-none text-left cursor-pointer p-6"
            >
              <div className="flex items-center gap-4">
                <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(249,115,22,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-orange)" }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-black font-h text-white m-0 tracking-wide">Face-to-Face Deal System</h3>
                  <span className="text-muted text-xs block mt-1">For accounts above ₹80K — tap to expand full F2F rules and process</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 text-orange-500 text-[10px] font-bold uppercase tracking-wider">
                  <ExternalLink size={12} /> Full Page
                </span>
                {f2fExpanded ? <ChevronUp size={20} className="text-orange-500" /> : <ChevronDown size={20} className="text-muted" />}
              </div>
            </button>

            {f2fExpanded && (
              <div className="px-6 pb-6 pt-2 border-t border-white/5">
                <p className="text-muted text-sm leading-relaxed mb-8 max-w-[800px]">
                  Face-to-Face (F2F) deals are an <strong className="text-white">optional, in-person transaction method</strong> where the buyer and seller meet at a safe common public location to complete the transfer. This is exclusively available for <strong className="text-orange-500">accounts above ₹80,000</strong>.
                </p>

                <div className="space-y-6 mb-10 max-w-[800px]">
                  <div className="flex gap-4 items-start">
                    <StepBadge num="1" color="#f97316" />
                    <div>
                      <h5 className="font-h text-sm font-bold text-white mb-1">Choose Account Above ₹80K</h5>
                      <p className="text-xs text-muted leading-relaxed m-0">Browse our listings or channels and select a premium account meeting the minimum F2F eligibility threshold.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <StepBadge num="2" color="#f97316" />
                    <div>
                      <h5 className="font-h text-sm font-bold text-white mb-1">Select F2F as Deal Mode</h5>
                      <p className="text-xs text-muted leading-relaxed m-0">Inform Maddy's admin via WhatsApp or Telegram that you prefer the in-person meetup option.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <StepBadge num="3" color="#f97316" />
                    <div>
                      <h5 className="font-h text-sm font-bold text-white mb-1">Pay 10% Booking Advance</h5>
                      <p className="text-xs text-muted leading-relaxed m-0">Pay the mandatory 10% non-refundable booking deposit. No meetup logistics will be arranged without this confirmation.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <StepBadge num="4" color="#f97316" />
                    <div>
                      <h5 className="font-h text-sm font-bold text-white mb-1">Meetup Location Finalized</h5>
                      <p className="text-xs text-muted leading-relaxed m-0">A common midpoint public location is selected between your city and the seller's city (e.g., Vellore for Chennai-Bangalore).</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <StepBadge num="5" color="#f97316" />
                    <div>
                      <h5 className="font-h text-sm font-bold text-white mb-1">Buyer Pays All Meetup Costs</h5>
                      <p className="text-xs text-muted leading-relaxed m-0">You cover the seller/agent's travel (bus/train/petrol), food, and hotel expenses — in addition to your own costs.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <StepBadge num="6" color="#f97316" />
                    <div>
                      <h5 className="font-h text-sm font-bold text-white mb-1">Complete Full Payment at Meetup</h5>
                      <p className="text-xs text-muted leading-relaxed m-0">At the meetup location, pay the remaining balance. Account credentials are provided only after 100% payment.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <StepBadge num="7" color="#f97316" />
                    <div>
                      <h5 className="font-h text-sm font-bold text-white mb-1">Account Secured & Handed Over</h5>
                      <p className="text-xs text-muted leading-relaxed m-0">Recovery email and phone are bound to you on the spot. Invoice and guarantee provided immediately.</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl border border-white/5 bg-[#0a0c10] mb-6">
                  <span className="text-[10px] font-bold text-muted uppercase tracking-[1px] block mb-4">Buyer Covered Meetup Expenses</span>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-medium">
                      🚆 Travel (Bus/Train/Petrol)
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-medium">
                      🍔 Food & Dining
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-medium">
                      🏨 Hotel Stay (If required)
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-medium">
                      🚶 Agent Transport
                    </span>
                  </div>
                  <p className="text-xs text-muted m-0 flex items-center gap-2"><MapPin size={12} className="text-red-500" /> These charges are entirely additional and separate from the account price.</p>
                </div>

                <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/5 flex items-start gap-3 mb-6">
                  <AlertTriangle size={16} className="text-red-500 shrink-0 mt-0.5" />
                  <p className="text-xs text-red-200/80 m-0 leading-relaxed font-medium">"Private, dark, or isolated meetup locations are strictly avoided. Only premium, CCTV-secured public spots are eligible."</p>
                </div>

                <div className="flex justify-end">
                  <Link href="/terms" className="btn text-xs tracking-wider px-6 py-3" style={{ background: "linear-gradient(135deg, #f97316, #ea580c)", color: "#fff", border: "none" }}>
                    FULL F2F DEAL SYSTEM PAGE →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Escrow System */}
          <div ref={escrowRef} className="why-us-card relative overflow-hidden flex flex-col w-full !p-0" style={{ border: escrowExpanded ? "1px solid var(--color-purple)" : "1px solid rgba(168,85,247,0.15)" }}>
            <button
              onClick={() => setEscrowExpanded(!escrowExpanded)}
              className="w-full flex justify-between items-center bg-transparent border-none text-left cursor-pointer p-6"
            >
              <div className="flex items-center gap-4">
                <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(168,85,247,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-purple)" }}>
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-black font-h text-white m-0 tracking-wide">Escrow Deal System</h3>
                  <span className="text-muted text-xs block mt-1">Via trusted YouTubers, streamers & verified dealers — tap to expand</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/30 text-purple-400 text-[10px] font-bold uppercase tracking-wider">
                  <ExternalLink size={12} /> Full Page
                </span>
                {escrowExpanded ? <ChevronUp size={20} className="text-purple-500" /> : <ChevronDown size={20} className="text-muted" />}
              </div>
            </button>



            {escrowExpanded && (
              <div className="px-6 pb-6 pt-2 border-t border-white/5">
                <p className="text-muted text-sm leading-relaxed mb-8 max-w-[900px]">
                  The Escrow method adds an <strong className="text-white">additional security layer</strong> for high-value transactions. A <strong className="text-purple-400">trusted, mutually recognized third party</strong> (YouTuber, streamer, or esports player) holds the deal in neutral ground until both parties fulfill their obligations.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  <div className="p-4 rounded-xl border border-white/5 bg-[#0a0c10]">
                    <div className="flex items-center gap-2 mb-2">
                      <Award size={16} className="text-purple-400" />
                      <strong className="text-white text-xs">Trusted YouTubers</strong>
                    </div>
                    <p className="text-[10px] text-muted m-0 leading-relaxed">Recognized BGMI gaming content creators mutually known to both parties.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-white/5 bg-[#0a0c10]">
                    <div className="flex items-center gap-2 mb-2">
                      <ExternalLink size={16} className="text-purple-400" />
                      <strong className="text-white text-xs">Verified Streamers</strong>
                    </div>
                    <p className="text-[10px] text-muted m-0 leading-relaxed">Active BGMI streamers with established credibility agreed upon by both buyer and seller.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-white/5 bg-[#0a0c10]">
                    <div className="flex items-center gap-2 mb-2">
                      <Gamepad2 size={16} className="text-purple-400" />
                      <strong className="text-white text-xs">Esports Players</strong>
                    </div>
                    <p className="text-[10px] text-muted m-0 leading-relaxed">Known competitive players vouched as neutral mediators.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-white/5 bg-[#0a0c10]">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 size={16} className="text-green-500" />
                      <strong className="text-white text-xs">Vetted Dealers</strong>
                    </div>
                    <p className="text-[10px] text-muted m-0 leading-relaxed">Established third-party dealers with verifiable track record.</p>
                  </div>
                </div>

                <div className="space-y-3 mb-8 max-w-[800px]">
                  <div className="flex gap-3 items-center p-3 rounded-xl border border-white/5 bg-[#111520] text-xs text-muted">
                    <Check size={14} className="text-purple-500 shrink-0" />
                    Unknown middlemen are strictly forbidden.
                  </div>
                  <div className="flex gap-3 items-center p-3 rounded-xl border border-white/5 bg-[#111520] text-xs text-muted">
                    <Check size={14} className="text-purple-500 shrink-0" />
                    Buyer is fully responsible for the escrow service fee.
                  </div>
                  <div className="flex gap-3 items-center p-3 rounded-xl border border-white/5 bg-[#111520] text-xs text-muted">
                    <Check size={14} className="text-purple-500 shrink-0" />
                    Account credentials handed over only after 100% payment confirmed by the escrow.
                  </div>
                  <div className="flex gap-3 items-center p-3 rounded-xl border border-white/5 bg-[#111520] text-xs text-muted">
                    <Check size={14} className="text-purple-500 shrink-0" />
                    Escrow method applies to high-value accounts only, mutually agreed upon.
                  </div>
                </div>

                <div className="flex justify-end">
                  <Link href="/terms" className="btn text-xs tracking-wider px-6 py-3" style={{ background: "linear-gradient(135deg, #a855f7, #7e22ce)", color: "#fff", border: "none" }}>
                    FULL ESCROW SYSTEM PAGE →
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* HOW BGMI UNLINK WORKS */}
        <section className="py-20 px-[5%] max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest block mb-4">Trust & Transparency</span>
            <h2 className="text-3xl md:text-5xl font-black font-h text-white mb-6 leading-tight">
              How the BGMI <span className="text-gold">Unlink System</span> Works
            </h2>
            <p className="text-muted text-sm sm:text-base leading-relaxed max-w-[600px] mx-auto">
              Unlike other platforms, we believe in 100% honesty. Learn how account unlinking works, what your guarantee covers, and your responsibilities as a buyer.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#050608] overflow-hidden">
            <div className="p-6 md:p-10 border-b border-white/5">
              <div className="p-6 rounded-xl border border-dashed border-gold/30 bg-gold/5 flex gap-4 items-start mb-8">
                <div className="p-2 rounded-lg bg-gold/10 text-gold shrink-0"><ShieldAlert size={20} /></div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-2">Understanding Your Unlink Process & Guarantee Timeline</h4>
                  <p className="text-xs text-muted leading-relaxed m-0">
                    Unlinking in BGMI is the official system for safely removing one of the two linked logins. When you purchase an account, you receive full ownership of the <strong>primary secure login</strong>, and the <strong>secondary login</strong> is set to unlink. Enforced by BGMI, this secondary unlink has a strict <strong>7-day waiting period</strong>. Our premium <strong>Unlink Guarantee</strong> fully covers you throughout this entire 7-day window — if any issues or recovery attempts occur, we issue a full refund or replacement. Once this 7-day guarantee period expires, the transaction is officially finalized, full ownership is permanently yours, and support/guarantees end.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 border-b border-white/5 pb-6 overflow-x-auto whitespace-nowrap hide-scrollbar">
                <button onClick={() => setUnlinkTab(1)} className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all ${unlinkTab === 1 ? "bg-gold/10 text-gold border border-gold" : "text-muted hover:text-white border border-transparent"}`}>
                  <Info size={14} /> 1. Core Rules & System
                </button>
                <button onClick={() => setUnlinkTab(2)} className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all ${unlinkTab === 2 ? "bg-gold/10 text-gold border border-gold" : "text-muted hover:text-white border border-transparent"}`}>
                  <CalendarClock size={14} /> 2. Real Timeline Example
                </button>
                <button onClick={() => setUnlinkTab(3)} className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all ${unlinkTab === 3 ? "bg-gold/10 text-gold border border-gold" : "text-muted hover:text-white border border-transparent"}`}>
                  <ShieldCheck size={14} /> 3. Buyer Responsibility & Support
                </button>
              </div>

              <div className="pt-8">
                {unlinkTab === 1 && (
                  <div className="animate-fade-in">
                    <h3 className="text-lg font-bold text-white mb-4">The 5 Core Rules of BGMI Unlinking</h3>
                    <p className="text-xs text-muted mb-8">Unlinking in BGMI allows an account owner to safely remove one of the two linked social networks. BGMI enforces strict guidelines that must be met:</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="p-5 rounded-xl border border-white/5 bg-[#111520]">
                        <strong className="text-white text-sm block mb-2">1. Min 2 Linked Accounts</strong>
                        <p className="text-xs text-muted leading-relaxed m-0">The account must have two social networks linked for the unlink option to be functional. Otherwise, BGMI blocks the action.</p>
                      </div>
                      <div className="p-5 rounded-xl border border-white/5 bg-[#111520]">
                        <strong className="text-white text-sm block mb-2">2. No Unlinking Current Login</strong>
                        <p className="text-xs text-muted leading-relaxed m-0">You cannot unlink the network you are currently logged into. To remove Twitter, you must log in using Facebook first.</p>
                      </div>
                      <div className="p-5 rounded-xl border border-white/5 bg-[#111520]">
                        <strong className="text-white text-sm block mb-2">3. 30+ Days Link Requirement</strong>
                        <p className="text-xs text-muted leading-relaxed m-0">The network you're unlinking to must have been linked for at least 30 days. This is why you see "15 Days Remaining" in listings.</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-5 rounded-xl border border-white/5 bg-[#111520]">
                        <strong className="text-white text-sm block mb-2">4. Device & Region Match</strong>
                        <p className="text-xs text-muted leading-relaxed m-0">BGMI checks region history. Logging in from multiple regions or using a VPN during unlinking can flag suspicious activity.</p>
                      </div>
                      <div className="p-5 rounded-xl border border-white/5 bg-[#111520]">
                        <strong className="text-white text-sm block mb-2">5. 7 Day Waiting Period (Crucial)</strong>
                        <p className="text-xs text-muted leading-relaxed m-0">Once submitted, BGMI begins a 7-day waiting period. If anyone logs in using the unlinking social network during this time, the request is automatically canceled.</p>
                      </div>
                    </div>
                  </div>
                )}

                {unlinkTab === 2 && (
                  <div className="animate-fade-in">
                    <h3 className="text-lg font-bold text-white mb-4">Timeline & Guarantee Example</h3>
                    <p className="text-xs text-muted mb-8">Here is exactly how a clean account transfer takes place when there is a secondary pending unlink:</p>
                    
                    <div className="p-6 rounded-xl border border-white/5 bg-[#111520] mb-6">
                      <div className="flex flex-col md:flex-row justify-between mb-8 gap-4 border-b border-white/5 pb-6">
                        <div>
                          <strong className="text-white text-sm block">Primary Login: Facebook (Fully Owned by Buyer)</strong>
                        </div>
                        <div>
                          <strong className="text-orange-500 text-sm block">Secondary Login: Twitter (Pending Unlink)</strong>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row justify-between gap-8">
                        <div>
                          <span className="text-[10px] text-muted font-bold tracking-widest uppercase block mb-1">Unlink Initiation Date</span>
                          <strong className="text-gold text-lg block mb-1">June 30</strong>
                          <span className="text-[10px] text-muted block">Date when Twitter gets fully detached from the BGMI database.</span>
                        </div>
                        <div>
                          <span className="text-[10px] text-muted font-bold tracking-widest uppercase block mb-1">Guarantee Expiry Date</span>
                          <strong className="text-white text-lg block mb-1">July 07</strong>
                          <span className="text-[10px] text-muted block">7 exact days of full support buffer after completion to confirm absolute safety.</span>
                        </div>
                      </div>
                    </div>

                    <div className="border-l-4 border-gold pl-4 py-1">
                      <p className="text-xs text-muted leading-relaxed m-0">
                        "Our Unlink Guarantee covers you entirely until the official unlink completion + buffer period. If any unlink fail or retrieval occurs within this frame, a full replacement or refund is guaranteed. Once the guarantee expires, ownership is fully yours and support ends."
                      </p>
                    </div>
                  </div>
                )}

                {unlinkTab === 3 && (
                  <div className="animate-fade-in">
                    <h3 className="text-lg font-bold text-white mb-4">Buyer Responsibilities & Support Note</h3>
                    <p className="text-xs text-muted mb-8">To ensure a flawless unlink process, the buyer must follow these crucial security rules:</p>
                    
                    <div className="space-y-4 mb-8">
                      <p className="text-xs text-muted leading-relaxed m-0">
                        <strong className="text-white">Do Not Log In with the Unlinking Method:</strong> Logging into the pending social network will immediately and automatically cancel the unlink request.
                      </p>
                      <p className="text-xs text-muted leading-relaxed m-0">
                        <strong className="text-white">Avoid Risky Logins:</strong> Do not log in from multiple devices, use VPNs, or switch in-game regions immediately, as BGMI will flag suspicious activity.
                      </p>
                      <p className="text-xs text-muted leading-relaxed m-0">
                        <strong className="text-white">Link Recovery Immediately:</strong> Link your own active recovery email and mobile phone number to the primary method immediately upon receiving the account.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/5 flex items-start gap-3">
                      <AlertTriangle size={16} className="text-red-500 shrink-0 mt-0.5" />
                      <p className="text-xs text-red-200/80 m-0 leading-relaxed font-medium"><strong>Crucial Support Note:</strong> If you have any doubts regarding the unlink status or process, contact our support team <strong>before</strong> making any settings changes in the account.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-20 px-[5%] max-w-[800px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest block mb-4">FAQ</span>
            <h2 className="text-3xl font-black font-h text-white mb-6 leading-tight">
              Common Buying Questions
            </h2>
            <p className="text-muted text-sm sm:text-base leading-relaxed max-w-[600px] mx-auto">
              Here are responses to help clarify our booking, payment, and delivery processes.
            </p>
          </div>

          <div className="space-y-3">
            {[
              { q: "Is the 10% booking deposit refundable?", a: "No. All 10% booking deposits are strictly non-refundable once booked. This deposit secures the exclusive lock on the account, removing it from active market availability. The only exception is the immediate return of any accidental excess amounts paid over the 10% threshold." },
              { q: "Can my purchased BGMI account be retrieved or pulled back by the seller later?", a: "At Maddy Store, this is strictly prevented. Every account goes through our severe verification protocol, including ID checks of the seller, complete secondary login unlink, and setting your recovery email and phone. Our invoice includes a specific Unlink Guarantee; in the extremely rare event of a pull-back during this period, you get a full refund or an equivalent premium replacement. Once the guarantee expires, your account is fully bulletproof." },
              { q: "What is the difference between 'Single Login' and 'Dual Login' accounts, and which is safer?", a: "A 'Single Login' account has only one login method active (e.g., only Twitter/X is linked). A 'Dual Login' account has two social logins bound (e.g., both Facebook and Twitter/X). Single login accounts are generally safer and easier to secure because there is no secondary entry point. For Dual Login accounts, we always submit an unlink request for the secondary social account to make it a secure Single Login for you." },
              { q: "What is a '30 Days Unlink' and why does it take so long?", a: "BGMI's security engine forces a strict restriction: you cannot unlink a social network unless the other linked social network has been active on that account for at least 30 consecutive days. If a seller recently bound a recovery login, this cooldown must lapse. Once it does, the 7-day unlink countdown can be submitted safely." },
              { q: "Will my in-game rank, popularity, friends list, or inventory be affected during the handover?", a: "Absolutely not. Handing over the account only changes the login credentials. Everything inside your BGMI dashboard — including your level, tier rank, classic skins, weapon finishes, supercars, achievement titles, and popularities — will remain 100% intact and untouched." },
              { q: "How should I secure the credentials immediately upon receiving the login?", a: "To ensure complete safety, you must immediately: (1) change the password of the primary social login, (2) enable 2-Factor Authentication (2FA) and update recovery details on that social account, (3) log into BGMI and link your own active email and phone number inside the in-game settings, and (4) do not attempt to log in using the unlinking social network as it will cancel the unlink process." },
              { q: "How do Face-to-Face (F2F) deals work?", a: "F2F deals are for accounts above ₹80K. After paying the 10% booking, you meet our agent at a public transport hub, pay the agent's travel expenses, and complete the full payment and handover in person." },
              { q: "How does Escrow work for high-value deals?", a: "A trusted middleman holds the account credentials and funds. They only release the payment to the seller and the full ownership to the buyer once all safety checks and unlinks are complete." },
              { q: "Is it safe to buy through Maddy Store?", a: "Yes. With over 2000+ satisfied customers, rigorous verification protocols, and transparent guarantee windows, we are one of the most trusted marketplaces for BGMI accounts." }
            ].map((faq, index) => (
              <div 
                key={index} 
                className={`rounded-xl border transition-all duration-300 ${activeFaq === index ? "border-gold bg-[#111520]" : "border-white/5 bg-[#050608] hover:border-white/20"}`}
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className={`text-sm font-bold ${activeFaq === index ? "text-white" : "text-muted"}`}>{faq.q}</span>
                  {activeFaq === index ? <ChevronUp size={16} className="text-gold shrink-0 ml-4" /> : <ChevronDown size={16} className="text-muted shrink-0 ml-4" />}
                </button>
                {activeFaq === index && (
                  <div className="px-5 pb-5 pt-0 animate-fade-in">
                    <p className="text-xs text-muted leading-relaxed m-0">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
