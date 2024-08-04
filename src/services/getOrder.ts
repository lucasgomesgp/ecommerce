import { IOrdersResponse } from "@/utils/types/IOrdersResponse";
import { authOptions } from "@/utils/constants/authOptions";
import { getServerSession } from "next-auth";
import { db as prisma } from "@/utils/constants/db";

interface IOrderItems {
  id: string,
  paymentMethod: string,
  status: string,
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
}[]

export async function getOrder(orderId: string) {
  const session = await getServerSession(authOptions);
  if (session?.user.id) {
    const order = await prisma.order.findUnique({
      where: {
        id: orderId,
        userId: session?.user.id,
      },
      include: {
        orderItems: true,
      }
    });
    return order;
  }
};
