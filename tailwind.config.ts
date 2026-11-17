import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        border: "var(--border)",
        // gradient stops (for use as bg-grad-1 etc.)
        "grad-1": "var(--grad-1)",
        "grad-2": "var(--grad-2)",
        "grad-3": "var(--grad-3)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        syne: ["var(--font-syne)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0, 0, 0, 0.4), 0 10px 24px -8px rgba(124, 92, 255, 0.12)",
        "soft-lg":
          "0 12px 40px -12px rgba(0, 0, 0, 0.55), 0 8px 24px -8px rgba(124, 92, 255, 0.18)",
        glow: "0 0 0 1px rgba(124, 92, 255, 0.4), 0 8px 30px -6px rgba(124, 92, 255, 0.5)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      keyframes: {
        "hero-gradient": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "0.8" },
        },
        aurora: {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
            opacity: "0.6",
          },
          "33%": {
            transform: "translate(30px, -24px) scale(1.08)",
            opacity: "0.8",
          },
          "66%": {
            transform: "translate(-20px, 16px) scale(1.03)",
            opacity: "0.65",
          },
        },
        "aurora-2": {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
            opacity: "0.5",
          },
          "50%": {
            transform: "translate(-28px, 22px) scale(1.1)",
            opacity: "0.75",
          },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-line": {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "hero-gradient": "hero-gradient 10s ease-in-out infinite",
        aurora: "aurora 18s ease-in-out infinite",
        "aurora-2": "aurora-2 22s ease-in-out infinite",
        marquee: "marquee var(--marquee-duration, 40s) linear infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out both",
        "pulse-line": "pulse-line 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
