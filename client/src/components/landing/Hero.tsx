import Link from "next/link";
import { HeroMockup } from "./HeroMockup";

export function Hero() {
  return (
    <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 pt-36 pb-20 text-center">
      {/* Badge */}
      <div
        className="inline-flex items-center gap-2 px-3 pr-4 py-[5px] rounded-full text-[12px] mb-9"
        style={{
          background: "rgba(255,255,255,0.042)",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(12px)",
          color: "rgba(255,255,255,0.55)",
          animation: "fadeUp 0.8s ease both",
        }}
      >
        <span
          className="w-[6px] h-[6px] rounded-full flex-shrink-0"
          style={{
            background: "#0FCFB0",
            boxShadow: "0 0 8px #0FCFB0",
            animation: "glow 2s ease-in-out infinite",
          }}
        />
        Public beta — 400+ engineering teams onboarded
      </div>

      {/* Headline */}
      <h1
        className="font-bold tracking-[-0.05em] leading-[1.02] max-w-[900px] mb-7"
        style={{
          fontSize: "clamp(48px,7vw,88px)",
          animation: "fadeUp 0.8s 0.1s ease both",
        }}
      >
        <span
          style={{
            background: "linear-gradient(135deg,#fff 30%,rgba(124,111,255,0.9))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Your team&apos;s knowledge,
        </span>
        <br />
        <span
          style={{
            background: "linear-gradient(135deg,#7C6FFF,#0FCFB0)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          always answerable.
        </span>
      </h1>

      {/* Subtitle */}
      <p
        className="text-[17px] font-light leading-[1.75] max-w-[500px] mb-12"
        style={{
          color: "rgba(255,255,255,0.55)",
          animation: "fadeUp 0.8s 0.2s ease both",
        }}
      >
        Upload documents, collaborate live, and get citation-backed answers from
        your own knowledge base — powered by hybrid AI retrieval.
      </p>

      {/* Buttons */}
      <div
        className="flex items-center gap-3 mb-14 flex-wrap justify-center"
        style={{ animation: "fadeUp 0.8s 0.3s ease both" }}
      >
        <Link href="/signup" className="no-underline">
          <button
            className="text-[14.5px] font-medium px-7 py-3 rounded-[10px] text-white cursor-pointer transition-all hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg,#7C6FFF,#4F46E5)",
              boxShadow:
                "0 0 0 1px rgba(124,111,255,0.3),0 8px 32px rgba(124,111,255,0.25)",
            }}
          >
            Start for free →
          </button>
        </Link>
        <Link href="#demo" className="no-underline">
          <button
            className="text-[14.5px] font-[400] px-7 py-3 rounded-[10px] cursor-pointer transition-all hover:text-white"
            style={{
              color: "rgba(255,255,255,0.55)",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.042)",
              backdropFilter: "blur(12px)",
            }}
          >
            Watch 2-min demo
          </button>
        </Link>
      </div>

      {/* Meta row */}
      <div
        className="flex items-center gap-6 text-[12.5px] flex-wrap justify-center"
        style={{
          color: "rgba(255,255,255,0.28)",
          animation: "fadeUp 0.8s 0.4s ease both",
        }}
      >
        {["No credit card", "Free for 3 members", "Live in 5 minutes"].map(
          (item) => (
            <span key={item} className="flex items-center gap-1.5">
              <span style={{ color: "#0FCFB0" }}>✓</span>
              {item}
            </span>
          )
        )}
      </div>

      {/* Glass mockup */}
      <div
        className="relative z-10 w-full max-w-[860px] mt-16"
        style={{ animation: "fadeUp 0.9s 0.5s ease both" }}
      >
        <HeroMockup />
      </div>

      {/* Keyframes injected once at hero level */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes glow {
          0%,100% { box-shadow: 0 0 6px #0FCFB0; }
          50%      { box-shadow: 0 0 14px #0FCFB0; }
        }
      `}</style>
    </section>
  );
}
