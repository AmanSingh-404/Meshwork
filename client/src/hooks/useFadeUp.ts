"use client";

import { useEffect, useRef } from "react";

export function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // stagger siblings
            const siblings = [
              ...entry.target.parentElement!.querySelectorAll<HTMLElement>(
                ".fade-up:not(.visible)"
              ),
            ];
            const idx = siblings.indexOf(entry.target as HTMLElement);
            setTimeout(() => {
              (entry.target as HTMLElement).classList.add("visible");
            }, idx * 70);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe the element and all .fade-up descendants
    const targets = el.querySelectorAll<HTMLElement>(".fade-up");
    targets.forEach((t) => observer.observe(t));

    return () => observer.disconnect();
  }, []);

  return ref;
}
