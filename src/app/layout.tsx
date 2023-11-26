import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const causten = localFont({
  src: [
    {
      path: "../fonts/Causten-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Causten-RegularOblique.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/Causten-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Causten-SemiBoldOblique.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-causten",
});

export const metadata: Metadata = {
  title: "Ecommerce",
  description: "Place where you can buy and choose your favorite products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={causten.className}>{children}</body>
    </html>
  );
}
