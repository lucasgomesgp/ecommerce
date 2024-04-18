import { OrderStatus, PaymentType } from "@prisma/client";

export interface IOrdersResponse {
  id: string;
  status: OrderStatus;
  paymentMethod: PaymentType;
  createdAt: Date;
  paymentsId: string;
  userId: string | null;
}
