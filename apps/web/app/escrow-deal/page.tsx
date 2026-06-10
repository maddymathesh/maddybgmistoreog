"use client";

import { useState } from "react";
import { 
  ShieldCheck, Shield, CheckCircle2, MessageCircle, Send, Gamepad2, 
  Users, Check, Lock, Star, Youtube, Twitch, Trophy, AlertCircle, ChevronDown, Link as LinkIcon,
  Smartphone, Key, XCircle, AlertTriangle, UserCheck, ShieldAlert, CreditCard, Play, Briefcase, FileText, ChevronUp
} from "lucide-react";

export default function EscrowDeal() {
  const [accountValue, setAccountValue] = useState<number>(250000);
  const [tierRate, setTierRate] = useState<number>(0.03);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const steps = [
    { num: 1, title: "CHOOSE ACCOUNT", desc: "Buyer reviews specifications and picks their desired premium BGMI stock." },
    { num: 2, title: "SELECT TRUSTED ESCROW", desc: "Buyer and seller mutually discuss and finalize a reputable public figure to serve as middleman." },
    { num: 3, title: "ESCROW COMMUNICATION GROUP CREATED", desc: "A secured three-party chat group (WhatsApp/Telegram) is established containing the buyer, seller, and selected middleman." },
    { num: 4, title: "BUYER SENDS PAYMENT", desc: "Buyer transfers the full agreed account price plus escrow fee coordinates directly to the middleman's bank account." },
    { num: 5, title: "SELLER SHARES COORDINATES", desc: "Upon receiving payment deposit confirmation, the seller submits all social linking and active passwords to the group." },
    { num: 6, title: "BUYER VERIFIES CREDENTIALS", desc: "Buyer logs in, reviews level achievements, verifies gun skins, and checks matches against original listings." },
    { num: 7, title: "RECOVERY BINDINGS UPDATED", desc: "Buyer bind-swaps their recovery mobile number, locks two-factor security codes, and registers their primary recovery email." },
    { num: 8, title: "BUYER CONFIRMS DEAL COMPLETION", desc: "Once the account is fully secured under buyer credentials, the buyer posts deal confirmation in the escrow coordinates group." },
    { num: 9, title: "ESCROW RELEASES PAYOUT", desc: "The middleman releases the held payment directly to the seller's bank coordinates (deducting middleman commissions)." },
    { num: 10, title: "DEAL SUCCESSFULLY COMPLETED", desc: "Ownership fully transferred. Lifetime links signed off under warranty safeguards." },
  ];

  return (
    <div style={{ background: "var(--color-bg)", color: "#fff", minHeight: "100vh" }}>
      
      {/* HERO SECTION */}
      <section style={{
        position: "relative", width: "100%",
        paddingTop: "120px", paddingBottom: "60px",
        display: "flex", alignItems: "center", justifyContent: "center",
        flexDirection: "column", textAlign: "center", px: "5%"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0600] via-[#080a0f] to-[#080a0f] z-0" />

        <div className="relative z-10 px-[5%] max-w-[1000px] mx-auto flex flex-col items-center">
          <div className="badge flex items-center justify-center border border-yellow-500/30 bg-yellow-500/10 text-yellow-500 mb-6">
            <Shield size={12} className="mr-2" /> NEUTRAL THIRD-PARTY ESCROW
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-[64px] font-black font-h leading-[1.1] mb-4 uppercase text-center">
            SECURE ESCROW <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">DEAL SYSTEM</span>
          </h1>
          <h2 className="text-sm md:text-lg font-bold text-yellow-500 tracking-widest uppercase mb-6 text-center">
            SAFE HIGH-VALUE TRANSACTIONS THROUGH TRUSTED THIRD PARTIES
          </h2>
          <p className="text-muted text-sm sm:text-base max-w-[800px] mx-auto leading-relaxed text-center mb-8">
            Tailored for elite transactions, our escrow module introduces mutually trusted gaming middlemen to protect your funds. The payment is held in neutral custody and released to the seller only when you confirm complete account control and linkage bindings.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-500/20 text-yellow-500 text-[10px] font-bold tracking-widest uppercase"><CheckCircle2 size={12} /> SECURE TRANSACTION</span>
            <span className="flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 text-orange-500 text-[10px] font-bold tracking-widest uppercase"><Users size={12} /> TRUSTED MIDDLEMAN</span>
            <span className="flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/20 text-green-500 text-[10px] font-bold tracking-widest uppercase"><ShieldCheck size={12} /> VERIFIED PROCESS</span>
            <span className="flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-500/20 text-yellow-500 text-[10px] font-bold tracking-widest uppercase"><Lock size={12} /> SAFE TRANSFER</span>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button className="flex items-center gap-2 px-6 py-3 rounded-full font-bold tracking-widest text-[11px] uppercase transition-colors bg-green-500 text-black border-none hover:bg-green-400">
              <MessageCircle size={14} fill="currentColor" /> CONTACT ON WHATSAPP
            </button>
            <button className="flex items-center gap-2 px-6 py-3 rounded-full font-bold tracking-widest text-[11px] uppercase transition-colors bg-blue-500 text-white border-none hover:bg-blue-400">
              <Send size={14} fill="currentColor" /> JOIN TELEGRAM
            </button>
            <button className="flex items-center gap-2 px-6 py-3 rounded-full font-bold tracking-widest text-[11px] uppercase transition-colors bg-orange-500 text-black border-none hover:bg-orange-400">
              <Gamepad2 size={14} fill="currentColor" /> VIEW PREMIUM ACCOUNTS
            </button>
          </div>

          {/* Flowchart Visual */}
          <div className="p-8 rounded-3xl bg-[#0a0c10] border border-white/5 w-full max-w-[800px] flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col items-center justify-center p-6 bg-[#111520] rounded-2xl border border-white/5 w-full md:w-[200px]">
              <Users size={24} className="text-yellow-500 mb-2" />
              <strong className="text-white text-xs font-bold tracking-widest uppercase block mb-1">VERIFIED BUYER</strong>
              <span className="text-[10px] text-muted">Funds Sent to Escrow</span>
            </div>
            
            <div className="hidden md:flex flex-col items-center flex-1">
              <span className="text-[9px] text-yellow-500 tracking-widest uppercase font-bold mb-1">HOLDS FUNDS SECURELY</span>
              <div className="h-[2px] bg-gradient-to-r from-yellow-500/0 via-yellow-500 to-orange-500/0 w-full" />
            </div>

            <div className="flex flex-col items-center justify-center p-6 bg-[#0a0505] rounded-2xl border border-red-500/30 w-full md:w-[200px]">
              <ShieldCheck size={24} className="text-red-500 mb-2" />
              <strong className="text-red-500 text-xs font-bold tracking-widest uppercase block mb-1">TRUSTED ESCROW</strong>
              <span className="text-[10px] text-red-500/70">Releases upon Verification</span>
            </div>

            <div className="hidden md:flex flex-col items-center flex-1">
              <span className="text-[9px] text-yellow-500 tracking-widest uppercase font-bold mb-1">TRANSFERS ACCOUNT LOGIN</span>
              <div className="h-[2px] bg-gradient-to-r from-orange-500/0 via-yellow-500 to-yellow-500/0 w-full" />
            </div>

            <div className="flex flex-col items-center justify-center p-6 bg-[#111520] rounded-2xl border border-white/5 w-full md:w-[200px]">
              <Users size={24} className="text-yellow-500 mb-2" />
              <strong className="text-white text-xs font-bold tracking-widest uppercase block mb-1">VERIFIED SELLER</strong>
              <span className="text-[10px] text-muted">Receives Funds After Deal</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS ESCROW */}
      <section className="py-20 px-[5%] max-w-[800px] mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest block mb-2">DEFINITION & SCOPE</span>
          <h2 className="text-3xl font-black font-h text-white mb-2">What is Escrow?</h2>
          <div className="w-8 h-1 bg-orange-500 mx-auto" />
        </div>

        <div className="p-8 rounded-3xl bg-[#080a0e] border border-white/5 mb-8">
          <p className="text-sm text-white leading-relaxed text-center font-medium m-0 mb-8 italic">
            "Escrow is a secure transaction method where a trusted third-party middleman temporarily holds the payment until both buyer and seller complete the deal safely."
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-[#111520] border border-white/5">
              <strong className="flex items-center gap-2 text-white text-xs tracking-wider uppercase mb-2"><Shield size={14} className="text-yellow-500" /> Buyer Protection</strong>
              <p className="text-xs text-muted leading-relaxed m-0">Payment is held safely. If the seller fails coordinates, your funds are returned immediately.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#111520] border border-white/5">
              <strong className="flex items-center gap-2 text-white text-xs tracking-wider uppercase mb-2"><ShieldCheck size={14} className="text-yellow-500" /> Seller Protection</strong>
              <p className="text-xs text-muted leading-relaxed m-0">Confirms that the buyer has real, verified funds deposited before you hand over the account details.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#111520] border border-white/5">
              <strong className="flex items-center gap-2 text-white text-xs tracking-wider uppercase mb-2"><Shield size={14} className="text-yellow-500" /> Prevents Scams</strong>
              <p className="text-xs text-muted leading-relaxed m-0">Blocks quick password text reclaims, identity theft, fake bank transfers, and fraud actions.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#111520] border border-white/5">
              <strong className="flex items-center gap-2 text-white text-xs tracking-wider uppercase mb-2"><Star size={14} className="text-yellow-500" /> VIP Transactions</strong>
              <p className="text-xs text-muted leading-relaxed m-0">The golden security standard for premium BGMI accounts and ultra-rare X-suit collection deals.</p>
            </div>
          </div>
          
          <div className="mt-4 p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/10 flex items-center justify-center">
            <span className="text-xs text-yellow-500 font-medium tracking-wide flex items-center gap-2">
              <CheckCircle2 size={14} /> Rule Coordinates: Escrow is only done through mutually trusted and recognized individuals.
            </span>
          </div>
        </div>
      </section>

      {/* AUTHORIZED ESCROW PARTNERS */}
      <section className="py-10 px-[5%] max-w-[1000px] mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest block mb-2">PARTNER NETWORK</span>
          <h2 className="text-3xl font-black font-h text-white mb-4">Authorized Escrow Partners</h2>
          <p className="text-muted text-sm max-w-[500px] mx-auto">Escrow is strictly restricted to prominent public figures to avoid coordinated scams or exit frauds.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-8 rounded-3xl bg-[#0a0c10] border border-white/5 flex flex-col items-center text-center">
            <Youtube size={24} className="text-yellow-500 mb-4" />
            <strong className="text-white text-xs tracking-widest uppercase block mb-3 font-bold">TRUSTED YOUTUBERS</strong>
            <p className="text-xs text-muted m-0 leading-relaxed">Content creators with massive subscriber audiences (e.g. 100K+ channels) and public reputations.</p>
          </div>
          <div className="p-8 rounded-3xl bg-[#0a0c10] border border-white/5 flex flex-col items-center text-center">
            <Twitch size={24} className="text-yellow-500 mb-4" />
            <strong className="text-white text-xs tracking-widest uppercase block mb-3 font-bold">RECOGNIZED STREAMERS</strong>
            <p className="text-xs text-muted m-0 leading-relaxed">Verified gaming personalities who stream live regularly and hold verified social profiles.</p>
          </div>
          <div className="p-8 rounded-3xl bg-[#0a0c10] border border-white/5 flex flex-col items-center text-center">
            <Trophy size={24} className="text-yellow-500 mb-4" />
            <strong className="text-white text-xs tracking-widest uppercase block mb-3 font-bold">ESPORTS PLAYERS</strong>
            <p className="text-xs text-muted m-0 leading-relaxed">Verified professional competitive players active in recognized tournament organizations.</p>
          </div>
        </div>

        <div className="max-w-[800px] mx-auto space-y-4">
          <div className="p-4 rounded-xl text-center bg-[#080a0e] border border-white/5">
            <p className="text-xs text-muted m-0"><strong className="text-white">💡 Mutual Consent:</strong> Both buyer and seller must agree on the escrow person before proceeding.</p>
          </div>
          <div className="p-4 rounded-xl text-center bg-[#1a0505] border border-red-500/20">
            <p className="text-xs text-red-500 m-0 font-medium flex items-center justify-center gap-2"><AlertCircle size={14} /> WARNING: Unknown, unverified, or random discord/telegram middlemen will never be used.</p>
          </div>
        </div>
      </section>

      {/* HOW ESCROW WORKS STEP BY STEP */}
      <section className="py-20 px-[5%] max-w-[800px] mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest block mb-2">DEAL FLOWCHART</span>
          <h2 className="text-3xl font-black font-h text-white mb-4">How Escrow Works Step-by-Step</h2>
          <p className="text-muted text-sm max-w-[500px] mx-auto">A complete roadmap tracking payment safety, credential check, and secure payouts.</p>
        </div>

        <div className="relative pl-6 md:pl-8 space-y-8 before:absolute before:inset-0 before:ml-[13px] md:before:ml-[17px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent mb-12">
          {steps.map((step, index) => (
            <div key={index} className={`relative flex items-center md:justify-center ${step.num === 9 ? "md:justify-center" : ""}`}>
              <div className={`flex items-start md:items-center gap-6 w-full ${step.num === 9 ? "bg-orange-500/5 border border-orange-500/20 p-6 rounded-2xl" : ""}`}>
                
                {/* Number Circle */}
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#111520] border border-yellow-500 text-yellow-500 flex items-center justify-center font-bold text-xs relative z-10 shadow-[0_0_0_4px_#080a0f]">
                  {step.num}
                </div>

                {/* Content */}
                <div className="flex-1 pt-1 md:pt-0">
                  <strong className={`text-sm tracking-widest uppercase block mb-2 ${step.num === 9 ? "text-orange-500" : "text-white"}`}>{step.title}</strong>
                  <p className="text-xs text-muted leading-relaxed m-0">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-8 rounded-2xl bg-[#0a0505] border border-red-500/20 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <AlertCircle size={16} className="text-red-500" />
            <strong className="text-red-500 text-[10px] font-bold tracking-widest uppercase">CUSTODY RELEASE RULE</strong>
          </div>
          <p className="text-xs text-white leading-relaxed m-0 font-medium">
            "Escrow payment will strictly not be released to the seller until the buyer confirms successful account ownership verification and recovery bindings."
          </p>
        </div>
      </section>

      {/* ESCROW CHARGES & LIVE CALCULATOR */}
      <section className="py-20 px-[5%] max-w-[1000px] mx-auto pb-32 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest block mb-2">FINANCIAL OVERHEAD</span>
          <h2 className="text-3xl font-black font-h text-white mb-2">Escrow Charges & Live Calculator</h2>
          <div className="w-8 h-1 bg-orange-500 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Service Charge Regulations */}
          <div className="p-8 rounded-3xl bg-[#0a0c10] border border-white/5 flex flex-col">
            <strong className="text-white text-xs font-bold tracking-widest uppercase mb-8 block">SERVICE CHARGE REGULATIONS</strong>
            
            <ul className="space-y-6 flex-1 mb-8 m-0 p-0">
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-500 text-black flex items-center justify-center font-bold text-[10px] mt-0.5">1</div>
                <p className="text-xs text-muted leading-relaxed m-0">Escrow coordination involves dedicated logistics. Therefore, <strong className="text-white">middleman service charges apply</strong> to secure the trade.</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-500 text-black flex items-center justify-center font-bold text-[10px] mt-0.5">2</div>
                <p className="text-xs text-muted leading-relaxed m-0"><strong className="text-white">Escrow charges are borne 100% by the buyer.</strong> They are not split, unless discussed and agreed by the seller prior.</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-500 text-black flex items-center justify-center font-bold text-[10px] mt-0.5">3</div>
                <p className="text-xs text-muted leading-relaxed m-0">Charges are <strong className="text-white">separate from the account value</strong> and calculated as a percentage of the total transaction size.</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-500 text-black flex items-center justify-center font-bold text-[10px] mt-0.5">4</div>
                <p className="text-xs text-muted leading-relaxed m-0">Rates vary depending on the chosen partner class (trusted YouTubers typically require 3.0% commission).</p>
              </li>
            </ul>

            <div className="p-4 rounded-xl text-center bg-yellow-500/5 border border-yellow-500/10">
              <span className="text-[10px] text-yellow-500 font-bold">"All escrow-related costs are strictly the buyer's responsibility."</span>
            </div>
          </div>

          {/* Interactive Fee Calculator */}
          <div className="p-8 md:p-10 rounded-3xl bg-[#080a0e] border border-yellow-500/20 shadow-[0_0_30px_rgba(234,179,8,0.03)] flex flex-col">
            <div className="flex items-center gap-3 mb-2">
              <LinkIcon size={20} className="text-yellow-500" />
            </div>
            <strong className="text-white text-sm font-black font-h tracking-wider uppercase block mb-1">INTERACTIVE FEE CALCULATOR</strong>
            <p className="text-[10px] text-muted mb-8 uppercase tracking-widest">Compute transaction commission in real-time</p>

            <div className="space-y-6 flex-1">
              
              <div>
                <label className="text-[9px] font-bold text-muted uppercase tracking-widest block mb-3">ACCOUNT VALUE (₹)</label>
                <div className="bg-[#111520] border border-white/5 rounded-xl p-4 mb-4 flex justify-between items-center">
                  <span className="text-yellow-500 font-bold text-sm">₹</span>
                  <strong className="text-white font-h text-xl">{accountValue.toLocaleString()}</strong>
                </div>
                <input 
                  type="range" 
                  min={10000} 
                  max={1000000} 
                  step={5000}
                  value={accountValue} 
                  onChange={(e) => setAccountValue(Number(e.target.value))}
                  className="w-full accent-yellow-500 h-1 bg-white/10 rounded-full appearance-none cursor-pointer"
                />
              </div>

              <div>
                <label className="text-[9px] font-bold text-muted uppercase tracking-widest block mb-3">ESCROW MIDDLEMAN TIER</label>
                <div className="relative">
                  <select 
                    value={tierRate}
                    onChange={(e) => setTierRate(Number(e.target.value))}
                    className="w-full bg-[#111520] border border-white/5 rounded-xl p-4 text-sm text-white appearance-none outline-none cursor-pointer pr-10"
                  >
                    <option value={0.03}>Trusted YouTuber (3.0%)</option>
                    <option value={0.02}>Recognized Streamer (2.0%)</option>
                    <option value={0.015}>Esports Player (1.5%)</option>
                  </select>
                  <ChevronDown size={16} className="text-muted absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

            </div>

            <div className="mt-8 space-y-4 pt-8 border-t border-white/5">
              <div className="flex justify-between items-center text-xs">
                <span className="text-muted">Account Price</span>
                <strong className="text-white">{formatCurrency(accountValue)}</strong>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-muted">Escrow Charges ({(tierRate * 100).toFixed(1)}%)</span>
                <strong className="text-yellow-500">{formatCurrency(accountValue * tierRate)}</strong>
              </div>
              <div className="flex justify-between items-center text-sm pt-4 border-t border-white/5">
                <span className="text-white font-bold tracking-wide">Total Paid to Escrow</span>
                <strong className="text-yellow-500 font-h text-xl">{formatCurrency(accountValue + (accountValue * tierRate))}</strong>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ACCOUNT VERIFICATION & SAFEGUARDS */}
      <section className="py-20 px-[5%] max-w-[800px] mx-auto relative z-10 border-t border-white/5">
        <div className="text-center mb-12">
          <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest block mb-2">SECURE HANDOFF</span>
          <h2 className="text-3xl font-black font-h text-white mb-2">Account Verification & Safeguards</h2>
          <div className="w-8 h-1 bg-orange-500 mx-auto" />
        </div>

        <div className="p-8 rounded-3xl bg-[#080a0e] border border-white/5">
          <p className="text-xs text-muted leading-relaxed mb-8">
            Once the middleman secures the funds, the buyer gains full verification authority. Maddy BGMI Store enforces a rigid social linkage swap protocol to make reclaims technically impossible.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="p-5 rounded-2xl bg-[#111520] border border-white/5">
              <strong className="flex items-center gap-2 text-white text-xs tracking-wider mb-2"><Check size={14} className="text-yellow-500" /> Recovery Email Bound</strong>
              <p className="text-[10px] text-muted m-0 leading-relaxed">Primary recovery email is updated to the buyer's coordinates.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#111520] border border-white/5">
              <strong className="flex items-center gap-2 text-white text-xs tracking-wider mb-2"><Check size={14} className="text-yellow-500" /> Recovery Phone Updated</strong>
              <p className="text-[10px] text-muted m-0 leading-relaxed">Two-factor authentication mobile bindings swapped to the buyer.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#111520] border border-white/5">
              <strong className="flex items-center gap-2 text-white text-xs tracking-wider mb-2"><Check size={14} className="text-yellow-500" /> Login Credentials Checked</strong>
              <p className="text-[10px] text-muted m-0 leading-relaxed">Buyer physically verifies the cosmetic inventory and unlinks.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#111520] border border-white/5">
              <strong className="flex items-center gap-2 text-white text-xs tracking-wider mb-2"><Check size={14} className="text-yellow-500" /> Final Transition Signed</strong>
              <p className="text-[10px] text-muted m-0 leading-relaxed">Total ownership rights are legally declared as successfully completed.</p>
            </div>
          </div>

          <div className="p-4 rounded-xl text-center bg-yellow-500/5 border border-yellow-500/10">
            <span className="text-[10px] text-yellow-500 font-bold tracking-wide">"Full account ownership transfer is completed only after successful verification."</span>
          </div>
        </div>
      </section>

      {/* WHY ESCROW IS SAFER */}
      <section className="py-20 px-[5%] max-w-[1000px] mx-auto relative z-10 border-t border-white/5">
        <div className="text-center mb-12">
          <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest block mb-2">SECURITY PILLARS</span>
          <h2 className="text-3xl font-black font-h text-white mb-4">Why Escrow is Safer</h2>
          <p className="text-muted text-sm max-w-[500px] mx-auto">Six foundational reasons that make our escrow systems the premier safe-deal architecture.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-6 rounded-2xl bg-[#080a0e] border border-white/5 flex flex-col items-center text-center">
            <UserCheck size={20} className="text-yellow-500 mb-4" />
            <strong className="text-white text-[10px] tracking-widest uppercase mb-2">NEUTRAL PROTECTION</strong>
            <p className="text-[10px] text-muted m-0 leading-relaxed">Middleman maintains complete neutrality, strictly locking payment coordinates to guard interests of both parties.</p>
          </div>
          <div className="p-6 rounded-2xl bg-[#080a0e] border border-white/5 flex flex-col items-center text-center">
            <ShieldCheck size={20} className="text-yellow-500 mb-4" />
            <strong className="text-white text-[10px] tracking-widest uppercase mb-2">REDUCED SCAM RISK</strong>
            <p className="text-[10px] text-muted m-0 leading-relaxed">Renders quick password ext reclaims, fake payment confirmations, and trade disputes physically impossible.</p>
          </div>
          <div className="p-6 rounded-2xl bg-[#080a0e] border border-white/5 flex flex-col items-center text-center">
            <CreditCard size={20} className="text-yellow-500 mb-4" />
            <strong className="text-white text-[10px] tracking-widest uppercase mb-2">SECURE PAYMENT HOLDING</strong>
            <p className="text-[10px] text-muted m-0 leading-relaxed">Your lakhs of rupees are locked in safe verified accounts rather than being wired directly to unknown sellers.</p>
          </div>
          <div className="p-6 rounded-2xl bg-[#080a0e] border border-white/5 flex flex-col items-center text-center">
            <Gamepad2 size={20} className="text-yellow-500 mb-4" />
            <strong className="text-white text-[10px] tracking-widest uppercase mb-2">SAFER PREMIUM DEALS</strong>
            <p className="text-[10px] text-muted m-0 leading-relaxed">Specially optimized to execute flawless handovers for ultra-premium BGMI collector accounts.</p>
          </div>
          <div className="p-6 rounded-2xl bg-[#080a0e] border border-white/5 flex flex-col items-center text-center">
            <MessageCircle size={20} className="text-yellow-500 mb-4" />
            <strong className="text-white text-[10px] tracking-widest uppercase mb-2">REAL-TIME COMMUNICATION</strong>
            <p className="text-[10px] text-muted m-0 leading-relaxed">Direct group coordination ensures active assistance, clearing social link coordinates in minutes.</p>
          </div>
          <div className="p-6 rounded-2xl bg-[#080a0e] border border-white/5 flex flex-col items-center text-center">
            <Trophy size={20} className="text-yellow-500 mb-4" />
            <strong className="text-white text-[10px] tracking-widest uppercase mb-2">HIGH-VALUE DEAL TRUST</strong>
            <p className="text-[10px] text-muted m-0 leading-relaxed">Ensures smooth transaction safety that protects hard-earned money and high-tier account inventory.</p>
          </div>
        </div>
      </section>

      {/* EXAMPLE ESCROW SCENARIO */}
      <section className="py-20 px-[5%] max-w-[800px] mx-auto relative z-10 border-t border-white/5">
        <div className="text-center mb-12">
          <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest block mb-2">CASE STUDY</span>
          <h2 className="text-3xl font-black font-h text-white mb-2">Example Escrow Scenario</h2>
          <div className="w-8 h-1 bg-orange-500 mx-auto" />
        </div>

        <div className="p-8 md:p-10 rounded-3xl bg-[#0a0c10] border border-white/5">
          <strong className="text-yellow-500 text-[10px] tracking-widest uppercase block mb-8 text-center">STORYBOARD: SIMULATED ₹250K VIP DEAL</strong>
          
          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-[#111520] border border-white/5 flex items-start gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-500/10 text-yellow-500 flex items-center justify-center font-bold text-[10px] mt-0.5">1</div>
              <p className="text-xs text-muted leading-relaxed m-0"><strong className="text-white">"Negotiation & Selection:"</strong> Buyer initiates purchase of a ₹2.5 Lakh BGMI account, and both parties agree to use a mutually recognized **Trusted YouTuber** as middleman.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#111520] border border-white/5 flex items-start gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-500/10 text-yellow-500 flex items-center justify-center font-bold text-[10px] mt-0.5">2</div>
              <p className="text-xs text-muted leading-relaxed m-0"><strong className="text-white">"Security Deposit:"</strong> Buyer deposits the ₹2.5 Lakh plus the YouTuber's 3.0% service fee directly into the middleman's bank account.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#111520] border border-white/5 flex items-start gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-500/10 text-yellow-500 flex items-center justify-center font-bold text-[10px] mt-0.5">3</div>
              <p className="text-xs text-muted leading-relaxed m-0"><strong className="text-white">"Login Handoff:"</strong> Once the YouTuber logs receipt, the seller shares the active social logins and unlinking coordinates in the secure group.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#111520] border border-white/5 flex items-start gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-500/10 text-yellow-500 flex items-center justify-center font-bold text-[10px] mt-0.5">4</div>
              <p className="text-xs text-muted leading-relaxed m-0"><strong className="text-white">"Buyer Verification:"</strong> The buyer logs in, confirms cosmetic items, and bind-swaps their personal recovery phone and 2FA credentials.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#111520] border border-white/5 flex items-start gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-500/10 text-yellow-500 flex items-center justify-center font-bold text-[10px] mt-0.5">5</div>
              <p className="text-xs text-muted leading-relaxed m-0"><strong className="text-white">"Deal Confirmed:"</strong> Once the account is fully secured under buyer credentials, the buyer posts deal confirmation in the group.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#111520] border border-white/5 flex items-start gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-500/10 text-yellow-500 flex items-center justify-center font-bold text-[10px] mt-0.5">6</div>
              <p className="text-xs text-muted leading-relaxed m-0"><strong className="text-white">"Payment Release:"</strong> The YouTuber releases the held payment directly to the seller's coordinates, completing a **safe transaction for both sides**.</p>
            </div>
          </div>
        </div>
      </section>

      {/* KYC PROTECTION */}
      <section className="py-20 px-[5%] max-w-[800px] mx-auto relative z-10 border-t border-white/5">
        <div className="text-center mb-12">
          <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest block mb-2">KYC PROTECTION</span>
          <h2 className="text-3xl font-black font-h text-white mb-2">Identity Safety Coordinates</h2>
          <div className="w-8 h-1 bg-red-500 mx-auto" />
        </div>

        <div className="p-8 rounded-3xl bg-[#080a0e] border border-white/5">
          <div className="flex items-start gap-4 mb-8">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-500/10 text-yellow-500 flex items-center justify-center">
              <ShieldCheck size={24} />
            </div>
            <div>
              <strong className="text-white text-sm tracking-widest block mb-2 font-bold">Verification & Legal Integrity</strong>
              <p className="text-xs text-muted leading-relaxed m-0">In rare circumstances (high-value deals or cyber-fraud alerts), basic government identity proof (for example, Aadhaar, PAN Card, or Driving License copies) may be requested from the transaction parties to confirm legal payment names.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#111520] border border-white/5">
              <p className="text-[10px] text-muted leading-relaxed m-0"><strong className="text-white">**Strict Privacy:**</strong> All KYC files are held securely in private offline vaults and are never broadcasted or shared.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#111520] border border-white/5">
              <p className="text-[10px] text-muted leading-relaxed m-0"><strong className="text-white">**Fraud Defense:**</strong> Essential to protect against unauthorized credit cards, fake payment screenshots, and bank freeze attempts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* MANDATORY ESCROW RULES */}
      <section className="py-20 px-[5%] max-w-[800px] mx-auto relative z-10 border-t border-white/5">
        <div className="text-center mb-12">
          <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest block mb-2">WARNING RULES</span>
          <h2 className="text-3xl font-black font-h text-white mb-4">Mandatory Escrow Rules</h2>
          <p className="text-muted text-sm max-w-[500px] mx-auto">Failure to follow these protocols results in immediate deal voiding and blacklisting.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 rounded-2xl bg-[#080a0e] border border-white/5">
            <strong className="flex items-center gap-2 text-yellow-500 text-[10px] tracking-widest uppercase mb-3"><Users size={14} /> PRE-APPROVED CONTACTS ONLY</strong>
            <p className="text-[10px] text-muted m-0 leading-relaxed">Escrows are conducted purely through mutually trusted public YouTubers, streamers, or verified legacy middlemen.</p>
          </div>
          <div className="p-6 rounded-2xl bg-[#080a0e] border border-white/5">
            <strong className="flex items-center gap-2 text-yellow-500 text-[10px] tracking-widest uppercase mb-3"><LinkIcon size={14} /> BUYER PAYS SERVICE FEE</strong>
            <p className="text-[10px] text-muted m-0 leading-relaxed">All commission rates (typically 2% to 5%) charged by the escrow holder are paid entirely by the buyer upfront.</p>
          </div>
          <div className="p-6 rounded-2xl bg-[#080a0e] border border-white/5">
            <strong className="flex items-center gap-2 text-yellow-500 text-[10px] tracking-widest uppercase mb-3"><ShieldCheck size={14} /> FULL VERIFICATION FIRST</strong>
            <p className="text-[10px] text-muted m-0 leading-relaxed">Payments will not be released by the middleman until the buyer confirms recovery binds are 100% updated.</p>
          </div>
          <div className="p-6 rounded-2xl bg-[#1a0505] border border-red-500/20">
            <strong className="flex items-center gap-2 text-red-500 text-[10px] tracking-widest uppercase mb-3"><AlertTriangle size={14} /> NO UNKNOWN MIDDLEMEN</strong>
            <p className="text-[10px] text-muted m-0 leading-relaxed">Unknown or unverified third parties are strictly forbidden. Any attempt will immediately cancel the transaction.</p>
          </div>
          <div className="p-6 rounded-2xl bg-[#1a0505] border border-red-500/20">
            <strong className="flex items-center gap-2 text-red-500 text-[10px] tracking-widest uppercase mb-3"><AlertTriangle size={14} /> FAKE SCREENSHOT BAN</strong>
            <p className="text-[10px] text-muted m-0 leading-relaxed">Any submission of fake payment screenshots or altered deposit logs leads to instant coordinate blacklisting and legal reports.</p>
          </div>
          <div className="p-6 rounded-2xl bg-[#080a0e] border border-white/5">
            <strong className="flex items-center gap-2 text-yellow-500 text-[10px] tracking-widest uppercase mb-3"><FileText size={14} /> FOLLOW GUIDELINES CAREFULLY</strong>
            <p className="text-[10px] text-muted m-0 leading-relaxed">Both parties must strictly follow the middleman's standardized handbook instructions for an immaculate trade.</p>
          </div>
        </div>
      </section>

      {/* COMMON ESCROW DOUBTS RESOLVED */}
      <section className="py-20 px-[5%] max-w-[800px] mx-auto relative z-10 border-t border-white/5 pb-32">
        <div className="text-center mb-12">
          <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest block mb-2">HELP CENTER</span>
          <h2 className="text-3xl font-black font-h text-white mb-2">Common Escrow Doubts Resolved</h2>
          <div className="w-8 h-1 bg-orange-500 mx-auto" />
        </div>

        <div className="space-y-4">
          {[
            {
              q: "Is utilizing the escrow transaction system mandatory?",
              a: "No, using an escrow is entirely optional. Standard direct online transfers managed by Maddy's administration are active and heavily trusted. Escrow simply acts as an extra layer of assurance for high-value transactions if the buyer prefers neutral custody."
            },
            {
              q: "Who holds the authority to choose the escrow person?",
              a: "Both the buyer and the seller must mutually agree on the selected escrow middleman. Under no circumstances will a transaction proceed if one party feels uncomfortable with the proposed middleman."
            },
            {
              q: "Who is responsible for covering the escrow service charges?",
              a: "The buyer is entirely responsible for covering all middleman escrow service charges. These fees are added on top of the final agreed account price and paid directly to the escrow holder upfront."
            },
            {
              q: "Why is escrow highly recommended for high-value BGMI deals?",
              a: "When transactions involve lakhs of rupees (₹80k up to ₹5 Lakhs+), having a neutral, highly recognized third party hold the payment prevents quick-exit recovery scams, payment chargebacks, or coordinate disputes, giving absolute confidence to both sides."
            },
            {
              q: "When exactly is the payment released to the seller?",
              a: "The escrow holder releases the payment to the seller ONLY after the buyer has fully verified the login coordinates, verified the cosmetic inventory, and successfully binded their recovery email and phone. Not a second before."
            },
            {
              q: "Can we use any random middleman for the transaction?",
              a: "Absolutely not. Only verified, highly recognized YouTubers, streamers, official esports roster players, or Maddy Store-approved legacy middlemen are eligible. Unknown individuals or fake profile coordinates are strictly rejected."
            }
          ].map((faq, i) => (
            <div key={i} className="rounded-xl bg-[#080a0e] border border-white/5 overflow-hidden">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className={`w-full p-6 text-left flex justify-between items-center transition-colors ${openFaq === i ? 'text-yellow-500 border-b border-white/5' : 'text-white hover:bg-white/5'}`}
              >
                <span className="text-xs font-bold tracking-wide">{faq.q}</span>
                {openFaq === i ? <ChevronUp size={16} /> : <ChevronDown size={16} className="text-muted" />}
              </button>
              {openFaq === i && (
                <div className="p-6 bg-[#0a0c10]">
                  <p className="text-xs text-muted leading-relaxed m-0">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-[5%] text-center relative z-10 border-t border-white/5 bg-gradient-to-b from-[#0a0800] to-[#080a0f]">
        <div className="max-w-[600px] mx-auto">
          <span className="text-[10px] font-bold text-muted uppercase tracking-widest block mb-4 border border-white/10 px-3 py-1 rounded-full w-max mx-auto bg-white/5">HIGH-VALUE SECURITY SYSTEM</span>
          <h2 className="text-4xl md:text-5xl font-black font-h text-white mb-6 uppercase leading-tight">
            NEED MAXIMUM <span className="text-yellow-500">TRANSACTION SECURITY?</span>
          </h2>
          <p className="text-sm text-muted leading-relaxed mb-10 max-w-[400px] mx-auto">
            Establish a secure transaction today. Connect with Maddy Store support administrators to coordinate trusted middlemen escrow channels.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button className="flex items-center gap-2 px-6 py-3 rounded-full font-bold tracking-widest text-[11px] uppercase transition-colors bg-green-500 text-black border-none hover:bg-green-400">
              <MessageCircle size={14} fill="currentColor" /> CONTACT ON WHATSAPP
            </button>
            <button className="flex items-center gap-2 px-6 py-3 rounded-full font-bold tracking-widest text-[11px] uppercase transition-colors bg-blue-500 text-white border-none hover:bg-blue-400">
              <Send size={14} fill="currentColor" /> JOIN TELEGRAM
            </button>
            <button className="flex items-center gap-2 px-6 py-3 rounded-full font-bold tracking-widest text-[11px] uppercase transition-colors bg-orange-500 text-black border-none hover:bg-orange-400">
              <ShieldCheck size={14} fill="currentColor" /> START SECURE ESCROW DEAL
            </button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-yellow-500 text-[10px] font-bold tracking-widest uppercase">
            <ShieldCheck size={14} /> TRUSTED BY 2000+ BUYERS ACROSS INDIA
          </div>
        </div>
      </section>

    </div>
  );
}
