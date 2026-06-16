"use client";

export function OrbBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Top-left orb — deep indigo */}
      <div
        className="absolute rounded-full"
        style={{
          width: 700,
          height: 700,
          background:
            "radial-gradient(circle, rgba(59,40,204,0.55) 0%, transparent 70%)",
          filter: "blur(120px)",
          top: -200,
          left: -100,
          animation: "drift1 18s ease-in-out infinite alternate",
        }}
      />
      {/* Right orb — navy */}
      <div
        className="absolute rounded-full"
        style={{
          width: 600,
          height: 600,
          background:
            "radial-gradient(circle, rgba(13,26,140,0.45) 0%, transparent 70%)",
          filter: "blur(120px)",
          top: "30%",
          right: -150,
          animation: "drift2 22s ease-in-out infinite alternate",
        }}
      />
      {/* Bottom-center orb — teal */}
      <div
        className="absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, rgba(10,107,94,0.4) 0%, transparent 70%)",
          filter: "blur(120px)",
          bottom: -100,
          left: "30%",
          animation: "drift3 16s ease-in-out infinite alternate",
        }}
      />

      <style>{`
        @keyframes drift1 {
          from { transform: translate(0,0) scale(1); }
          to   { transform: translate(80px,60px) scale(1.15); }
        }
        @keyframes drift2 {
          from { transform: translate(0,0) scale(1); }
          to   { transform: translate(-60px,80px) scale(1.1); }
        }
        @keyframes drift3 {
          from { transform: translate(0,0) scale(1); }
          to   { transform: translate(40px,-50px) scale(1.2); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="drift"] { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
