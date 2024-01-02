import { STRAPI_API_URL, STRAPI_TOKEN } from "@/utils/constants/strapi";

export async function getSlides() {
    const res = await fetch(`${STRAPI_API_URL}/slides?filters[area][$eq]=women&populate=*`, {
      cache: "no-cache",
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
      },
    });
    return res.json();
  }