// Auto-converted for Vercel build
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#c8a959",
        dark: "#0a0a0a",
        graygold: "#a5977b",
      },
    },
  },
  plugins: [],
};
export default config;
