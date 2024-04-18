import { IShoppingCartItems } from "./IShoppingCartItems";

export interface ICheckoutData {
  credit_card_id?: string;
  paymentMethod: "CARD" | "CASH" | "PAYPAL";
  items: IShoppingCartItems[] & { total: string };
}
