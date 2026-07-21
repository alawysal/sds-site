import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0B1D3C",
        royal: "#174EA6",
        cyan: "#21A6E2",
        graphite: "#404854",
        mist: "#E6E8EB"
      },
      fontFamily: {
        heading: ["var(--font-manrope)", "Manrope", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "sans-serif"]
      },
      boxShadow: {
        premium: "0 24px 80px rgba(11, 29, 60, 0.14)",
        glow: "0 18px 60px rgba(33, 166, 226, 0.2)"
      },
      borderRadius: {
        sds: "8px"
      }
    }
  },
  plugins: []
};

export default config;
