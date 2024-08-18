import { STRAPI_TOKEN } from "@/utils/constants/strapi";
import { IProduct } from "@/utils/types/IProducts";

interface PromiseResponseData {
    data: IProduct[];
  }
export async function getWomenWithLimit():Promise<PromiseResponseData> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/womenwithlimit`,
      {
        cache: "no-cache",
        headers: {
          Authorization: `Bearer ${STRAPI_TOKEN}`,
        },
      }
    );
    return res.json();
  }
  
