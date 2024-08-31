import { STRAPI_API_URL, STRAPI_TOKEN } from "@/utils/constants/strapi";

import { IProduct } from "@/utils/types/IProducts";

interface ProductCategory {
  category: "men" | "women";
}

interface PromiseResponseData {
  data: IProduct[];
}

export async function getProductByCategory({ category }: ProductCategory): Promise<PromiseResponseData> {
  const urlProduct = category === "men" ? `${process.env.STRAPI_API_URL}/products?populate=*` : `${process.env.STRAPI_API_URL}/products?filters[category][$containsi]=women&populate=*`;
  try {
    const res = await fetch(urlProduct,
      {
        cache: "no-cache",
        headers: {
          Authorization: `Bearer ${STRAPI_TOKEN}`,
        },
      }
    );
    return res.json();
  } catch {
    throw new Error("Error on search products for " + category);
  }
}
