import { NextRequest, NextResponse } from "next/server";
import { Order, OrderStatus, PaymentType } from "@prisma/client";

import { ICheckoutData } from "@/utils/types/ICheckoutData";
import { IShoppingCartItems } from "@/utils/types/IShoppingCartItems";
import { authOptions } from "@/utils/constants/authOptions";
import { getServerSession } from "next-auth";
import { db as prisma } from "@/utils/constants/db";

export async function POST(request: NextRequest) {
  // 1- Criar essa rota para que seja feito o envio dos dados do Checkout
  //  A melhor maneira de fazer seria criando um modal para que após
  //  o usuário enviar o endereço do Checkout apareça uma lista com todos os seus endereços cadastrados
  // , ele escolha um e eu salve em um State na FormsCheckout.tsx e envie somente o Id do endereço para essa rota
  // 2 - testar essa rota, enviando os dados para o banco de dados
  // 3 - Verificar o bug do formulário do cartão de crédito
  // 4 - Utilizar o Radix Ui ou Remix nos Modais de endereço

  // Cadastro dos Orders Itens, Cadastro do Pagamento (caso seja cartão é necessário criar o cartão antes), Cadastro do pedido
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
        include: {
          orderItems: true,
        }
      });
      const data = await prisma.order.findMany({
        where: {
          userId: session.user.id,
        },
        include: {
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
