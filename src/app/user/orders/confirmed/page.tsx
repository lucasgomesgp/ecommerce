import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Confirmed() {
  return (
    <main className="flex flex-col overflow-hidden ">
      <Header />
      <div className="relative w-full flex items-center justify-center">
        <Image
          src={"/assets/order-confirmed.png"}
          alt="Order confirmed"
          height={726}
          width={967}
          className="md:max-w-[967px] md:max-h-[726px] "
        />
        <Link
          href="/"
          className="absolute hidden lg:inline lg:bottom-52 lg:right-[420px] bg-purple-principal rounded-lg p-2 md:py-4 md:px-5 text-white font-medium hover:opacity-80 transition-opacity"
        >
          Continue Shopping
        </Link>
      </div>
      <Footer />
    </main>
  );
}
