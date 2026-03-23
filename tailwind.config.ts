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
        beige: {
          DEFAULT: "#D4CBBA",
          dark: "#B8AC98",
        },
        taupe: "#8C8272",
        stone: "#6B6259",
        oak: "#4A423A",
        charcoal: "#2C2824",
        accent: {
          DEFAULT: "#9E8B6E",
          light: "#C2B49A",
          dark: "#7A6B55",
        },
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["DM Sans", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
