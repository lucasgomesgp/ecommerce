import { NextRequest, NextResponse } from "next/server";
import { Order, OrderStatus, PaymentType } from "@prisma/client";

import { ICheckoutData } from "@/utils/types/ICheckoutData";
import { IShoppingCartItems } from "@/utils/types/IShoppingCartItems";
import { authOptions } from "@/utils/constants/authOptions";
import { getServerSession } from "next-auth";
import { db as prisma } from "@/utils/constants/db";

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  const { items, paymentMethod, credit_card_id, total } =
    (await request.json()) as ICheckoutData;
  let order: Order = {
      id: "",
      status: OrderStatus.ACTIVE,
      paymentMethod: PaymentType.CARD,
      createdAt: new Date(),
      paymentsId: "",
      userId: "",
    },
    payment,
    ordersItems: IShoppingCartItems[] = [];
  if (session?.user.id) {
    try {
      payment = await prisma.payment.create({
        data: credit_card_id
          ? {
              method: paymentMethod,
              price: total,
              userId: session.user.id,
              cardId: credit_card_id,
            }
          : {
              method: paymentMethod,
              price: total,
              userId: session.user.id,
            },
      });
      items.map(async ({ color, imageSrc, price, quantity, size, title }) => {
        const item = await prisma.orderItem.create({
          data: {
            title,
            price,
            quantity,
            size,
            color,
            imageSrc,
            userId: session.user.id,
          },
        });
        ordersItems.push({
          id: Number(item.id),
          color: item.color,
          imageSrc: item.imageSrc,
          price: item.price,
          quantity: item.quantity,
          size: item.size,
          title: item.title,
        });
      });
      const allItems = items.map((item) => ({
              id: String(item.id),
              title: item.title,
              price: item.price,
              quantity: item.quantity,
              size: item.size,
              color: item.color,
              imageSrc: item.imageSrc,
              userId: session.user.id,
            }));
      order = await prisma.order.create({
        data: {
          paymentMethod: paymentMethod ? paymentMethod : "CASH",
          paymentsId: payment.id,
          userId: session.user.id,
          orderItems: {
            create: allItems,
          },
        },
        include:{
          orderItems: true,
        }
      });
      const data = await prisma.order.findMany({
        where:{
          userId: session.user.id,
        },
        include:{
          orderItems: true,
        }
      })
      console.log(data)
    } catch (err) {
      console.log(err);
      throw new Error("Error on send checkout data");
    }
  }
  return NextResponse.json({ order });
}
