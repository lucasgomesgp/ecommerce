"use client"
import { WishlistContext } from "@/app/context/WishlistContext";
import { useWishStorage } from "@/hooks/useWishStorage";
import { IWishItems } from "@/utils/types/IWishItems";
import { ReactNode, useEffect, useState } from "react";

export function WishContextProvider({ children }: { children: ReactNode }) {
    const [wishItems, setWishItems] = useState<IWishItems[]>([]);
    const {wishItemsOnStorage, setWishItemsOnStorage } = useWishStorage();

    useEffect(() => {
        if (wishItemsOnStorage?.length >= 1) {
            setWishItems(wishItemsOnStorage);
        } else {
            setWishItemsOnStorage([]);
        }
    }, []);
    return (
        <WishlistContext.Provider value={{ wishItems, setWishItems }}>
            {children}
        </WishlistContext.Provider>
    );
}