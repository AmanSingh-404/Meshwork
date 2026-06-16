import Link from "next/link";

export function CTA() {
  return (
    <section
      className="relative z-10"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(255,255,255,0.015)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="max-w-[1160px] mx-auto px-10 py-24 flex items-center justify-between gap-12 flex-wrap">
        <h2
          className="font-bold tracking-[-0.05em] leading-[1.08] max-w-[580px]"
          style={{ fontSize: "clamp(30px,4vw,52px)" }}
        >
          Your team&apos;s knowledge deserves a{" "}
          <span
            style={{
              background: "linear-gradient(135deg,#7C6FFF,#0FCFB0)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            better home.
          </span>
        </h2>

        <div className="flex flex-col gap-3 items-start">
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
          <span
            className="text-[12px]"
            style={{ color: "rgba(255,255,255,0.28)" }}
          >
            No credit card · Free for 3 members · Live in 5 min
          </span>
        </div>
      </div>
    </section>
  );
}
