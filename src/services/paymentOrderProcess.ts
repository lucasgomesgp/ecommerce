import { CreditCardSchema } from "@/components/FormPayment";
import { IShoppingCartItems } from "@/utils/types/IShoppingCartItems";
import { PaymentType } from "@/components/FormsCheckout";

export async function paymentOrderProcess(
  creditCardInfo: CreditCardSchema,
  method: PaymentType,
  items: IShoppingCartItems[]
) {
  switch (method) {
    case PaymentType.CARD:
      break;
    case PaymentType.CASH:
      break;
    case PaymentType.PAYPAL:
      break;
    default:
      throw new Error("Invalid type payment");
  }
}
