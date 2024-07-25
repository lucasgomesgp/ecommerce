import { NextRequest, NextResponse } from "next/server";

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

      // payment = await prisma.payments.create({
      //   data: credit_card_id
      //     ? {
      //         method: String(paymentMethod),
      //         price: items.total,
      //         userId: session.user.id,
      //         cardId: credit_card_id,
      //       }
      //     : {
      //         method: String(paymentMethod),
      //         price: items.total,
      //         userId: session.user.id,
      //       },
      // });
      console.log(ordersItems);

      // order = await prisma.orders.create({
      //   data: {
      //     paymentMethod: paymentMethod ? paymentMethod : "CASH",
      //     paymentsId: payment.id,
      //     userId: session.user.id,
      //     items: {
      //       connect:
      //         ordersItems.map((item) => ({
      //           id: item.id,
      //           title: item.title,
      //           color: item.color,
      //           imageSrc: item.imageSrc,
      //           price: item.price,
      //           quantity: item.quantity,
      //           size: item.size,
      //         })) || [],
      //     },
      //   },
      // });
    } catch (err) {
      throw new Error("Error on send checkout data");
    }
  }
  return NextResponse.json({ order });
}
