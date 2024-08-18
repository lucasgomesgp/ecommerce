import { NextRequest, NextResponse } from "next/server";

import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { authOptions } from "@/utils/constants/authOptions";
import { getServerSession } from "next-auth";
import { db as prisma } from "@/utils/constants/db";

export async function GET(request: NextRequest) {
    const session = await getServerSession(authOptions);
    try {
        const orders = await prisma.order.findMany({
            where: {
                userId: session?.user.id,
            },
            include: {
                orderItems: true,
            }
        });
        return NextResponse.json(orders);
    } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
            throw new Error(`${error.message}, ${error.code}`);
        }
        throw new Error("Error on search orders");
    }
}