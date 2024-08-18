import { IOrdersResponse } from "@/utils/types/IOrdersResponse";
import { authOptions } from "@/utils/constants/authOptions";
import { getServerSession } from "next-auth";
import { db as prisma } from "@/utils/constants/db";

export async function getOrder(orderId: string) {
  const session = await getServerSession(authOptions);
  if (session?.user.id) {
    const order = await prisma.order.findUnique({
      where: {
        id: Number(orderId),
        userId: session?.user.id,
      },
      include: {
        orderItems: true,
      }
    });
    return order;
  }
};