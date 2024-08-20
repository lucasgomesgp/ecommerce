"use client"

import { AddressOption, IInfoData, PaymentType } from "@/utils/types/IInfoData";
import { Dispatch, SetStateAction, createContext } from "react";

export const infoMock: IInfoData = {
    address: {
        firstName: "",
        lastName: "",
        country: "",
        companyName: "",
        streetAddress: "",
        apartment: "",
        phone: "",
        city: "",
        state: "",
        postalCode: "",
        billingAddress: false,
    },
    total: 0,
    addressPayment: AddressOption.SAMEBILLINGADDRESS,
    card_id: "",
    items: [],
    paymentMethod: PaymentType.CASH,
    subTotal: 0,
    orderId: 1,
};
interface FormCheckoutInterface {
    info: IInfoData,
    setInfo: Dispatch<SetStateAction<IInfoData>>,
}
export const FormCheckoutContext = createContext({} as FormCheckoutInterface);