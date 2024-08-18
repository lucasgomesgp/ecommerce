import { OrderStatus, PaymentType } from "@prisma/client";

import { IShoppingCartItems } from "./IShoppingCartItems";

export interface IOrdersResponse {
  id: number,
  status: string,
  paymentMethod: string,
  createdAt: Date,
  price: number,
  paymentId: string,
  userId: string | null,
  orderItems: [
    {
      id: string;
      title: string;
      price: number;
      quantity: number;
      imageSrc: string;
      color: string;
      size: string;
      userId: string;
      createdAt: Date;
      orderId: number | null;
    }
  ]
}