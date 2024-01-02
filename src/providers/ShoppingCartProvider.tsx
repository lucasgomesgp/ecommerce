"use client"
import { ReactNode, useState } from "react";
import { ShoppingCartContext } from "@/contexts/ShoppingCartContext";
import { IShoppingCartItems } from "@/utils/types/IShoppingCartItems";

interface IShoppingCartProvider {
  children: ReactNode;
}

export default function ShoppingCartProvider({
  children,
}: IShoppingCartProvider) {
  const [items, setItems] = useState<IShoppingCartItems[]>([]);
  return (
    <ShoppingCartContext.Provider value={{ items, setItems }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
