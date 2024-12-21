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
          hero: "#2F4F4F", // Dark slate gray
          about: "#808080", // Medium gray
          services: "#D3D3D3", // Light gray
          testimonials: "#36454F", // Charcoal
          footer: "#1A1A1A", // Very dark gray
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
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
