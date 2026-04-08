import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#1A8FE3",      // User's base color
          navy: "#0F172A",      // Dark navy for text headings
          dark: "#020B13",      // Deep contrast (for navbars/footers)
          glow: "#2BB6C5",      // Teal/Cyan accent
          accent: "#2BB6C5",    // Teal/Cyan accent
          cyan: "#2BB6C5",      // Matching njs pharma reference
          slate: "#475569",     // Body text
          light: "#F0F4F8",     // Soft off-white background
          card: "#FFFFFF",      // Pure white cards
        },
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        dm: ["var(--font-dm-sans)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "brand-gradient": "linear-gradient(135deg, #1A8FE3 0%, #22D3EE 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "shimmer": "shimmer 2s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "count-up": "countUp 2s ease-out forwards",
        "gradient-x": "gradientX 4s ease infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "dash": "dash 2s linear infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(-6deg)" },
          "50%": { transform: "translateY(-20px) rotate(-6deg)" },
        },
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(26,143,227,0.3)" },
          "50%": { boxShadow: "0 0 50px rgba(26,143,227,0.8)" },
        },
        dash: {
          "to": { strokeDashoffset: "0" },
        },
        countUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        "glow-blue": "0 0 30px rgba(26,143,227,0.4)",
        "glow-blue-lg": "0 0 60px rgba(26,143,227,0.5)",
        "card": "0 8px 32px rgba(0,0,0,0.4)",
        "card-hover": "0 16px 48px rgba(26,143,227,0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
