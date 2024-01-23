"use client"

import { IWishItems } from "@/utils/types/IWishItems";
import { Dispatch, SetStateAction, createContext } from "react"

interface IWishlistContext {
    wishItems: Array<IWishItems>;
    setWishItems: Dispatch<SetStateAction<IWishItems[]>>;
}
export const WishlistContext = createContext({} as IWishlistContext);