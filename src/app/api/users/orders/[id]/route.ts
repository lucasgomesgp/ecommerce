import { NextRequest, NextResponse } from "next/server";

import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { db as prisma } from "@/utils/constants/db";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        const orders = await prisma.order.findUnique({
            where: {
                id: params.id,
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