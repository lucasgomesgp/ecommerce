import { CreditCardSchema, PaymentType } from "@/components/FormsCheckOut";

export function paymentOrderProcess(creditCardInfo: CreditCardSchema, method: PaymentType) {

    console.log(creditCardInfo);
    switch (method) {
        case PaymentType.CARD:
            console.log("card");
            break;
        case PaymentType.CASH:
            console.log("cash");
            break;
        case PaymentType.PAYPAL:
            console.log("paypal");
            break;
        default:
            throw new Error("Invalid type payment");
    }
}