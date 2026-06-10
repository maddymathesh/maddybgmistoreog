/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { Camera, ExternalLink, Loader2 } from "lucide-react";
import { getProofs } from "../actions";

interface Proof {
  id: string;
  title: string | null;
  imageUrl: string;
  month: string;
  year: string;
  createdAt: Date;
}

export default function ProofsPage() {
  const [proofs, setProofs] = useState<Proof[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [monthsOrder, setMonthsOrder] = useState<string[]>([]);

  useEffect(() => {
    const loadProofs = async () => {
      try {
        const res = await getProofs();
        if (res.success && res.proofs) {
          const parsedProofs = res.proofs.map(p => ({
            ...p,
            createdAt: new Date(p.createdAt)
          })) as Proof[];

          setProofs(parsedProofs);

          // Get unique months in sorted order
          const uniqueMonths = [...new Set(parsedProofs.map(p => p.month))];
          setMonthsOrder(uniqueMonths);
        }
      } catch (err) {
        console.error("Error fetching proofs:", err);
      } finally {
        setLoading(false);
      }
    };
    loadProofs();
  }, []);

  // Group proofs by month
  const grouped = monthsOrder.reduce((acc: Record<string, Proof[]>, m) => {
    const items = proofs.filter(p => p.month === m);
    if (items.length > 0) acc[m] = items;
    return acc;
  }, {});

  return (
    <>
      <div style={{ background: "var(--color-bg)", minHeight: "100vh" }}>

        {/* HERO BANNER */}
        <section style={{
          position: "relative", width: "100%", minHeight: "60vh",
          display: "flex", alignItems: "center", justifyContent: "center",
          overflow: "hidden", textAlign: "center",
        }}>
          <img 
            src="/proof-feedback-banner.jpg" 
            alt="BGMI Proof & Feedback" 
            style={{ 
              position: "absolute", inset: 0, width: "100%", height: "100%", 
              objectFit: "cover", objectPosition: "center 30%", filter: "brightness(0.5)" 
            }} 
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(8,10,15,0.5) 0%, transparent 35%, transparent 55%, rgba(8,10,15,0.97) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(255,215,0,0.06) 0%, transparent 65%)" }} />
          <div style={{ position: "relative", zIndex: 2, padding: "0 5%", maxWidth: "800px" }}>
            <div className="badge mb-4"><Camera size={14} /> Trust &amp; Transparency</div>
            <h1 style={{ fontSize: "clamp(34px, 6vw, 60px)", fontWeight: 900, marginBottom: "16px", textShadow: "0 2px 25px rgba(0,0,0,0.7)" }} className="uppercase text-white">
              Proof &amp; <span className="g">Feedback</span>
            </h1>
            <p style={{ color: "rgba(234,234,234,0.85)", maxWidth: "620px", margin: "0 auto", lineHeight: 1.7, fontSize: "16px", textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}>
              Browse real payment proofs and customer feedback from our successful deals — organized by month for complete transparency.
            </p>
          </div>
        </section>

        {/* PROOFS FEED GALLERY */}
        <section className="py-16 px-[5%]">
          {loading ? (
            <div style={{ textAlign: "center", padding: "100px 0" }}>
              <Loader2 className="animate-spin mx-auto text-gold" size={40} style={{ color: "var(--color-gold)" }} />
            </div>
          ) : Object.keys(grouped).length === 0 ? (
            <div style={{ textAlign: "center", padding: "100px 0", color: "var(--color-muted)" }}>
              <Camera size={48} style={{ opacity: 0.3, marginBottom: "16px", display: "block", margin: "0 auto 16px" }} />
              <p>No proofs available yet. Check back soon!</p>
            </div>
          ) : (
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
              {Object.entries(grouped).map(([month, monthProofs]) => (
                <div key={month} style={{ marginBottom: "70px" }}>

                  {/* Month Header */}
                  <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "32px" }}>
                    <h2 style={{ fontFamily: "var(--font-h)", fontSize: "28px", fontWeight: 900, color: "var(--color-gold)", whiteSpace: "nowrap" }}>
                      {month}
                    </h2>
                    <div style={{ height: "1px", background: "rgba(255,215,0,0.15)", flex: 1 }} />
                    <span style={{ whiteSpace: "nowrap", fontSize: "12px", color: "var(--color-muted)" }}>
                      {monthProofs.length} proof{monthProofs.length > 1 ? "s" : ""}
                    </span>
                  </div>

                  {/* Proof Grid */}
                  <div style={{ 
                    display: "grid", 
                    gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))", 
                    gap: "24px" 
                  }}>
                    {monthProofs.map((p) => (
                      <div key={p.id}
                        style={{ 
                          padding: "0", 
                          overflow: "hidden", 
                          background: "#131722",
                          border: "1px solid rgba(255,215,0,0.12)", 
                          borderRadius: "12px",
                          transition: "all 0.3s ease", 
                          cursor: "default" 
                        }}
                        className="proof-card"
                      >
                        <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden" }}>
                          <img src={p.imageUrl} alt={p.title || "Deal Proof"} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s" }} className="proof-img" />
                          <a href={p.imageUrl} target="_blank" rel="noreferrer"
                            style={{ 
                              position: "absolute", 
                              top: "12px", 
                              right: "12px", 
                              background: "rgba(0,0,0,0.65)", 
                              backdropFilter: "blur(4px)", 
                              borderRadius: "50%", 
                              width: "34px", 
                              height: "34px", 
                              display: "flex", 
                              alignItems: "center", 
                              justifyContent: "center", 
                              color: "#fff" 
                            }}>
                            <ExternalLink size={14} />
                          </a>
                        </div>
                        <div style={{ padding: "16px", background: "#131722" }}>
                          <h3 style={{ fontSize: "14px", fontWeight: 700, color: "#fff", margin: 0 }}>{p.title || "Verified Transaction"}</h3>
                          <p style={{ fontSize: "11px", color: "var(--color-gold)", textTransform: "uppercase", marginTop: "4px", letterSpacing: "0.5px", margin: "4px 0 0" }}>{p.month} {p.year}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              ))}
            </div>
          )}
        </section>
      </div>

      <style>{`
        .proof-card:hover {
          transform: translateY(-4px); 
          box-shadow: 0 12px 40px rgba(255,215,0,0.1) !important;
          border-color: rgba(255,215,0,0.35) !important;
        }
        .proof-card:hover .proof-img {
          transform: scale(1.04);
        }
      `}</style>
    </>
  );
}
