import { IOrdersResponse } from "@/utils/types/IOrdersResponse";
import { authOptions } from "../../constants/authOptions";
import { getServerSession } from "next-auth";
import { db as prisma } from "../../constants/db";

export async function getAllOrders(): Promise<IOrdersResponse[] | []> {
  const session = await getServerSession(authOptions);
  let result;
  try {
    if (session?.user.id) {
      result = await prisma.order.findMany({
        relationLoadStrategy: "join",
        where: {
          userId: session.user.id,
        },
        include: {
          orderItems: true,
        },
      });
    }
    return result || [];
  } catch (err) {
    throw new Error("Error on search addresses");
  }
}
