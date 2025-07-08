import { IProduct } from "@/utils/types/IProducts";

interface ResponseDataProducts {
  data: IProduct[];
}
export const getProducts = async (
  config?: string
): Promise<ResponseDataProducts> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
    cache: "no-cache",
  });
  const data = await res.json();
  return data;
};
