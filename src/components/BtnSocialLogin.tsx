import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export function BtnSocialLogin({ children }: Props) {
  return (
    <button className="flex items-center justify-center gap-3 border py-4 rounded-lg border-gray-text-menu text-purple-principal w-[567px] max-w-[567px] hover:bg-purple-principal hover:text-white hover:opacity-90 transition-all">
      {children}
    </button>
  );
}
