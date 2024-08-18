export interface IAddressResponse {
    id: string;
    country: string;
    name: string;
    city: string;
    state: string;
    phone: string;
    postalCode: string;
    companyName?: string | null;
    streetAddress?: string | null;
    apartment?: string | null;
    deliveryInstruction?: string | null;
    isDefaultShippingAddress: boolean;
    isDefaultBillingAddress: boolean;
    userId: string;
}
