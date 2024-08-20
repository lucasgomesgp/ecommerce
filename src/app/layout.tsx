import "../styles/utils.css";
import "./globals.css";

import { Inter, Montserrat } from "next/font/google";
import { causten, coreSans } from "@/utils/constants/localFonts";

import AuthClientProvider from "@/components/AuthClientProvider";
import { FormCheckoutProvider } from "@/components/FormCheckoutProvider";
import type { Metadata } from "next";
import ShoppingCartProvider from "@/components/ShopProvider";
import { Toaster } from "sonner";
import { WishContextProvider } from "@/components/WishContextProvider";
import { authOptions } from "@/utils/constants/authOptions";
import { getServerSession } from "next-auth";

export const metadata: Metadata = {
  title: "Euphoria",
  description: "Place where you can buy and choose your favorite products",
};
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", weight: ["400", "500", "700", "800"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", weight: ["400", "500", "700", "800"] });
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${inter.variable} ${causten.variable} ${coreSans.variable}  font-causten`}>
        <AuthClientProvider session={session}>
          <ShoppingCartProvider>
            <WishContextProvider>
              <FormCheckoutProvider>
                {children}
                <Toaster richColors position="top-right" closeButton />
              </FormCheckoutProvider>
            </WishContextProvider>
          </ShoppingCartProvider>
        </AuthClientProvider>
      </body>
    </html>
  );
}
