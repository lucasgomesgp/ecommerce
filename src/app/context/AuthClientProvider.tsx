"use client"
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface AuthClientProviderProps {
  children: ReactNode;
  session: any;
}
export default function AuthClientProvider({
  children,
  session,
}: AuthClientProviderProps) {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  );
}
