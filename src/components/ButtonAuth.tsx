import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  isActive?: boolean;
}
export function ButtonAuth({ text, isActive, ...rest }: Props) {
  return (
    <button
      className={`${
        isActive ? "bg-purple-principal text-white" : " text-purple-principal bg-transparent border-gray-text"
      }  w-36  py-3 border rounded-lg`}
      {...rest}
    >
      {text}
    </button>
  );
}
