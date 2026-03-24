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
        cream: "#FDFBF7",
        sand: "#F5F0E8",
        warm: "#EDE8DD",
        beige: { DEFAULT: "#D4CBBA", dark: "#B8AC98" },
        taupe: "#7A7062",
        stone: "#5A5148",
        oak: "#3D362F",
        charcoal: "#1A1714",
        accent: { DEFAULT: "#9E8B6E", light: "#C2B49A", dark: "#7A6B55" },
        navy: "#162A4B",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["DM Sans", "system-ui", "sans-serif"],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '36': '9rem',
      },
    },
  },
  plugins: [],
};
export default config;
