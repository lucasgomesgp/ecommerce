import { STRAPI_API_URL, STRAPI_TOKEN } from "@/utils/constants/strapi";
import { IProduct } from "@/utils/types/IProducts";

export interface ResponseDataProduct {
  data: IProduct;
}

export const getProduct = async (id: string): Promise<ResponseDataProduct> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/${id}`);
  const data = await res.json();
  return data;
};
