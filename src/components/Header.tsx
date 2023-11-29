"use client";

import { Logo } from "../svgs/logo";
import Link from "next/link";
import { ButtonMenu } from "./ButtonMenu";
import {
  HeartIcon,
  MagnifyingGlassIcon,
  UserIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { ButtonAuth } from "./ButtonAuth";

interface Props {
  isLoginPage: boolean;
}
export function Header({ isLoginPage }: Props) {
  return (
    <header className="flex flex-wrap items-center justify-around border-b-gray-border border py-8">
      <Link href={"/"}>
        <Logo />
      </Link>
      <nav className={`${isLoginPage ? "hidden" : ""}`}>
        <ul className="flex gap-10 text-gray-light font-thin">
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
        <ButtonMenu>
          <UserIcon width={20} height={20} />
        </ButtonMenu>
        <ButtonMenu>
          <ShoppingCartIcon width={20} height={20} />
        </ButtonMenu>
      </div>
    </header>
  );
}
