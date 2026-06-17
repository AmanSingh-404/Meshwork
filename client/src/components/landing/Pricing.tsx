"use client";

import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useFadeUp } from "@/hooks/useFadeUp";

const PLANS = [
  {
    name: "Starter",
    price: "$0",
    period: "/ month · up to 3 members",
    features: [
      "3 team members",
      "10 documents",
      "AI Q&A with citations",
      "Real-time collaboration",
      "500 queries / month",
    ],
    cta: "Get started free",
    ctaHref: "/signup",
    featured: false,
  },
  {
    name: "Team",
    price: "$29",
    period: "/ month per workspace",
    features: [
      "Unlimited members",
      "200 documents",
      "Hybrid search + reranking",
      "Analytics dashboard",
      "Version history + audit log",
      "10,000 queries / month",
    ],
    cta: "Start free trial",
    ctaHref: "/signup?plan=team",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    features: [
      "Unlimited everything",
      "SSO / SAML",
      "Self-hosted option",
      "Custom model config",
      "Dedicated support + SLA",
    ],
    cta: "Talk to us",
    ctaHref: "/contact",
    featured: false,
  },
];

export function Pricing() {
  const ref = useFadeUp();

  return (
    <section
      id="pricing"
      className="relative z-10"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(255,255,255,0.018)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div ref={ref} className="max-w-[1160px] mx-auto px-10 py-24">
        <SectionHeader
          eyebrow="Pricing"
          title="Simple, team-first pricing."
          subtitle="Start free. Upgrade when your team grows."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 max-w-[900px] fade-up">
          {PLANS.map((plan) => (
            <div key={plan.name} className="relative">
              {plan.featured && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-[3px] rounded-full text-[10px] font-semibold text-white uppercase tracking-[.05em] whitespace-nowrap z-10"
                  style={{
                    background: "linear-gradient(135deg,#7C6FFF,#4F46E5)",
                  }}
                >
                  Most popular
                </div>
              )}
              <GlassCard className="h-full" featured={plan.featured}>
                <p
                  className="text-[11px] font-medium tracking-[.12em] uppercase mb-2.5"
                  style={{ color: "rgba(255,255,255,0.28)" }}
                >
                  {plan.name}
                </p>
                <div className="text-[42px] font-bold tracking-[-0.05em] text-white leading-none mb-1">
                  {plan.price}
                </div>
                <p
                  className="text-[13px] mb-7"
                  style={{ color: "rgba(255,255,255,0.28)" }}
                >
                  {plan.period}
                </p>

                <ul className="list-none mb-7 flex flex-col">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2.5 text-[13.5px] font-light py-1.5"
                      style={{
                        color: "rgba(255,255,255,0.55)",
                        borderBottom: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <span style={{ color: "#0FCFB0", fontSize: 12 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link href={plan.ctaHref} className="no-underline block">
                  <button
                    className="w-full text-[14px] font-medium py-3 rounded-[10px] cursor-pointer transition-all hover:-translate-y-px"
                    style={
                      plan.featured
                        ? {
                            background:
                              "linear-gradient(135deg,#7C6FFF,#4F46E5)",
                            color: "#fff",
                            boxShadow:
                              "0 0 0 1px rgba(124,111,255,0.3),0 8px 32px rgba(124,111,255,0.25)",
                          }
                        : {
                            color: "rgba(255,255,255,0.55)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            background: "rgba(255,255,255,0.042)",
                            backdropFilter: "blur(12px)",
                          }
                    }
                  >
                    {plan.cta}
                  </button>
                </Link>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
