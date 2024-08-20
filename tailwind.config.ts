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
        "resume": "#B2BCCA",
        "white-bar": "#EDEEF2",
        "black-gray": "#3F4646",
        "blue-text": "#020246",
        "black-title": "#2A2F2F",
        "black-text": "#333333",
        "gray-light": "#807D7E",
        "gray-light-opacity": "#D9D9D9",
        "gray-text": "#1E1E1E",
        "gray-text-light": "#7F7F7F",
        "gray-text-colors": "#8A8989",
        "gray-text-menu": "#3C4242",
        "gray-border-one": "#66666640",
        "text-gray": "#666666",
        "gray-icon": "#404040",
        "gray-border": "#BEBCBD",
        "gray-border-step": "#D0D5DD",
        "gray-card": "#E4E4E4",
        "gray-border-opacity": "#BEBCBD66",
        "purple-principal": "#8A33FD",
        "overlay-modal": "rgba(0,0,0,0.4)",
        "resume-text": "#101828",
      },
    },
    fontFamily: {
      causten: ["var(--font-causten)"],
      coreSans: ["var(--font-core-sans)"],
      montserrat: ["var(--font-montserrat)"],
      inter: ["var(--font-inter)"]
    },
    boxShadow: {
      "steps": "12px 12px 36px 6px rgba(2, 2, 70, 0.12)",
    }
  },
};
export default config;
