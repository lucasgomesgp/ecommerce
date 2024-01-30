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
        "white-light": "#F6F6F6",
        "white-bar": "#EDEEF2",
        "black-gray": "#3F4646",
        "gray-light": "#807D7E",
        "gray-text": "#1E1E1E",
        "gray-text-colors": "#8A8989",
        "gray-text-menu": "#3C4242",
        "gray-border-one": "#66666640",
        "gray-icon": "#404040",
        "gray-border": "#BEBCBD",
        "gray-card":"#E4E4E4",
        "gray-border-opacity": "#BEBCBD66",
        "purple-principal": "#8A33FD",
      },
    },
    fontFamily: {
      causten: ["var(--font-causten)"],
      coreSans: ["var(--font-core-sans)"],
      montserrat: ["var(--font-montserrat)"]
    },
  },
};
export default config;
