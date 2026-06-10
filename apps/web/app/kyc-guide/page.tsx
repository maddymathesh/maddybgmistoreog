"use client";

import Link from "next/link";
import { ArrowLeft, Shield, FileText, CheckCircle2, Lock, HardDrive, ShieldAlert, EyeOff } from "lucide-react";

export default function KycGuide() {
  return (
    <div style={{ background: "var(--color-bg)", color: "#fff", minHeight: "100vh" }}>
      
      {/* HERO SECTION */}
      <section style={{
        position: "relative", width: "100%",
        paddingTop: "140px", paddingBottom: "60px",
        display: "flex", alignItems: "center", justifyContent: "center",
        flexDirection: "column", textAlign: "center", paddingLeft: "5%", paddingRight: "5%"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050a08] via-[#080a0f] to-[#080a0f] z-0" />

        <div className="relative z-10 px-[5%] max-w-[800px] mx-auto">
          <div className="flex justify-center items-center gap-4 mb-6">
            <Link href="/sell" className="text-[10px] font-bold text-muted uppercase tracking-widest flex items-center gap-1 hover:text-white transition-colors">
              <ArrowLeft size={12} /> BACK TO SELL PORTAL
            </Link>
            <div className="badge flex items-center justify-center border border-green-500/30 bg-green-500/10 text-green-500">
              <Shield size={12} className="mr-2" /> SECURE IDENTITY VERIFICATION
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-[64px] font-black font-h leading-[1.1] mb-6 uppercase">
            ID VERIFICATION<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">KYC SECURITY GUIDE</span>
          </h1>
          <p className="text-muted text-sm sm:text-base max-w-[500px] mx-auto leading-relaxed">
            Verifying identities ensures a reliable, safe environment. Learn how KYC assists during logins and why your data is fully secure.
          </p>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <section className="py-10 px-[5%] max-w-[800px] mx-auto flex flex-col gap-8 pb-32 relative z-10">
        
        {/* Why ID Verification is Required */}
        <div className="p-8 md:p-10 rounded-3xl bg-[#0a0c10] border border-white/5">
          <div className="flex items-center gap-3 mb-6">
            <FileText size={20} className="text-green-500" />
            <h2 className="text-lg md:text-xl font-bold font-h text-white tracking-wider m-0">Why ID Verification is Required</h2>
          </div>
          <p className="text-xs md:text-sm text-muted leading-relaxed mb-8">
            ID proofs (Aadhaar Card, PAN Card, Driving License) are necessary checks for high-value sales. This process keeps our community fraud-free by verifying the account owner and preventing dispute claims.
          </p>

          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-[#080a0e] border border-green-500/10 flex items-start gap-4">
              <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white text-sm block mb-1">"Authenticity Validation:"</strong>
                <p className="text-xs text-muted m-0 leading-relaxed">Confirms that the seller is the genuine owner who holds original custody of the bindings.</p>
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-[#080a0e] border border-green-500/10 flex items-start gap-4">
              <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white text-sm block mb-1">"Login Lock Recovery:"</strong>
                <p className="text-xs text-muted m-0 leading-relaxed">During account isolation, Krafton occasionally triggers location-based security freezes. Having verified owner credentials helps our team coordinate bypasses and retrieve frozen access fast.</p>
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-[#080a0e] border border-green-500/10 flex items-start gap-4">
              <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white text-sm block mb-1">"Secure Buyer Ecosystem:"</strong>
                <p className="text-xs text-muted m-0 leading-relaxed">Assures premium buyers that their high-tier accounts are permanently secure, protecting them from recovery attempts.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 100% Confidentiality & Server Encryption */}
        <div className="p-8 md:p-10 rounded-3xl bg-[#0a0c10] border border-yellow-500/20">
          <div className="flex items-center gap-3 mb-6">
            <Lock size={20} className="text-yellow-500" />
            <h2 className="text-lg md:text-xl font-bold font-h text-white tracking-wider m-0">100% Confidentiality & Server Encryption</h2>
          </div>
          <p className="text-xs md:text-sm text-muted leading-relaxed mb-8">
            Seller privacy is our highest priority. All collected government IDs and address proofs are strictly isolated:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="p-6 rounded-2xl bg-[#080a0e] border border-white/5">
              <strong className="text-white text-sm block mb-3 flex items-center gap-2"><HardDrive size={16} className="text-muted" /> Offline Storage</strong>
              <p className="text-xs text-muted m-0 leading-relaxed">Files are moved from web pipelines to offline storage grids immediately after verification.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#080a0e] border border-white/5">
              <strong className="text-white text-sm block mb-3 flex items-center gap-2"><ShieldAlert size={16} className="text-muted" /> AES-256 Encryption</strong>
              <p className="text-xs text-muted m-0 leading-relaxed">All credentials are encrypted, securing your information from data breaches.</p>
            </div>
          </div>
          
          <div className="p-6 rounded-2xl bg-[#080a0e] border border-white/5 relative">
            <strong className="text-white text-sm block mb-3 flex items-center gap-2"><EyeOff size={16} className="text-muted" /> Strict Confidentiality</strong>
            <p className="text-xs text-muted m-0 leading-relaxed">IDs are never leaked, sold, or shared, and are strictly used to resolve recovery locks.</p>
            <div className="absolute bottom-4 right-4 text-yellow-500">
              <Shield size={24} opacity={0.2} />
            </div>
          </div>
        </div>

      </section>

    </div>
  );
}
