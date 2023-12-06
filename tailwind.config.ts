import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        accent: {
          1: "hsl(var(--color-accent1) / <alpha-value>)",
          2: "hsl(var(--color-accent2) / <alpha-value>)",
        },
        bkg: "hsl(var(--color-bkg) / <alpha-value>)",
        content: "hsl(var(--color-content) / <alpha-value>)",
        nav: {
          1: "hsl(var(--color-nav1) / <alpha-value>)",
          2: "hsl(var(--color-nav2) / <alpha-value>)",
        },
        navText: "hsl(var(--color-nav-text) / <alpha-value>)",
        hov: "hsl(var(--color-hover) / <alpha-value>)",
      },
      width: {
        medium: "669px",
      },
    },
  },
  plugins: [],
};
export default config;
