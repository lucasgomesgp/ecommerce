"use client"
import { ReactNode, useEffect, useState } from "react";
import { ShoppingCartContext } from "@/contexts/ShoppingCartContext";
import { IShoppingCartItems } from "@/utils/types/IShoppingCartItems";
import { useLocalStorage } from "@/hooks/useLocalStorage";

interface IShoppingCartProvider {
  children: ReactNode;
}

export default function ShoppingCartProvider({
  children,
}: IShoppingCartProvider) {
  const [items, setItems] = useState<IShoppingCartItems[]>([]);
  const { itemsStorage, setItemsOnStorage, getItemsOnLocalStorage } = useLocalStorage("shopItems");

  useEffect(() => {
    if (itemsStorage?.length >= 1) {
      setItems(itemsStorage);
    } else {
      setItemsOnStorage([]);
    }
  }, []);

  return (
    <ShoppingCartContext.Provider value={{ items, setItems }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
