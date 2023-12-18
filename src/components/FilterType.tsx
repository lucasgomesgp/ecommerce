import { ReactNode } from "react";
import "../app/filterType.css";
interface Props {
  title: string;
  children?: ReactNode;
  isActive?: boolean;
}

export function FilterType({ title, isActive = false, children }: Props) {
  return (
    <details
      className="filterType font-semibold flex flex-col w-[295px] border border-t-gray-border  project-details"
      open
      data-active={isActive}
    >
      <summary className="flex justify-between items-center px-7 py-5">
        <h3
          className={`text-[22px]  font-bold ${
            isActive ? "text-gray-text-menu" : "text-gray-border"
          }`}
        >
          {title}
        </h3>
      </summary>
      {children}
    </details>
  );
}
