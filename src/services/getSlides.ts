import { STRAPI_API_URL, STRAPI_TOKEN } from "@/utils/constants/strapi";

export async function getSlides() {
  try {
    const res = await fetch(`${STRAPI_API_URL}/slides?filters[area][$eq]=home&populate=*`, {
      cache: "no-cache",
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
      },
    });
    return res.json();
  } catch (err) {
    throw new Error("Error on search slides");
  }
}