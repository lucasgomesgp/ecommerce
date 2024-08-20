"use client"

import Image from "next/image";
import { ShoppingCartContext } from "@/app/context/ShoppingCartContext";
import { useContext } from "react";

export function ItemsResumeCheckout() {
    const { items } = useContext(ShoppingCartContext);

    return (
        <div className="flex flex-col gap-4">
            {
                items.length >= 1 && items.map(({ id, color, quantity, imageSrc, title, price }) => (
                    <div className="flex flex-wrap  items-center justify-between" key={id}>
                        <Image src={imageSrc} width={63} height={63} alt={title} className="w-[30px] h-[30px]" />
                        <p className="font-bold text-sm max-w-[380px] w-full text-gray-text-menu">
                            {title}
                            <span className="text-gray-light"> x {quantity}</span>
                        </p>
                        <p className="font-bold text-sm text-gray-text-menu">
                            Color : <span className="text-gray-light font-light">
                                {color}
                            </span>
                        </p>
                    </div>
                ))
            }
        </div>
    );
}