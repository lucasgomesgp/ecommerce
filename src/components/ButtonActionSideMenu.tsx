import { signOut, useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  destination?: string;
  children: ReactNode;
}
export function ButtonActionSideMenu({
  title,
  destination,
  children,
  ...rest
}: Props) {
  const pathname = usePathname();
  const { data: session } = useSession();
  const route = useRouter();

  function handleRedirect() {
    if (destination) {
      route.push(destination);
    }
  }
  return (
    <button
      className={`flex items-center justify-start gap-[15px] hover:opacity-80 transition-opacity py-[11px] max-w-[295px] w-[295px] cursor-pointer  disabled:opacity-70 disabled:cursor-not-allowed pl-[37px] rounded-tr-lg rounded-br-lg hover:scale-110 ${
        destination === pathname
          ? "bg-white-light border-l-2 border-l-gray-text-menu"
          : ""
      }`}
      {...rest}
      onClick={handleRedirect}
    >
      {children}
      <p className="text-gray-light text-lg font-semibold">{title}</p>
    </button>
  );
}
