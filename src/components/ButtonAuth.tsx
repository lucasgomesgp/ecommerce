import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
  isActive?: boolean;
}
export function ButtonAuth({ text, isActive, href : linkSended, ...rest }: Props) {
  return (
    <Link
      className={`${
        isActive ? "bg-purple-principal text-white" : " text-purple-principal bg-transparent border-gray-text"
      }  w-36  py-3 border rounded-lg`}
      href={linkSended || "/"}
      {...rest}
    >
      {text}
    </Link>
  );
}
