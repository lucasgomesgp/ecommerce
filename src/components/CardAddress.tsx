"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

interface Props {
    id: string;
    userId: string;
    name: string;
    phone: string;
    street: string;
    apartment: string;
    isDefaultShippingAddress: boolean;
    isDefaultBillingAddress: boolean;
    removeItem: (id: string, userId: string) => void;
}
export function CardAddress({ id, userId, name, phone, street, apartment, isDefaultShippingAddress, isDefaultBillingAddress, removeItem }: Props) {
    const router = useRouter();
    const [isRemoving, setIsRemoving] = useState(false);
    const handleRemoveItem = async () => {
        try {
            setIsRemoving(true);
            await removeItem(id, userId);
            router.refresh();
            toast.success("Address removed");
            setIsRemoving(false);
        } catch (err) {
            toast.error(`${err}`);
        }
    }
    return (
        <div className={`flex flex-col gap-[20px] justify-center bg-white-light px-[43px] py-[25px] rounded-xl max-w-[435px] min-h-[272px] ${isRemoving ? "opacity-40 cursor-not-allowed" : ""
            } `}>
            <p className="text-gray-text-menu font-semibold text-xl">{name}</p>
            <p className="text-gray-light">{phone}</p>
            <p className="text-gray-light">{street}</p>
            <div className="flex flex-wrap items-center gap-3">
                <p className="text-gray-light border border-gray-light  py-[7px] px-[19px] rounded-lg">{apartment}</p>
                {isDefaultShippingAddress && (
                    <p className="text-gray-light border border-gray-light  py-[7px] px-[19px] rounded-lg">Default shipping address</p>
                )}
                {isDefaultBillingAddress && (
                    <p className="text-gray-light border border-gray-light  py-[7px] px-[19px] rounded-lg">Default billing address</p>
                )}
            </div>
            <div className="flex gap-[21px]">
                <button
                    className="font-semibold text-gray-text-menu relative before:absolute before:top-0 before:-right-[10px] before:bg-gray-light-opacity before:w-[1px] before:h-[19px]"
                    onClick={handleRemoveItem}
                >
                    Remove
                </button>
                <button className="font-semibold text-gray-text-menu">Edit</button>
                {!isDefaultShippingAddress || !isDefaultBillingAddress && (
                    <button className="font-semibold text-gray-text-menu relative before:absolute before:top-0 before:-left-[10px] before:bg-gray-light-opacity before:w-[1px] before:h-[19px]">Set as default</button>
                )}
            </div>
        </div>
    );
}
