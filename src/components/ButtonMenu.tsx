import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export function ButtonMenu({ children }: Props) {
  return <button className="bg-white-light w-11 h-11 flex items-center justify-center rounded-lg">{children}</button>;
}
