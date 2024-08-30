"use client"

import Image from "next/image";
import { ShoppingCartContext } from "@/app/context/ShoppingCartContext";
import { currencyFormatter } from "@/utils/functions/currencyFormatter";
import { getDiscountValue } from "@/utils/functions/getDiscountValue";
import { getSubTotal } from "@/utils/functions/getSubTotal";
import { getTotal } from "@/utils/functions/getTotal";
import { useContext } from "react";
import { useCouponsStorage } from "@/hooks/useCouponsStorage";

export function OrderSummary() {
    const { items } = useContext(ShoppingCartContext);
    const { getCoupon } = useCouponsStorage();
    return (
        <div className="flex flex-col border shadow-md px-[22px]">
            <p className="font-coreSans font-semibold text-2xl mt-10">Order Summary</p>
            <div className="w-full h-[1px] bg-white-bar my-[15px]" />
            {items.length >= 1 && items.map(({ id, color, quantity, imageSrc, title, price }) => (
                <div className="flex flex-col" key={id}>
                    <div className="flex justify-between gap-[15px]  items-center">
                        <Image src={imageSrc} width={63} height={63} alt={title} className="w-[63px] h-[63px]" />
                        <div className="flex flex-col gap-[5px]">
                            <p className="font-bold text-sm w-[180px] text-gray-text-menu">
                                {title}
                                <span className="text-gray-light"> x {quantity}</span>
                            </p>
                            <p className="font-bold text-sm text-gray-text-menu">
                                Color : <span className="text-gray-light font-light">
                                    {color}
                                </span>
                            </p>
                        </div>
                        <p className="font-bold text-gray-light text-sm">{currencyFormatter(price)}</p>
                    </div>
                    <div className="w-full h-[1px] bg-white-bar my-[15px]" />
                </div>
            ))}
            <div className="flex flex-col border-b border-b-white-bar pb-[15px] gap-[15px]">
                <div className="flex items-center justify-between">
                    <p className="font-bold text-lg">Subtotal</p>
                    <p className="font-bold text-lg">{currencyFormatter(getSubTotal(items, 0))}</p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="font-bold text-lg">Savings</p>
                    <p className="font-bold text-lg">{currencyFormatter(getDiscountValue(items, Number(getCoupon()?.percentage) || 0))}</p>
                </div>
            </div>
            <div className="flex items-center border-b border-b-white-bar py-[20px] justify-between">
                <p className="font-bold text-lg">Shipping</p>
                <p className="font-bold text-lg">$5.00</p>
            </div>
            <div className="flex items-center justify-between pt-[20px] pb-[40px]">
                <p className="font-bold text-lg">Total</p>
                <p className="font-bold text-lg">{currencyFormatter(getTotal(items, Number(getCoupon()?.percentage) || 0))}</p>
            </div>
        </div>
    );
}