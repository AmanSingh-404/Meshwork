"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useFadeUp } from "@/hooks/useFadeUp";

export function Features() {
  const ref = useFadeUp();

  return (
    <section id="features" className="relative z-10">
      <div ref={ref} className="max-w-[1160px] mx-auto px-10 py-24">
        <SectionHeader
          eyebrow="Platform"
          title="Everything your engineering team needs to stay aligned."
          subtitle="From document ingestion to AI-powered Q&A — built for speed, depth, and real collaboration."
        />

        <div className="grid grid-cols-12 gap-2.5">
          {/* AI Q&A — large */}
          <div className="col-span-12 md:col-span-5 fade-up">
            <GlassCard className="h-full">
              <CardIcon>🤖</CardIcon>
              <CardLabel>AI assistant</CardLabel>
              <CardTitle>Ask anything. Get cited answers.</CardTitle>
              <CardDesc>
                Hybrid BM25 + vector retrieval with reranking. Every answer
                cites the exact source chunk.
              </CardDesc>
              <MiniChat />
            </GlassCard>
          </div>

          {/* Real-time collab */}
          <div className="col-span-12 md:col-span-4 fade-up">
            <GlassCard className="h-full">
              <CardIcon>👥</CardIcon>
              <CardLabel>Real-time collaboration</CardLabel>
              <CardTitle>Edit together, in real time.</CardTitle>
              <CardDesc>
                CRDT-powered notes with presence, live cursors, and threaded
                comments that stay in sync.
              </CardDesc>
              <PresenceRow />
            </GlassCard>
          </div>

          {/* Latency stat */}
          <div className="col-span-12 md:col-span-3 fade-up">
            <GlassCard className="h-full">
              <CardLabel>Median latency</CardLabel>
              <div
                className="text-[56px] font-bold tracking-[-0.05em] leading-none mt-3"
                style={{
                  background:
                    "linear-gradient(135deg,#fff,rgba(124,111,255,.8))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                0.8<span className="text-[22px]">s</span>
              </div>
              <CardDesc className="mt-2.5 text-[12.5px]">
                Hybrid retrieval + reranking, streamed response.
              </CardDesc>
            </GlassCard>
          </div>

          {/* Retrieval quality */}
          <div className="col-span-12 md:col-span-4 fade-up">
            <GlassCard className="h-full">
              <CardIcon>🔍</CardIcon>
              <CardLabel>Retrieval</CardLabel>
              <CardTitle>Finds it even when keywords miss.</CardTitle>
              <CardDesc>
                BM25 + semantic vectors merged and reranked for precision at
                every query.
              </CardDesc>
              <LatencyBars />
            </GlassCard>
          </div>

          {/* Upload */}
          <div className="col-span-12 md:col-span-5 fade-up">
            <GlassCard className="h-full">
              <CardIcon>📁</CardIcon>
              <CardLabel>Document ingestion</CardLabel>
              <CardTitle>Upload. Indexed in seconds.</CardTitle>
              <CardDesc>
                Async pipeline parses, chunks, and embeds PDFs, Markdown, and
                code files via BullMQ workers.
              </CardDesc>
              <FileList />
            </GlassCard>
          </div>

          {/* Roles */}
          <div className="col-span-12 md:col-span-3 fade-up">
            <GlassCard className="h-full">
              <CardLabel>Access control</CardLabel>
              <CardTitle>Roles that make sense.</CardTitle>
              <RoleList />
            </GlassCard>
          </div>

          {/* Analytics */}
          <div className="col-span-12 md:col-span-6 fade-up">
            <GlassCard className="h-full">
              <CardIcon>📊</CardIcon>
              <CardLabel>Usage analytics</CardLabel>
              <CardTitle>See where your knowledge has gaps.</CardTitle>
              <CardDesc>
                Track queries, top-cited docs, answer latency, failure rate, and
                per-user activity.
              </CardDesc>
              <AnalyticsRow />
            </GlassCard>
          </div>

          {/* Version history */}
          <div className="col-span-12 md:col-span-6 fade-up">
            <GlassCard className="h-full">
              <CardIcon>🕐</CardIcon>
              <CardLabel>History & audit</CardLabel>
              <CardTitle>Full audit trail, always.</CardTitle>
              <CardDesc>
                Every upload, edit, and query logged with timestamps and actor.
                Roll back documents, stay compliant, review changes with full
                diffs.
              </CardDesc>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Sub-components ─── */

function CardIcon({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="w-[38px] h-[38px] rounded-[10px] flex items-center justify-center text-[17px] mb-[18px]"
      style={{
        background: "rgba(124,111,255,0.15)",
        border: "1px solid rgba(124,111,255,0.2)",
      }}
    >
      {children}
    </div>
  );
}

function CardLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[10.5px] font-medium tracking-[.12em] uppercase mb-[7px]"
      style={{ color: "rgba(255,255,255,0.28)" }}
    >
      {children}
    </p>
  );
}

function CardTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-[18px] font-semibold tracking-[-0.025em] text-white mb-2 leading-[1.25]">
      {children}
    </h3>
  );
}

