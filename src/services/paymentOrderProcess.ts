import { CreditCardSchema } from "@/components/FormPayment";
import { IShoppingCartItems } from "@/utils/types/IShoppingCartItems";
import { PaymentType } from "@/components/FormsCheckout";

export async function paymentOrderProcess(
  creditCardInfo: CreditCardSchema,
  method: PaymentType,
  items: IShoppingCartItems[]
) {
  const cartItems = items.map(
    ({ title, color, size, imageSrc, price, quantity }) => {
      return { title, color, size, imageSrc, price, quantity };
    }
  );
  switch (method) {
    case PaymentType.CARD:
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/users/creditcard`,
        {
          method: "POST",
          body: JSON.stringify({
            nameOnCard: creditCardInfo.name,
            number: creditCardInfo.number,
            secutiryCode: creditCardInfo.securityCode,
            expirationDate: creditCardInfo.expirationDate,
          }),
        }
      );
      const card = await response.json();
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/checkout`, {
        method: "POST",
        body: JSON.stringify({
          paymentMethod: "CARD",
          credit_card_id: card?.id,
          items: cartItems,
        }),
      });
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
