import { db as prisma } from "@/utils/constants/db";
import bcrypt from "bcrypt";

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const data = await request.json();
    const { email, password } = data;
    if (!email || !password) {
        return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }
    const isUserExists = await prisma.user.findUnique({
        where: {
            email: email,
        }
    });
    if (isUserExists) {
        return NextResponse.json({ error: "Users exists" }, { status: 400 });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: {
            email,
            hashedPassword,
        }
    });

    return NextResponse.json(user);
}