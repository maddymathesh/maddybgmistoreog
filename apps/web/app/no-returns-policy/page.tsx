"use client";

import Link from "next/link";
import { ArrowLeft, AlertTriangle, TrendingDown, ShieldCheck, Scale } from "lucide-react";

export default function NoReturnsPolicy() {
  return (
    <div style={{ background: "var(--color-bg)", color: "#fff", minHeight: "100vh" }}>
      
      {/* HERO SECTION */}
      <section style={{
        position: "relative", width: "100%",
        paddingTop: "140px", paddingBottom: "60px",
        display: "flex", alignItems: "center", justifyContent: "center",
        flexDirection: "column", textAlign: "center", paddingLeft: "5%", paddingRight: "5%"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0303] via-[#080a0f] to-[#080a0f] z-0" />

        <div className="relative z-10 px-[5%] max-w-[800px] mx-auto">
          <div className="flex justify-center items-center gap-4 mb-6">
            <Link href="/sell" className="text-[10px] font-bold text-muted uppercase tracking-widest flex items-center gap-1 hover:text-white transition-colors">
              <ArrowLeft size={12} /> BACK TO SELL PORTAL
            </Link>
            <div className="badge flex items-center justify-center border border-red-500/30 bg-red-500/10 text-red-500">
              <AlertTriangle size={12} className="mr-2" /> IRREVOCABLE HANDOVER POLICY
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-[64px] font-black font-h leading-[1.1] mb-6 uppercase">
            NO RETURNS AFTER<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">HANDOVER POLICY</span>
          </h1>
          <p className="text-muted text-sm sm:text-base max-w-[600px] mx-auto leading-relaxed">
            To maintain the integrity of our premium marketplace, protect store profit margins, and guarantee absolute transaction finality, all completed sell deals are permanent.
          </p>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <section className="py-10 px-[5%] max-w-[800px] mx-auto flex flex-col gap-6 pb-32 relative z-10">
        
        {/* Immutable Sell Handover Mandate */}
        <div className="p-8 rounded-3xl bg-[#080a0e] border border-red-500/20">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle size={20} className="text-red-500" />
            <h2 className="text-sm md:text-base font-bold font-h text-white tracking-wider m-0">Immutable Sell Handover Mandate</h2>
          </div>
          <p className="text-xs text-muted leading-relaxed m-0">
            Once account credentials have been successfully transferred, secured under Maddy Store's isolation protocol, and payment has been released, the account <strong className="text-red-400 font-bold">cannot be returned, cancelled, or resold back to us at a later price</strong>. All trades are final.
          </p>
        </div>

        {/* 1. Protection of Store Profit Margins */}
        <div className="p-8 rounded-3xl bg-[#0a0c10] border border-white/5">
          <div className="flex items-center gap-3 mb-4">
            <TrendingDown size={20} className="text-orange-500" />
            <h3 className="text-sm md:text-base font-bold font-h text-white tracking-wider m-0">1. Protection of Store Profit Margins</h3>
          </div>
          <p className="text-xs text-muted leading-relaxed m-0">
            Wholesale payouts for <strong className="text-white">Instant Sell</strong> options are carefully calculated in real-time based on current BGMI skin market valuations and strict store profit margins. Allowing returns or post-sale price adjustments disrupts carrying models, introduces inventory risks, and harms marketplace operational liquidity. Guaranteeing finality keeps wholesale prices competitive for future sellers.
          </p>
        </div>

        {/* 2. Complete Transaction Security */}
        <div className="p-8 rounded-3xl bg-[#0a0c10] border border-white/5">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck size={20} className="text-green-500" />
            <h3 className="text-sm md:text-base font-bold font-h text-white tracking-wider m-0">2. Complete Transaction Security</h3>
          </div>
          <p className="text-xs text-muted leading-relaxed m-0">
            During the handover phase, Maddy Store coordinates intensive credential detachments. We bind new recovery emails, secondary linking cooldowns, and secure fresh buyers. Reversing this sequence exposes the account to security locks, IP quarantines by Krafton, and high dispute risks. Keeping transactions final ensures absolute safety for the seller, buyer, and Maddy Store.
          </p>
        </div>

        {/* 3. Why This Ensures Absolute Fairness */}
        <div className="p-8 rounded-3xl bg-[#0a0c10] border border-white/5">
          <div className="flex items-center gap-3 mb-4">
            <Scale size={20} className="text-yellow-500" />
            <h3 className="text-sm md:text-base font-bold font-h text-white tracking-wider m-0">3. Why This Ensures Absolute Fairness</h3>
          </div>
          <p className="text-xs text-muted leading-relaxed mb-6">
            This rule creates a balanced ecosystem that guards both parties:
          </p>
          <ul className="space-y-4 m-0 p-0">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-1.5 shrink-0" />
              <p className="text-xs text-muted leading-relaxed m-0">
                <strong className="text-white">Seller Guarantee:</strong> Your payment is locked, verified, and 100% immune to subsequent reversals or buyer claims once verified by Maddy Store.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-1.5 shrink-0" />
              <p className="text-xs text-muted leading-relaxed m-0">
                <strong className="text-white">Buyer Guarantee:</strong> The buyer receives a thoroughly audited, isolated, and permanently bound account free of security retrieval risks.
              </p>
            </li>
          </ul>
        </div>

        {/* Action Button */}
        <div className="flex justify-center mt-8">
          <Link href="/sell" className="px-6 py-3 rounded-xl font-bold tracking-widest text-xs uppercase bg-white/5 text-white hover:bg-white/10 border border-white/10 transition-colors">
            Return to Sell Page
          </Link>
        </div>

      </section>

    </div>
  );
}
