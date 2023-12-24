"use client";
import Link from "next/link";
import { AnchorHTMLAttributes, ReactNode } from "react";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href: string;
  backgroundIsPurple?: boolean;
}
export function LinkMenu({ children, href, backgroundIsPurple = false, ...rest }: Props) {
  return (
    <Link
      className={`w-11 h-11 flex items-center justify-center rounded-lg transition-all hover:scale-110 z-50   ${backgroundIsPurple ? "bg-purple-principal":"bg-white-light"}`}
      href={href}
      {...rest}
    >
      {children}
    </Link>
  );
}
