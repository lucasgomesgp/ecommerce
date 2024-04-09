import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentProps<"button"> {
  title: string;
  isActive?: boolean;
}
export function ButtonOrderOption({ title, isActive, ...rest }: Props) {
  return (
    <button
      className={twMerge(
        "text-[22px] font-coreSans py-3 px-[53px] hover:bg-white-light hover:border-b-[3px] hover:border-gray-text-menu rounded-t-md",
        isActive && "bg-white-light border-b-[3px] border-gray-text-menu"
      )}
      {...rest}
    >
      {title}
    </button>
  );
}
