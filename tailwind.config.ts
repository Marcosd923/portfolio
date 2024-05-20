import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      azul: "#0a192f",
      azulclaro: "#007bff",
      azulmedio: "#003f88",
      celeste: "#98c1d9",
      naranja: "#F95738",
      naranjaoscuro: "#f8421f ",
      gris: "#e2e8f0",
      grisclaro: "#d1d5db",
      grismedio: "#64748b",
      grisoscuro: "#475569",
      negro: "#000000",
      blanco: "#FFFFFF",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
