import { STRAPI_API_URL, STRAPI_TOKEN } from "@/utils/constants/strapi";

export async function getProducts(id?: string) {
    const res = await fetch(`${STRAPI_API_URL}/products${id}`, {
      cache: "force-cache",
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
      },
    });
    return res.json();
  }