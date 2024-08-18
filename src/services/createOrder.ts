import { IShoppingCartItems } from "@/utils/types/IShoppingCartItems";
import { PaymentType } from "@/components/FormsCheckout";

export async function createOrder
  (
    method: PaymentType,
    items: IShoppingCartItems[],
    total: number,
    creditCardId?: string
  ) {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/checkout`, {
    method: "POST",
    body: JSON.stringify({
      items,
      paymentMethod: method,
      total,
      credit_card_id: creditCardId,
    }),
  }).catch((err) => {
    throw new Error("Error on creation of payment");
  });
}
