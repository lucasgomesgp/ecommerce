"use client"
import { IAddressResponse } from "@/utils/types/IAddressResponse"
import { CardAddress } from "./CardAddress";
import { useState } from "react";

interface Props {
    addresses: IAddressResponse[];
    removeItem: (id: string, userId: string) => void;
}

export function AddressCardsArea({ addresses, removeItem }: Props) {
    const [items, setItems] = useState(addresses);
    return (
        <div className="flex flex-wrap gap-[25px] lg:grid lg:grid-cols-2 lg:gap-6 mt-[30px]">
            {items.length > 0 && items.map(({ id, userId, name, phone, streetAddress, apartment, isDefaultBillingAddress, isDefaultShippingAddress }) => (
                <CardAddress
                    key={id}
                    id={id}
                    userId={userId}
                    name={name}
                    phone={phone}
                    street={streetAddress || ""}
                    apartment={apartment || ""}
                    isDefaultBillingAddress={isDefaultBillingAddress}
                    isDefaultShippingAddress={isDefaultShippingAddress}
                    removeItem={removeItem}
                />
            ))}
        </div>
    )
}
