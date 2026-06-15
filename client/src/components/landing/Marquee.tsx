const ITEMS = [
  "Hybrid RAG retrieval",
  "Real-time CRDT sync",
  "Citation-backed answers",
  "pgvector embeddings",
  "BM25 + semantic search",
  "Role-based access",
  "Usage analytics",
  "PDF · Markdown · Code",
];

// Doubled for seamless infinite loop
const ALL = [...ITEMS, ...ITEMS];

export function Marquee() {
  return (
    <div
      className="relative z-10 overflow-hidden py-4"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(255,255,255,0.02)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div
        className="flex gap-10 w-max"
        style={{ animation: "marquee 30s linear infinite" }}
      >
        {ALL.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 text-[11.5px] font-medium tracking-[.1em] uppercase whitespace-nowrap"
            style={{ color: "rgba(255,255,255,0.28)" }}
          >
            {item}
            <span style={{ color: "#7C6FFF", fontSize: 9 }}>✦</span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="marquee"] { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
