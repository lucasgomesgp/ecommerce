import type { Metadata } from "next";
import localFont from "next/font/local";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import "./globals.css";
import AuthClientProvider from "./context/AuthClientProvider";

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
  title: "Euphoria",
  description: "Place where you can buy and choose your favorite products",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={causten.className}>
        <AuthClientProvider session={session}>{children}</AuthClientProvider>
      </body>
    </html>
  );
}
