/* eslint-disable @typescript-eslint/no-unused-vars, @next/next/no-img-element */
"use client";

import { MessageCircle, Send, Instagram, Youtube, ArrowUpRight, Sparkles, ShieldCheck, Zap, Heart, Tv } from "lucide-react";

export default function ConnectWithUs() {
  return (
    <>
      <div style={{ background: "var(--color-bg)", minHeight: "100vh" }}>

        {/* HERO BANNER */}
        <section style={{
          position: "relative", width: "100%",
          minHeight: "45vh",
          overflow: "hidden", display: "flex",
          alignItems: "center", justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
          padding: "80px 5% 40px"
        }}>
          <img
            src="/connect-banner.webp"
            alt="BGMI Community Connect"
            style={{
              position: "absolute", inset: 0,
              width: "100%", height: "100%",
              objectFit: "cover", objectPosition: "center 40%",
              filter: "brightness(0.35)",
            }}
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to bottom, rgba(8,10,15,0.6) 0%, transparent 45%, rgba(8,10,15,0.98) 100%)",
          }} />
          <div style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(ellipse at center, rgba(255,215,0,0.06) 0%, transparent 65%)",
          }} />

          {/* HEADING SECTION CONTENT */}
          <div style={{ position: "relative", zIndex: 2, maxWidth: "700px" }}>
            <p className="badge mb-4">
              <Sparkles size={12} style={{ marginRight: "6px" }} /> Connect Hub
            </p>
            <h1 style={{
              fontFamily: "var(--font-h)", fontSize: "clamp(34px, 6vw, 68px)",
              fontWeight: 900, lineHeight: 1.1, marginBottom: "18px",
            }} className="text-white uppercase">
              <span style={{ textShadow: "0 2px 25px rgba(0,0,0,0.7)" }}>Connect</span> <br />
              <span className="g" style={{ filter: "drop-shadow(0 2px 10px rgba(0,0,0,0.5))" }}>With Us</span>
            </h1>
            <p style={{
              color: "rgba(234,234,234,0.85)", fontSize: "16px",
              maxWidth: "540px", margin: "20px auto 0", lineHeight: 1.7,
              textShadow: "0 1px 8px rgba(0,0,0,0.5)",
            }}>
              Join our official networks to browse payment proofs, claim exclusive discount alerts, and trade securely with South India's #1 trusted dealer.
            </p>
          </div>
        </section>

        {/* DISTINCT CHANNELS CONTENT */}
        <section style={{ padding: "0 5% 100px", position: "relative", zIndex: 10 }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "50px" }}>

            {/* SECTION 1: INSTANT ACCOUNT FEEDS */}
            <div style={{
              background: "rgba(14, 17, 24, 0.6)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 215, 0, 0.15)",
              borderRadius: "24px",
              padding: "30px",
              boxShadow: "0 15px 40px rgba(0,0,0,0.3)"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px", borderBottom: "1px solid rgba(255, 255, 255, 0.06)", paddingBottom: "15px" }}>
                <Zap size={20} style={{ color: "var(--color-gold)", filter: "drop-shadow(0 0 5px rgba(255,215,0,0.4))" }} />
                <div>
                  <h2 style={{ fontFamily: "var(--font-h)", fontSize: "20px", fontWeight: 900, color: "#fff", margin: 0, textTransform: "uppercase" }}>
                    Instant Account Feeds
                  </h2>
                  <p style={{ fontSize: "11px", color: "var(--color-muted)", margin: "2px 0 0" }}>Get immediate updates on newly listed BGMI accounts & price drops.</p>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))", gap: "16px" }}>
                
                {/* 1. WhatsApp Channel */}
                <a href="https://whatsapp.com/channel/0029VbAuBtrIXnlpr3jvnN13" target="_blank" rel="noreferrer" className="connect-card" style={cardStyle("#25D366")}>
                  <div style={glowOverlay("#25D366")} />
                  <div style={iconBoxStyle("#25D366")} className="icon-wrap">
                    <MessageCircle size={22} style={{ filter: "drop-shadow(0 0 4px rgba(37,211,102,0.4))" }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "2px" }}>
                      <h3 style={cardTitleStyle}>WhatsApp Channel</h3>
                      <span style={badgeStyle("#25D366")}>Priority 1</span>
                    </div>
                    <p style={cardSubtitleStyle}>Get instant account updates & stock posts directly in your chat feed.</p>
                  </div>
                  <div className="arrow-wrap" style={arrowStyle}><ArrowUpRight size={18} /></div>
                </a>

                {/* 2. Telegram Channel */}
                <a href="https://t.me/maddy_bgmistore" target="_blank" rel="noreferrer" className="connect-card" style={cardStyle("#229ED9")}>
                  <div style={glowOverlay("#229ED9")} />
                  <div style={iconBoxStyle("#229ED9")} className="icon-wrap">
                    <Send size={22} style={{ filter: "drop-shadow(0 0 4px rgba(34,158,217,0.4))" }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "2px" }}>
                      <h3 style={cardTitleStyle}>Telegram Channel</h3>
                      <span style={badgeStyle("#229ED9")}>Priority 2</span>
                    </div>
                    <p style={cardSubtitleStyle}>Fastest real-time alerts, hot deals, and exclusive discount updates.</p>
                  </div>
                  <div className="arrow-wrap" style={arrowStyle}><ArrowUpRight size={18} /></div>
                </a>

                {/* 3. Instagram Channel */}
                <a href="https://www.instagram.com/maddy_bgmistore/" target="_blank" rel="noreferrer" className="connect-card" style={cardStyle("#e1306c")}>
                  <div style={glowOverlay("#e1306c")} />
                  <div style={iconBoxStyle("#e1306c")} className="icon-wrap">
                    <Instagram size={22} style={{ filter: "drop-shadow(0 0 4px rgba(225,48,108,0.4))" }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "2px" }}>
                      <h3 style={cardTitleStyle}>Instagram Channel</h3>
                      <span style={badgeStyle("#e1306c")}>Priority 3</span>
                    </div>
                    <p style={cardSubtitleStyle}>Direct visual listings, active broadcasts, and luxury account slides.</p>
                  </div>
                  <div className="arrow-wrap" style={arrowStyle}><ArrowUpRight size={18} /></div>
                </a>

              </div>
            </div>

            {/* SECTION 2: SHOWCASES & GUIDES */}
            <div style={{
              background: "rgba(14, 17, 24, 0.6)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 215, 0, 0.15)",
              borderRadius: "24px",
              padding: "30px",
              boxShadow: "0 15px 40px rgba(0,0,0,0.3)"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px", borderBottom: "1px solid rgba(255, 255, 255, 0.06)", paddingBottom: "15px" }}>
                <Tv size={20} style={{ color: "var(--color-gold)", filter: "drop-shadow(0 0 5px rgba(255,215,0,0.4))" }} />
                <div>
                  <h2 style={{ fontFamily: "var(--font-h)", fontSize: "20px", fontWeight: 900, color: "#fff", margin: 0, textTransform: "uppercase" }}>
                    Showcases & Guides
                  </h2>
                  <p style={{ fontSize: "11px", color: "var(--color-muted)", margin: "2px 0 0" }}>High-resolution video reviews, skin showcases, and safety instructions.</p>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px" }}>
                
                {/* 4. YouTube Channel */}
                <a href="https://www.youtube.com/channel/UCvQJ9PCTM4-hNpKH8R8lJTw" target="_blank" rel="noreferrer" className="connect-card" style={cardStyle("#FF0000")}>
                  <div style={glowOverlay("#FF0000")} />
                  <div style={iconBoxStyle("#FF0000")} className="icon-wrap">
                    <Youtube size={22} style={{ filter: "drop-shadow(0 0 4px rgba(255,0,0,0.4))" }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "2px" }}>
                      <h3 style={cardTitleStyle}>YouTube Channel</h3>
                      <span style={badgeStyle("#FF0000")}>Priority 4</span>
                    </div>
                    <p style={cardSubtitleStyle}>Watch detailed inventory guides, skin reviews, and video showcases of premium accounts.</p>
                  </div>
                  <div className="arrow-wrap" style={arrowStyle}><ArrowUpRight size={18} /></div>
                </a>

              </div>
            </div>

            {/* SECTION 3: TRUST & ENGAGEMENT */}
            <div style={{
              background: "rgba(14, 17, 24, 0.6)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 215, 0, 0.15)",
              borderRadius: "24px",
              padding: "30px",
              boxShadow: "0 15px 40px rgba(0,0,0,0.3)"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px", borderBottom: "1px solid rgba(255, 255, 255, 0.06)", paddingBottom: "15px" }}>
                <Heart size={20} style={{ color: "var(--color-gold)", filter: "drop-shadow(0 0 5px rgba(255,215,0,0.4))" }} />
                <div>
                  <h2 style={{ fontFamily: "var(--font-h)", fontSize: "20px", fontWeight: 900, color: "#fff", margin: 0, textTransform: "uppercase" }}>
                    Trust &amp; Engagement
                  </h2>
                  <p style={{ fontSize: "11px", color: "var(--color-muted)", margin: "2px 0 0" }}>Check payment proofs, verified transaction receipts, and follow our community page.</p>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 380px), 1fr))", gap: "16px" }}>

                {/* 5. Telegram Proofs Channel */}
                <a href="https://t.me/maddy_bgmistoreproofs" target="_blank" rel="noreferrer" className="connect-card" style={cardStyle("#34b7f1")}>
                  <div style={glowOverlay("#34b7f1")} />
                  <div style={iconBoxStyle("#34b7f1")} className="icon-wrap">
                    <ShieldCheck size={22} style={{ filter: "drop-shadow(0 0 4px rgba(52,183,241,0.4))" }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "2px" }}>
                      <h3 style={cardTitleStyle}>Telegram Proofs Channel</h3>
                      <span style={badgeStyle("#34b7f1")}>Priority 5</span>
                    </div>
                    <p style={cardSubtitleStyle}>Verify our transparent payment logs, customer chats, and successful deal proofs.</p>
                  </div>
                  <div className="arrow-wrap" style={arrowStyle}><ArrowUpRight size={18} /></div>
                </a>

                {/* 6. Instagram Page */}
                <a href="https://www.instagram.com/maddy_bgmistore/" target="_blank" rel="noreferrer" className="connect-card" style={cardStyle("#e1306c")}>
                  <div style={glowOverlay("#e1306c")} />
                  <div style={iconBoxStyle("#e1306c")} className="icon-wrap">
                    <Instagram size={22} style={{ filter: "drop-shadow(0 0 4px rgba(225,48,108,0.4))" }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "2px" }}>
                      <h3 style={cardTitleStyle}>Instagram Page</h3>
                      <span style={badgeStyle("#e1306c")}>Priority 6</span>
                    </div>
                    <p style={cardSubtitleStyle}>Follow for daily stories, active community giveaways, and visual updates.</p>
                  </div>
                  <div className="arrow-wrap" style={arrowStyle}><ArrowUpRight size={18} /></div>
                </a>

              </div>
            </div>

          </div>
        </section>

      </div>

      <style>{`
        .connect-card:hover {
          transform: translateY(-3px);
          background: rgba(20, 24, 33, 0.85) !important;
          border-color: rgba(255, 215, 0, 0.25) !important;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35) !important;
        }
        .connect-card:hover .icon-wrap {
          transform: scale(1.08);
          background: rgba(10, 13, 20, 0.9) !important;
          box-shadow: 0 4px 16px var(--color-gold-glow) !important;
        }
        .connect-card:hover .arrow-wrap {
          color: var(--color-gold) !important;
          transform: translate(2px, -2px);
        }
      `}</style>
    </>
  );
}

