import { $Enums, Order, Prisma } from "@prisma/client";

// Type for catch data from server side to client side
export type IOrdersResponse =
  Prisma.OrderGetPayload<{
    select: {
      id: true,
      status: true,
      createdAt: true,
      price: true,
      paymentId: true,
      paymentMethod: true,
      userId: true,
    },
    include: {
      orderItems: true,
    }
  }>;