"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { useFadeUp } from "@/hooks/useFadeUp";

const STEPS = [
  {
    n: "01",
    title: "Upload your docs",
    desc: "Drop PDFs, Markdown, or code notes. The async pipeline parses, chunks, and embeds them automatically.",
  },
  {
    n: "02",
    title: "Invite your team",
    desc: "Share an invite link. Set roles — owner, editor, or viewer. Everyone works in one live workspace.",
  },
  {
    n: "03",
    title: "Ask in plain English",
    desc: "Type any question. Hybrid search finds the best chunks and the AI streams a cited answer in under a second.",
  },
  {
    n: "04",
    title: "Review and improve",
    desc: "Rate answers, watch the analytics dashboard, tune retrieval settings — the system gets smarter over time.",
  },
];

export function HowItWorks() {
  const ref = useFadeUp();

  return (
    <section
      id="how"
      className="relative z-10"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(255,255,255,0.018)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div ref={ref} className="max-w-[1160px] mx-auto px-10 py-24">
        <SectionHeader eyebrow="Process" title="From upload to answer in four steps." />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line — visible on lg */}
          <div
            className="hidden lg:block absolute top-[22px] left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg,transparent 4%,rgba(255,255,255,0.08) 20%,rgba(255,255,255,0.08) 80%,transparent 96%)",
            }}
          />

          {STEPS.map((step) => (
            <div key={step.n} className="relative fade-up group">
              <div
                className="w-11 h-11 rounded-[11px] flex items-center justify-center text-[13px] font-semibold mb-6 relative z-10 transition-all duration-250"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(8px)",
                  color: "rgba(255,255,255,0.28)",
                }}
              >
                <style>{`
                  .step-box:hover {
                    background: rgba(124,111,255,0.15) !important;
                    border-color: rgba(124,111,255,0.35) !important;
                    color: #7C6FFF !important;
                  }
                `}</style>
                {step.n}
              </div>
              <h3 className="text-[15px] font-semibold tracking-[-0.015em] text-white mb-2">
                {step.title}
              </h3>
              <p
                className="text-[13.5px] font-light leading-[1.65]"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
