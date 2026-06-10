"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck, AlertTriangle, CheckCircle2, ChevronDown, ChevronUp, Lock,
  Scale, ArrowRight, User, Banknote, ShieldAlert, Award, Video,
  Gamepad2, Search, ListChecks, Check, Clock
} from "lucide-react";

export default function EscrowPage() {
  const [calcValue, setCalcValue] = useState(100000);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Example fee logic: 5% flat fee for simplicity, you can adjust this if the actual screenshot has specific brackets
  const escrowFeeRate = 5; 
  const escrowFeeAmount = Math.round(calcValue * (escrowFeeRate / 100));

  return (
    <div style={{ background: "var(--color-bg)", color: "#fff", minHeight: "100vh" }}>
      
      {/* HERO BANNER */}
      <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center pt-32 pb-20 px-[5%] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
        </div>

        <div className="relative z-10 w-full max-w-[900px] mx-auto text-center flex flex-col items-center">
          <span className="text-[10px] md:text-xs font-bold text-muted uppercase tracking-[3px] md:tracking-[5px] mb-6 flex items-center justify-center gap-3">
            <span className="w-8 h-[1px] bg-gold/50"></span>
            Highest Protection Tier
            <span className="w-8 h-[1px] bg-gold/50"></span>
          </span>
          
          <h1 className="text-4xl md:text-6xl font-black font-h text-white mb-4 leading-[1.1] uppercase tracking-wide">
            Secure Escrow <span className="text-gold">Deal System</span>
          </h1>
          
          <p className="text-sm md:text-base text-muted leading-relaxed max-w-[600px] mb-10">
            Verified, mutually agreed middlemen for high-value deals. Your funds and account credentials are held safely in neutral ground until all security checks are passed.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 mb-20">
            <Link href="/pay" className="btn px-8 py-4 text-xs font-bold tracking-widest rounded-full transition-all hover:scale-105" style={{ background: "linear-gradient(135deg, #22c55e, #16a34a)", color: "#fff", border: "none" }}>
              BOOK ESCROW
            </Link>
            <Link href="/sell" className="btn px-8 py-4 text-xs font-bold tracking-widest rounded-full transition-all hover:scale-105 bg-blue-500 hover:bg-blue-600 text-white border border-blue-400">
              SELL VIA ESCROW
            </Link>
            <button onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })} className="btn px-8 py-4 text-xs font-bold tracking-widest rounded-full transition-all hover:scale-105 bg-[#111520] text-orange-400 border border-orange-500/30 hover:bg-orange-500/10">
              HOW IT WORKS
            </button>
          </div>

          {/* VISUAL FLOWCHART */}
          <div className="w-full max-w-[700px] mx-auto p-8 rounded-3xl border border-white/5 bg-[#050608] flex flex-col md:flex-row items-center justify-between gap-6 relative">
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/20 to-transparent -translate-y-1/2 hidden md:block" />
            
            <div className="flex flex-col items-center gap-3 relative z-10 w-full md:w-auto">
              <div className="w-16 h-16 rounded-2xl bg-[#111520] border border-white/10 flex items-center justify-center text-blue-400">
                <User size={24} />
              </div>
              <span className="text-xs font-bold text-white uppercase tracking-wider">Buyer</span>
              <span className="text-[10px] text-muted text-center max-w-[120px]">Sends Payment to Escrow</span>
            </div>

            <div className="hidden md:flex flex-col items-center text-gold/50 relative z-10">
              <ArrowRight size={20} />
            </div>

            <div className="flex flex-col items-center gap-3 relative z-10 w-full md:w-auto scale-110">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gold/20 to-orange-500/20 border border-gold/50 flex items-center justify-center text-gold shadow-[0_0_30px_rgba(255,215,0,0.15)]">
                <Scale size={32} />
              </div>
              <span className="text-sm font-black text-gold uppercase tracking-widest">Escrow</span>
              <span className="text-[10px] text-gold/70 text-center max-w-[150px]">Holds Funds & Account Details Securely</span>
            </div>

            <div className="hidden md:flex flex-col items-center text-gold/50 relative z-10">
              <ArrowRight size={20} />
            </div>

            <div className="flex flex-col items-center gap-3 relative z-10 w-full md:w-auto">
              <div className="w-16 h-16 rounded-2xl bg-[#111520] border border-white/10 flex items-center justify-center text-green-400">
                <User size={24} />
              </div>
              <span className="text-xs font-bold text-white uppercase tracking-wider">Seller</span>
              <span className="text-[10px] text-muted text-center max-w-[120px]">Provides Logins to Escrow</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS ESCROW */}
      <section className="py-20 px-[5%] max-w-[1000px] mx-auto border-t border-white/5">
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest block mb-4">The Mechanics</span>
          <h2 className="text-3xl font-black font-h text-white">What Is Escrow?</h2>
        </div>

        <div className="p-8 md:p-12 rounded-3xl border border-white/5 bg-[#0a0c10] mb-12">
          <p className="text-sm text-muted leading-relaxed mb-10 text-center max-w-[700px] mx-auto">
            Escrow is a legal arrangement where a trusted third party temporarily holds the assets (money and account credentials) until all conditions of the deal are met, ensuring neither the buyer nor the seller gets scammed.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#111520] border border-white/5">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400"><Scale size={18} /></div>
                <strong className="text-white text-sm">Neutral Ground</strong>
              </div>
              <p className="text-xs text-muted m-0 leading-relaxed">Both parties surrender their assets to the middleman, removing the anxiety of "who goes first".</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#111520] border border-white/5">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-green-500/10 text-green-500"><Search size={18} /></div>
                <strong className="text-white text-sm">Unlink Verification</strong>
              </div>
              <p className="text-xs text-muted m-0 leading-relaxed">The escrow agent audits the unlinking process and ensures the seller cannot cancel it mid-way.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#111520] border border-white/5">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400"><ShieldCheck size={18} /></div>
                <strong className="text-white text-sm">Credibility Guarantee</strong>
              </div>
              <p className="text-xs text-muted m-0 leading-relaxed">We only allow verified creators with a massive public reputation to act as escrow.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#111520] border border-white/5">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-orange-500/10 text-orange-500"><Lock size={18} /></div>
                <strong className="text-white text-sm">Secure Payment Holds</strong>
              </div>
              <p className="text-xs text-muted m-0 leading-relaxed">Seller doesn't get paid until the buyer secures the account. Buyer doesn't get the account until funds are locked.</p>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-orange-500/10 border border-orange-500/20 rounded-xl flex gap-3 text-xs text-orange-400 items-center justify-center">
            <AlertTriangle size={16} className="shrink-0" />
            <span>Escrow deals are typically reserved for transactions above ₹50,000.</span>
          </div>
        </div>

        <div className="text-center mb-10">
          <h3 className="text-2xl font-black font-h text-white mb-8">Authorized Escrow Partners</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-6 rounded-2xl border border-white/5 bg-[#111520] flex flex-col items-center text-center">
              <Award size={24} className="text-gold mb-3" />
              <strong className="text-white text-sm block mb-1">Trusted YouTubers</strong>
              <span className="text-[10px] text-muted">Recognized BGMI Creators</span>
            </div>
            <div className="p-6 rounded-2xl border border-white/5 bg-[#111520] flex flex-col items-center text-center">
              <Video size={24} className="text-purple-400 mb-3" />
              <strong className="text-white text-sm block mb-1">Verified Streamers</strong>
              <span className="text-[10px] text-muted">Established Audience</span>
            </div>
            <div className="p-6 rounded-2xl border border-white/5 bg-[#111520] flex flex-col items-center text-center">
              <Gamepad2 size={24} className="text-green-400 mb-3" />
              <strong className="text-white text-sm block mb-1">Esports Players</strong>
              <span className="text-[10px] text-muted">Competitive Vouched</span>
            </div>
            <div className="p-6 rounded-2xl border border-white/5 bg-[#111520] flex flex-col items-center text-center">
              <ShieldCheck size={24} className="text-blue-400 mb-3" />
              <strong className="text-white text-sm block mb-1">Vetted Dealers</strong>
              <span className="text-[10px] text-muted">Maddy Store Direct</span>
            </div>
          </div>
          <p className="text-xs text-red-400 font-bold mt-6">* Only middlemen officially verified by our team are permitted.</p>
        </div>
      </section>

      {/* HOW ESCROW WORKS TIMELINE */}
      <section id="how-it-works" className="py-20 px-[5%] max-w-[800px] mx-auto border-t border-white/5">
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold text-gold uppercase tracking-widest block mb-4">Step-by-Step</span>
          <h2 className="text-3xl font-black font-h text-white">How Escrow Works (Step-by-Step)</h2>
        </div>

        <div className="relative pl-6 md:pl-10">
          <div className="absolute top-0 bottom-0 left-[23px] md:left-[39px] w-[2px] bg-gradient-to-b from-purple-500/50 via-gold/50 to-transparent" />

          {[
            { num: 1, title: "Agreement & Group Chat", text: "A secure group chat is created with the Buyer, Seller, and the authorized Middleman." },
            { num: 2, title: "Fee Submission", text: "The Escrow fee is paid upfront (usually by the buyer, or split). Buyer then deposits the full deal amount to the middleman's bank." },
            { num: 3, title: "Account Handover to Middleman", text: "Seller provides all account logins (Facebook/Twitter/Email) to the middleman." },
            { num: 4, title: "Audit & Security Checks", text: "Middleman logs in, verifies the inventory, checks for active links/bans, and confirms the account matches the description." },
            { num: 5, title: "Binding & Handover to Buyer", text: "Middleman assists in unlinking the seller's details and binding the buyer's details. Buyer logs in to verify." },
            { num: 6, title: "Final Payout", text: "Once the buyer confirms possession and safety, the middleman releases the funds to the seller. Deal closed." }
          ].map((step, i) => (
            <div key={i} className="relative mb-12 last:mb-0">
              <div className="absolute -left-6 md:-left-10 w-[34px] h-[34px] rounded-full bg-[#111520] border-2 border-gold flex items-center justify-center text-gold font-bold font-h text-sm z-10">{step.num}</div>
              <div className="pl-6 md:pl-8">
                <h4 className="text-lg font-bold text-white mb-2 font-h">{step.title}</h4>
                <p className="text-xs text-muted leading-relaxed m-0">{step.text}</p>
              </div>
            </div>
          ))}
          
          <div className="mt-12 p-6 rounded-2xl border border-dashed border-red-500/40 bg-red-500/5 flex gap-4 items-center">
            <AlertTriangle size={24} className="text-red-500 shrink-0" />
            <p className="text-xs text-red-200/80 m-0 leading-relaxed">
              <strong className="text-red-400 block mb-1">CRUCIAL WARNING</strong>
              Never bypass the group chat. Impersonators will mimic the middleman's profile picture and name. Always verify the middleman's Telegram ID/Handle carefully.
            </p>
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="py-20 px-[5%] max-w-[1000px] mx-auto border-t border-white/5">
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold text-gold uppercase tracking-widest block mb-4">Estimates</span>
          <h2 className="text-3xl font-black font-h text-white">Escrow Charges & Fee Calculator</h2>
        </div>

        <div className="p-8 md:p-12 rounded-3xl border border-white/10 bg-[#050608] flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <label className="block text-xs font-bold text-muted uppercase tracking-widest mb-6">Total Deal Value (₹)</label>
            <div className="relative mb-8">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 font-bold text-xl">₹</span>
              <input
                type="number"
                value={calcValue}
                onChange={(e) => setCalcValue(Number(e.target.value) || 0)}
                className="w-full bg-[#111520] border border-white/10 rounded-xl px-12 py-5 text-2xl font-bold text-white focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            
            <input
              type="range"
              min="10000"
              max="1000000"
              step="5000"
              value={calcValue}
              onChange={(e) => setCalcValue(Number(e.target.value))}
              className="w-full accent-gold mb-4"
              style={{
                height: "6px",
                borderRadius: "3px",
                background: "rgba(255,255,255,0.1)",
                appearance: "none",
                outline: "none",
              }}
            />
            <div className="flex justify-between text-[10px] text-muted font-bold tracking-wider mb-6">
              <span>₹10K</span>
              <span>₹1M+</span>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[10px] text-muted"><Check size={12} className="text-green-500"/> Escrow fee is non-negotiable.</div>
              <div className="flex items-center gap-2 text-[10px] text-muted"><Check size={12} className="text-green-500"/> Typically borne by the buyer, or split 50/50.</div>
              <div className="flex items-center gap-2 text-[10px] text-muted"><Check size={12} className="text-green-500"/> Minimum base fee applies for lower amounts.</div>
            </div>
          </div>

          <div className="w-full md:w-1/2 p-8 rounded-2xl bg-gold/5 border border-gold/20 flex flex-col items-center justify-center text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold text-[10px] font-bold uppercase tracking-widest mb-6">
              <Award size={12} /> {escrowFeeRate}% Escrow Fee Applied
            </span>
            <strong className="text-5xl font-black text-white mb-2">₹{escrowFeeAmount.toLocaleString('en-IN')}</strong>
            <span className="text-xs text-muted mb-8">Estimated Middleman Charge</span>
            
            <button className="w-full btn py-4 text-xs font-bold tracking-widest rounded-xl" style={{ background: "linear-gradient(135deg, #f97316, #ea580c)", color: "#fff", border: "none" }}>
              BOOK MIDDLEMAN NOW →
            </button>
          </div>
        </div>
      </section>

      {/* DISCLOSURES & WHY IT'S SAFER */}
      <section className="py-20 px-[5%] max-w-[1000px] mx-auto border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black font-h text-white">Account Verification & Disclosures</h2>
          <p className="text-muted text-sm mt-4">During the escrow hold, the middleman meticulously verifies the following:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          <div className="p-6 rounded-2xl bg-[#0a0c10] border border-white/5">
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/5">
              <strong className="text-white text-sm">Inventory Match</strong>
              <CheckCircle2 size={16} className="text-green-500" />
            </div>
            <p className="text-xs text-muted m-0">Confirming exact skins, UC balance, level, and tier as advertised.</p>
          </div>
          <div className="p-6 rounded-2xl bg-[#0a0c10] border border-white/5">
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/5">
              <strong className="text-white text-sm">Link Status</strong>
              <CheckCircle2 size={16} className="text-green-500" />
            </div>
            <p className="text-xs text-muted m-0">Checking if the account is Single Login, Dual Login, or has dead links.</p>
          </div>
          <div className="p-6 rounded-2xl bg-[#0a0c10] border border-white/5">
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/5">
              <strong className="text-white text-sm">Ban History & Region</strong>
              <CheckCircle2 size={16} className="text-green-500" />
            </div>
            <p className="text-xs text-muted m-0">Checking for ongoing ban pan warnings or suspicious region switches.</p>
          </div>
          <div className="p-6 rounded-2xl bg-[#0a0c10] border border-white/5">
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/5">
              <strong className="text-white text-sm">Pending Unlinks</strong>
              <CheckCircle2 size={16} className="text-green-500" />
            </div>
            <p className="text-xs text-muted m-0">Auditing the active unlinking countdowns and binding statuses.</p>
          </div>
        </div>

        <div className="p-10 rounded-3xl border border-white/5 bg-[#111520]">
          <div className="text-center mb-10">
            <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest block mb-4">Security</span>
            <h2 className="text-3xl font-black font-h text-white">Why Escrow Is Safer</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="p-2 rounded bg-gold/10 text-gold h-fit"><ShieldAlert size={20} /></div>
              <div>
                <strong className="text-white text-sm block mb-1">Protects Against Pull-backs</strong>
                <p className="text-xs text-muted leading-relaxed m-0">Sellers cannot hand over fake details because the middleman logs in first to verify and change passwords.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="p-2 rounded bg-gold/10 text-gold h-fit"><Banknote size={20} /></div>
              <div>
                <strong className="text-white text-sm block mb-1">Protects Against Fake Payments</strong>
                <p className="text-xs text-muted leading-relaxed m-0">Sellers don't risk giving the account to a buyer who sends forged payment screenshots.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="p-2 rounded bg-gold/10 text-gold h-fit"><ListChecks size={20} /></div>
              <div>
                <strong className="text-white text-sm block mb-1">Guarantees Exact Item Delivery</strong>
                <p className="text-xs text-muted leading-relaxed m-0">If the seller lied about having a specific Mythic set, the middleman catches it and refunds the buyer.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="p-2 rounded bg-gold/10 text-gold h-fit"><Clock size={20} /></div>
              <div>
                <strong className="text-white text-sm block mb-1">Monitors Cooldowns</strong>
                <p className="text-xs text-muted leading-relaxed m-0">The middleman oversees the 7-day unlink period to ensure the seller doesn't attempt a recovery.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GUARANTEE & RULES */}
      <section className="py-20 px-[5%] max-w-[800px] mx-auto border-t border-white/5">
        <div className="text-center mb-12">
          <span className="text-[10px] font-bold text-gold uppercase tracking-widest block mb-4">The Promise</span>
          <h2 className="text-3xl font-black font-h text-white">Escrow Process Guarantee</h2>
        </div>

        <div className="p-6 rounded-2xl border border-white/5 bg-[#0a0c10] mb-12">
          <ul className="space-y-4">
            <li className="flex gap-3 items-start text-xs text-muted leading-relaxed">
              <CheckCircle2 size={16} className="text-gold shrink-0 mt-0.5" />
              <span>We guarantee the safe delivery of the exact account advertised, or a 100% refund of the deal value.</span>
            </li>
            <li className="flex gap-3 items-start text-xs text-muted leading-relaxed">
              <CheckCircle2 size={16} className="text-gold shrink-0 mt-0.5" />
              <span>We guarantee that all primary recovery bindings will be successfully transferred to the buyer.</span>
            </li>
            <li className="flex gap-3 items-start text-xs text-muted leading-relaxed">
              <CheckCircle2 size={16} className="text-gold shrink-0 mt-0.5" />
              <span>We guarantee the seller receives their exact payout instantly once the buyer successfully secures the account.</span>
            </li>
          </ul>
        </div>

        <div className="p-6 rounded-2xl border border-gold/30 bg-gold/5 flex flex-col md:flex-row gap-6 items-center mb-20 text-center md:text-left">
          <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center text-gold shrink-0">
            <ShieldCheck size={32} />
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-2 font-h">Absolute Safety Guarantee</h4>
            <p className="text-xs text-gold/80 leading-relaxed m-0">If our verified middleman makes an error leading to the loss of funds or the account during the escrow process, Maddy Store will compensate the affected party entirely.</p>
          </div>
        </div>

        <div className="text-center mb-10">
          <h2 className="text-2xl font-black font-h text-white mb-8">Mandatory Escrow Rules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-white/5 bg-[#111520] text-xs text-muted flex gap-3 items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
              Strictly no refunds on the escrow fee if the buyer cancels.
            </div>
            <div className="p-4 rounded-xl border border-white/5 bg-[#111520] text-xs text-muted flex gap-3 items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
              Group chat rules must be strictly followed.
            </div>
            <div className="p-4 rounded-xl border border-white/5 bg-[#111520] text-xs text-muted flex gap-3 items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
              Sellers must disclose all account faults upfront.
            </div>
            <div className="p-4 rounded-xl border border-white/5 bg-[#111520] text-xs text-muted flex gap-3 items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
              Buyers must have 100% funds ready before booking.
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-[5%] max-w-[800px] mx-auto border-t border-white/5">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black font-h text-white">Common Escrow Deal Questions</h2>
        </div>

        <div className="space-y-3">
          {[
            { q: "Who pays the escrow fee?", a: "Typically, the buyer covers the escrow fee as they are requesting the additional security layer. However, the buyer and seller can agree to split the fee 50/50 before initiating." },
            { q: "How long does the escrow process take?", a: "The actual handover and auditing usually take 30-60 minutes once both parties are online and funds are deposited. If there is a 7-day secondary unlink, the final payout might be delayed until it completes." },
            { q: "What if the account gets banned during escrow?", a: "If the account receives a ban while in the middleman's possession before handover, the deal is canceled, funds are returned to the buyer, and the account goes back to the seller." },
            { q: "Do you hold the funds in crypto or fiat?", a: "Our middlemen accept and hold funds in both Indian Rupee (UPI/IMPS/Bank) and USDT. Payouts are made in the same currency deposited unless agreed otherwise." },
            { q: "Can I use an escrow agent not on your list?", a: "No. For deals facilitated through Maddy Store, we only permit our strictly vetted list of YouTubers, Streamers, and internal dealers to prevent third-party scams." }
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

      {/* FINAL CTA */}
      <section className="py-24 px-[5%] text-center border-t border-white/5 bg-gradient-to-b from-transparent to-[#0a0c10]">
        <h2 className="text-3xl md:text-5xl font-black font-h text-white mb-6 uppercase tracking-wider">
          Need Maximum Protection<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-orange-500">For Your Deal?</span>
        </h2>
        <p className="text-muted text-sm max-w-[500px] mx-auto mb-10">
          Lock in a verified middleman today and ensure your transaction is 100% scam-proof.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="btn px-8 py-4 text-xs font-bold tracking-widest rounded-full transition-all hover:scale-105" style={{ background: "linear-gradient(135deg, #22c55e, #16a34a)", color: "#fff", border: "none" }}>
            BOOK ESCROW
          </button>
          <Link href="/sell" className="btn px-8 py-4 text-xs font-bold tracking-widest rounded-full transition-all hover:scale-105 bg-blue-500 hover:bg-blue-600 text-white border border-blue-400">
            SELL VIA ESCROW
          </Link>
        </div>
      </section>

    </div>
  );
}
