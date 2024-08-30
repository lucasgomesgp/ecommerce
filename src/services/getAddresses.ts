import { authOptions } from "@/utils/constants/authOptions";
import { getServerSession } from "next-auth";
import { db as prisma } from "@/utils/constants/db";

export async function getAddresses() {
  const session = await getServerSession(authOptions);
  if (session?.user.id) {
    const addresses = await prisma.address.findMany({
      where: {
        userId: session?.user.id,
      },
    });
    return addresses;
  }
};
