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
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { ButtonAuth } from "./ButtonAuth";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { settingsClass } from "@/utils/constants/settingsClass";

interface Props {
  isLoginPage?: boolean;
}

export function Header({ isLoginPage = false }: Props) {
  const { data: session } = useSession();
  const [toogleProfileInfo, setToggleProfileInfo] = useState(false);
  const router = useRouter();

  return (
    <header className="flex flex-wrap items-center justify-around border-b-gray-border border py-8 sticky top-0 z-50 bg-white">
      <Link href={"/"}>
        <Logo />
      </Link>
      <nav
        className={`${
          isLoginPage ? "hidden" : ""
        } mt-8 mb-8 md:m-0 font-medium`}
      >
        <ul className="flex flex-wrap gap-10 text-gray-light ">
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="/men">Men</Link>
          </li>
          <li>
            <Link href="/women">Women</Link>
          </li>
          <li>
            <Link href="/combos">Combos</Link>
          </li>
          <li>
            <Link href="/joggers">Joggers</Link>
          </li>
        </ul>
      </nav>
      <form>
        <div className="relative">
          <input
            type="text"
            name="elementSearch"
            placeholder="Search"
            className="w-full px-5 py-3 bg-white-light placeholder:p-7 rounded-lg outline-none"
          />
          <button className="absolute left-5 top-1/3">
            <MagnifyingGlassIcon width={14} height={14} color="#807D7E" />
          </button>
        </div>
      </form>
      <div className={`${!isLoginPage ? "hidden" : "flex gap-7"} `}>
        <ButtonAuth isActive text="Login" href="/login" />
        <ButtonAuth text="Sign Up" href="/" />
      </div>
      <div className={`${isLoginPage ? "hidden" : "flex gap-3"}`}>
        <ButtonMenu>
          <HeartIcon width={20} height={20} />
        </ButtonMenu>
        <ButtonMenu
          anotherClassName="relative"
          onClick={() => {
            const user = session?.user?.name;
            if (user) {
              setToggleProfileInfo(!toogleProfileInfo);
            } else {
              router.push("/login");
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
                href="/"
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
                <ArrowLeftOnRectangleIcon
                  width={20}
                  height={20}
                  color="#FFFFFF"
                />
                Logout
              </button>
            </div>
          )}
        </ButtonMenu>
        <ButtonMenu>
          <ShoppingCartIcon width={20} height={20} />
        </ButtonMenu>
      </div>
    </header>
  );
}