function CardDesc({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-[13.5px] font-light leading-[1.65] ${className ?? ""}`}
      style={{ color: "rgba(255,255,255,0.55)" }}
    >
      {children}
    </p>
  );
}

function MiniChat() {
  return (
    <div className="mt-5 flex flex-col gap-2">
      <div
        className="self-end max-w-[90%] rounded-[10px] rounded-br-[2px] px-3 py-2.5 text-[12px]"
        style={{
          background: "rgba(124,111,255,0.15)",
          border: "1px solid rgba(124,111,255,0.25)",
          color: "rgba(255,255,255,0.9)",
        }}
      >
        How does our rate-limiting middleware work?
      </div>
      <div
        className="self-start max-w-[95%] rounded-[10px] rounded-bl-[2px] px-3 py-2.5 text-[12px] leading-[1.6]"
        style={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.08)",
          color: "rgba(255,255,255,0.55)",
        }}
      >
        Rate limiting uses a sliding-window algorithm backed by Redis…
        <div className="mt-1.5 flex flex-wrap gap-1">
          {["📄 infra-notes.md", "📄 middleware-spec.pdf"].map((c) => (
            <span
              key={c}
              className="rounded px-1.5 py-[1px] text-[10px]"
              style={{
                background: "rgba(15,207,176,0.1)",
                border: "1px solid rgba(15,207,176,0.2)",
                color: "#0FCFB0",
              }}
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function PresenceRow() {
  const avatars = [
    { initials: "AK", gradient: "linear-gradient(135deg,#7C6FFF,#4F46E5)" },
    { initials: "SR", gradient: "linear-gradient(135deg,#0FCFB0,#0D8A7A)" },
    { initials: "MJ", gradient: "linear-gradient(135deg,#F59E0B,#D97706)" },
    { initials: "+5", gradient: "rgba(255,255,255,0.1)", muted: true },
  ];
  return (
    <div className="flex items-center mt-5">
      {avatars.map((av, i) => (
        <div
          key={i}
          className="w-[30px] h-[30px] rounded-full flex items-center justify-center text-[10px] font-semibold -mr-2.5 last:mr-0"
          style={{
            background: av.gradient,
            border: "2px solid rgba(6,6,8,0.8)",
            color: av.muted ? "rgba(255,255,255,0.3)" : "#fff",
            fontSize: av.muted ? 9 : undefined,
          }}
        >
          {av.initials}
        </div>
      ))}
      <span
        className="ml-5 text-[12.5px]"
        style={{ color: "rgba(255,255,255,0.28)" }}
      >
        <span style={{ color: "#0FCFB0" }}>8 online</span> · editing right now
      </span>
    </div>
  );
}

function LatencyBars() {
  const bars = [
    { label: "p50", width: "38%", color: "#0FCFB0", val: "380ms" },
    { label: "p90", width: "68%", color: "#7C6FFF", val: "820ms" },
    { label: "p99", width: "90%", color: "#F59E0B", val: "2.1s" },
  ];
  return (
    <div className="mt-5 flex flex-col gap-2">
      {bars.map((b) => (
        <div
          key={b.label}
          className="flex items-center gap-2.5 text-[11px]"
          style={{ color: "rgba(255,255,255,0.28)" }}
        >
          <span className="w-[28px]">{b.label}</span>
          <div
            className="flex-1 h-[3px] rounded-sm overflow-hidden"
            style={{ background: "rgba(255,255,255,0.08)" }}
          >
            <div
              className="h-full rounded-sm"
              style={{
                width: b.width,
                background: b.color,
                animation: "growBar 1.4s ease-out both",
              }}
            />
          </div>
          <span className="w-8 text-right" style={{ color: "rgba(255,255,255,0.55)" }}>
            {b.val}
          </span>
        </div>
      ))}
      <style>{`@keyframes growBar{from{width:0}}`}</style>
    </div>
  );
}

function FileList() {
  const files = [
    { name: "📄 api-architecture.pdf", status: "✓ Indexed", done: true },
    { name: "📝 backend-notes.md", status: "✓ Indexed", done: true },
    { name: "🗂 onboarding-runbook.pdf", status: "⟳ Processing", done: false },
  ];
  return (
    <div className="mt-4 flex flex-col gap-1.5">
      {files.map((f) => (
        <div
          key={f.name}
          className="flex items-center justify-between px-3 py-2 rounded-[9px] text-[12.5px]"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.55)" }}>{f.name}</span>
          <span
            className={f.done ? "" : "flex items-center gap-1"}
            style={{
              color: f.done ? "#0FCFB0" : "#7C6FFF",
              fontSize: 11.5,
            }}
          >
            {!f.done && (
              <span style={{ display: "inline-block", animation: "spin 0.9s linear infinite" }}>
                ⟳
              </span>
            )}
            {f.done ? f.status : "Processing"}
          </span>
        </div>
      ))}
      <style>{`@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}

function RoleList() {
  const roles = [
    { name: "Owner", badge: "Full access", color: "#7C6FFF", bg: "rgba(124,111,255,.15)" },
    { name: "Editor", badge: "Upload + edit", color: "#0FCFB0", bg: "rgba(15,207,176,.12)" },
    { name: "Viewer", badge: "Read + ask", color: "rgba(255,255,255,0.3)", bg: "rgba(255,255,255,.06)" },
  ];
  return (
    <div className="mt-4 flex flex-col">
      {roles.map((r, i) => (
        <div
          key={r.name}
          className="flex items-center justify-between py-2 text-[13px]"
          style={{
            color: "rgba(255,255,255,0.55)",
            borderBottom: i < roles.length - 1 ? "1px solid rgba(255,255,255,0.08)" : undefined,
          }}
        >
          {r.name}
          <span
            className="text-[10px] font-medium px-2 py-[2px] rounded-[4px]"
            style={{ color: r.color, background: r.bg }}
          >
            {r.badge}
          </span>
        </div>
      ))}
    </div>
  );
}

function AnalyticsRow() {
  const stats = [
    { val: "1,284", label: "queries / week", color: "#fff" },
    { val: "97%", label: "success rate", color: "#0FCFB0" },
    { val: "0.8s", label: "avg latency", color: "#7C6FFF" },
  ];
  return (
    <div className="flex gap-2.5 mt-5">
      {stats.map((s) => (
        <div
          key={s.label}
          className="flex-1 rounded-[10px] p-3"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div
            className="text-[22px] font-bold tracking-[-0.03em]"
            style={{ color: s.color }}
          >
            {s.val}
          </div>
          <div className="text-[11px] mt-0.5" style={{ color: "rgba(255,255,255,0.28)" }}>
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
