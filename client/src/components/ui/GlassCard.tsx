import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  featured?: boolean;
}

export function GlassCard({ children, className, featured }: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[14px] p-7 transition-all duration-250 group",
        "hover:-translate-y-[3px]",
        className
      )}
      style={{
        background: featured
          ? "rgba(124,111,255,0.08)"
          : "rgba(255,255,255,0.042)",
        border: featured
          ? "1px solid rgba(124,111,255,0.45)"
          : "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: featured
          ? "0 0 60px rgba(124,111,255,0.1), inset 0 0 60px rgba(124,111,255,0.04)"
          : undefined,
      }}
    >
      {/* Top shimmer line on hover */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          background:
            "linear-gradient(90deg,transparent,rgba(124,111,255,.5),transparent)",
        }}
      />
      {/* Inner glass gradient */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[14px]"
        style={{
          background:
            "linear-gradient(135deg,rgba(255,255,255,0.06) 0%,transparent 60%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
