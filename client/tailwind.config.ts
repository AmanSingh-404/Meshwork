import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        bg: "#060608",
        surface: "rgba(255,255,255,0.042)",
        accent: "#7C6FFF",
        "accent-dark": "#4F46E5",
        teal: "#0FCFB0",
      },
      backdropBlur: {
        glass: "24px",
      },
      animation: {
        "drift-1": "drift1 18s ease-in-out infinite alternate",
        "drift-2": "drift2 22s ease-in-out infinite alternate",
        "drift-3": "drift3 16s ease-in-out infinite alternate",
        "fade-up": "fadeUp 0.8s ease both",
        glow: "glow 2s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        spin: "spin 0.9s linear infinite",
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        drift1: {
          from: { transform: "translate(0,0) scale(1)" },
          to: { transform: "translate(80px,60px) scale(1.15)" },
        },
        drift2: {
          from: { transform: "translate(0,0) scale(1)" },
          to: { transform: "translate(-60px,80px) scale(1.1)" },
        },
        drift3: {
          from: { transform: "translate(0,0) scale(1)" },
          to: { transform: "translate(40px,-50px) scale(1.2)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%,100%": { boxShadow: "0 0 6px #0FCFB0" },
          "50%": { boxShadow: "0 0 14px #0FCFB0" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        blink: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
