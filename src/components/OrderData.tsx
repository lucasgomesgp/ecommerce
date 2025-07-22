"use client";
import { ArrowLeft } from "@/svgs/arrow-left";
import { MainSideBarContent } from "./MainSideBarContent";
import { PathPage } from "./PathPage";
import { differenceInDays, format } from "date-fns";
import { currencyFormatter } from "@/utils/functions/currencyFormatter";
import { ButtonRegretOrder } from "./ButtonRegretOrder";
import { OrderTag } from "./OrderTag";
import { getOrder } from "@/services/getOrder";
import { useQuery } from "@tanstack/react-query";
import { OrderItemsDetailsList } from "./OrderItemsDetailsList";

interface Order {
  id: number;
  status: string;
  paymentMethod: string;
  createdAt: string;
  price: number;
  paymentId: string;
  userId: string;
  orderItems: [
    {
      id: string;
      title: string;
      price: number;
      quantity: number;
      imageSrc: string;
      color: string;
      size: string;
      userId: string;
      createdAt: string;
      orderId: number;
    }
  ];
}
export function OrderData({ orderId }: { orderId: number }) {
  const { data, isLoading, refetch } = useQuery<Order>({
    queryKey: ["order", orderId],
    queryFn: async () => {
      const result = await getOrder(orderId);
      return result;
    },
  });

  const regretIsAvailable = data?.createdAt
    ? differenceInDays(new Date(), new Date(data?.createdAt)) <= 2
    : false;
  function refetchOrderData() {
    refetch();
  }
  return (
    <>
      <PathPage title="Orders" />
      <MainSideBarContent>
        <div className="flex flex-col flex-[0.75]">
          <section className="flex flex-wrap gap-3 items-center">
            <ArrowLeft />
            <h1 className="font-coreSans text-[28px] font-semibold text-gray-text-menu">
              Order Details
            </h1>
          </section>
          {data && (
            <>
              <section className="flex flex-wrap justify-between items-center bg-white-light mt-14 px-12 py-7 rounded-lg">
                <div className="flex flex-col justify-center gap-[10px]">
                  <p className="text-gray-text-menu font-semibold text-xl">
                    Order no: #{data?.id}
                  </p>
                  <p className="text-gray-light font-medium text-lg">
                    Placed On{" "}
                    {format(
                      data?.createdAt || new Date(),
                      "d  MMM yyyy kk:mm a"
                    )}{" "}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-gray-light font-semibold">
                    Total :{" "}
                    <span className="text-gray-text-menu">
                      {currencyFormatter(data?.price || 0)}
                    </span>
                  </p>
                  {regretIsAvailable && data?.status === "ACTIVE" && (
                    <div className="flex gap-2 items-center">
                      <p className="text-gray-light font-semibold">
                        Regret of your order?
                      </p>
                      <ButtonRegretOrder
                        orderId={data.id}
                        refetchData={refetchOrderData}
                      />
                    </div>
                  )}
                </div>
              </section>
              <section className="mt-[50px] flex-wrap mb-[80px] bg-gray-border h-2 rounded-[4px] relative w-full flex items-center justify-between">
                <div className="relative h-8 min-w-[32px] top-[-100%] max-w-[70px] rounded-full bg-gray-border flex items-center justify-center">
                  <p className="absolute bottom-[-70px] font-bold">
                    Order Placed
                  </p>
                  <div className="absolute top-0 bg-gray-text-menu w-full h-full rounded-full" />
                </div>
                <div className="relative h-8  top-[-100%] min-w-[32px] max-w-[70px] rounded-full bg-gray-border flex items-center justify-center">
                  <p className="absolute bottom-[-70px] font-bold">
                    In progress
                  </p>
                  <div className="absolute top-[25%] bg-gray-text-menu w-[18px] h-[18px] rounded-full" />
                </div>
                <div className="relative h-8 top-[-100%] min-w-[32px] max-w-[70px] rounded-full bg-gray-border flex items-center justify-center">
                  <p className="absolute bottom-[-70px]">Shipped</p>
                </div>
                <div className="relative h-8 top-[-100%] min-w-[32px] max-w-[70px] rounded-full bg-gray-border flex items-center justify-center">
                  <p className="absolute bottom-[-70px]">Delivered</p>
                </div>
              </section>
              <section className="mt-[50px]">
                {data?.status === "COMPLETED" && (
                  <OrderTag
                    status="COMPLETED"
                    text="Your order has been delivered."
                  />
                )}
                {data?.status === "CANCELLED" && (
                  <OrderTag
                    status="CANCELLED"
                    text="Your order has been cancelled."
                  />
                )}
                <OrderTag
                  date={data?.createdAt}
                  text="Your order has been successfully verified."
                  status="ACTIVE"
                />
                <OrderTag
                  date={data?.createdAt}
                  text="Your order has in progress."
                  status="ACTIVE"
                />
              </section>
              <section className="mt-20">
                {data?.orderItems.map(
                  ({ id, color, title, quantity, price, imageSrc }, index) => (
                    <OrderItemsDetailsList
                      borderBottomIsActive={
                        data.orderItems.length !== index + 1
                      }
                      id={id}
                      color={color}
                      title={title}
                      quantity={quantity}
                      price={price}
                      imageSrc={imageSrc}
                      key={id}
                    />
                  )
                )}
              </section>
            </>
          )}
          {isLoading && (
            <div className="flex items-center justify-center h-[200px]">
              <p className="text-gray-text-menu">Loading order details...</p>
            </div>
          )}
        </div>
      </MainSideBarContent>
    </>
  );
}
