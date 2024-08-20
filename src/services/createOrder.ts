import { IShoppingCartItems } from "@/utils/types/IShoppingCartItems";
import { PaymentType } from "@/utils/types/IInfoData";

export async function createOrder
  (
    method: PaymentType,
    items: IShoppingCartItems[],
    total: number,
    creditCardId?: string
  ) {
  try {
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/checkout`, {
      method: "POST",
      body: JSON.stringify({
        items,
        paymentMethod: method,
        total,
        credit_card_id: creditCardId,
      })
    });
    return data.json();
  } catch (err) {
    throw new Error("Error on creation of payment");
  }
}
