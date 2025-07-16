import { IProduct } from "@/utils/types/IProducts";
import { STRAPI_TOKEN } from "@/utils/constants/strapi";

export interface PromiseResponseData {
  data: IProduct[];
}
export async function getWomenWithLimit(): Promise<PromiseResponseData> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/womenwithlimit`,
      {
        cache: "no-cache",
        headers: {
          Authorization: `Bearer ${STRAPI_TOKEN}`,
        },
      }
    );
    return res.json();
  } catch (err) {
    console.log(err);
    throw new Error("Error on search women" + err);
  }
}
