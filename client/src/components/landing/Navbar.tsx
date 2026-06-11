"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#how", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#", label: "Docs" },
  { href: "#", label: "Changelog" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 h-[60px] transition-all duration-300"
      style={
        scrolled
          ? {
              background: "rgba(6,6,8,0.75)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }
          : { borderBottom: "1px solid transparent" }
      }
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 no-underline">
        <LogoIcon />
        <span className="text-[15px] font-semibold tracking-[-0.02em] text-white">
          CollabIQ
        </span>
      </Link>

      {/* Center links */}
      <ul className="hidden md:flex items-center gap-7 list-none">
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-[13.5px] text-white/55 hover:text-white transition-colors no-underline"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Right CTA */}
      <div className="flex items-center gap-2.5">
        <Link
          href="/login"
          className="text-[13px] font-medium px-4 py-[7px] rounded-lg text-white/55 hover:text-white transition-colors no-underline"
        >
          Sign in
        </Link>
        <Link
          href="/signup"
          className="text-[13px] font-medium px-4 py-[7px] rounded-lg text-white no-underline transition-all hover:-translate-y-px"
          style={{
            background: "linear-gradient(135deg,#7C6FFF,#4F46E5)",
            boxShadow: "0 0 20px rgba(124,111,255,0.25)",
          }}
        >
          Get started
        </Link>
      </div>
    </nav>
  );
}

function LogoIcon() {
  return (
    <div
      className="w-[26px] h-[26px] rounded-[7px] flex items-center justify-center text-[11px] font-bold tracking-[-0.03em] text-white"
      style={{ background: "linear-gradient(135deg,#7C6FFF,#4F46E5)" }}
    >
      IQ
    </div>
  );
}
