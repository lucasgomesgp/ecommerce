"use client";
import { CartProduct } from "@/svgs/cart-product";
import React, { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  withIcon?: boolean
}
export default function ButtonAddToCart({ withIcon = true, ...rest }: Props) {

  return (
    <button
      className="hover:opacity-80  disabled:cursor-not-allowed transition-opacity rounded-lg bg-purple-principal text-lg text-white flex gap-3 items-center justify-center w-[200px] h-[46px] max-w-[200px] max-h-[46px]"
      {...rest}
    >
      {withIcon && (
        <CartProduct />
      )}
      Add to cart
    </button>
  );
}
