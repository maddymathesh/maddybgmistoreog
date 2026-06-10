/* eslint-disable @typescript-eslint/no-unused-vars, @next/next/no-img-element */
"use client";

import { MessageCircle, Send, Instagram, Youtube, Award } from "lucide-react";

/* SVG Icons */
const WaIcon = () => <MessageCircle size={20} className="w-5 h-5 shrink-0" />;
const TgIcon = () => <Send size={20} className="w-5 h-5 shrink-0" />;
const IgIcon = () => <Instagram size={20} className="w-5 h-5 shrink-0" />;
const YtIcon = () => <Youtube size={20} className="w-5 h-5 shrink-0" />;

/* Channel data */
const links = [
  {
    label: "WHATSAPP CHANNEL",
    href: "https://whatsapp.com/channel/0029VbAuBtrIXnlpr3jvnN13",
    bg: "bg-[#25D366]",
    glow: "rgba(37,211,102,0.45)",
    Icon: WaIcon,
  },
  {
    label: "TELEGRAM CHANNEL",
    href: "https://t.me/maddy_bgmistore",
    bg: "bg-[#229ED9]",
    glow: "rgba(34,158,217,0.45)",
    Icon: TgIcon,
  },
  {
    label: "TELEGRAM CHANNEL [PROOFS]",
    href: "https://t.me/maddy_bgmistoreproofs",
    bg: "bg-[#229ED9]",
    glow: "rgba(34,158,217,0.45)",
    Icon: TgIcon,
  },
  {
    label: "INSTAGRAM PAGE",
    href: "https://www.instagram.com/maddy_bgmistore/",
    bg: "bg-gradient-to-r from-[#f9a825] via-[#e91e8c] to-[#9c27b0]",
    glow: "rgba(233,30,140,0.45)",
    Icon: IgIcon,
  },
  {
    label: "YOUTUBE CHANNEL",
    href: "https://www.youtube.com/channel/UCvQJ9PCTM4-hNpKH8R8lJTw",
    bg: "bg-[#FF0000]",
    glow: "rgba(255,0,0,0.45)",
    Icon: YtIcon,
  },
];

export default function ConnectWithUs() {
  return (
    <>
      <div style={{ background: "var(--color-bg)", minHeight: "100vh" }}>

        {/* HERO BANNER */}
        <section style={{
          position: "relative", width: "100%",
          minHeight: "95vh",
          overflow: "hidden", display: "flex",
          alignItems: "center", justifyContent: "center",
          flexDirection: "column",
        }}>
          <img
            src="/connect-banner.webp"
            alt="BGMI Community Connect"
            style={{
              position: "absolute", inset: 0,
              width: "100%", height: "100%",
              objectFit: "cover", objectPosition: "center 40%",
              filter: "brightness(0.6)",
            }}
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to bottom, rgba(8,10,15,0.55) 0%, transparent 35%, transparent 55%, rgba(8,10,15,0.95) 100%)",
          }} />
          <div style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(ellipse at center, rgba(255,215,0,0.04) 0%, transparent 60%)",
          }} />

          {/* HEADING SECTION CONTENT */}
          <div className="text-center mb-10 w-full max-w-2xl px-5" style={{ position: "relative", zIndex: 2 }}>
            <p className="badge mb-5">
              MADDY <span style={{ color: "var(--color-gold)", marginLeft: "4px" }}>BGMI STORE</span>
            </p>
            <h1 style={{
              fontFamily: "var(--font-h)", fontSize: "clamp(36px, 6vw, 68px)",
              fontWeight: 900, lineHeight: 1.1, marginBottom: "16px",
              textShadow: "0 2px 20px rgba(0,0,0,0.7)",
            }} className="text-white uppercase">
              Connect <span className="g">With Us</span>
            </h1>
            <p style={{
              color: "rgba(234,234,234,0.9)", fontSize: "clamp(15px, 2vw, 19px)",
              maxWidth: "520px", margin: "20px auto", lineHeight: 1.6,
              textShadow: "0 1px 10px rgba(0,0,0,0.5)",
            }}>
              Join our official channels for the latest listings, exclusive updates, and successful deal proofs.
            </p>
          </div>

          {/* BUTTONS */}
          <div className="w-full max-w-[420px] md:max-w-[500px] gap-3 sm:gap-4 px-4 sm:px-5 mx-auto"
            style={{
              position: "relative", zIndex: 2,
              display: "flex",
              flexDirection: "column"
            }}
          >
            {links.map(({ label, href, bg, glow, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className={`
                  ${bg}
                  flex items-center justify-center gap-3 sm:gap-4
                  h-[56px] sm:h-[62px] rounded-xl
                  text-white font-extrabold text-[14px] sm:text-[16px] tracking-[1.5px] uppercase
                  transition-all duration-200
                  hover:scale-[1.02] hover:brightness-110 active:scale-[0.98]
                  cursor-pointer
                  no-underline
                `}
                style={{
                  width: "100%",
                  padding: "0 20px",
                  fontFamily: "var(--font-h)",
                  boxShadow: `0 8px 24px ${glow}`,
                }}
              >
                <span className="flex items-center justify-center">
                  <Icon />
                </span>
                <span style={{ flex: 1, textAlign: "center", transform: "translateX(-12px)" }}>{label}</span>
              </a>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
