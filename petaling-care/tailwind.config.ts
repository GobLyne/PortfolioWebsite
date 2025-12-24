import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors from the logo
        primary: {
          50: "#e6f7f5",
          100: "#ccefeb",
          200: "#99dfd7",
          300: "#66cfc3",
          400: "#33bfaf",
          500: "#00af9b", // Main teal
          600: "#008c7c",
          700: "#00695d",
          800: "#00463e",
          900: "#00231f",
        },
        secondary: {
          50: "#fff8e6",
          100: "#fef0cc",
          200: "#fde199",
          300: "#fcd266",
          400: "#fbc333",
          500: "#fab400", // Orange/Gold
          600: "#c89000",
          700: "#966c00",
          800: "#644800",
          900: "#322400",
        },
        accent: {
          50: "#e8f5e9",
          100: "#c8e6c9",
          200: "#a5d6a7",
          300: "#81c784",
          400: "#66bb6a",
          500: "#4caf50", // Green
          600: "#43a047",
          700: "#388e3c",
          800: "#2e7d32",
          900: "#1b5e20",
        },
        coral: {
          50: "#fef0ed",
          100: "#fce1db",
          200: "#f9c3b7",
          300: "#f6a593",
          400: "#f3876f",
          500: "#f0694b", // Coral/Orange accent
          600: "#c0543c",
          700: "#903f2d",
          800: "#602a1e",
          900: "#30150f",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-slower": "float 10s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 20s linear infinite",
        "bounce-slow": "bounce 3s infinite",
        "gradient": "gradient 8s linear infinite",
        "shimmer": "shimmer 2s linear infinite",
        "blob": "blob 7s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
