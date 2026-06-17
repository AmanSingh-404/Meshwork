import Link from "next/link";

const LINKS = ["Privacy", "Terms", "Docs", "GitHub", "Status"];

export function Footer() {
  return (
    <footer
      className="relative z-10 flex items-center justify-between flex-wrap gap-4 px-10 py-9"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(255,255,255,0.01)",
      }}
    >
      <Link href="/" className="flex items-center gap-2 no-underline">
        <div
          className="w-[26px] h-[26px] rounded-[7px] flex items-center justify-center text-[11px] font-bold text-white"
          style={{ background: "linear-gradient(135deg,#7C6FFF,#4F46E5)" }}
        >
          IQ
        </div>
        <span
          className="text-[14px] font-semibold tracking-[-0.02em] text-white"
        >
          CollabIQ
        </span>
      </Link>

      <ul className="flex gap-6 list-none">
        {LINKS.map((l) => (
          <li key={l}>
            <Link
              href="#"
              className="text-[13px] no-underline transition-colors hover:text-white/55"
              style={{ color: "rgba(255,255,255,0.28)" }}
            >
              {l}
            </Link>
          </li>
        ))}
      </ul>

      <span
        className="text-[12px]"
        style={{ color: "rgba(255,255,255,0.28)" }}
      >
        © 2026 CollabIQ
      </span>
    </footer>
  );
}
