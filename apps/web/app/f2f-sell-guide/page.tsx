"use client";

import { useState } from "react";
import { 
  Navigation, Calendar, MessageCircle, Link as LinkIcon, MapPin, 
  Users, ShieldCheck, ChevronDown, AlertTriangle, Shield, CheckCircle2 
} from "lucide-react";

export default function F2FSellGuide() {
  const [valuation, setValuation] = useState<number>(120000);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <div style={{ background: "var(--color-bg)", color: "#fff", minHeight: "100vh" }}>
      
      {/* HERO SECTION */}
      <section style={{
        position: "relative", width: "100%",
        paddingTop: "120px", paddingBottom: "80px",
        display: "flex", alignItems: "center", justifyContent: "center",
        flexDirection: "column", textAlign: "center", paddingLeft: "5%", paddingRight: "5%"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0500] via-[#080a0f] to-[#080a0f] z-0" />

        <div className="relative z-10 px-[5%] max-w-[800px] mx-auto">
          <div className="badge mb-6 mx-auto flex items-center justify-center w-fit border border-orange-500/30 bg-orange-500/10 text-orange-500">
            <MapPin size={12} className="mr-2" /> OFFICIAL F2F SELLER PROTOCOL
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-[70px] font-black font-h leading-[1.1] mb-6 uppercase">
            Face-To-Face<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Sell & Handover Guide</span>
          </h1>
          <p className="text-muted text-sm sm:text-base max-w-[600px] mx-auto mb-10 leading-relaxed">
            Ready to sell your premium account in-person in South India? Learn how our safe physical meetup protocol works with Chennai as our base, calculate booking advances, and trace dynamic transit midpoints with equal travel distance guarantees instantly.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <button className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold tracking-widest text-xs uppercase transition-colors" style={{ background: "linear-gradient(135deg, #f97316, #ea580c)", color: "#fff", border: "none" }}>
              <Navigation size={14} /> Midpoint Portal
            </button>
            <button className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold tracking-widest text-xs uppercase bg-white/5 text-white hover:bg-white/10 border border-white/10 transition-colors">
              <Calendar size={14} /> Book Meetup Slot
            </button>
          </div>
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section className="py-20 px-[5%] max-w-[1200px] mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest block mb-4">SECURE FLOW</span>
          <h2 className="text-3xl font-black font-h text-white mb-4">Timeline of a <span className="text-yellow-500">Face-to-Face Sell Deal</span></h2>
          <p className="text-muted text-sm max-w-[500px] mx-auto">From initial WhatsApp/Telegram appraisal to in-person meeting and cash release. Follow each stage.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* Card 1 */}
          <div className="p-8 rounded-2xl bg-[#0a0c10] border border-white/5 relative overflow-hidden flex flex-col">
            <span className="absolute top-4 right-4 text-[60px] font-black font-h text-white/[0.03] leading-none">01</span>
            <div className="w-10 h-10 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 flex items-center justify-center mb-6"><MessageCircle size={18} /></div>
            <strong className="text-white text-sm block mb-4">Contact & Valuation</strong>
            <p className="text-xs text-muted leading-relaxed m-0 relative z-10">Send your full account details and recording via WhatsApp/Telegram. Our analysts will audit your bindings and provide a wholesale buyout price evaluation.</p>
          </div>
          {/* Card 2 */}
          <div className="p-8 rounded-2xl bg-[#0a0c10] border border-white/5 relative overflow-hidden flex flex-col">
            <span className="absolute top-4 right-4 text-[60px] font-black font-h text-white/[0.03] leading-none">02</span>
            <div className="w-10 h-10 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 flex items-center justify-center mb-6"><LinkIcon size={18} /></div>
            <strong className="text-white text-sm block mb-4">10% Secure Booking</strong>
            <p className="text-xs text-muted leading-relaxed m-0 relative z-10">Once the price is approved, pay the mandatory 10% booking advance. This locks the deal, ensures mutual commitment, and schedules our agent's travel slots.</p>
          </div>
          {/* Card 3 */}
          <div className="p-8 rounded-2xl bg-[#0a0c10] border border-white/5 relative overflow-hidden flex flex-col">
            <span className="absolute top-4 right-4 text-[60px] font-black font-h text-white/[0.03] leading-none">03</span>
            <div className="w-10 h-10 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 flex items-center justify-center mb-6"><MapPin size={18} /></div>
            <strong className="text-white text-sm block mb-4">Midpoint Coordination</strong>
            <p className="text-xs text-muted leading-relaxed m-0 relative z-10">Enter your city below to compute a public, CCTV-secured midpoint in South India. Our system guarantees 100% equal travel distance from Chennai and your location.</p>
          </div>
          {/* Card 4 */}
          <div className="p-8 rounded-2xl bg-[#0a0c10] border border-white/5 relative overflow-hidden flex flex-col">
            <span className="absolute top-4 right-4 text-[60px] font-black font-h text-white/[0.03] leading-none">04</span>
            <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 flex items-center justify-center mb-6"><Users size={18} /></div>
            <strong className="text-white text-sm block mb-4">Physical Meetup</strong>
            <p className="text-xs text-muted leading-relaxed m-0 relative z-10">Meet Maddy's agent at the pre-vetted location (e.g. coffee shop or shopping mall). The agent will perform a live verification of credentials on the spot.</p>
          </div>
        </div>
        
        {/* Card 5 (Centered below) */}
        <div className="flex justify-center">
          <div className="p-8 rounded-2xl bg-[#0a0c10] border border-white/5 relative overflow-hidden w-full max-w-[300px]">
            <span className="absolute top-4 right-4 text-[60px] font-black font-h text-white/[0.03] leading-none">05</span>
            <div className="w-10 h-10 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-500 flex items-center justify-center mb-6"><ShieldCheck size={18} /></div>
            <strong className="text-white text-sm block mb-4">Instant Payout Lock</strong>
            <p className="text-xs text-muted leading-relaxed m-0 relative z-10">Upon successful verification, detaching bindings, and signing final terms, the remaining 90% is released instantly to you in cash or direct UPI/Bank transfer.</p>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <ChevronDown size={24} className="text-yellow-500 animate-bounce" />
        </div>
      </section>

      {/* INTERACTIVE GRID SECTION */}
      <section className="py-10 px-[5%] max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
        
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          
          {/* Midpoint Map Portal */}
          <div className="p-8 rounded-3xl bg-[#080a0e] border border-orange-500/20 shadow-[0_0_30px_rgba(249,115,22,0.03)]">
            <div className="flex items-center gap-3 mb-4">
              <Navigation size={18} className="text-orange-500" />
              <strong className="text-white text-lg font-h tracking-wide uppercase">Midpoint Map Portal</strong>
            </div>
            <p className="text-xs text-muted leading-relaxed mb-8">
              All face-to-face deals are conducted strictly in South India (Tamil Nadu, Kerala, Andhra Pradesh, Karnataka). Anchored with our Buyer Agent base in <strong className="text-white">Chennai</strong>, enter your location below to compute a balanced midpoint checkpoint ensuring <strong className="text-white">100% equal travel distance</strong> for both parties. No one travels further!
            </p>
            
            <div className="mb-8">
              <label className="text-[10px] font-bold text-muted uppercase tracking-widest block mb-2">ENTER YOUR CUSTOMER CITY</label>
              <div className="relative">
                <MapPin size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
                <input 
                  type="text" 
                  value="Vellore" 
                  readOnly 
                  className="w-full bg-[#111520] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-sm text-white focus:outline-none cursor-default"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-[#0a0c10] border border-white/5">
                <span className="text-[10px] font-bold text-muted uppercase tracking-widest block mb-1">COMPUTED MIDPOINT</span>
                <strong className="text-white text-sm">Kanchipuram</strong>
              </div>
              <div className="p-4 rounded-xl bg-[#0a0c10] border border-white/5">
                <span className="text-[10px] font-bold text-muted uppercase tracking-widest block mb-1">TOTAL TRANSIT DISTANCE</span>
                <strong className="text-white text-sm">~140 km Total (~70 km each)</strong>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="py-2 text-center border-b-2 border-orange-500/50">
                <span className="text-[10px] font-bold text-muted uppercase tracking-widest block mb-1">SELLER TRAVEL</span>
                <strong className="text-orange-500 text-sm">~70 km</strong>
              </div>
              <div className="py-2 text-center border-b-2 border-orange-500/50">
                <span className="text-[10px] font-bold text-muted uppercase tracking-widest block mb-1">AGENT TRAVEL</span>
                <strong className="text-orange-500 text-sm">~70 km</strong>
              </div>
            </div>

            <div className="mb-6">
              <span className="text-[10px] font-bold text-muted uppercase tracking-widest block mb-2">PRE-VETTED CCTV CHECKPOINT</span>
              <strong className="text-orange-500 text-sm block">GRT Regency, Gandhi Road / Kanchi Shopping Mall (CCTV Secure)</strong>
            </div>

            <div className="p-3 rounded bg-green-500/10 border border-green-500/20 flex items-start gap-2">
              <CheckCircle2 size={14} className="text-green-500 shrink-0 mt-0.5" />
              <span className="text-[10px] text-green-500 font-bold tracking-wide">Balanced Transit Guarantee: 100% Equal travel distance for both parties!</span>
            </div>
          </div>

          {/* F2F Expense Mandates */}
          <div className="p-6 rounded-2xl bg-[#080a0e] border border-red-500/20">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle size={16} className="text-red-500" />
              <strong className="text-red-500 text-sm tracking-wide uppercase font-bold">F2F Expense Mandates</strong>
            </div>
            <p className="text-xs text-muted leading-relaxed mb-4">
              To process physical meetups, the customer is fully responsible for covering Maddy Store Agent expenses:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-xs text-muted">
                <CheckCircle2 size={12} className="text-red-500 shrink-0 mt-1" />
                <span><strong className="text-white">Round-Trip Transit Fare:</strong> Fare covers trains, flights, or cabs to the midpoint hub.</span>
              </li>
              <li className="flex items-start gap-2 text-xs text-muted">
                <CheckCircle2 size={12} className="text-red-500 shrink-0 mt-1" />
                <span><strong className="text-white">Safe Overnight Lodging:</strong> Required only if credential unlink cycles look for 12+ hours.</span>
              </li>
              <li className="flex items-start gap-2 text-xs text-muted">
                <CheckCircle2 size={12} className="text-red-500 shrink-0 mt-1" />
                <span><strong className="text-white">Agent Food & Allowance:</strong> Base travel food allowances must be paid in advance.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          
          {/* Live Routing Vector Map */}
          <div className="p-8 rounded-3xl bg-[#080a0e] border border-white/5 relative h-[300px] overflow-hidden">
            <div className="flex justify-between items-center mb-8 relative z-10">
              <div className="flex items-center gap-2">
                <Navigation size={14} className="text-muted" />
                <span className="text-[10px] font-bold text-white uppercase tracking-widest">LIVE ROUTING VECTOR MAP</span>
              </div>
              <span className="px-2 py-1 rounded bg-green-500/10 text-green-500 text-[10px] font-bold tracking-widest border border-green-500/20">Active Route</span>
            </div>

            {/* SVG MAP */}
            <div className="absolute inset-0 pt-[80px] px-8">
              {/* Grid Background */}
              <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at center, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
              
              <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet">
                {/* Lines */}
                <path d="M 50 120 L 150 80" stroke="#f97316" strokeWidth="2" strokeDasharray="4 4" fill="none" />
                <path d="M 150 80 L 300 40" stroke="#eab308" strokeWidth="2" strokeDasharray="4 4" fill="none" />
                
                {/* Nodes */}
                <g transform="translate(50, 120)">
                  <circle r="6" fill="#3b82f6" />
                  <circle r="12" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.5" />
                  <rect x="10" y="-8" width="60" height="16" rx="4" fill="#111520" stroke="#3b82f6" />
                  <text x="40" y="3" fontSize="8" fill="#fff" textAnchor="middle" fontWeight="bold">Vellore</text>
                </g>
                
                <g transform="translate(150, 80)">
                  <circle r="8" fill="#f97316" />
                  <circle r="16" fill="none" stroke="#f97316" strokeWidth="1" opacity="0.5" />
                  <rect x="15" y="-10" width="120" height="20" rx="4" fill="#f97316" opacity="0.2" stroke="#f97316" />
                  <text x="75" y="3" fontSize="9" fill="#f97316" textAnchor="middle" fontWeight="bold">Kanchipuram (Midpoint)</text>
                </g>

                <g transform="translate(300, 40)">
                  <circle r="6" fill="#eab308" />
                  <circle r="12" fill="none" stroke="#eab308" strokeWidth="1" opacity="0.5" />
                  <rect x="-170" y="-10" width="160" height="20" rx="4" fill="#111520" stroke="#eab308" />
                  <text x="-90" y="3" fontSize="8" fill="#eab308" textAnchor="middle" fontWeight="bold">Maddy Store Depot (Confidential Base)</text>
                </g>
              </svg>
            </div>
          </div>

          {/* 10% F2F Booking Calculator */}
          <div className="p-8 rounded-3xl bg-[#080a0e] border border-white/5">
            <div className="flex items-center gap-2 mb-4">
              <LinkIcon size={16} className="text-yellow-500" />
              <strong className="text-white text-sm font-bold tracking-wide uppercase">10% F2F Booking Calculator</strong>
            </div>
            <p className="text-xs text-muted leading-relaxed mb-8">
              Move the slider to estimate the 10% booking advance required to secure in-person travel and locked valuations.
            </p>

            <div className="mb-8">
              <div className="flex justify-between items-end mb-4">
                <span className="text-xs text-muted">Account Valuation:</span>
                <span className="text-xl font-bold font-h text-white">{formatCurrency(valuation)}</span>
              </div>
              <input 
                type="range" 
                min={80000} 
                max={500000} 
                step={5000}
                value={valuation} 
                onChange={(e) => setValuation(Number(e.target.value))}
                className="w-full accent-orange-500 h-1 bg-white/10 rounded-full appearance-none cursor-pointer"
              />
              <div className="flex justify-between items-center mt-2">
                <span className="text-[9px] text-muted uppercase">₹ 80K (Min F2F Value)</span>
                <span className="text-[9px] text-muted uppercase">₹ 5.0L (VIP Cap)</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#111520] border border-white/5 text-center flex flex-col items-center justify-center">
                <span className="text-[9px] font-bold text-muted uppercase tracking-widest mb-2">BOOKING LOCK (10%)</span>
                <strong className="text-orange-500 text-lg font-h">{formatCurrency(valuation * 0.1)}</strong>
              </div>
              <div className="p-4 rounded-xl bg-[#111520] border border-white/5 text-center flex flex-col items-center justify-center">
                <span className="text-[9px] font-bold text-muted uppercase tracking-widest mb-2">MEETUP PAYOUT (90%)</span>
                <strong className="text-green-500 text-lg font-h">{formatCurrency(valuation * 0.9)}</strong>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* CRITICAL ESCROW SECURITY REGULATIONS */}
      <section className="py-10 px-[5%] max-w-[1200px] mx-auto pb-32 relative z-10">
        <div className="p-8 md:p-10 rounded-3xl bg-[#0a0c10] border border-yellow-500/30 flex flex-col md:flex-row gap-10 items-start md:items-center">
          
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-6">
              <Shield size={24} className="text-yellow-500" />
              <h3 className="text-lg md:text-xl font-bold font-h text-white tracking-wider uppercase m-0">CRITICAL ESCROW SECURITY REGULATIONS</h3>
            </div>
            <p className="text-xs text-muted leading-relaxed mb-8">
              To maintain South India's safest BGMI exchange environment, our agents strictly enforce these three rules during physical meetups:
            </p>

            <div className="space-y-6">
              <div>
                <strong className="text-white text-sm block mb-2">1. Mandatory Government ID Proof (KYC)</strong>
                <p className="text-xs text-muted m-0 leading-relaxed">Before any payout is disbursed, we collect physical verification of government-issued IDs (Aadhaar Card or Driving License) with your live location. PAN cards alone are not accepted.</p>
              </div>
              <div>
                <strong className="text-white text-sm block mb-2">2. Irreversible Handover & Finality</strong>
                <p className="text-xs text-muted m-0 leading-relaxed">Once our agent detaches bindings and ownership has been handed over to the buyer, the deal is 100% absolute. Accounts cannot be returned under any circumstances.</p>
              </div>
              <div>
                <strong className="text-white text-sm block mb-2">3. 100% Locked Payout Guarantee</strong>
                <p className="text-xs text-muted m-0 leading-relaxed">Your Wholesale Payout amount is secured and locked instantly during verification. Payments are processed in legal cash or instant Bank Transfer/UPI before we exit the meetup.</p>
              </div>
            </div>
          </div>

          <div className="md:w-[280px] flex-shrink-0 flex flex-col items-center md:items-end justify-center w-full">
            <div className="text-center md:text-right w-full">
              <span className="text-[10px] font-bold text-muted uppercase tracking-widest block mb-2">SLOT BOOKING AVAILABLE</span>
              <strong className="text-orange-500 text-sm block mb-6 font-bold">Book a Verified Agent Slot</strong>
              <a href="https://wa.me/+919025391516?text=Hi%20Maddy!%20I%20want%20to%20book%20a%20Face-to-Face%20meetup" target="_blank" rel="noreferrer" className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold tracking-widest text-[11px] uppercase transition-colors" style={{ background: "linear-gradient(135deg, #f97316, #ea580c)", color: "#fff", border: "none" }}>
                <MessageCircle size={14} /> Book via WhatsApp
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
