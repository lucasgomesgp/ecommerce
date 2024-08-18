"use client"
import { IShoppingCartItems } from "@/utils/types/IShoppingCartItems";
import { useState } from "react";

export function useItemToCart() {
  const [itemToCart, setItemToCart] = useState<IShoppingCartItems>({
    id: 0,
    color: "",
    imageSrc: "",
    price: 0,
    quantity: 1,
    size: "",
    title: "",
  });
  return {itemToCart, setItemToCart};
}
