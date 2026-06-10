"use client";

import Link from "next/link";
import { ArrowLeft, Lock, Link as LinkIcon, CheckCircle2, ShieldAlert, RefreshCw } from "lucide-react";

export default function UnlinkingGuide() {
  return (
    <div style={{ background: "var(--color-bg)", color: "#fff", minHeight: "100vh" }}>
      
      {/* HERO SECTION */}
      <section style={{
        position: "relative", width: "100%",
        paddingTop: "120px", paddingBottom: "60px",
        display: "flex", alignItems: "center", justifyItems: "center",
        flexDirection: "column", textAlign: "center", paddingLeft: "5%", paddingRight: "5%"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#000511] via-[#080a0f] to-[#080a0f] z-0" />

        <div className="relative z-10 px-[5%] max-w-[800px] mx-auto flex flex-col items-center">
          <Link href="/sell" className="flex items-center gap-2 text-[10px] font-bold text-muted uppercase tracking-widest hover:text-white transition-colors mb-8">
            <ArrowLeft size={14} /> BACK TO SELL PORTAL
          </Link>

          <div className="badge flex items-center justify-center border border-blue-500/30 bg-blue-500/10 text-blue-500 mb-6 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase">
            <Lock size={12} className="mr-2" /> LOGIN SECURITY & CUSTODY
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-[56px] font-black font-h leading-[1.1] mb-6 uppercase text-center">
            PERSONAL LOGINS & <br />
            <span className="text-blue-500">UNLINKING</span> GUIDELINES
          </h1>
          <p className="text-muted text-sm sm:text-base max-w-[600px] mx-auto leading-relaxed text-center mb-12">
            We ensure a clear boundary between your game data and your personal identity. Learn how we handle linkages while protecting your personal email addresses.
          </p>

          <div className="w-full space-y-6 text-left">
            
            {/* Seller Personal Account Protection */}
            <div className="p-8 rounded-3xl bg-[#0a0d14] border border-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.03)]">
              <div className="flex items-center gap-3 mb-6">
                <Lock size={20} className="text-blue-500" />
                <h3 className="text-sm font-bold tracking-wide text-white">Seller Personal Account Protection</h3>
              </div>
              <p className="text-xs text-muted leading-relaxed m-0">
                We <strong className="text-white">**never**</strong> demand that you hand over permanent custody of your personal social profiles (e.g., your primary personal Facebook or personal Gmail accounts). Maddy BGMI Store only takes custody of the actual game login credentials, ensuring your private emails remain strictly in your ownership.
              </p>
            </div>

            {/* 1. Separation of Custody */}
            <div className="p-8 rounded-3xl bg-[#080a0e] border border-white/5">
              <div className="flex items-center gap-3 mb-6">
                <LinkIcon size={20} className="text-blue-500" />
                <h3 className="text-sm font-bold tracking-wide text-white">1. Separation of Custody</h3>
              </div>
              <p className="text-xs text-muted leading-relaxed mb-6">
                During a BGMI transaction, we establish a strict separation between game credentials and personal social media profiles:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#111520] border border-white/5">
                  <CheckCircle2 size={16} className="text-blue-500 flex-shrink-0 mt-0.5" />
                  <p className="text-[11px] text-muted leading-relaxed m-0">
                    <strong className="text-white">"Game Login Custody:"</strong> Maddy Store secures primary active logins (e.g., Twitter/X link or dedicated game-linked email) to pass to the buyer.
                  </p>
                </div>
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#111520] border border-white/5">
                  <CheckCircle2 size={16} className="text-blue-500 flex-shrink-0 mt-0.5" />
                  <p className="text-[11px] text-muted leading-relaxed m-0">
                    <strong className="text-white">"Personal Logins Remain Yours:"</strong> If the account has secondary linkages (such as a personal Gmail or personal Facebook), you retain absolute control over these assets. We guide you on unlinking them safely without ever requesting their login credentials.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Guaranteed Unlinking Window */}
            <div className="p-8 rounded-3xl bg-[#0a0c10] border border-yellow-500/10 shadow-[0_0_30px_rgba(234,179,8,0.02)]">
              <div className="flex items-center gap-3 mb-6">
                <RefreshCw size={20} className="text-yellow-500" />
                <h3 className="text-sm font-bold tracking-wide text-white">2. Guaranteed Unlinking Window</h3>
              </div>
              <p className="text-xs text-muted leading-relaxed mb-8">
                Krafton enforces a strict cooldown timer for social network linkages (ranging from 7 to 15 days). We guarantee a highly structured unlinking window:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="p-6 rounded-2xl bg-[#111520] border border-white/5">
                  <strong className="text-white text-xs font-bold block mb-3">Safe Cooldown Window</strong>
                  <p className="text-[10px] text-muted leading-relaxed m-0">
                    We initiate the unlinking process for your personal linkages under our direct observation, setting a secure countdown.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-[#111520] border border-white/5 relative overflow-hidden">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-yellow-500 rounded-r-md"></div>
                  <strong className="text-white text-xs font-bold block mb-3 pl-3">Guaranteed Seller Access</strong>
                  <p className="text-[10px] text-muted leading-relaxed m-0 pl-3">
                    You will retain active access and absolute ownership of your personal social profiles (Facebook, personal email) throughout the unlinking period.
                  </p>
                </div>
              </div>
              
              <div className="p-6 rounded-2xl bg-[#111520] border border-white/5">
                <strong className="text-white text-xs font-bold block mb-3">Automated Finalization</strong>
                <p className="text-[10px] text-muted leading-relaxed m-0">
                  Once Krafton's unlinking timer hits zero, the link detaches completely, cementing the transaction with 100% security.
                </p>
              </div>
            </div>

            {/* Safety Compliance Policy */}
            <div className="p-8 rounded-3xl bg-[#0a0a00] border border-yellow-500/30 border-dashed">
              <div className="flex items-center gap-3 mb-6">
                <ShieldAlert size={20} className="text-yellow-500" />
                <h3 className="text-sm font-bold tracking-wide text-yellow-500">Safety Compliance Policy</h3>
              </div>
              <p className="text-xs text-muted leading-relaxed m-0">
                To comply with international security practices and prevent fraud, any unlinking process must be initiated under the supervision of a Maddy BGMI Store representative. Once unlinking is successfully triggered, changing or cancelling the unlink process without prior approval will void the transaction and block future listings.
              </p>
            </div>

            <div className="pt-8 flex justify-center">
              <Link href="/sell" className="px-8 py-3 rounded-full text-xs font-bold tracking-widest uppercase transition-colors bg-white/5 text-white border border-white/10 hover:bg-white/10">
                Return to Sell Page
              </Link>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
