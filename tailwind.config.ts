import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["DM Sans", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
        serif: ["Lora", "serif"],
      },
      colors: {
        // Anthropic coral-orange — primary brand color
        primary: {
          50: "#fdf4f0",
          100: "#fbe8df",
          200: "#f6d0bf",
          500: "#e8926d",
          600: "#d97757",
          700: "#c4623d",
          800: "#a84e2f",
          900: "#8b3a22",
        },
        // Muted blue — accent
        accent: {
          400: "#7aadcc",
          500: "#6a9bcc",
          600: "#5789b8",
        },
        // Warm neutral palette (Anthropic sand tones)
        sand: {
          50: "#faf9f5",
          100: "#f5f4ef",
          200: "#e8e6dc",
          300: "#d4d2c7",
          400: "#c0bdb1",
          500: "#b0aea5",
          600: "#8a8880",
          700: "#6b6960",
          800: "#2a2a28",
          900: "#141413",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
