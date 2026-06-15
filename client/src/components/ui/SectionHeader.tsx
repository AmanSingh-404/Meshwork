interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center,
}: SectionHeaderProps) {
  return (
    <div className={center ? "text-center" : ""}>
      <p
        className="fade-up text-[11px] font-medium tracking-[.14em] uppercase mb-4"
        style={{ color: "#7C6FFF" }}
      >
        {eyebrow}
      </p>
      <h2
        className="fade-up font-bold tracking-[-0.04em] leading-[1.08] max-w-[580px] mb-4"
        style={{
          fontSize: "clamp(30px,4vw,48px)",
          ...(center ? { marginLeft: "auto", marginRight: "auto" } : {}),
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="fade-up text-[16px] font-light leading-[1.75] max-w-[440px] mb-16"
          style={{
            color: "rgba(255,255,255,0.55)",
            ...(center ? { marginLeft: "auto", marginRight: "auto" } : {}),
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
