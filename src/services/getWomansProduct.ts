import { STRAPI_API_URL, STRAPI_TOKEN } from "@/utils/constants/strapi";

export async function getWomansProduct(filter: string) {
    const res = await fetch(`${STRAPI_API_URL}/products?filters[category][$contains]=women&populate=*${filter}`, {
      cache: "force-cache",
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
      },
    });
    return res.json();
  }