import { NextRequest, NextResponse } from "next/server";

import { ICreditCard } from "@/utils/types/ICreditCard";
import { authOptions } from "@/utils/constants/authOptions";
import { getServerSession } from "next-auth";
import { db as prisma } from "@/utils/constants/db";

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  const { nameOnCard, number, secutiryCode, expirationDate } =
    (await request.json()) as ICreditCard;

  let card: ICreditCard = {
    nameOnCard: "",
    number: "",
    secutiryCode: "",
    expirationDate: "",
  };
  try {
    if (session?.user.id) {
      card = await prisma.creditCard.create({
        data: {
          number,
          nameOnCard,
          secutiryCode,
          expirationDate,
          userId: session?.user.id,
        },
      });
    }
  } catch (err) {
    throw new Error("Error on create credit card");
  }
  return NextResponse.json({ card });
}
