import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import AuthClientProvider from "./context/AuthClientProvider";
import { causten, coreSans } from "@/utils/constants/localFonts";

import "./utils.css";
import "./globals.css";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


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
      <body className={`${causten.variable} ${coreSans.variable} font-causten`}>
        <AuthClientProvider session={session}>{children}</AuthClientProvider>
      </body>
    </html>
  );
}
