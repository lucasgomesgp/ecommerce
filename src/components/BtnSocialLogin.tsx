import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: ReactNode;
}
export function BtnSocialLogin({ children, ...rest }: Props) {
  return (
    <button className="flex items-center justify-center gap-3 border py-4 rounded-lg border-gray-text-menu text-purple-principal w-[567px] max-w-[567px] hover:bg-purple-principal hover:text-white hover:opacity-90 transition-all" {...rest}>
      {children}
    </button>
  );
}
