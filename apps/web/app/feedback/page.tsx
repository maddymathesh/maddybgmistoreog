/* eslint-disable @typescript-eslint/no-explicit-any, @next/next/no-img-element */
"use client";

import { useState } from "react";
import { MessageSquare, Star, Send, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { submitFeedback } from "../actions";
import { toast } from "sonner";
import Link from "next/link";

export default function CustomerFeedbackPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [stars, setStars] = useState(5);
  const [hoverStars, setHoverStars] = useState(0);
  const [comment, setComment] = useState("");
  const [desiredItems, setDesiredItems] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return toast.error("Please enter your name");
    if (!comment.trim()) return toast.error("Please tell us how we can improve");

    setSubmitting(true);
    try {
      const res = await submitFeedback(name, stars, comment, desiredItems, phone);
      if (res.success) {
        toast.success("Thank you for your valuable feedback! 🚀");
        setSubmitted(true);
      } else {
        throw new Error(res.error || "Failed to submit");
      }
    } catch (err: any) {
      console.warn("Feedback submit error:", err.message);
      toast.error("Submission failed. You can direct-message us on WhatsApp!");
      // Allow fallback view
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const triggerWhatsAppFeedback = () => {
    const textStr = `Hi Maddy!\n\n*Customer Feedback Form*\n*Name:* ${name}\n*Rating:* ${"⭐".repeat(stars)}\n*Feedback:* ${comment}\n*What I Want:* ${desiredItems || "N/A"}\n*Phone:* ${phone || "N/A"}`;
    const enc = encodeURIComponent(textStr);
    window.open(`https://wa.me/+919025391516?text=${enc}`, "_blank");
  };

  return (
    <div style={{ background: "var(--color-bg)", minHeight: "100vh" }}>
      
      {/* Banner */}
      <section style={{
        position: "relative", width: "100%", minHeight: "60vh",
        display: "flex", alignItems: "center", justifyContent: "center",
        overflow: "hidden", textAlign: "center"
      }}>
        <img src="/customer-feedback-banner.jpg" alt="Customer Feedback"
          style={{ 
            position: "absolute", inset: 0, width: "100%", height: "100%", 
            objectFit: "cover", objectPosition: "center 30%", filter: "brightness(0.5)" 
          }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(8,10,15,0.5) 0%, transparent 35%, transparent 55%, rgba(8,10,15,0.97) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(255,215,0,0.06) 0%, transparent 65%)" }} />
        
        <div style={{ position: "relative", zIndex: 2, padding: "0 5%", maxWidth: "800px" }}>
          <div className="badge mb-4"><Sparkles size={14} style={{ marginRight: "6px" }} /> Store Improvement</div>
          <h1 style={{ fontFamily: "var(--font-h)", fontSize: "clamp(34px, 6vw, 68px)", fontWeight: 900, lineHeight: 1.1, marginBottom: "18px" }} className="uppercase text-white">
            <span style={{ textShadow: "0 2px 25px rgba(0,0,0,0.7)" }}>Customer</span> <br />
            <span className="g" style={{ filter: "drop-shadow(0 2px 10px rgba(0,0,0,0.5))" }}>Feedback</span>
          </h1>
          <p style={{ color: "rgba(234,234,234,0.85)", maxWidth: "620px", margin: "0 auto", lineHeight: 1.7, fontSize: "16px", textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}>
            Your ideas and suggestions help us grow! Tell us what accounts, in-game items, or features you want us to add!
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-[5%] pb-32">
        <div className="max-w-[720px] mx-auto relative z-10">
          
          {submitted ? (
            <div style={{
              background: "rgba(14, 17, 24, 0.65)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid var(--color-border-gold)",
              borderRadius: "24px",
              padding: "45px 30px",
              boxShadow: "0 15px 45px rgba(0,0,0,0.4)",
              textAlign: "center"
            }}>
              <div className="w-20 h-20 mx-auto rounded-full bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center mb-6">
                <CheckCircle2 size={40} className="text-yellow-500" style={{ filter: "drop-shadow(0 0 8px rgba(255,215,0,0.5))" }} />
              </div>
              <h2 style={{ fontFamily: "var(--font-h)", fontWeight: 900 }} className="text-3xl text-white mb-4 uppercase">
                Feedback Submitted!
              </h2>
              <p className="text-muted text-sm leading-relaxed max-w-[500px] mx-auto mb-8">
                We have received your suggestions. We review every customer request to add the items, accounts, and UC packs you desire most. Thank you for making Maddy BGMI Store South India's #1 choice!
              </p>

              <button 
                onClick={triggerWhatsAppFeedback} 
                className="px-6 py-3 rounded-xl font-bold tracking-widest text-xs uppercase bg-white/5 text-white hover:bg-white/10 border border-white/10 transition-all mb-6 cursor-pointer"
              >
                Send Backup Copy via WhatsApp
              </button>

              <div className="mt-4">
                <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold text-yellow-500 uppercase tracking-widest hover:text-yellow-400 transition-colors no-underline">
                  Back to Store Home <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ) : (
            <div style={{
              background: "rgba(14, 17, 24, 0.65)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid var(--color-border-gold)",
              borderRadius: "24px",
              padding: "40px",
              boxShadow: "0 15px 45px rgba(0,0,0,0.4)"
            }} className="relative overflow-hidden">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/25 flex items-center justify-center shrink-0">
                  <MessageSquare size={20} className="text-yellow-500" />
                </div>
                <div>
                  <h3 style={{ fontFamily: "var(--font-h)", fontWeight: 900 }} className="text-lg text-white mb-1">Feedback Submission Form</h3>
                  <p className="text-[10px] font-bold text-muted uppercase tracking-widest">Public or Direct Admin Feedback</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold text-muted uppercase tracking-widest mb-2">Your Name *</label>
                    <input 
                      type="text" 
                      required
                      style={{
                        background: "rgba(20, 24, 33, 0.8)",
                        border: "1px solid rgba(255, 215, 0, 0.15)",
                        outline: "none",
                        color: "#fff"
                      }}
                      className="w-full rounded-xl p-4 text-sm focus:border-yellow-500/50 transition-colors" 
                      placeholder="e.g. Rahul Kumar" 
                      value={name} 
                      onChange={e => setName(e.target.value)} 
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-muted uppercase tracking-widest mb-2">WhatsApp Phone (Optional)</label>
                    <input 
                      type="tel" 
                      style={{
                        background: "rgba(20, 24, 33, 0.8)",
                        border: "1px solid rgba(255, 215, 0, 0.15)",
                        outline: "none",
                        color: "#fff"
                      }}
                      className="w-full rounded-xl p-4 text-sm focus:border-yellow-500/50 transition-colors" 
                      placeholder="e.g. +91 90253 *****" 
                      value={phone} 
                      onChange={e => setPhone(e.target.value)} 
                    />
                  </div>
                </div>

                {/* Rating selection */}
                <div>
                  <label className="block text-[10px] font-bold text-muted uppercase tracking-widest mb-2">Overall Store Experience Rating</label>
                  <div className="flex gap-2 mb-2">
                    {[1, 2, 3, 4, 5].map(s => (
                      <Star 
                        key={s} 
                        size={28}
                        fill={(hoverStars || stars) >= s ? "#eab308" : "transparent"}
                        color="#eab308"
                        onClick={() => setStars(s)}
                        onMouseEnter={() => setHoverStars(s)}
                        onMouseLeave={() => setHoverStars(0)}
                        style={{
                          filter: (hoverStars || stars) >= s ? "drop-shadow(0 0 5px rgba(234,179,8,0.4))" : "none"
                        }}
                        className="cursor-pointer transition-transform hover:scale-110"
                      />
                    ))}
                  </div>
                  <span className="text-[11px] text-muted font-medium">
                    {stars === 5 ? "Excellent (5 Stars)" : stars === 4 ? "Very Good (4 Stars)" : stars === 3 ? "Good (3 Stars)" : stars === 2 ? "Need Improvements (2 Stars)" : "Disappointed (1 Star)"}
                  </span>
                </div>

                {/* Comment */}
                <div>
                  <label className="block text-[10px] font-bold text-muted uppercase tracking-widest mb-2">What should we improve? What are your suggestions? *</label>
                  <textarea 
                    required
                    style={{
                      background: "rgba(20, 24, 33, 0.8)",
                      border: "1px solid rgba(255, 215, 0, 0.15)",
                      outline: "none",
                      color: "#fff"
                    }}
                    className="w-full rounded-xl p-4 text-sm focus:border-yellow-500/50 transition-colors resize-y min-h-[100px]" 
                    placeholder="Share your thoughts on prices, delivery speed, payment experience or support..." 
                    value={comment} 
                    onChange={e => setComment(e.target.value)} 
                  />
                </div>

                {/* What Customers Actually Want */}
                <div style={{ background: "rgba(255, 215, 0, 0.03)", border: "1px solid rgba(255, 215, 0, 0.15)" }} className="p-6 rounded-2xl">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles size={16} className="text-yellow-500" />
                    <label className="block text-[10px] font-bold text-yellow-500 uppercase tracking-widest">What specific items or accounts do you want next?</label>
                  </div>
                  <textarea 
                    style={{
                      background: "rgba(10, 13, 20, 0.9)",
                      border: "1px solid rgba(255, 215, 0, 0.1)",
                      outline: "none",
                      color: "#fff"
                    }}
                    className="w-full rounded-xl p-4 text-sm focus:border-yellow-500/50 transition-colors resize-y min-h-[80px]" 
                    placeholder="e.g. Glacier Level 4 account under ₹8k, cheaper 60 UC packs, more x-suit items, etc..." 
                    value={desiredItems} 
                    onChange={e => setDesiredItems(e.target.value)} 
                  />
                  <span className="block text-[10px] text-muted mt-3">
                    This directly notifies Maddy so we can acquire these stocks for you!
                  </span>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={submitting} 
                  style={{
                    background: "linear-gradient(to right, var(--color-gold), #ff8c00)",
                    boxShadow: "0 4px 20px rgba(255, 215, 0, 0.2)"
                  }}
                  className="w-full flex items-center justify-center gap-2 py-4 mt-8 rounded-xl font-bold tracking-widest text-xs uppercase text-black border-none cursor-pointer hover:opacity-90 disabled:opacity-50 transition-all"
                >
                  {submitting ? (
                    "Uploading suggestions..."
                  ) : (
                    <><Send size={14} /> Submit Feedback</>
                  )}
                </button>

              </form>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
