import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/templates/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/table.js",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          100: "#a0a4ab",
          200: "#313131",
        },
        neutral: {
          50: "#FBFAFC",
          100: "#9eb0c7",
          200: "#212d3b",
        },
        shadow: "#4a6382",
        red: "#ff3a33",
        green: "#32ca5b",
        muted: "#e4e4e7",
      },
      keyframes: {
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
      animation: {
        shimmer: "shimmer 2s infinite",
      },
    },
  },
  // darkMode: "class",
  plugins: [nextui()],
};
export default config;
