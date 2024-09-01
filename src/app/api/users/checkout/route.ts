import { NextRequest, NextResponse } from "next/server";
import { Order, OrderStatus, PaymentType } from "@prisma/client";

import { ICheckoutData } from "@/utils/types/ICheckoutData";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { authOptions } from "@/utils/constants/authOptions";
import { getServerSession } from "next-auth";
import { db as prisma } from "@/utils/constants/db";

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  const { items, paymentMethod, credit_card_id, total } =
    (await request.json()) as ICheckoutData;
  let order: Order = {
    price: 0,
    id: 0,
    status: OrderStatus.ACTIVE,
    paymentMethod: PaymentType.CARD,
    createdAt: new Date(),
    paymentId: "",
    userId: session?.user.id || "",
  },
    payment
  if (session?.user.id) {
    try {
      await prisma.$transaction(async (tx) => {
        payment = await tx.payment.create({
          data: credit_card_id
            ? {
              method: paymentMethod,
              price: String(total),
              userId: session.user.id,
              cardId: credit_card_id,
            }
            : {
              method: paymentMethod,
              price: String(total),
              userId: session.user.id,
            },
        });
        order = await tx.order.create({
          data: {
            paymentMethod: paymentMethod ? paymentMethod : "CASH",
            paymentId: payment.id,
            userId: session.user.id,
            price: total,
          },
          include: {
            orderItems: true,
          }
        });
        const orderItems = items.map(({ title, price, quantity, size, color, imageSrc }) => ({
          title,
          price,
          quantity,
          size,
          color,
          imageSrc,
          orderId: order.id,
          userId: session.user.id,
        }));
        await tx.orderItem.createMany({
          data: orderItems,
        });
        return order;
      });

    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        throw new Error(`${err.message} ${err.code}`);
      }
      throw new Error((err as Error).message);
    }
  }

  return NextResponse.json({ order });
}
