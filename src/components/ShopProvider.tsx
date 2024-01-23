"use client"
import { ReactNode, useEffect, useState } from "react";
import { ShoppingCartContext } from "@/app/context/ShoppingCartContext";
import { IShoppingCartItems } from "@/utils/types/IShoppingCartItems";
import { useItemsStorage } from "@/hooks/useItemsStorage";

interface IShoppingCartProvider {
  children: ReactNode;
}

export default function ShoppingCartProvider({
  children,
}: IShoppingCartProvider) {
  const [items, setItems] = useState<IShoppingCartItems[]>([]);
  const { itemsStorage, setItemsOnStorage } = useItemsStorage();

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
