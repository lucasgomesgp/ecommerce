import { NextRequest, NextResponse } from "next/server";
import { db as prisma } from "@/utils/constants/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/constants/authOptions";
import { AddressSchema } from "@/components/FormAddress";

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