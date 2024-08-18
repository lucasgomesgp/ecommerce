import localFont from "next/font/local";
const causten = localFont({
  src: [
    {
      path: "../../fonts/Causten-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/Causten-RegularOblique.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../fonts/Causten-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../fonts/Causten-MediumOblique.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../fonts/Causten-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../fonts/Causten-SemiBoldOblique.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../fonts/Causten-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../fonts/Causten-BoldOblique.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-causten",
});
const coreSans = localFont({
  src: [
    {
      path: "../../fonts/CoreSansG-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../fonts/CoreSansG-Heavy.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-core-sans",
});

export { causten, coreSans };
