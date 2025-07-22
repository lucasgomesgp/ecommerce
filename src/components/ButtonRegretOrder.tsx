"use client";
import { regretOrder } from "@/services/regretOrder";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";

export function ButtonRegretOrder({
  orderId,
  refetchData,
}: {
  orderId: number;
  refetchData: () => void;
}) {
  const [isLoading, setIsLoading] = useState(false);
  async function handleRegretOrder() {
    try {
      setIsLoading(true);
      await regretOrder(orderId);
      toast.success("Order cancelled successfully");
      refetchData();
    } catch (err) {
      console.log(err);
      toast.error("Something while cancelling the order");
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <button
      className="bg-red-600 p-2 px-4 text-white font-bold rounded-md disabled:opacity-80 disabled:cursor-not-allowed"
      onClick={handleRegretOrder}
      disabled={isLoading}
    >
      {isLoading ? "Cancelling..." : "Cancel"}
    </button>
  );
}
