import { NextRequest, NextResponse } from "next/server";

import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { authOptions } from "@/utils/constants/authOptions";
import { getServerSession } from "next-auth";
import { db as prisma } from "@/utils/constants/db";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    const order = await prisma.order.findUnique({
      where: {
        id: parseInt(params.id),
        userId: session?.user.id,
      },
      include: {
        orderItems: true,
      },
    });
    return NextResponse.json(order);
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      throw new Error(`${error.message}, ${error.code}`);
    }
    throw new Error("Error on search order");
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    const order = await prisma.order.update({
      where: {
        userId: session?.user.id,
        id: parseInt(params.id),
      },
      data: {
        status: "CANCELLED",
      },
    });
    return NextResponse.json(order);
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      throw new Error(`${error.message}, ${error.code}`);
    }
    throw new Error("Error on change order status: " + error);
  }
}
