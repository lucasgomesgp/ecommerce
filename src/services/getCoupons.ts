import { ICoupons } from "@/utils/types/ICoupons";

export interface ResponseDataProduct {
  data: ICoupons[];
}

export const getCoupons = async (): Promise<ResponseDataProduct> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/coupons`, {
    cache: "no-cache",
  });
  const data = await res.json();
  return data;
};
