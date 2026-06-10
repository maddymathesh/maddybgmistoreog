"use client";

import Link from "next/link";
import { ArrowLeft, CreditCard, Zap, CheckCircle2, Clock, ShieldCheck } from "lucide-react";

export default function PayoutGuide() {
  return (
    <div style={{ background: "var(--color-bg)", color: "#fff", minHeight: "100vh" }}>
      
      {/* HERO SECTION */}
      <section style={{
        position: "relative", width: "100%",
        paddingTop: "140px", paddingBottom: "60px",
        display: "flex", alignItems: "center", justifyItems: "center",
        flexDirection: "column", textAlign: "center", paddingLeft: "5%", paddingRight: "5%"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0800] via-[#080a0f] to-[#080a0f] z-0" />

        <div className="relative z-10 px-[5%] max-w-[800px] mx-auto flex flex-col items-center">
          <div className="flex justify-center items-center gap-4 mb-6">
            <Link href="/sell" className="text-[10px] font-bold text-muted uppercase tracking-widest flex items-center gap-1 hover:text-white transition-colors">
              <ArrowLeft size={12} /> BACK TO SELL PORTAL
            </Link>
            <div className="badge flex items-center justify-center border border-yellow-500/30 bg-yellow-500/10 text-yellow-500">
              <CreditCard size={12} className="mr-2" /> PAYOUT & UNLINKING GUIDE
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-[64px] font-black font-h leading-[1.1] mb-6 uppercase text-center">
            PAYOUT METHODS &<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">TIMELINE SCENARIOS</span>
          </h1>
          <p className="text-muted text-sm sm:text-base max-w-[600px] mx-auto leading-relaxed text-center">
            Get clear visibility on payout workflows, unlinking schedules, and the exact timeline required to secure and transfer your BGMI account.
          </p>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <section className="py-10 px-[5%] max-w-[1000px] mx-auto flex flex-col gap-8 pb-32 relative z-10">
        
        {/* Payout Disbursement Channels */}
        <div className="p-8 md:p-10 rounded-3xl bg-[#080a0e] border border-white/5">
          <div className="flex items-center gap-3 mb-4">
            <Zap size={20} className="text-yellow-500" />
            <h2 className="text-lg md:text-xl font-bold font-h text-white tracking-wider m-0">Payout Disbursement Channels</h2>
          </div>
          <p className="text-xs md:text-sm text-muted leading-relaxed mb-8">
            Depending on your preferred transaction method, funds are disbursed securely through verified pipelines once the account audit and isolation are complete.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#111520] border border-white/5 flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck size={18} className="text-yellow-500" />
                <strong className="text-white text-sm font-bold tracking-wide">Escrow Method Payout</strong>
              </div>
              <p className="text-xs text-muted leading-relaxed m-0">
                For escrow transactions, the payout is handled directly by the trusted third-party middleman (known streamer, YouTuber, or mutual dealer). The middleman holds the payout in a safe vault during our technical audit and releases it directly to your bank account/UPI immediately after we verify full, exclusive custody of the logins.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#111520] border border-white/5 flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <Zap size={18} className="text-green-500" />
                <strong className="text-white text-sm font-bold tracking-wide">Face-to-Face Payout</strong>
              </div>
              <p className="text-xs text-muted leading-relaxed m-0">
                For instant face-to-face deals, payouts are made immediately at the midpoint meeting location. Once our executive physically audits the account and secures the logins, the payout is released in cash or via instant UPI / IMPS bank transfer on the spot.
              </p>
            </div>
          </div>
        </div>

        {/* Account Unlinking Timeline Scenarios */}
        <div className="p-8 md:p-10 rounded-3xl bg-[#080a0e] border border-yellow-500/20">
          <div className="flex items-center gap-3 mb-4">
            <Clock size={20} className="text-yellow-500" />
            <h2 className="text-lg md:text-xl font-bold font-h text-white tracking-wider m-0">Account Unlinking Timeline Scenarios</h2>
          </div>
          <p className="text-xs md:text-sm text-muted leading-relaxed mb-8">
            BGMI accounts usually contain social linkages (Facebook, Twitter, Google, Apple ID, or Email). Krafton's systems enforce specific unlinking schedules. We categorize every deal into one of two timeline scenarios:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Scenario A */}
            <div className="p-6 rounded-2xl bg-[#111520] border border-red-500/20 flex flex-col relative overflow-hidden">
              <span className="absolute top-4 right-4 text-[9px] font-bold tracking-widest uppercase bg-red-500/20 text-red-500 px-2 py-1 rounded">SCENARIO A</span>
              <strong className="text-red-500 text-lg font-h tracking-wide mb-2 block">Dual-Linked Login</strong>
              <div className="flex items-end gap-2 mb-4">
                <span className="text-2xl font-black text-white">7 - 15</span>
                <span className="text-xs text-muted pb-1">Days unlinking window</span>
              </div>
              <p className="text-xs text-muted leading-relaxed mb-6">
                If the account is bound to two social links (e.g., both Facebook and Google Play Games are active), Krafton enforces a strict security queue to unlink a connection.
              </p>
              <ul className="space-y-3 m-0 p-0 flex-1">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-orange-500 shrink-0 mt-0.5" />
                  <span className="text-xs text-muted leading-relaxed">The first login link is handed over to Maddy Store instantly.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-orange-500 shrink-0 mt-0.5" />
                  <span className="text-xs text-muted leading-relaxed">The second link triggers a 7-day or 15-day unlinking wait.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-orange-500 shrink-0 mt-0.5" />
                  <span className="text-xs text-muted leading-relaxed">Full payment is held and released upon final unlink completion.</span>
                </li>
              </ul>
            </div>

            {/* Scenario B */}
            <div className="p-6 rounded-2xl bg-[#111520] border border-green-500/20 flex flex-col relative overflow-hidden">
              <span className="absolute top-4 right-4 text-[9px] font-bold tracking-widest uppercase bg-green-500/20 text-green-500 px-2 py-1 rounded">SCENARIO B</span>
              <strong className="text-green-500 text-lg font-h tracking-wide mb-2 block">Single Active Login</strong>
              <div className="flex items-end gap-2 mb-4">
                <span className="text-2xl font-black text-white">1 - 2</span>
                <span className="text-xs text-muted pb-1">Hours payout speed</span>
              </div>
              <p className="text-xs text-muted leading-relaxed mb-6">
                If the account has only a single active social link or is unlinked with only play games / e-mail login active, transfer is immediate.
              </p>
              <ul className="space-y-3 m-0 p-0 flex-1">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-green-500 shrink-0 mt-0.5" />
                  <span className="text-xs text-muted leading-relaxed">Exclusive control is established in less than 60 minutes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-green-500 shrink-0 mt-0.5" />
                  <span className="text-xs text-muted leading-relaxed">No secondary unlink timers or cooldown windows are triggered.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-green-500 shrink-0 mt-0.5" />
                  <span className="text-xs text-muted leading-relaxed"><strong className="text-white">100% of the calculated payout is released immediately.</strong></span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Action Button */}
        <div className="flex justify-center mt-4">
          <Link href="/sell" className="px-6 py-3 rounded-xl font-bold tracking-widest text-xs uppercase bg-white/5 text-white hover:bg-white/10 border border-white/10 transition-colors">
            Return to Sell Page
          </Link>
        </div>

      </section>

    </div>
  );
}
