"use client";
import { IShoppingCartItems } from "@/utils/types/IShoppingCartItems";
import { Dispatch, SetStateAction, createContext } from "react";

interface IShoppingCartContext {
  items: Array<IShoppingCartItems>;
  setItems: Dispatch<SetStateAction<IShoppingCartItems[]>>;
}

export const ShoppingCartContext = createContext({} as IShoppingCartContext);
