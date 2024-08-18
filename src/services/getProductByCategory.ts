import { STRAPI_API_URL, STRAPI_TOKEN } from "@/utils/constants/strapi";
import { IProduct } from "@/utils/types/IProducts";

interface ProductCategory {
  category: "men" | "women";
}

interface PromiseResponseData {
  data: IProduct[];
}

export async function getProductByCategory({category}:ProductCategory) : Promise<PromiseResponseData> {
  const urlProduct = category === "men"? `${process.env.NEXT_PUBLIC_API_URL}/men` : `${process.env.NEXT_PUBLIC_API_URL}/women`;
  const res = await fetch(urlProduct,
    {
      cache: "no-cache",
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
      },
    }
  );
  return res.json();
}
