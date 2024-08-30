import { IShoppingCartItems } from "./IShoppingCartItems";

export enum AddressOption {
    SAMEBILLINGADDRESS = "sameBillingAddress",
    DIFFERENTBILLINGADDRESS = "differentShippingAddress"
};

export enum PaymentType {
    CARD = "CARD",
    CASH = "CASH",
    PAYPAL = "PAYPAL",
}

export interface IInfoData {
    address: {
        id?: string,
        firstName: string,
        lastName: string,
        country: string,
        companyName: string,
        streetAddress: string,
        apartment: string,
        phone: string,
        city: string,
        state: string,
        postalCode: string,
        billingAddress: boolean,
        deliveryInstruction: string,
    },
    addressPayment: AddressOption,
    paymentMethod: PaymentType,
    items: IShoppingCartItems[],
    total: number,
    subTotal: number,
    card_id: string,
    orderId: number,
}