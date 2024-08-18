import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
export function ButtonSocialMedia({ children, ...rest }: Props) {
  return (
    <button
      className={
        "bg-white-light w-[37px] h-[37px] flex items-center justify-center rounded-lg hover:opacity-70 transition-all"
      }
      {...rest}
    >
      {children}
    </button>
  );
}
