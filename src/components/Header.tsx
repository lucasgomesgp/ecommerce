"use client";

import { Logo } from "../svgs/logo";
import Link from "next/link";
import { ButtonMenu } from "./ButtonMenu";
import {
  HeartIcon,
  MagnifyingGlassIcon,
  UserIcon,
  ShoppingCartIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import { ButtonAuth } from "./ButtonAuth";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { ReactNode, useContext, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { settingsClass } from "@/utils/constants/settingsClass";
import { LinkMenu } from "./LinkMenu";
import { ShoppingCartContext } from "@/app/context/ShoppingCartContext";
import { SignOut } from "@/svgs/sign-out";

interface Props {
  isLoginPage?: boolean;
  children?: ReactNode;
}

export function Header({ children, isLoginPage = false }: Props) {
  const { data: session } = useSession();
  const [toogleProfileInfo, setToggleProfileInfo] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { items } = useContext(ShoppingCartContext);

  function getTotalItemsOnCart() {
    let value = 0;
    items.map((current) => { value += current.quantity });
    return value;
  }
  let totalItemsOnCart = getTotalItemsOnCart();
  return (
    <header className="flex flex-wrap items-center justify-around border-b-gray-border border py-8 sticky top-0 z-30 bg-white">
      <Link href={"/"}>
        <Logo />
      </Link>
      <nav
        className={`${isLoginPage ? "hidden" : ""
          } mt-8 mb-8 md:m-0 font-medium`}
      >
        <ul className="flex flex-wrap gap-10 text-gray-light ">
          <li>
            <Link href="/user/cart">Shop</Link>
          </li>
          <li>
            <Link href="/shop/men">Men</Link>
          </li>
          <li>
            <Link href="/shop/women">Women</Link>
          </li>
          <li>
            <Link href="/shop/combos">Combos</Link>
          </li>
          <li>
            <Link href="/shop/joggers">Joggers</Link>
          </li>
        </ul>
      </nav>
       {children}
      <div className={`${!isLoginPage ? "hidden" : "flex gap-7"} `}>
        <ButtonAuth isActive text="Login" href="/login" />
        <ButtonAuth text="Sign Up" href="/" />
      </div>
      <div className={`${isLoginPage ? "hidden" : "flex gap-3"}`}>
        <LinkMenu href="/user/wishlist " backgroundIsPurple={pathname === "/user/wishlist"}>
          <HeartIcon width={20} height={20} color={pathname === "/user/wishlist" ? "#FFF" : "#000"} />
        </LinkMenu>
        <ButtonMenu
          anotherClassName="relative"
          onClick={() => {
            const user = session?.user?.name;
            if (user) {
              setToggleProfileInfo(!toogleProfileInfo);
            } else {
              router.push("/auth/login");
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setToggleProfileInfo(false);
            }
          }}
        >
          {session?.user?.image ? (
            <Image
              src={session?.user?.image}
              width={40}
              height={40}
              alt="User profile"
              priority
              className="w-full h-full rounded-lg"
            />
          ) : (
            <UserIcon width={20} height={20} />
          )}
          {toogleProfileInfo && session?.user?.image && (
            <div
              className="border z-[99] w-40 min-h-20 absolute -bottom-[150px] right-0 flex flex-col shadow-lg rounded-md before:absolute before:w-8 before:h-8 before:bg-white-light before:right-0 before:-top-[30px] before:shadow-2xl"
              id="triangle"
            >
              <Link
                className={`${settingsClass} bg-white-light  rounded-t-md `}
                href="/user/info"
              >
                <Cog6ToothIcon width={20} height={20} />
                Settings
              </Link>
              <button
                className={`${settingsClass} bg-red-500 text-white rounded-b-md `}
                onClick={() => {
                  signOut();
                }}
              >
                <SignOut />
                Logout
              </button>
            </div>
          )}
        </ButtonMenu>
        <LinkMenu href="/user/cart" backgroundIsPurple={pathname === "/user/cart"} style={{ position: "relative" }}>
          <ShoppingCartIcon width={20} height={20} color={pathname === "/user/cart" ? "#FFF" : "#000"} />
          {items?.length >= 1 && (
            <div className="absolute transition-all -top-2 -right-2 w-[20px] h-[20px] rounded-full font-thin p-2 font-coreSans flex items-center justify-center bg-red-700 text-white text-xs">
              {totalItemsOnCart}
            </div>
          )}
        </LinkMenu>
      </div>
    </header>
  );
}
