import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  anotherClassName?: string;
}
export function ButtonMenu({ children, anotherClassName, ...rest }: Props) {
  return (
    <button
      className={`bg-white-light w-11 h-11 flex items-center justify-center rounded-lg transition-all hover:scale-110 z-50 ${anotherClassName}`}
      {...rest}
    >
      {children}
    </button>
  );
}
