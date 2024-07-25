import { IShoppingCartItems } from "@/utils/types/IShoppingCartItems";
import { PaymentType } from "@/components/FormsCheckout";

export async function createOrder(
  method: PaymentType,
  items: IShoppingCartItems[],
  total: string,
  creditCardId?: string
) {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/checkout`, {
    method: "POST",
    body: JSON.stringify({
      items,
      paymentMethod: method,
      total,
      credit_card_id: creditCardId,
    }),
  });
}
