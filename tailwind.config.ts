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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--burgundy)",
        "secondary-1": "var(--secondary-1)",
        "secondary-2": "var(--secondary-2)",
        "tertiary-1": "var(--tertiary-1)",
        "tertiary-2": "var(--tertiary-2)",
      },
      keyframes: {
        blink: {
          "0%": { opacity: "0.2" },
          "20%": { opacity: "1" },
          "100%": { opacity: "0.2" },
        },
        fall: {
          "0%": {
            transform: "translateY(0px) rotate(180deg)",
          },
          "100%": {
            transform: "translateY(100px) rotate(-180deg)",
          },
        },
      },
      animation: {
        blink: "blink 1.4s both infinite",
        fall: "fall 2s ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
