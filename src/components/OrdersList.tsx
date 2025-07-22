"use client";
import { useQuery } from "@tanstack/react-query";
import { OrdersItems } from "./OrdersItems";
import { getOrders } from "@/services/getOrders";

export function OrdersList() {
  const { data, isLoading } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const result = await getOrders();
      return result;
    },
  });
  return (
    <>
      {data && <OrdersItems userOrders={data} />}
      {isLoading && <p>Loading ...</p>}
    </>
  );
}
