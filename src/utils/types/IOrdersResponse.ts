import { OrderStatus, PaymentType } from "@prisma/client";

import { IShoppingCartItems } from "./IShoppingCartItems";

export interface IOrdersResponse {
  id: string,
  status: string,
  paymentMethod: string,
  createdAt: Date,
  paymentId: string,
  userId: string,
  orderItems: {
    id: string;
    title: string;
    price: number;
    quantity: number;
    imageSrc: string;
    color: string;
    size: string;
    userId: string;
    createdAt: Date;
    orderId: string | null;
  }[],
}