/* Redundant style helpers */
const cardStyle = (color: string) => ({
  display: "flex",
  alignItems: "center",
  gap: "18px",
  background: "rgba(20, 24, 33, 0.5)",
  border: "1px solid rgba(255, 215, 0, 0.08)",
  borderRadius: "16px",
  padding: "20px",
  textDecoration: "none",
  transition: "all 0.3s ease",
  cursor: "pointer",
  position: "relative" as const,
  overflow: "hidden"
});

const glowOverlay = (color: string) => ({
  position: "absolute" as const,
  inset: 0,
  background: `radial-gradient(circle at 10% 50%, ${color}08, transparent 65%)`,
  pointerEvents: "none" as const
});

const iconBoxStyle = (color: string) => ({
  width: "48px",
  height: "48px",
  borderRadius: "12px",
  background: "rgba(10, 13, 20, 0.7)",
  border: `1px solid ${color}25`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: color,
  boxShadow: `0 4px 12px ${color}10`,
  transition: "all 0.3s"
});

const cardTitleStyle = {
  fontFamily: "var(--font-h)",
  fontSize: "15px",
  fontWeight: 700,
  color: "#fff",
  margin: 0
};

const cardSubtitleStyle = {
  fontSize: "12px",
  color: "var(--color-muted)",
  margin: "4px 0 0",
  lineHeight: 1.45
};

const badgeStyle = (color: string) => ({
  fontSize: "8px",
  fontWeight: "bold" as const,
  textTransform: "uppercase" as const,
  color: color,
  background: `${color}15`,
  border: `1px solid ${color}30`,
  padding: "2px 7px",
  borderRadius: "20px",
  letterSpacing: "0.5px"
});

const arrowStyle = {
  color: "rgba(255, 255, 255, 0.35)",
  transition: "all 0.3s"
};
