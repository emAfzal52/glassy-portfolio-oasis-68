import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#9b87f5",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#1A1F2C",
          foreground: "#ffffff",
        },
        sections: {
          hero: "#0A051E", // Dark purple background
          about: "#0A051E",
          services: "#0A051E",
          testimonials: "#0A051E",
          footer: "#0A051E",
        },
        accent: {
          DEFAULT: "#8B5CF6",
          foreground: "#ffffff",
        },
        glass: {
          DEFAULT: "rgba(255, 255, 255, 0.05)",
          dark: "rgba(0, 0, 0, 0.3)",
        },
      },
      keyframes: {
        "dot-slide": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(8px)" },
        }
      },
      animation: {
        "dot-slide": "dot-slide 1.5s infinite",
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;