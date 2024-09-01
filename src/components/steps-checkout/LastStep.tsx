"use client"

import "../../styles/summary.css";

import { useContext, useState } from "react";

import { CaretDown } from "@phosphor-icons/react";
import { FormCheckoutContext } from "@/app/context/FormCheckoutContext";
import { ItemsResumeCheckout } from "../ItemsResumeCheckout";
import { LoadingSpinner } from "../LoadingSpinner";
import { ShoppingCartContext } from "@/app/context/ShoppingCartContext";
import { createAddress } from "@/services/createAddress";
import { createOrder } from "@/services/createOrder";
import { currencyFormatter } from "@/utils/functions/currencyFormatter";
import { getSubTotal } from "@/utils/functions/getSubTotal";
import { getTotal } from "@/utils/functions/getTotal";
import { toast } from "sonner";
import { useCouponsStorage } from "@/hooks/useCouponsStorage";
import { useItemsStorage } from "@/hooks/useItemsStorage";

interface Props {
    changeStepNumber: (stepNumber: number) => void;
}
export function LastStep({ changeStepNumber }: Props) {
    const [isLoading, setIsLoading] = useState(false);
    const { info, setInfo } = useContext(FormCheckoutContext);
    const { items, setItems } = useContext(ShoppingCartContext);
    const { getCoupon } = useCouponsStorage();
    const total = currencyFormatter(getTotal(items, Number(getCoupon()?.percentage) || 0));
    const { removeItems } = useItemsStorage();
    const { removeCoupon } = useCouponsStorage();

    async function handleMakeOrder() {
        try {
            const {
                id,
                apartment
                , billingAddress
                , city
                , companyName
                , country
                , firstName
                , lastName
                , phone
                , postalCode
                , state
                , streetAddress

            } = info.address;
            setIsLoading(true);
            toast("Loading...", {
                duration: 2000,
            });
            const data = await createOrder(
                info.paymentMethod,
                items,
                info.total,
                info.card_id,
            );
            if (!id) {
                await createAddress({
                    country,
                    city,
                    state,
                    phone,
                    postalCode,
                    companyName,
                    streetAddress,
                    apartment,
                    firstName,
                    lastName,
                    billingAddress,
                    deliveryInstruction: "",
                    shippingAddress: false,
                });
            }
            setIsLoading(false);
            removeItems();
            setItems([]);
            removeCoupon();
            setInfo({
                ...info,
                orderId: data.order.id,
            });
            changeStepNumber(6);
            toast.success("Congratulations! Your order has completed");
        } catch (err) {
            toast.error(`Something has wrong`);
        }
    }
    return (
        <>
            <section className="flex flex-col gap-4 w-full max-w-[50%] shadow-steps p-8 rounded-lg mb-4 font-inter">
                <div className="flex flex-col border border-resume p-2 rounded-md gap-4">
                    <div className="flex flex-wrap  items-center justify-between">
                        <p>Order Review</p>
                        <CaretDown color="#000000" size={15} />
                    </div>
                    <div className="flex flex-wrap items-center justify-between">
                        <p>{items.length} items selected</p>
                        <p>{total}</p>
                    </div>
                </div>
                <div className="flex flex-col border border-resume p-2 rounded-md gap-4">
                    <details data-id="details">
                        <summary>
                            <p className="font-bold">Itens on Cart</p>
                        </summary>
                        <ItemsResumeCheckout />
                    </details>
                </div>
                <div className="flex flex-col border border-resume p-2 rounded-md gap-4">
                    <p>
                        Check out Summary
                    </p>
                    <div className="flex items-center justify-between">
                        <p className="text-resume-text text-sm font-medium">Subtotal</p>
                        <p> {currencyFormatter(
                            getSubTotal(items, Number(getCoupon()?.percentage || 0))
                        )}
                        </p>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="text-resume-text text-sm font-medium">Discount</p>
                        <p>{info.subTotal ? currencyFormatter(info.total - info.subTotal) : currencyFormatter(0)}</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="text-resume-text text-sm font-medium">Shipping</p>
                        <p>{currencyFormatter(5)}</p>
                    </div>
                    <div className="border-t border-resume">
                        <div className="flex items-center justify-between">
                            <p className="text-resume-text text-sm font-medium">Total</p>
                            <p className="text-resume-text text-sm font-medium">{total}</p>
                        </div>

                    </div>
                </div>
                <button
                    className="py-[14px] flex items-center justify-center gap-2 px-7 rounded-lg text-white font-medium text-lg hover:opacity-70 transition-all border bg-purple-principal"
                    onClick={handleMakeOrder}
                >
                    {isLoading ?
                        <LoadingSpinner />
                        :
                        <span>Buy {total}</span>
                    }

                </button>
            </section>
        </>
    );
}