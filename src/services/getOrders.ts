import { authOptions } from "@/utils/constants/authOptions";
import { getServerSession } from "next-auth";
import { db as prisma } from "@/utils/constants/db";

export async function getOrders() {
  const session = await getServerSession(authOptions);
  if (session?.user.id) {
    const parameter = {
      where: {
        userId: session?.user.id,
      },
      include: {
        orderItems: true,
      }
    };
    const orders = await prisma.order.findMany(parameter);
    return orders;
  }
}