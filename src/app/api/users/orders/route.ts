import { NextRequest, NextResponse } from "next/server";

import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { db as prisma } from "@/utils/constants/db";
import { auth } from "@/utils/functions/auth";

export async function GET(request: NextRequest) {
  const session = await auth();
  if (!session || !session.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const orders = await prisma.order.findMany({
      where: {
        userId: session.user.id,
      },
      include: {
        orderItems: true,
      },
    });
    return NextResponse.json(orders);
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      throw new Error(`${error.message}, ${error.code}`);
    }
    throw new Error("Error on search orders");
  }
}
