import { OrderStatus, PaymentType } from "@prisma/client";

import { IShoppingCartItems } from "./IShoppingCartItems";

export interface IOrdersResponse {
  id: string;
  status: OrderStatus;
  paymentMethod: PaymentType;
  createdAt: Date;
  paymentsId: string;
  userId: string | null;
  // items: IShoppingCartItems[] & {
  //   total: string;
  // };
}
