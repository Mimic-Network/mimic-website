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
        "gradient-glassy":
          "linear-gradient(90deg,rgba(255,255,255,0.1) 40%,rgba(255,255,255,0.1) 100%)",
      },
      colors: {
        primary: {
          900: "#2F58B0",
        },
        secondary: {
          900: "#4A4A4A"
        }
      },
    },
  },
  plugins: [],
};
export default config;
