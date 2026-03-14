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
          DEFAULT: "#2563EB",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(37, 99, 235, 0.07), 0 10px 20px -2px rgba(37, 99, 235, 0.04)",
        "soft-lg": "0 10px 40px -10px rgba(37, 99, 235, 0.15)",
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
        "hero-grid": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "48px 48px" },
        },
        "hero-orb-1": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(24px, -20px) scale(1.06)" },
          "66%": { transform: "translate(-16px, 12px) scale(1.02)" },
        },
        "hero-orb-2": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(-24px, 20px) scale(1.08)" },
          "66%": { transform: "translate(16px, -12px) scale(1.03)" },
        },
        "hero-orb-center": {
          "0%, 100%": { transform: "translate(-50%, -50%) scale(1)" },
          "50%": { transform: "translate(-50%, -50%) scale(1.05)" },
        },
      },
      animation: {
        "hero-gradient": "hero-gradient 10s ease-in-out infinite",
        "hero-grid": "hero-grid 25s linear infinite",
        "hero-orb-1": "hero-orb-1 16s ease-in-out infinite",
        "hero-orb-2": "hero-orb-2 20s ease-in-out infinite",
        "hero-orb-center": "hero-orb-center 12s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
