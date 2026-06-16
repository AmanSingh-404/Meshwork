"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useFadeUp } from "@/hooks/useFadeUp";

const TESTIMONIALS = [
  {
    quote: `We used to spend 20 minutes hunting through Notion before standup. Now someone asks CollabIQ and`,
    highlight: "gets the exact answer with a source link",
    rest: " in two seconds.",
    name: "Aryan Kapoor",
    role: "Staff Engineer, Fintech",
    initials: "AK",
    gradient: "linear-gradient(135deg,#7C6FFF,#4F46E5)",
  },
  {
    quote: `The real-time editor is genuinely useful for incident postmortems.`,
    highlight: "Four engineers editing the same doc",
    rest: " with an AI assistant watching all of it — completely different workflow.",
    name: "Shreya Reddy",
    role: "Engineering Manager, Series B",
    initials: "SR",
    gradient: "linear-gradient(135deg,#0FCFB0,#0D8A7A)",
  },
  {
    quote: `Onboarding used to take three weeks just to understand the codebase.`,
    highlight: "CollabIQ cut that to a few days.",
    rest: " New hires just ask questions and get cited answers from the actual docs.",
    name: "Marcus Jensen",
    role: "Head of Platform, Scale-up",
    initials: "MJ",
    gradient: "linear-gradient(135deg,#F59E0B,#D97706)",
  },
];

export function Testimonials() {
  const ref = useFadeUp();

  return (
    <section className="relative z-10">
      <div ref={ref} className="max-w-[1160px] mx-auto px-10 py-24">
        <SectionHeader
          eyebrow="What teams say"
          title="Trusted by engineering teams."
          subtitle="From fast-moving startups to established platform teams who needed a better way to share knowledge."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 fade-up">
          {TESTIMONIALS.map((t) => (
            <GlassCard key={t.name}>
              <div className="text-[13px] mb-4" style={{ color: "#F59E0B", letterSpacing: 1 }}>
                ★★★★★
              </div>
              <p
                className="text-[14px] font-light leading-[1.75] mb-6"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                &ldquo;{t.quote}{" "}
                <strong className="text-white font-[400]">{t.highlight}</strong>
                {t.rest}&rdquo;
              </p>
              <div className="flex items-center gap-2.5">
                <div
                  className="w-[33px] h-[33px] rounded-full flex items-center justify-center text-[11px] font-semibold flex-shrink-0 text-white"
                  style={{ background: t.gradient }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-[13px] text-white font-medium">{t.name}</div>
                  <div className="text-[12px]" style={{ color: "rgba(255,255,255,0.28)" }}>
                    {t.role}
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
