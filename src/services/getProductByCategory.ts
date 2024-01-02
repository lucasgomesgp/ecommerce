import { STRAPI_API_URL, STRAPI_TOKEN } from "@/utils/constants/strapi";
import { IProduct } from "@/utils/types/IProducts";

interface ProductCategory {
  filter: string;
  category: string;
}

interface PromiseResponseData {
  data: IProduct[];
}

export async function getProductByCategory({filter, category}:ProductCategory) : Promise<PromiseResponseData> {
  const res = await fetch(
    `${STRAPI_API_URL}/products?filters[category][$contains]=${category}&populate=*${filter}`,
    {
      cache: "no-cache",
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
      },
    }
  );
  return res.json();
}
