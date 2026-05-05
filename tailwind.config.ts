import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: "hsl(var(--canvas) / <alpha-value>)",
          muted: "hsl(var(--canvas-muted) / <alpha-value>)",
          elevated: "hsl(var(--canvas-elevated) / <alpha-value>)",
        },
        foreground: {
          DEFAULT: "hsl(var(--foreground) / <alpha-value>)",
          muted: "hsl(var(--foreground-muted) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          muted: "hsl(var(--accent-muted) / <alpha-value>)",
          glow: "hsl(var(--accent-glow) / <alpha-value>)",
        },
        border: "hsl(var(--border) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "noise-soft":
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 160'%3E%3Cdefs%3E%3Cfilter id='n' x='-20%25' y='-20%25' width='140%25' height='140%25'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' stitchTiles='stitch'/%3E%3C/filter%3E%3C/defs%3E%3Crect width='160' height='160' fill='white' opacity='0.035' filter='url(%23n)'/%3E%3C/svg%3E\")",
        mesh: `
          radial-gradient(900px circle at 20% -10%, hsl(var(--accent) / 0.18), transparent 55%),
          radial-gradient(800px circle at 100% 0%, hsl(var(--accent-glow) / 0.22), transparent 50%),
          radial-gradient(600px circle at 0% 100%, hsl(var(--accent-muted) / 0.12), transparent 45%)
        `,
      },
      boxShadow: {
        glass:
          "0 0 0 1px hsl(var(--border) / 0.45), 0 10px 40px -24px hsl(0 0% 0% / 0.45)",
        "inner-soft": "inset 0 1px 0 0 hsl(0 0% 100% / 0.06)",
      },
      animation: {
        "gradient-shift": "gradient-shift 14s ease-in-out infinite alternate",
      },
      keyframes: {
        "gradient-shift": {
          "0%": { transform: "translate3d(-2%, 0, 0) scale(1.02)" },
          "100%": { transform: "translate3d(2%, -1%, 0) scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
