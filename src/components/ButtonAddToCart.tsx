"use client";
import { ShoppingCartContext } from "@/contexts/ShoppingCartContext";
import { CartProduct } from "@/svgs/cart-product";
import React, { ButtonHTMLAttributes, useContext } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}
export default function ButtonAddToCart({ ...rest }: Props) {
  const { items, setItems } = useContext(ShoppingCartContext);

  return (
    <button
      className="hover:opacity-80  disabled:cursor-not-allowed transition-opacity rounded-lg bg-purple-principal text-lg text-white flex gap-3 items-center justify-center w-[200px] h-[46px] max-w-[200px] max-h-[46px]"
      {...rest}
    >
      <CartProduct />
      Add to cart
    </button>
  );
}
