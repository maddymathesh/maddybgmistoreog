"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  Banknote, Zap, Clock, ShieldCheck, FileText, Coins, Check, AlertTriangle, 
  ChevronDown, ChevronUp, MapPin, X, ArrowRight, Landmark, Bitcoin, MessageCircle, ShieldAlert, Award
} from "lucide-react";

export default function SellPage() {
  const [f2fExpanded, setF2fExpanded] = useState(false);
  const [kycExpanded, setKycExpanded] = useState(false);
  const [payoutExpanded, setPayoutExpanded] = useState(false);
  const [timelinePathway, setTimelinePathway] = useState<"instant" | "hold">("instant");
  const [unlinksTab, setUnlinksTab] = useState<number>(2);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const f2fRef = useRef<HTMLDivElement>(null);
  const kycRef = useRef<HTMLDivElement>(null);
  const payoutRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const chipStyle = (color: string) => ({
    display: "inline-flex", alignItems: "center", gap: "6px",
    padding: "6px 14px", borderRadius: "30px",
    fontSize: "12px", fontWeight: 700, fontFamily: "var(--font-h)",
    textTransform: "uppercase" as const, letterSpacing: "0.5px",
    cursor: "pointer", border: `1px solid ${color}`,
    color: color, background: `${color}14`,
    transition: "all 0.2s", textDecoration: "none"
  });

  const faqs = [
    {
      q: "How do I get paid and how long does the payout take?",
      a: "Payouts are released within 1-2 hours for Instant Sell after credential securing. Hold & Sell payouts are released upon buyer confirmation. We support UPI, Bank Transfer, USDT, BTC, and Cash (F2F only)."
    },
    {
      q: "What is the difference between Hold & Sell vs. Instant Sell?",
      a: "Instant Sell provides a direct buyout from Maddy Store for immediate cash at wholesale rates. Hold & Sell lists your account to our VIP networks to get you 100% maximum market value, taking 3-7 days to sell."
    },
    {
      q: "Why is there a ₹80,000+ threshold for Face-to-Face deals?",
      a: "F2F cash meetups require significant travel coordination, local safety setup, and escrow monitoring. To ensure it is mutually viable, F2F dealing is strictly reserved for accounts above ₹80,000. The owner must cover all travel, stay, and food charges for the Maddy Store deal agent."
    },
    {
      q: "What are the exact unlinking rules and cooldown timelines?",
      a: "BGMI unlinking requires 7 days to complete for secondary logins. If a seller logs into the unlinking account during this 7-day period, the unlink is automatically cancelled. Fresh linking slots require a 30-day incubation lock before an unlink can be requested."
    },
    {
      q: "Why is the sale completely irreversible once the account is secured?",
      a: "Maddy Store binds recovery emails and recovery phone numbers to the buyer's credentials during security isolation. Once detaching is done and bindings are locked, the credentials are permanently handed over, making retrieval impossible."
    },
    {
      q: "What KYC documents do I need and how is my data secured?",
      a: "We require a valid government-issued ID with address (specifically Aadhaar Card or Driving License). All KYC data is stored on heavily encrypted offline servers and is only used to cooperate with official cybercrime departments in the event of retrieval attempts."
    },
    {
      q: "Can I still play on my account during a Hold & Sell listing?",
      a: "Yes, you can continue playing. However, you must strictly: (1) not bind any new social logins, (2) not change the unlinking region, (3) not spend inventory assets like UC or Rename Cards, and (4) notify our team immediately if you unlock high-tier outfits or labs so we can update your listing."
    }
  ];

  return (
    <div style={{ background: "var(--color-bg)", color: "#fff", minHeight: "100vh" }}>
      
      {/* HERO BANNER */}
      <section style={{
        position: "relative", width: "100%",
        minHeight: "80vh", overflow: "hidden",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: 'url("/sell-banner.jpg")', filter: "brightness(0.4)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#080a0f]/50 to-[#080a0f] z-0" />

        <div className="relative z-10 text-center px-[5%] max-w-[860px] mx-auto mt-20">
          <div className="badge mb-4 animate-pulse mx-auto flex items-center justify-center w-fit">
            <Banknote size={14} /> PREMIUM SELLING PORTAL
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-[80px] font-black font-h leading-none mb-6 drop-shadow-2xl uppercase">
            Turn Your BGMI Account<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Into Secure Cash</span>
          </h1>
          <p className="text-muted text-sm sm:text-base md:text-lg max-w-[640px] mx-auto mb-10 drop-shadow-md font-medium">
            Maximize your return with Hold & Sell, or cash out immediately with Instant Sell. Secure valuation, KYC audits, and verified payouts.
          </p>

          <div className="flex gap-4 justify-center flex-wrap mb-8">
            <button
              onClick={() => { setTimeout(() => scrollTo(optionsRef), 100); }}
              className="flex items-center gap-2 px-8 py-4 rounded-xl font-h font-bold text-sm tracking-wide transition-transform hover:-translate-y-1"
              style={{
                background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
                color: "#000", border: "none",
                boxShadow: "0 4px 20px rgba(245,158,11,0.3)"
              }}>
              <Clock size={16} /> Hold & Sell Option
            </button>
            <button
              onClick={() => { setTimeout(() => scrollTo(optionsRef), 100); }}
              className="flex items-center gap-2 px-8 py-4 rounded-xl font-h font-bold text-sm tracking-wide transition-transform hover:-translate-y-1 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm border border-white/10"
            >
              <Zap size={16} /> Instant Sell Option
            </button>
          </div>

          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/f2f-sell-guide" style={chipStyle("var(--color-orange)")} className="no-underline">
              <MapPin size={12} /> F2F SELL GUIDE
            </Link>
            <Link href="/kyc-guide" style={chipStyle("#22c55e")} className="no-underline">
              <FileText size={12} /> KYC & ID PROOF
            </Link>
            <Link href="/payout-guide" style={chipStyle("var(--color-gold)")} className="no-underline">
              <Coins size={12} /> PAYOUT METHODS
            </Link>
          </div>
        </div>
      </section>

      {/* ESSENTIAL SELLER & HANDOVER PROTOCOLS */}
      <section className="px-[5%] relative z-20 mt-10 mb-20 max-w-[1200px] mx-auto">
        <div className="p-8 rounded-3xl border border-green-500/30 bg-gradient-to-br from-[#0a120c] to-[#050608] shadow-[0_0_50px_rgba(34,197,94,0.05)]">
          <div className="flex items-center gap-3 mb-2">
            <ShieldCheck size={28} className="text-green-500 filter drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
            <h2 className="text-xl md:text-2xl font-black font-h text-white uppercase tracking-wider m-0">Essential Seller & Handover Protocols</h2>
          </div>
          <p className="text-muted text-xs md:text-sm mb-10 pl-10">Every sell transaction — Hold & Sell or Instant Sell — follows these strict protocols. Click any rule to learn more.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 pl-2 md:pl-10">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-500 font-h font-bold text-xs shrink-0">01</div>
              <div>
                <strong className="text-white text-sm block mb-2 uppercase font-h tracking-wide">Face-to-Face Selling</strong>
                <p className="text-xs text-muted leading-relaxed mb-3">Contact us via WhatsApp/Telegram for valuation. If F2F is chosen, meet at a midpoint location (e.g., Kanchipuram for Vellore-Chennai) after paying a 10% booking fee. Payout is released instantly via cash/UPI upon full verification.</p>
                <Link href="/f2f-sell-guide" className="text-[10px] font-bold text-orange-500 uppercase tracking-widest flex items-center gap-1 hover:text-orange-400 bg-transparent border-none p-0 cursor-pointer no-underline">F2F SELL GUIDE <ArrowRight size={10} /></Link>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-500 font-h font-bold text-xs shrink-0">02</div>
              <div>
                <strong className="text-white text-sm block mb-2 uppercase font-h tracking-wide">Escrow Method</strong>
                <p className="text-xs text-muted leading-relaxed mb-3">Trade safely through a trusted streamer, YouTuber, or mutual middleman who holds login credentials during the audit and releases payment directly once full control is verified by Maddy Store.</p>
                <Link href="/escrow-deal" className="text-[10px] font-bold text-blue-500 uppercase tracking-widest flex items-center gap-1 hover:text-blue-400 no-underline">ESCROW GUIDE <ArrowRight size={10} /></Link>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-500 font-h font-bold text-xs shrink-0">03</div>
              <div>
                <strong className="text-white text-sm block mb-2 uppercase font-h tracking-wide">No Returns After Handover</strong>
                <p className="text-xs text-muted leading-relaxed mb-3">Once credentials have been successfully transferred and payment is released, the deal is 100% final. Accounts cannot be returned or resold back to us at a later price to protect profit margins.</p>
                <Link href="/no-returns-policy" className="text-[10px] font-bold text-red-500 uppercase tracking-widest flex items-center gap-1 hover:text-red-400 bg-transparent border-none p-0 cursor-pointer no-underline">FINALITY POLICY <ArrowRight size={10} /></Link>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-500 font-h font-bold text-xs shrink-0">04</div>
              <div>
                <strong className="text-white text-sm block mb-2 uppercase font-h tracking-wide">ID Proof (KYC)</strong>
                <p className="text-xs text-muted leading-relaxed mb-3">We collect government-issued ID (Aadhaar, PAN, DL) and live location. This keeps our marketplace fraud-free and assists our team in resolving security freezes or recovery locks.</p>
                <Link href="/kyc-guide" className="text-[10px] font-bold text-green-500 uppercase tracking-widest flex items-center gap-1 hover:text-green-400 bg-transparent border-none p-0 cursor-pointer no-underline">KYC GUIDE <ArrowRight size={10} /></Link>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center text-yellow-500 font-h font-bold text-xs shrink-0">05</div>
              <div>
                <strong className="text-white text-sm block mb-2 uppercase font-h tracking-wide">Payment Methods</strong>
                <p className="text-xs text-muted leading-relaxed mb-3">Immediate cash/UPI on verification for F2F, or secure middleman disburser for Escrow. Features Scenario A (dual linkage unlinks take 7-15 days) and Scenario B (single login instant payout).</p>
                <Link href="/payout-guide" className="text-[10px] font-bold text-yellow-500 uppercase tracking-widest flex items-center gap-1 hover:text-yellow-400 bg-transparent border-none p-0 cursor-pointer no-underline">PAYOUT GUIDE <ArrowRight size={10} /></Link>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-white/10 border border-white/30 flex items-center justify-center text-white font-h font-bold text-xs shrink-0">06</div>
              <div>
                <strong className="text-white text-sm block mb-2 uppercase font-h tracking-wide">Personal Logins</strong>
                <p className="text-xs text-muted leading-relaxed mb-3">Primary game logins go to Maddy Store, while personal connections (Facebook, personal Gmail) remain strictly yours. A guaranteed unlinking window ensures safe detachment.</p>
                <Link href="/unlinking-guide" className="text-[10px] font-bold text-white uppercase tracking-widest flex items-center gap-1 hover:text-gray-300 bg-transparent border-none p-0 cursor-pointer no-underline">UNLINKING GUIDE <ArrowRight size={10} /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TWO WAYS TO CASH OUT YOUR ACCOUNT */}
      <section ref={optionsRef} className="py-20 px-[5%] max-w-[1400px] mx-auto border-t border-white/5">
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold text-muted uppercase tracking-[3px] block mb-4">SELLING METHODS</span>
          <h2 className="text-3xl sm:text-5xl font-black font-h uppercase tracking-wide text-white mb-4">Two Ways to Cash Out <span className="text-orange-500">Your Account</span></h2>
          <p className="text-muted max-w-[600px] mx-auto text-sm">
            Select the best method for your timeline. Each card explains the full step-by-step flow — with inline F2F, KYC, and payout guides.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* INSTANT SELL CARD */}
          <div className="relative group">
            <div className="absolute inset-0 bg-green-500/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            <div className="p-8 rounded-3xl border border-green-500/30 bg-[#080a0e] shadow-[0_0_30px_rgba(34,197,94,0.03)] relative overflow-hidden z-10 transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_0_50px_rgba(34,197,94,0.1)]">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-[10px] font-bold tracking-widest uppercase mb-6 border border-green-500/20">
                <Zap size={10} /> INSTANT PAYOUT
              </span>
              <h3 className="text-3xl font-black font-h text-white mb-4">Instant Sell</h3>
              <p className="text-xs text-muted leading-relaxed mb-8">Need immediate cash? Sell directly to us at wholesale rates. We skip listing delays and buyer wait times — providing a direct buyout offer and payment within hours.</p>
              
              <strong className="text-[10px] font-bold text-white uppercase tracking-widest block mb-6">INSTANT SELL STEPS:</strong>
              
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[15px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/5 before:to-transparent">
                <div className="relative flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#111520] border-2 border-green-500 flex items-center justify-center text-green-500 font-bold text-xs shrink-0 z-10">1</div>
                  <div>
                    <strong className="text-sm font-h font-bold text-white mb-2 block">Phase 1: Contact, Audit & Deal Options</strong>
                    <p className="text-xs text-muted leading-relaxed mb-4">Submit your account details along with a screen-recorded inventory video and description. Our analysts securely audit your credentials to provide a direct wholesale Instant Buyout and Hold & Sell quotes. We then discuss your deal preference: Secure Online Transfer (immediate credential transfer and instant payout once logins are secured) or premium Face-to-Face Meetup (strictly reserved for accounts valued above ₹80,000 with a security deposit).</p>
                    <Link href="/f2f-sell-guide" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-orange-500/10 text-orange-500 border border-orange-500/20 text-[10px] font-bold tracking-widest uppercase cursor-pointer hover:bg-orange-500/20 transition-colors no-underline">
                      <MapPin size={10} /> F2F SELL GUIDE
                    </Link>
                  </div>
                </div>
                <div className="relative flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#111520] border-2 border-green-500 flex items-center justify-center text-green-500 font-bold text-xs shrink-0 z-10">2</div>
                  <div>
                    <strong className="text-sm font-h font-bold text-white mb-2 block">Phase 2: KYC & Full Secure Binding</strong>
                    <p className="text-xs text-muted leading-relaxed mb-4">Upon deal agreement, we collect official government-issued ID proof (Aadhaar Card or Driving License). These documents are stored securely in our encrypted offline tracing database to protect against login locks or future recovery attempts. Once ID verification is cleared, we perform comprehensive binding changes (recovery phone, email, and security questions). Note: Single active login methods receive immediate payout once secured, whereas multiple login methods undergo a 7-15 days cooldown quarantine phase for absolute unlinking security.</p>
                    <Link href="/kyc-guide" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-green-500/10 text-green-500 border border-green-500/20 text-[10px] font-bold tracking-widest uppercase cursor-pointer hover:bg-green-500/20 transition-colors no-underline">
                      <FileText size={10} /> KYC DETAILS
                    </Link>
                  </div>
                </div>
                <div className="relative flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#111520] border-2 border-green-500 flex items-center justify-center text-green-500 font-bold text-xs shrink-0 z-10">3</div>
                  <div>
                    <strong className="text-sm font-h font-bold text-white mb-2 block">Phase 3: Irreversible Finality & Payout</strong>
                    <p className="text-xs text-muted leading-relaxed mb-4">Once credentials are handed over and locked, the transaction is 100% final and non-reversible. The account cannot be returned or repurchased at a later price, and is immediately prepared for market listing. Payout is released via liquid Cash, Instant UPI, or Bank Transfer ONLY after all login pathways are fully secured (within 1-2 hours for single logins, or after the 7-15 days quarantine cooldown for multiple login methods).</p>
                    <Link href="/payout-guide" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 text-[10px] font-bold tracking-widest uppercase cursor-pointer hover:bg-yellow-500/20 transition-colors no-underline">
                      <Coins size={10} /> PAYOUT METHODS
                    </Link>
                  </div>
                </div>
              </div>

              <a href="https://wa.me/+919025391516?text=Hi%20Maddy!%20I%20want%20to%20sell%20my%20BGMI%20account%20instantly" target="_blank" rel="noreferrer" className="w-full flex items-center justify-center gap-2 py-4 mt-10 rounded-xl font-bold tracking-widest text-xs uppercase" style={{ background: "linear-gradient(135deg, #22c55e, #16a34a)", color: "#fff", border: "none" }}>
                <Zap size={14} /> SELL INSTANTLY NOW <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* HOLD & SELL CARD */}
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            <div className="p-8 rounded-3xl border border-blue-500/30 bg-[#080a0e] shadow-[0_0_30px_rgba(59,130,246,0.03)] relative overflow-hidden z-10 transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_0_50px_rgba(59,130,246,0.1)]">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-[10px] font-bold tracking-widest uppercase mb-6 border border-blue-500/20">
              <ShieldCheck size={10} /> MAXIMUM PAYOUT
            </span>
            <h3 className="text-3xl font-black font-h text-white mb-4">Hold & Sell</h3>
            <p className="text-xs text-muted leading-relaxed mb-8">Get 100% maximum market value for your account. We list it, record an HD video, write the description, market it across our VIP communities, and handle secure double-login transfer. Average sale time: 3-7 days.</p>
            
            <strong className="text-[10px] font-bold text-white uppercase tracking-widest block mb-6">SECURE HOLD & SELL STEPS:</strong>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[15px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/5 before:to-transparent">
              <div className="relative flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#111520] border-2 border-blue-500 flex items-center justify-center text-blue-500 font-bold text-xs shrink-0 z-10">1</div>
                <div>
                  <strong className="text-sm font-h font-bold text-white mb-2 block">Phase 1: Contact, Audit & Listing Setup</strong>
                  <p className="text-xs text-muted leading-relaxed mb-4">Reach out to us with a screen-recorded inventory video and description. Our expert team audits your account to provide both a direct wholesale Instant Buyout offer and a premium Hold & Sell valuation. We discuss whether you prefer online listings or an in-person midpoint meetup (for accounts valued above ₹80,000 requiring a deposit). We then create a professional preview video and broadcast your listing across our high-traffic VIP Telegram and WhatsApp channels to secure maximum market value.</p>
                  <Link href="/f2f-sell-guide" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-orange-500/10 text-orange-500 border border-orange-500/20 text-[10px] font-bold tracking-widest uppercase cursor-pointer hover:bg-orange-500/20 transition-colors no-underline">
                    <MapPin size={10} /> F2F SELL GUIDE
                  </Link>
                </div>
              </div>
              <div className="relative flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#111520] border-2 border-blue-500 flex items-center justify-center text-blue-500 font-bold text-xs shrink-0 z-10">2</div>
                <div>
                  <strong className="text-sm font-h font-bold text-white mb-2 block">Phase 2: KYC, Buyer Secured & Binding</strong>
                  <p className="text-xs text-muted leading-relaxed mb-4">Listings typically sell within 3-7 days (price adjusted if unsold). Once a buyer is secured, we collect your government-issued ID (Aadhaar or Driving License) for our encrypted database to trace future freezes. We then proceed with full secure binding transfer (changing recovery phone, email, etc.). Single login bindings trigger payouts immediately upon buyer delivery confirmation, while multiple login methods require a 7-15 days unlinking cooldown quarantine to ensure permanent detachment.</p>
                  <Link href="/kyc-guide" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-green-500/10 text-green-500 border border-green-500/20 text-[10px] font-bold tracking-widest uppercase cursor-pointer hover:bg-green-500/20 transition-colors no-underline">
                    <FileText size={10} /> KYC DETAILS
                  </Link>
                </div>
              </div>
              <div className="relative flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#111520] border-2 border-blue-500 flex items-center justify-center text-blue-500 font-bold text-xs shrink-0 z-10">3</div>
                <div>
                  <strong className="text-sm font-h font-bold text-white mb-2 block">Phase 3: Irreversible Finality & Payout</strong>
                  <p className="text-xs text-muted leading-relaxed mb-4">Once credentials are handed over to the buyer and locked, the sale is 100% final and non-refundable. The account is permanently transferred and cannot be recalled or adjusted. Payment is securely released to you via UPI, Bank Transfer, or Liquid Cash (for F2F deals) after all buyer verification checks are complete, adhering to login security timelines (instant for single logins, 7-15 days for multiple logins).</p>
                  <Link href="/payout-guide" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 text-[10px] font-bold tracking-widest uppercase cursor-pointer hover:bg-yellow-500/20 transition-colors no-underline">
                    <Coins size={10} /> PAYOUT METHODS
                  </Link>
                </div>
              </div>
            </div>

            <a href="https://wa.me/+919025391516?text=Hi%20Maddy!%20I%20want%20to%20list%20my%20BGMI%20account%20on%20Hold%20and%20Sell" target="_blank" rel="noreferrer" className="w-full flex items-center justify-center gap-2 py-4 mt-10 rounded-xl font-bold tracking-widest text-xs uppercase" style={{ background: "linear-gradient(135deg, #fbbf24, #f59e0b)", color: "#000", border: "none" }}>
              <Clock size={14} /> START HOLD & SELL <ArrowRight size={14} />
            </a>
          </div>
          </div>

        </div>
      </section>

      {/* FACE-TO-FACE, KYC & PAYOUT SECTIONS */}
      <section className="py-10 px-[5%] max-w-[1000px] mx-auto flex flex-col gap-8 pb-20">
        
        {/* Face-to-Face Rules */}
        <div ref={f2fRef} className="rounded-2xl border border-orange-500/20 bg-[#080a0e] overflow-hidden">
          <button onClick={() => setF2fExpanded(!f2fExpanded)} className="w-full flex justify-between items-center p-6 bg-transparent border-none text-left cursor-pointer hover:bg-white/5 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0 border border-orange-500/20"><MapPin size={20} /></div>
              <div>
                <h3 className="text-base md:text-lg font-bold font-h text-white uppercase tracking-wider m-0 mb-1">Face-to-Face Selling Rules</h3>
                <span className="text-muted text-xs block">For accounts above ₹80K — tap to expand full F2F seller rules</span>
              </div>
            </div>
            {f2fExpanded ? <ChevronUp size={20} className="text-orange-500 shrink-0 ml-4" /> : <ChevronDown size={20} className="text-muted shrink-0 ml-4" />}
          </button>
          
          {f2fExpanded && (
            <div className="px-6 pb-6 border-t border-white/5 pt-6 animate-fade-in">
              <p className="text-muted text-xs md:text-sm leading-relaxed mb-8">
                Face-to-Face (F2F) selling is available for <strong className="text-orange-500">accounts valued above ₹80,000</strong>. The seller and Maddy's agent meet at a safe, public midpoint location for an in-person handover.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="p-5 rounded-xl bg-[#0a0c12] border border-white/5">
                  <strong className="text-white text-xs block mb-2 flex items-center gap-2"><MapPin size={14} className="text-orange-500" /> Mutually Agreed Midpoint</strong>
                  <p className="text-xs text-muted leading-relaxed m-0">A safe public location equidistant between seller city and our agent's base (e.g., Vellore for Chennai-Bangalore).</p>
                </div>
                <div className="p-5 rounded-xl bg-[#0a0c12] border border-white/5">
                  <strong className="text-white text-xs block mb-2 flex items-center gap-2"><MapPin size={14} className="text-orange-500" /> Seller Covers Agent Expenses</strong>
                  <p className="text-xs text-muted leading-relaxed m-0">Seller pays all travel, food, and stay costs for the Maddy Store deal agent attending the meetup.</p>
                </div>
                <div className="p-5 rounded-xl bg-[#0a0c12] border border-white/5">
                  <strong className="text-white text-xs block mb-2 flex items-center gap-2"><Check size={14} className="text-green-500" /> Public Locations Only</strong>
                  <p className="text-xs text-muted leading-relaxed m-0">Premium malls, cafes, and restaurants with CCTV. No private, dark, or isolated locations.</p>
                </div>
                <div className="p-5 rounded-xl bg-[#0a0c12] border border-white/5">
                  <strong className="text-white text-xs block mb-2 flex items-center gap-2"><Coins size={14} className="text-yellow-500" /> Cash Payout at Meetup</strong>
                  <p className="text-xs text-muted leading-relaxed m-0">For ₹80K+ accounts, cash payout can be arranged at the meetup location after credential verification.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/5 mb-6 flex items-start gap-3">
                <AlertTriangle size={16} className="text-red-500 shrink-0 mt-0.5" />
                <p className="text-xs text-red-200/80 leading-relaxed m-0 italic">
                  *All F2F expenses for the agent (travel, stay, food) are borne entirely by the seller. Account credentials are only handed over after full payment is verified.*
                </p>
              </div>
              <div className="flex justify-end">
                <Link href="/f2f-sell-guide" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold tracking-widest text-[10px] uppercase transition-colors" style={{ background: "linear-gradient(135deg, #f97316, #ea580c)", color: "#fff", border: "none" }}>
                  FULL F2F SELL GUIDE <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* KYC Rules */}
        <div ref={kycRef} className="rounded-2xl border border-green-500/20 bg-[#080a0e] overflow-hidden">
          <button onClick={() => setKycExpanded(!kycExpanded)} className="w-full flex justify-between items-center p-6 bg-transparent border-none text-left cursor-pointer hover:bg-white/5 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center shrink-0 border border-green-500/20"><FileText size={20} /></div>
              <div>
                <h3 className="text-base md:text-lg font-bold font-h text-white uppercase tracking-wider m-0 mb-1">KYC Identity Verification System</h3>
                <span className="text-muted text-xs block">Government ID required before payout — tap to expand</span>
              </div>
            </div>
            {kycExpanded ? <ChevronUp size={20} className="text-green-500 shrink-0 ml-4" /> : <ChevronDown size={20} className="text-muted shrink-0 ml-4" />}
          </button>
          
          {kycExpanded && (
            <div className="px-6 pb-6 border-t border-white/5 pt-6 animate-fade-in">
              <p className="text-muted text-xs md:text-sm leading-relaxed mb-8">
                To prevent disputes and protect both parties, we securely collect the seller's government-issued ID before releasing the final payment. All documents are kept 100% confidential.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="p-5 rounded-xl bg-[#0a0c12] border border-white/5">
                  <strong className="text-white text-xs block mb-2 flex items-center gap-2"><Check size={14} className="text-green-500" /> Aadhaar Card</strong>
                  <p className="text-xs text-muted m-0">Must contain name and address.</p>
                </div>
                <div className="p-5 rounded-xl bg-[#0a0c12] border border-white/5">
                  <strong className="text-white text-xs block mb-2 flex items-center gap-2"><Check size={14} className="text-green-500" /> Driving License</strong>
                  <p className="text-xs text-muted m-0">Must contain name and address.</p>
                </div>
                <div className="p-5 rounded-xl bg-[#0a0c12] border border-white/5">
                  <strong className="text-white text-xs block mb-2 flex items-center gap-2"><X size={14} className="text-red-500" /> PAN Card alone</strong>
                  <p className="text-xs text-muted m-0">Not accepted as it lacks address.</p>
                </div>
                <div className="p-5 rounded-xl bg-[#0a0c12] border border-white/5">
                  <strong className="text-white text-xs block mb-2 flex items-center gap-2"><X size={14} className="text-red-500" /> Voter ID (Digital)</strong>
                  <p className="text-xs text-muted m-0">Only physical ID accepted.</p>
                </div>
              </div>

              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-xs text-muted">
                  <Check size={14} className="text-green-500 shrink-0 mt-0.5" />
                  <span>KYC is required from all sellers — no exceptions, regardless of account value.</span>
                </li>
                <li className="flex items-start gap-3 text-xs text-muted">
                  <Check size={14} className="text-green-500 shrink-0 mt-0.5" />
                  <span>All ID documents are stored on fully encrypted, offline servers.</span>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Payout Methods */}
        <div ref={payoutRef} className="rounded-2xl border border-yellow-500/20 bg-[#080a0e] overflow-hidden">
          <button onClick={() => setPayoutExpanded(!payoutExpanded)} className="w-full flex justify-between items-center p-6 bg-transparent border-none text-left cursor-pointer hover:bg-white/5 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-yellow-500/10 text-yellow-500 flex items-center justify-center shrink-0 border border-yellow-500/20"><Coins size={20} /></div>
              <div>
                <h3 className="text-base md:text-lg font-bold font-h text-white uppercase tracking-wider m-0 mb-1">Seller Payout Methods</h3>
                <span className="text-muted text-xs block">UPI, Bank, USDT, BTC, Cash — tap to expand all details</span>
              </div>
            </div>
            {payoutExpanded ? <ChevronUp size={20} className="text-yellow-500 shrink-0 ml-4" /> : <ChevronDown size={20} className="text-muted shrink-0 ml-4" />}
          </button>

          {payoutExpanded && (
            <div className="px-6 pb-6 border-t border-white/5 pt-6 animate-fade-in">
              <p className="text-muted text-xs md:text-sm leading-relaxed mb-8">
                We support multiple payout channels to suit every seller. Payouts are released <strong className="text-white">within 1-2 hours</strong> of buyer confirmation for Instant Sell, or upon buyer delivery confirmation for Hold & Sell.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="p-5 rounded-xl bg-[#0a0c12] border border-white/5">
                  <Landmark size={20} className="text-muted mb-3" />
                  <strong className="text-white text-xs block mb-2">UPI Transfer</strong>
                  <p className="text-xs text-muted m-0">Instant to any UPI ID (GPay, PhonePe, Paytm).</p>
                </div>
                <div className="p-5 rounded-xl bg-[#0a0c12] border border-white/5">
                  <Landmark size={20} className="text-muted mb-3" />
                  <strong className="text-white text-xs block mb-2">Bank Transfer</strong>
                  <p className="text-xs text-muted m-0">NEFT / IMPS directly to your account.</p>
                </div>
                <div className="p-5 rounded-xl bg-[#0a0c12] border border-white/5">
                  <Bitcoin size={20} className="text-muted mb-3" />
                  <strong className="text-white text-xs block mb-2">USDT / BTC</strong>
                  <p className="text-xs text-muted m-0">Crypto payout for international sellers.</p>
                </div>
                <div className="p-5 rounded-xl bg-[#0a0c12] border border-white/5">
                  <Banknote size={20} className="text-muted mb-3" />
                  <strong className="text-white text-xs block mb-2">Cash (F2F Only)</strong>
                  <p className="text-xs text-muted m-0">Physical cash at meetup location. ₹80K+ accounts only.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-yellow-500/20 bg-yellow-500/5 flex items-start gap-3">
                <AlertTriangle size={16} className="text-yellow-500 shrink-0 mt-0.5" />
                <p className="text-xs text-yellow-200/80 leading-relaxed m-0 italic">
                  *All payouts are 100% guaranteed. We hold buyer funds safely and only release them after ownership transfer is verified.*
                </p>
              </div>
            </div>
          )}
        </div>

      </section>

      {/* VISUAL HANDOVER TIMELINE */}
      <section className="py-20 px-[5%] max-w-[800px] mx-auto border-t border-white/5">
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest block mb-4">INTERACTIVE ROADMAP</span>
          <h2 className="text-3xl font-black font-h text-white mb-4">Visual Handover & <span className="text-orange-500">Escrow Timeline</span></h2>
          <p className="text-muted text-sm">Track the exact progress pathway of your selected selling mode.</p>
          
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={() => setTimelinePathway("hold")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all border ${timelinePathway === "hold" ? "bg-blue-500/10 text-blue-500 border-blue-500/30" : "bg-transparent text-muted border-white/10 hover:border-white/20 hover:text-white"}`}
            >
              <Clock size={12} /> Hold & Sell Pathway
            </button>
            <button 
              onClick={() => setTimelinePathway("instant")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all border ${timelinePathway === "instant" ? "bg-green-500/10 text-green-500 border-green-500/30" : "bg-transparent text-muted border-white/10 hover:border-white/20 hover:text-white"}`}
            >
              <Zap size={12} /> Instant Sell Pathway
            </button>
          </div>
        </div>

        <div className={`relative pl-8 border-l-2 border-dashed ml-4 ${timelinePathway === "instant" ? "border-green-500/30" : "border-blue-500/30"}`}>
          <div className={`absolute -left-[1px] top-0 bottom-0 w-[2px] bg-gradient-to-b ${timelinePathway === "instant" ? "from-green-500" : "from-blue-500"} to-transparent`} />
          
          <div className="relative mb-12">
            <div className={`absolute -left-[41px] top-2 w-4 h-4 rounded-full border-[3px] border-[#080a0f] ${timelinePathway === "instant" ? "bg-green-500" : "bg-blue-500"} flex items-center justify-center p-3`}>
              <MessageCircle size={12} className="text-[#080a0f]" />
            </div>
            <div className="p-6 rounded-2xl border border-white/5 bg-[#0a0c10]">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-sm font-bold font-h text-white uppercase tracking-wider m-0">
                  {timelinePathway === "instant" ? "Phase 1: Contact, Audit & Deal Options" : "Phase 1: Contact, Audit & Listing Setup"}
                </h4>
                <span className={`px-2 py-1 bg-white/5 ${timelinePathway === "instant" ? "text-green-500" : "text-blue-500"} text-[10px] rounded uppercase font-bold tracking-widest`}>STEP 01</span>
              </div>
              <p className="text-xs text-muted leading-relaxed m-0">
                {timelinePathway === "instant" 
                  ? "Submit your account details along with a screen-recorded inventory video and description. Our analysts securely audit your credentials to provide direct wholesale Instant Buyout and Hold & Sell quotes. We then discuss your deal preference: secure Online Transfer (immediate credential transfer and instant payout once logins are secured) or premium Face-to-Face Meetup (strictly reserved for accounts valued above ₹80,000 with a security deposit)."
                  : "Reach out to us with a screen-recorded inventory video and description. Our expert team audits your account to provide both a direct wholesale Instant Buyout offer and a premium Hold & Sell valuation. We discuss whether you prefer online listings or an in-person midpoint meetup (for accounts valued above ₹80,000 requiring a deposit). We then create a professional preview video and broadcast your listing across our high-traffic VIP Telegram and WhatsApp channels to secure maximum market value."}
              </p>
            </div>
          </div>

          <div className="relative mb-12">
            <div className={`absolute -left-[41px] top-2 w-4 h-4 rounded-full border-[3px] border-[#080a0f] ${timelinePathway === "instant" ? "bg-green-500" : "bg-blue-500"} flex items-center justify-center p-3`}>
              <FileText size={12} className="text-[#080a0f]" />
            </div>
            <div className="p-6 rounded-2xl border border-white/5 bg-[#0a0c10]">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-sm font-bold font-h text-white uppercase tracking-wider m-0">
                  {timelinePathway === "instant" ? "Phase 2: KYC & Full Secure Binding" : "Phase 2: KYC, Buyer Secured & Binding"}
                </h4>
                <span className={`px-2 py-1 bg-white/5 ${timelinePathway === "instant" ? "text-green-500" : "text-blue-500"} text-[10px] rounded uppercase font-bold tracking-widest`}>STEP 02</span>
              </div>
              <p className="text-xs text-muted leading-relaxed m-0">
                {timelinePathway === "instant" 
                  ? "Upon deal agreement, we collect official government-issued ID proof (Aadhaar Card or Driving License). These documents are stored securely in our encrypted offline tracing database to protect against login locks or future recovery attempts. Once ID verification is cleared, we perform comprehensive binding changes (recovery phone, email, and security questions). Note: Single active login methods receive immediate payout once secured, whereas multiple login bindings undergo a 7-15 days cooldown quarantine phase for absolute unlinking security."
                  : "Listings typically sell within 3-7 days (price adjusted if unsold). Once a buyer is secured, we collect your government-issued ID (Aadhaar or Driving License) for our encrypted database to trace future freezes. We then proceed with full secure binding transfer (changing recovery phone, email, etc.). Single login bindings trigger payouts immediately upon buyer delivery confirmation, while multiple login methods require a 7-15 days unlinking cooldown quarantine to ensure permanent detachment."}
              </p>
            </div>
          </div>

          <div className="relative">
            <div className={`absolute -left-[41px] top-2 w-4 h-4 rounded-full border-[3px] border-[#080a0f] ${timelinePathway === "instant" ? "bg-green-500" : "bg-blue-500"} flex items-center justify-center p-3`}>
              <ShieldCheck size={12} className="text-[#080a0f]" />
            </div>
            <div className="p-6 rounded-2xl border border-white/5 bg-[#0a0c10]">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-sm font-bold font-h text-white uppercase tracking-wider m-0">Phase 3: Irreversible Finality & Payout</h4>
                <span className={`px-2 py-1 bg-white/5 ${timelinePathway === "instant" ? "text-green-500" : "text-blue-500"} text-[10px] rounded uppercase font-bold tracking-widest`}>STEP 03</span>
              </div>
              <p className="text-xs text-muted leading-relaxed m-0">
                {timelinePathway === "instant" 
                  ? "Once credentials are handed over and locked, the transaction is 100% final and non-reversible. The account cannot be returned or repurchased at a later price, and is immediately prepared for market listing. Payout is released via liquid Cash, Instant UPI, or Bank Transfer ONLY after all login pathways are fully secured (within 1-2 hours for single logins, or after the 7-15 days quarantine cooldown for multiple login methods)."
                  : "Once credentials are handed over to the buyer and locked, the sale is 100% final and non-refundable. The account is permanently transferred and cannot be recalled or adjusted. Payment is securely released to you via UPI, Bank Transfer, or Liquid Cash (for F2F deals) after all buyer verification checks are complete, adhering to login security timelines (instant for single logins, 7-15 days for multiple logins)."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY TRUST MADDY STORE */}
      <section className="py-20 px-[5%] max-w-[1200px] mx-auto border-t border-white/5 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Award size={20} className="text-gold" />
          <h2 className="text-3xl font-black font-h text-white">Why Trust <span className="text-gold">Maddy Store?</span></h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 mb-10">
          <div className="p-8 rounded-2xl bg-[#0a0c12] border border-white/5 flex flex-col items-start text-left">
            <div className="w-8 h-8 rounded-full border border-green-500/30 text-green-500 flex items-center justify-center mb-4"><Check size={14} /></div>
            <strong className="text-white text-sm block mb-2 uppercase font-bold">100% Trusted Deals</strong>
            <p className="text-xs text-muted m-0 leading-relaxed">Over 5000+ satisfied customers globally.</p>
          </div>
          <div className="p-8 rounded-2xl bg-[#0a0c12] border border-white/5 flex flex-col items-start text-left">
            <div className="w-8 h-8 rounded-full border border-green-500/30 text-green-500 flex items-center justify-center mb-4"><Check size={14} /></div>
            <strong className="text-white text-sm block mb-2 uppercase font-bold">Safe Handovers</strong>
            <p className="text-xs text-muted m-0 leading-relaxed">Proprietary security protocols ensuring complete credential detachment.</p>
          </div>
          <div className="p-8 rounded-2xl bg-[#0a0c12] border border-white/5 flex flex-col items-start text-left">
            <div className="w-8 h-8 rounded-full border border-green-500/30 text-green-500 flex items-center justify-center mb-4"><Check size={14} /></div>
            <strong className="text-white text-sm block mb-2 uppercase font-bold">24/7 Support</strong>
            <p className="text-xs text-muted m-0 leading-relaxed">Dedicated specialist team for seller queries and after-sale support.</p>
          </div>
          <div className="p-8 rounded-2xl bg-[#0a0c12] border border-white/5 flex flex-col items-start text-left">
            <div className="w-8 h-8 rounded-full border border-green-500/30 text-green-500 flex items-center justify-center mb-4"><Check size={14} /></div>
            <strong className="text-white text-sm block mb-2 uppercase font-bold">KYC Assured Security</strong>
            <p className="text-xs text-muted m-0 leading-relaxed">KYC audits preventing fraudulent retrievals or listing disputes.</p>
          </div>
        </div>

        <a href="https://wa.me/+919025391516" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded text-xs font-bold tracking-widest uppercase transition-colors bg-green-500 text-[#000] hover:bg-green-400">
          <MessageCircle size={14} /> WHATSAPP SUPPORT
        </a>
      </section>

      {/* HOW ACCOUNT HANDOVER & UNLINKS WORK */}
      <section className="py-20 px-[5%] max-w-[1000px] mx-auto border-t border-white/5">
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest block mb-4">TRUST & SECURITY</span>
          <h2 className="text-3xl font-black font-h text-white mb-4">How Account Handover & <span className="text-orange-500">Unlinks Work</span></h2>
          <p className="text-muted text-sm">Selling with Maddy Store is clear, transparent, and secure. Understand verification, unlinking, and payout guarantees.</p>
        </div>

        <div className="p-8 rounded-3xl border border-white/10 bg-[#0a0c10]">
          {/* Header Info Box */}
          <div className="p-6 rounded-2xl bg-[#0f1412] border border-green-500/10 mb-8 flex gap-4">
            <ShieldAlert size={24} className="text-green-500 shrink-0" />
            <div>
              <strong className="text-white text-sm block mb-2">Pre-Listing Integrity & Payout Assurance Protocol</strong>
              <p className="text-xs text-muted leading-relaxed m-0">As a premium seller, you receive full legal protection and guaranteed direct payments. If your account has active dual-social links, we initiate an official <strong className="text-white">7-day unlink cooldown</strong> for the secondary login. During this period, you must not log into that secondary network. Once security bindings are complete and the primary login is handed over, your payout is instantly released.</p>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-white/10 pb-4">
            <button 
              onClick={() => setUnlinksTab(0)}
              className={`px-6 py-3 rounded-xl text-xs font-bold tracking-widest uppercase transition-all ${unlinksTab === 0 ? "bg-green-500/10 text-green-500 border border-green-500/30" : "bg-transparent text-muted border border-transparent hover:text-white"}`}
            >
              1. Pre-Listing Checklist
            </button>
            <button 
              onClick={() => setUnlinksTab(1)}
              className={`px-6 py-3 rounded-xl text-xs font-bold tracking-widest uppercase transition-all ${unlinksTab === 1 ? "bg-green-500/10 text-green-500 border border-green-500/30" : "bg-transparent text-muted border border-transparent hover:text-white"}`}
            >
              2. Unlinking Rules
            </button>
            <button 
              onClick={() => setUnlinksTab(2)}
              className={`px-6 py-3 rounded-xl text-xs font-bold tracking-widest uppercase transition-all ${unlinksTab === 2 ? "bg-green-500/10 text-green-500 border border-green-500/30" : "bg-transparent text-muted border border-transparent hover:text-white"}`}
            >
              3. Payout & KYC Guarantee
            </button>
          </div>

          {/* Tab Content */}
          <div className="min-h-[200px]">
            {unlinksTab === 0 && (
              <div className="animate-fade-in grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-[#111520] border border-white/5">
                  <strong className="text-white text-sm block mb-3 uppercase tracking-wider">Provide All Credentials</strong>
                  <p className="text-xs text-muted leading-relaxed m-0">You must hand over the passwords to ALL linked social networks (Facebook, Twitter, Play Games) even if you plan to unlink one.</p>
                </div>
                <div className="p-6 rounded-2xl bg-[#111520] border border-white/5">
                  <strong className="text-white text-sm block mb-3 uppercase tracking-wider">Surrender 2FA Controls</strong>
                  <p className="text-xs text-muted leading-relaxed m-0">You must temporarily disable 2-Factor Authentication or be online to provide the OTPs so our agent can bind their recovery numbers.</p>
                </div>
                <div className="p-6 rounded-2xl bg-[#111520] border border-white/5">
                  <strong className="text-white text-sm block mb-3 uppercase tracking-wider">Do Not Login Post-Handover</strong>
                  <p className="text-xs text-muted leading-relaxed m-0">Logging into the game or the linked social accounts after handing them over will flag the security system and cancel the deal instantly.</p>
                </div>
              </div>
            )}
            
            {unlinksTab === 1 && (
              <div className="animate-fade-in">
                <div className="p-6 rounded-2xl bg-orange-500/10 border border-orange-500/20 mb-6 flex gap-4">
                  <AlertTriangle size={24} className="text-orange-500 shrink-0" />
                  <div>
                    <strong className="text-orange-400 text-sm block mb-2 uppercase tracking-wider">The 7-Day Unlink Quarantine</strong>
                    <p className="text-xs text-orange-200/80 leading-relaxed m-0">BGMI requires a 7-day countdown to detach a secondary social network. During these 7 days, the seller cannot receive their payout because they have the ability to log into the primary network and click "Cancel Unlink". Payouts are held in escrow until Day 8 when the unlink is permanent.</p>
                  </div>
                </div>
                <p className="text-xs text-muted">Note: If your account only has ONE social network linked (Single Login), there is no 7-day wait. Payout is processed on Day 1.</p>
              </div>
            )}

            {unlinksTab === 2 && (
              <div className="animate-fade-in">
                <strong className="text-white text-sm block mb-4">Seller KYC Verification & Payout Rules</strong>
                <p className="text-xs text-muted mb-6">We prioritize seller trust just as much as buyer security. Review how we protect you and execute secure payouts:</p>
                
                <ul className="space-y-4">
                  <li className="text-xs text-muted leading-relaxed"><strong className="text-white">Secure KYC Encrypted Storage:</strong> Your government ID is saved on fully secure, encrypted servers and only accessed in the event of an account dispute.</li>
                  <li className="text-xs text-muted leading-relaxed"><strong className="text-white">100% Guarded Payments:</strong> We hold buyer funds in secure escrow, eliminating any risk of chargebacks or fraudulent reversals once your account is delivered.</li>
                  <li className="text-xs text-muted leading-relaxed"><strong className="text-white">Direct Payout Release:</strong> 100% of your payout is transferred directly via UPI, Bank Transfer, USDT, BTC, or Cash within 1-2 hours of credential validation.</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 px-[5%] max-w-[800px] mx-auto border-t border-white/5 pb-32">
        <div className="text-center mb-12">
          <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest block mb-4">FAQ</span>
          <h2 className="text-3xl font-black font-h text-white mb-4">Common Selling Questions</h2>
          <p className="text-muted text-sm">Clarifying our valuation, evaluation, and instant payout procedures.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`rounded-xl border overflow-hidden transition-all duration-300 ${openFaq === index ? "border-orange-500/30 bg-[#080a0e]" : "border-white/5 bg-[#111520] hover:border-white/10"}`}
            >
              <button 
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full flex justify-between items-center p-5 bg-transparent border-none text-left cursor-pointer"
              >
                <strong className={`text-sm font-bold tracking-wide ${openFaq === index ? "text-orange-400" : "text-white"}`}>{faq.q}</strong>
                {openFaq === index ? <ChevronUp size={16} className="text-orange-500 shrink-0 ml-4" /> : <ChevronDown size={16} className="text-muted shrink-0 ml-4" />}
              </button>
              
              {openFaq === index && (
                <div className="px-5 pb-5 pt-2 animate-fade-in">
                  <p className="text-xs text-muted leading-relaxed m-0">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
