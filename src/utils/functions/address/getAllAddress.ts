import { getServerSession } from "next-auth";
import { authOptions } from "../../constants/authOptions";
import { db as prisma } from "../../constants/db";
import { IAddressResponse } from "../../types/IAddressResponse";

export async function getAllItems(): Promise<IAddressResponse[] | []> {
    const session = await getServerSession(authOptions);
    let result;
    try {
        if (session?.user.id) {
            result = await prisma.address.findMany({
                where: {
                    userId: session.user.id
                }
            });
        }
        return result || [];
    } catch (err) {
        throw new Error("Error on search addresses");
    }
}