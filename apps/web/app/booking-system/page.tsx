"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AlertTriangle, CheckCircle2, Info, Clock, CreditCard, Lock, ShieldCheck,
  ChevronDown, ChevronUp, Banknote, ArrowRight, Wallet, Check, ChevronRight
} from "lucide-react";

export default function BookingSystem() {
  const [calcValue, setCalcValue] = useState(50000);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const bookingAmount = Math.round(calcValue * 0.1);
  const remainingAmount = calcValue - bookingAmount;

  return (
    <div style={{ background: "var(--color-bg)", color: "#fff", minHeight: "100vh" }}>
      
      {/* HERO BANNER */}
      <section className="relative w-full min-h-[70vh] overflow-hidden flex flex-col items-center justify-center pt-32 pb-20 px-[5%]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />
        </div>

        <div className="relative z-10 w-full max-w-[800px] mx-auto text-center flex flex-col items-center">
          <span className="text-[10px] md:text-xs font-bold text-muted uppercase tracking-[3px] md:tracking-[5px] mb-6 flex items-center justify-center gap-3">
            <span className="w-8 h-[1px] bg-gold/50"></span>
            Maddy Store Exclusives
            <span className="w-8 h-[1px] bg-gold/50"></span>
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-[72px] font-black font-h text-white mb-4 leading-[1.1] uppercase tracking-wide drop-shadow-xl flex flex-col items-center">
            10% Non-Refundable
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-400 to-orange-500 pb-2">
              Booking System
            </span>
          </h1>
          
          <div className="px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-bold uppercase tracking-widest mb-8">
            #TensionFreeDeals At The Maddy BGMI Store
          </div>

          <p className="text-sm md:text-base text-muted leading-relaxed max-w-[600px] mb-12">
            High value BGMI accounts sell out in minutes. Secure the account instantly with a small 10% token amount and pay the rest after complete verification and account handover.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 mb-16">
            <Link href="/pay" className="btn px-8 py-4 text-xs font-bold tracking-widest rounded-full transition-all hover:scale-105" style={{ background: "linear-gradient(135deg, #22c55e, #16a34a)", color: "#fff", border: "none", boxShadow: "0 10px 30px -10px rgba(34,197,94,0.5)" }}>
              PAY 10% BOOKING NOW
            </Link>
            <Link href="/readystocks" className="btn px-8 py-4 text-xs font-bold tracking-widest rounded-full transition-all hover:scale-105 bg-[#111520] text-blue-400 border border-blue-500/30 hover:bg-blue-500/10">
              VIEW LIVE ACCOUNTS
            </Link>
            <button onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })} className="btn px-8 py-4 text-xs font-bold tracking-widest rounded-full transition-all hover:scale-105 bg-[#111520] text-orange-400 border border-orange-500/30 hover:bg-orange-500/10">
              HOW IT WORKS
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-xs font-bold text-muted uppercase tracking-wider">
              <ShieldCheck size={16} className="text-gold" /> 100% Safe Deals
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-muted uppercase tracking-wider">
              <Clock size={16} className="text-orange-500" /> 24 Hour Lock
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-muted uppercase tracking-wider">
              <CheckCircle2 size={16} className="text-green-500" /> Vetted Accounts
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS THE BOOKING SYSTEM */}
      <section className="py-20 px-[5%] max-w-[1200px] mx-auto border-t border-white/5 relative">
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold text-gold uppercase tracking-widest block mb-4">The Process</span>
          <h2 className="text-3xl md:text-4xl font-black font-h text-white">What Is The Booking System?</h2>
        </div>

        <div className="p-8 md:p-12 rounded-3xl border border-white/5 bg-[#0a0c10] relative overflow-hidden">
          <p className="text-sm text-muted leading-relaxed max-w-[800px] mb-12">
            The Maddy Store operates on a strict first-come-first-serve basis. Because premium accounts are in extremely high demand, we implemented the 10% booking system so serious buyers don't lose out on their dream accounts while arranging the full funds.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="p-6 rounded-2xl bg-[#111520] border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-gold/10 text-gold"><Banknote size={20} /></div>
                <h3 className="text-white font-bold font-h m-0 text-base">Small Token Amount (10%)</h3>
              </div>
              <p className="text-xs text-muted leading-relaxed m-0">You only pay 10% of the account's total price upfront. This ensures you are financially committed to the deal without needing the full amount instantly.</p>
            </div>
            
            <div className="p-6 rounded-2xl bg-[#111520] border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-orange-500/10 text-orange-500"><Lock size={20} /></div>
                <h3 className="text-white font-bold font-h m-0 text-base">Exclusive Account Lock</h3>
              </div>
              <p className="text-xs text-muted leading-relaxed m-0">The moment your 10% is received, the account is instantly marked "Sold" and removed from our active market. No one else can buy it.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#111520] border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400"><ShieldCheck size={20} /></div>
                <h3 className="text-white font-bold font-h m-0 text-base">Detailed Verification</h3>
              </div>
              <p className="text-xs text-muted leading-relaxed m-0">Take up to 24 hours to arrange funds, verify the account details with our agents, and test the account safely via our team.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#111520] border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-green-500/10 text-green-500"><CheckCircle2 size={20} /></div>
                <h3 className="text-white font-bold font-h m-0 text-base">Secure Balance Payment</h3>
              </div>
              <p className="text-xs text-muted leading-relaxed m-0">Only pay the remaining 90% balance when you are completely satisfied. After the balance is cleared, the account credentials are handed over permanently.</p>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-red-500/30 bg-red-500/5 flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left">
            <div className="p-3 bg-red-500/20 text-red-500 rounded-full shrink-0"><AlertTriangle size={24} /></div>
            <div>
              <strong className="text-red-400 block text-sm font-bold mb-2">CRUCIAL NOTE: DEPOSIT IS 100% NON-REFUNDABLE</strong>
              <p className="text-xs text-red-200/70 leading-relaxed m-0">
                The 10% booking deposit is NON-REFUNDABLE once paid. If you cancel the deal, fail to pay the remaining balance within 24 hours, or change your mind, the deposit is forfeited. This is to compensate the seller for wasted time and lost market exposure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS TIMELINE */}
      <section id="how-it-works" className="py-20 px-[5%] max-w-[800px] mx-auto border-t border-white/5">
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest block mb-4">Step-by-Step</span>
          <h2 className="text-3xl font-black font-h text-white">How The 10% Booking Works</h2>
        </div>

        <div className="relative pl-6 md:pl-10">
          {/* Vertical Line */}
          <div className="absolute top-0 bottom-0 left-[23px] md:left-[39px] w-[2px] bg-gradient-to-b from-gold/50 via-orange-500/50 to-transparent" />

          {/* STEP 1 */}
          <div className="relative mb-12">
            <div className="absolute -left-6 md:-left-10 w-[34px] h-[34px] rounded-full bg-[#111520] border-2 border-gold flex items-center justify-center text-gold font-bold font-h text-sm z-10">1</div>
            <div className="pl-6 md:pl-8">
              <h4 className="text-lg font-bold text-white mb-2 font-h">Select Your Account</h4>
              <p className="text-xs text-muted leading-relaxed m-0">Find the account you want from our Telegram channel, website, or Instagram page. Check its total price and features.</p>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="relative mb-12">
            <div className="absolute -left-6 md:-left-10 w-[34px] h-[34px] rounded-full bg-[#111520] border-2 border-gold flex items-center justify-center text-gold font-bold font-h text-sm z-10">2</div>
            <div className="pl-6 md:pl-8">
              <h4 className="text-lg font-bold text-white mb-2 font-h">Pay 10% Deposit</h4>
              <p className="text-xs text-muted leading-relaxed m-0">Send exactly 10% of the total price to our official payment UPI/Bank details. Send the payment screenshot to our agent.</p>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="relative mb-12">
            <div className="absolute -left-6 md:-left-10 w-[34px] h-[34px] rounded-full bg-[#111520] border-2 border-gold flex items-center justify-center text-gold font-bold font-h text-sm z-10">3</div>
            <div className="pl-6 md:pl-8">
              <h4 className="text-lg font-bold text-white mb-2 font-h">Account Lock & Verification</h4>
              <p className="text-xs text-muted leading-relaxed mb-6">The account is officially locked for you. You will receive a booking confirmation invoice. Our agent will verify all game details and login states.</p>
              
              <div className="p-4 rounded-xl border border-dashed border-gold/40 bg-gold/5 flex gap-3 items-start">
                <Clock size={18} className="text-gold shrink-0 mt-0.5" />
                <div>
                  <strong className="text-xs text-gold font-bold block mb-1 tracking-wider uppercase">Full Payment Timeline</strong>
                  <p className="text-[11px] text-gold/80 leading-relaxed m-0">You have a maximum of <strong>24 hours</strong> from the booking time to complete the remaining 90% payment. Extensions are rarely granted and strictly at our discretion.</p>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 4 */}
          <div className="relative mb-12">
            <div className="absolute -left-6 md:-left-10 w-[34px] h-[34px] rounded-full bg-[#111520] border-2 border-gold flex items-center justify-center text-gold font-bold font-h text-sm z-10">4</div>
            <div className="pl-6 md:pl-8">
              <h4 className="text-lg font-bold text-white mb-2 font-h">Pay Remaining Balance</h4>
              <p className="text-xs text-muted leading-relaxed m-0">Clear the remaining 90% balance. You can pay this in parts across different UPIs or banks if needed, as long as it's completed within 24 hours.</p>
            </div>
          </div>

          {/* STEP 5 */}
          <div className="relative">
            <div className="absolute -left-6 md:-left-10 w-[34px] h-[34px] rounded-full bg-[#111520] border-2 border-green-500 flex items-center justify-center text-green-500 font-bold font-h text-sm z-10"><Check size={16} /></div>
            <div className="pl-6 md:pl-8">
              <h4 className="text-lg font-bold text-green-400 mb-2 font-h">Account Handover</h4>
              <p className="text-xs text-muted leading-relaxed m-0">Once 100% payment is confirmed, the account credentials (Facebook/Twitter/Email) are handed over, and secondary unlinks (if any) are initiated safely under our guarantee.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATOR SECTION */}
      <section className="py-20 px-[5%] max-w-[1000px] mx-auto border-t border-white/5 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold/5 blur-[100px] pointer-events-none" />
        
        <div className="text-center mb-16 relative z-10">
          <span className="text-[10px] font-bold text-gold uppercase tracking-widest block mb-4">Interactive Tool</span>
          <h2 className="text-3xl font-black font-h text-white">Booking Deposit Calculator</h2>
        </div>

        <div className="p-8 md:p-12 rounded-3xl border border-white/10 bg-[#050608] relative z-10 flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <label className="block text-xs font-bold text-muted uppercase tracking-widest mb-6">Enter Account Price (₹)</label>
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
              min="5000"
              max="500000"
              step="1000"
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
            <div className="flex justify-between text-[10px] text-muted font-bold tracking-wider">
              <span>₹5K</span>
              <span>₹500K+</span>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <div className="p-6 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-gold uppercase tracking-widest block mb-1">10% Booking Deposit</span>
                <span className="text-xs text-gold/60">Pay now to lock</span>
              </div>
              <strong className="text-3xl font-black text-gold">₹{bookingAmount.toLocaleString('en-IN')}</strong>
            </div>

            <div className="p-6 rounded-2xl bg-[#111520] border border-white/5 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-white uppercase tracking-widest block mb-1">90% Remaining Balance</span>
                <span className="text-xs text-muted">Pay within 24 hours</span>
              </div>
              <strong className="text-3xl font-black text-white">₹{remainingAmount.toLocaleString('en-IN')}</strong>
            </div>
          </div>
        </div>
      </section>

      {/* POLICY & OPTIONS */}
      <section className="py-20 px-[5%] max-w-[1200px] mx-auto border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          <div className="p-8 rounded-3xl border border-red-500/30 bg-gradient-to-br from-red-500/10 to-[#0a0c10]">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="text-red-500" size={28} />
              <h3 className="text-2xl font-black font-h text-white">Important Non-Refundable Policy</h3>
            </div>
            <p className="text-sm text-red-100/70 leading-relaxed mb-6">
              To maintain the integrity of our marketplace, all 10% booking deposits are strictly non-refundable. This policy is in place to:
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3 text-xs text-muted items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                <span><strong>Prevent Fake Reservations:</strong> Stops non-serious buyers from locking accounts and blocking legitimate buyers.</span>
              </li>
              <li className="flex gap-3 text-xs text-muted items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                <span><strong>Seller Compensation:</strong> If an account is locked, the seller loses market momentum. The non-refundable fee compensates them for wasted time.</span>
              </li>
              <li className="flex gap-3 text-xs text-muted items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                <span><strong>Operational Costs:</strong> Covers the administrative effort of our team verifying, holding, and processing the transaction.</span>
              </li>
            </ul>
            <p className="text-xs text-red-400 font-bold mt-6 text-center uppercase tracking-wider p-3 bg-red-500/10 rounded-lg">Only book if you have 100% of the funds ready.</p>
          </div>

          <div className="p-8 rounded-3xl border border-white/10 bg-[#050608] flex flex-col justify-center">
            <h3 className="text-2xl font-black font-h text-white text-center mb-8">Booking Options</h3>
            
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-[#111520] border border-white/5 flex items-center gap-4">
                <div className="p-3 bg-green-500/10 text-green-500 rounded-xl"><Wallet size={24} /></div>
                <div>
                  <strong className="text-white text-sm block mb-1">Direct Payment Options (0% Fee)</strong>
                  <span className="text-xs text-muted">Google Pay, PhonePe, Paytm, IMPS, NEFT, RTGS.</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#111520] border border-white/5 flex items-center gap-4">
                <div className="p-3 bg-yellow-500/10 text-yellow-500 rounded-xl"><Globe size={24} /></div>
                <div>
                  <strong className="text-white text-sm block mb-1">USDT Crypto Option (Zero Tax)</strong>
                  <span className="text-xs text-muted">Binance Pay or TRC20 transfer (Standard USDT conversion applies).</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        {/* USE CASES */}
        <div className="mt-16 text-center mb-12">
          <span className="text-[10px] font-bold text-gold uppercase tracking-widest block mb-4">Examples</span>
          <h2 className="text-3xl font-black font-h text-white">How Booking Applies</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
          <div className="p-6 rounded-2xl border border-white/5 bg-[#0a0c10]">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <strong className="text-white text-sm uppercase tracking-wider">Normal Deal (₹20,000)</strong>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-xs pb-3 border-b border-white/5">
                <span className="text-muted">Total Price:</span>
                <strong className="text-white">₹20,000</strong>
              </div>
              <div className="flex justify-between text-xs pb-3 border-b border-white/5">
                <span className="text-muted">Booking (10%):</span>
                <strong className="text-gold">₹2,000 (Pay Now)</strong>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-muted">Balance (90%):</span>
                <strong className="text-white">₹18,000 (Within 24h)</strong>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-white/5 bg-[#0a0c10]">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-orange-500" />
              <strong className="text-white text-sm uppercase tracking-wider">F2F Meetup Deal (₹1,50,000)</strong>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-xs pb-3 border-b border-white/5">
                <span className="text-muted">Total Price:</span>
                <strong className="text-white">₹1,50,000</strong>
              </div>
              <div className="flex justify-between text-xs pb-3 border-b border-white/5">
                <span className="text-muted">Booking (10%):</span>
                <strong className="text-gold">₹15,000 (Pay Now)</strong>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-muted">Balance (90%):</span>
                <strong className="text-white">₹1,35,000 (Pay in person)</strong>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* WHY & RULES SECTION */}
      <section className="py-20 px-[5%] max-w-[1000px] mx-auto border-t border-white/5">
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold text-gold uppercase tracking-widest block mb-4">Transparency</span>
          <h2 className="text-3xl font-black font-h text-white">Why The Booking System Exists</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
          <div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-[#0a0c10]">
            <div className="p-1.5 rounded bg-green-500/10 text-green-500 shrink-0"><Check size={16} /></div>
            <p className="text-xs text-muted m-0 leading-relaxed"><strong className="text-white">Filters Out Scammers:</strong> Ensures only genuine buyers interact with high-value accounts.</p>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-[#0a0c10]">
            <div className="p-1.5 rounded bg-green-500/10 text-green-500 shrink-0"><Check size={16} /></div>
            <p className="text-xs text-muted m-0 leading-relaxed"><strong className="text-white">Protects Buyers:</strong> Prevents your dream account from being sold while you arrange funds.</p>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-[#0a0c10]">
            <div className="p-1.5 rounded bg-green-500/10 text-green-500 shrink-0"><Check size={16} /></div>
            <p className="text-xs text-muted m-0 leading-relaxed"><strong className="text-white">Enables F2F Verification:</strong> A non-refundable booking is strictly required before an agent travels for a Face-to-Face deal.</p>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-[#0a0c10]">
            <div className="p-1.5 rounded bg-green-500/10 text-green-500 shrink-0"><Check size={16} /></div>
            <p className="text-xs text-muted m-0 leading-relaxed"><strong className="text-white">Market Exclusivity:</strong> It instantly freezes all other market negotiations for that specific account.</p>
          </div>
        </div>

        <div className="p-8 rounded-3xl border border-white/5 bg-[#111520]">
          <h3 className="text-xl font-black font-h text-white text-center mb-8">Payment & Account Handover</h3>
          <div className="space-y-6 max-w-[600px] mx-auto">
            <div>
              <strong className="text-sm text-gold block mb-2 uppercase tracking-widest">Partial Payments Allowed</strong>
              <p className="text-xs text-muted leading-relaxed m-0">You can pay the remaining 90% balance in smaller chunks across multiple UPI IDs or bank accounts, provided the full amount is cleared within the 24-hour window.</p>
            </div>
            <div className="border-t border-white/5 pt-6">
              <strong className="text-sm text-gold block mb-2 uppercase tracking-widest">Immediate Handover</strong>
              <p className="text-xs text-muted leading-relaxed m-0">The exact second the 100% payment clears, our agent begins the binding process, unlinking secondary networks, and securing the account for you.</p>
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-[800px] mx-auto">
          <h3 className="text-xl font-black font-h text-white text-center mb-8">Important Rules</h3>
          <div className="space-y-3">
            <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/5 text-xs text-red-200/80 flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></span> Do not ask for refunds for "accidental" bookings.
            </div>
            <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/5 text-xs text-red-200/80 flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></span> Without 10% payment, no account reservation is valid.
            </div>
            <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/5 text-xs text-red-200/80 flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></span> Do not attempt to log into the account until full payment is made.
            </div>
            <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/5 text-xs text-red-200/80 flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></span> Account credentials are never shared under partial payment status.
            </div>
          </div>
        </div>
      </section>


      {/* FAQ SECTION */}
      <section className="py-20 px-[5%] max-w-[800px] mx-auto border-t border-white/5">
        <div className="text-center mb-12">
          <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest block mb-4">FAQ</span>
          <h2 className="text-3xl font-black font-h text-white mb-6">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-3">
          {[
            { q: "Is the 10% refundable?", a: "No. All 10% booking deposits are strictly non-refundable once booked. This deposit secures the exclusive lock on the account, removing it from active market availability. The only exception is the immediate return of any accidental excess amounts paid over the 10% threshold." },
            { q: "Can I pay the remaining balance in cash?", a: "Yes, but ONLY if you have opted for a Face-to-Face (F2F) meetup deal for an account above ₹80,000. For normal online transactions, the balance must be paid via UPI, Bank Transfer, or Crypto." },
            { q: "What if I need more than 24 hours?", a: "Extensions are granted extremely rarely and solely at our discretion. If you anticipate a delay, you must inform our agent immediately. Unapproved delays will result in forfeiture of the deposit and the account being relisted." },
            { q: "Can I change my mind to a different account?", a: "No. The booking is strictly attached to the specific account ID you reserved. You cannot transfer a booking deposit to a different account because the original seller was already locked out of the market." },
            { q: "What happens after I pay the 10%?", a: "You must immediately share the payment screenshot with our agent. We will verify the payment, mark the account as SOLD across all platforms, and generate your booking invoice with the 24-hour deadline." }
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
          Ready to Reserve Your<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-orange-500">Premium Account?</span>
        </h2>
        <p className="text-muted text-sm max-w-[500px] mx-auto mb-10">
          Don't let your dream account get sniped by someone else. Lock it down instantly with a secure 10% deposit.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/pay" className="btn px-8 py-4 text-xs font-bold tracking-widest rounded-full transition-all hover:scale-105" style={{ background: "linear-gradient(135deg, #22c55e, #16a34a)", color: "#fff", border: "none" }}>
            PAY 10% NOW
          </Link>
          <Link href="/readystocks" className="btn px-8 py-4 text-xs font-bold tracking-widest rounded-full transition-all hover:scale-105" style={{ background: "linear-gradient(135deg, #f97316, #ea580c)", color: "#fff", border: "none" }}>
            VIEW LIVE ACCOUNTS
          </Link>
        </div>
      </section>

    </div>
  );
}
