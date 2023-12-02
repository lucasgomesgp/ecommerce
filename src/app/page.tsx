"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <main className="w-full min-h-full">
      <Header isLoginPage={false} />
      <Footer />
    </main>
  );
}
