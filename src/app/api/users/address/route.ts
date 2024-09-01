import { NextRequest, NextResponse } from "next/server";

import { AddressSchema } from "@/components/FormAddress";
import { authOptions } from "@/utils/constants/authOptions";
import { getServerSession } from "next-auth";
import { db as prisma } from "@/utils/constants/db";

export async function GET(request: NextRequest) {
    const session = await getServerSession(authOptions);
    try {
        if (session?.user.id) {
            const addresses = await prisma.address.findMany({
                where: {
                    userId: session?.user.id,
                },
            });
            return NextResponse.json(addresses);
        }
        return NextResponse.json([]);
    } catch (err) {
        throw new Error("Error on search addresses");
    }
}

export async function POST(request: NextRequest) {
    const session = await getServerSession(authOptions);
    const {
        apartment, billingAddress, city, companyName, country,
        deliveryInstruction, firstName, lastName, phone,
        postalCode, shippingAddress, state, streetAddress
    } = await request.json() as AddressSchema;
    let address;
    try {
        if (session?.user.id) {
            address = await prisma.address.create({
                data: {
                    name: firstName + " " + lastName,
                    apartment,
                    city,
                    country,
                    companyName,
                    deliveryInstruction,
                    isDefaultBillingAddress: billingAddress || false,
                    isDefaultShippingAddress: shippingAddress || false,
                    phone,
                    postalCode,
                    state,
                    streetAddress,
                    userId: session.user.id,
                }
            });
        }
    } catch (err) {
        throw new Error("Error on send address");
    } finally {
        return NextResponse.json({ address });
    }
}

