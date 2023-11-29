"use client";

import { Header } from "@/components/Header";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <main className="w-full min-h-full">
      <Header isLoginPage={false} />
      <p>Olá {session?.user?.name}</p>
    </main>
  );
}
