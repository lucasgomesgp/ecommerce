import { AddressSchema } from "@/components/FormAddress";

export async function createAddress(data: AddressSchema) {
    try {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/address`, {
            method: "POST",
            body: JSON.stringify(data),
        });
    } catch (err) {
        throw new Error("Error on create address");
    }
}