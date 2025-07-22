import { format } from "date-fns";
import { twMerge } from "tailwind-merge";

export function OrderTag({
  status,
  text,
  date,
}: {
  status: "ACTIVE" | "CANCELLED" | "COMPLETED";
  text: string;
  date?: string;
}) {
  return (
    <div
      className={twMerge(
        "w-full flex flex-wrap gap-9 rounded-lg py-6 pl-7 relative mt-[50px]",
        status === "CANCELLED" && "bg-red-500",
        status === "ACTIVE" && "bg-white-light",
        status === "COMPLETED" && "bg-green-600"
      )}
      style={{
        border: "0.5px solid rgba(128, 125, 126, 0.20)",
      }}
    >
      {date && (
        <p className="font-semibold text-gray-light">
          {format(date, "d  MMM yyyy kk:mm a")}
        </p>
      )}
      <p
        className={twMerge(
          "font-semibol",
          status === "ACTIVE" && "text-gray-light-text-menu",
          status !== "ACTIVE" && "text-white"
        )}
      >
        {text}
      </p>
      <div
        className="bg-white-light h-6 w-10 top-[-35%] left-32 absolute"
        style={{
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          border: "0.5px solid rgba(128, 125, 126, 0.20)",
        }}
      />
    </div>
  );
}
