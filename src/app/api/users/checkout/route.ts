import { NextRequest, NextResponse } from "next/server";

import { ICheckoutData } from "@/utils/types/ICheckoutData";
import { IShoppingCartItems } from "@/utils/types/IShoppingCartItems";
import { authOptions } from "@/utils/constants/authOptions";
import { getServerSession } from "next-auth";
import { db as prisma } from "@/utils/constants/db";

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  const { items, paymentMethod, credit_card_id } =
    (await request.json()) as ICheckoutData;
  let order,
    payment,
    ordersItems: IShoppingCartItems[] = [];
  if (session?.user.id) {
    try {
      items.map(async ({ color, imageSrc, price, quantity, size, title }) => {
        const item = await prisma.orderItem.create({
          data: {
            title,
            price,
            quantity,
            size,
            color,
            imageSrc,
          },
        });
        ordersItems.push({
          id: item.id,
          color: item.color,
          imageSrc: item.imageSrc,
          price: item.price,
          quantity: item.quantity,
          size: item.size,
          title: item.title,
        });
      });
      payment = await prisma.payments.create({
        data: credit_card_id
          ? {
              method: String(paymentMethod),
              price: items.total,
              userId: session.user.id,
              cardId: credit_card_id,
            }
          : {
              method: String(paymentMethod),
              price: items.total,
              userId: session.user.id,
            },
      });
      order = await prisma.orders.create({
        data: {
          paymentMethod: paymentMethod ? paymentMethod : "CASH",
          paymentsId: payment.id,
          userId: session.user.id,
          items: {
            connect: ordersItems.map((item) => ({ ...item })) || [],
          },
        },
      });
    } catch (err) {
      throw new Error("Error on send checkout data");
    }
  }
  return NextResponse.json({ order });
}
