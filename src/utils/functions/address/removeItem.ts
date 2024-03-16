import { db as prisma} from "@/utils/constants/db";

export async function removeItem(id: string, userId: string){
    try{
        await prisma.address.delete({
            where:{
                id,
                userId,
            }
        });
    }catch(err){
        throw new Error("Error on remove item");
    }
}