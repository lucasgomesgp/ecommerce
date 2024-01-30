import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { causten, coreSans } from "@/utils/constants/localFonts";
import ShoppingCartProvider from "@/components/ShopProvider";
import { Montserrat } from "next/font/google";
import { Toaster } from "sonner";

import "./utils.css";
import "./globals.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { WishContextProvider } from "@/components/WishContextProvider";
import AuthClientProvider from "@/components/AuthClientProvider";

export const metadata: Metadata = {
  title: "Euphoria",
  description: "Place where you can buy and choose your favorite products",
};
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", weight: ["400", "500", "700", "800"] });
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${causten.variable} ${coreSans.variable}  font-causten`}>
        <AuthClientProvider session={session}>
          <Toaster richColors position="top-right" closeButton />
          <ShoppingCartProvider>
            <WishContextProvider>
              {children}
            </WishContextProvider>
          </ShoppingCartProvider>
        </AuthClientProvider>
      </body>
    </html>
  );
}
