"use client"

import { ButtonOrderOption } from "@/components/ButtonOrderOption";
import { IOrdersResponse } from "@/utils/types/IOrdersResponse";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Props {
    userOrders: Array<IOrdersResponse>;
}
enum OrderOption {
    active = "ACTIVE",
    cancelled = "CANCELLED",
    completed = "COMPLETED"
}

export function OrdersItems({ userOrders }: Props) {
    const [toggleOrderOption, setToggleOrderOption] = useState<OrderOption>(OrderOption.active);
    const filteredData = userOrders.filter((order) => order.status === toggleOrderOption);
    return (
        <>
            <div className="flex flex-wrap lg:flex-nowrap justify-center border-b-[3px] border-b-white-light mt-[38px] md:justify-between mb-[50px]">
                <ButtonOrderOption title="Active"
                    isActive={toggleOrderOption === "ACTIVE"}
                    onClick={() => setToggleOrderOption(OrderOption.active)}
                />
                <ButtonOrderOption title="Cancelled"
                    isActive={toggleOrderOption === "CANCELLED"}
                    onClick={() => setToggleOrderOption(OrderOption.cancelled)}
                />
                <ButtonOrderOption title="Completed"
                    isActive={toggleOrderOption === "COMPLETED"}
                    onClick={() => setToggleOrderOption(OrderOption.completed)}
                />
            </div>
            {
                filteredData.map((order, index) => (
                    <>
                        <div className="flex flex-col gap-[30px]" key={order.id}>
                            <div className="bg-white-light py-1 px-1 lg:py-7 lg:px-12 rounded-lg">
                                <p className="text-xl text-gray-text-menu font-semibold mb-[14px]">Order no: #{order.id}</p>
                                <div className="flex items-center justify-between">
                                    <p className="flex items-center text-sm font-semibold text-gray-light gap-2">
                                        Order Date:
                                        <span className="text-gray-border font-thin">{order.createdAt.toString()}</span>
                                    </p>
                                    <p className="flex items-center text-sm font-semibold text-gray-light gap-2">
                                        Order Status:
                                        <span className="text-gray-border font-thin">{order.status}</span>
                                    </p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="flex items-center text-sm font-semibold text-gray-light gap-2">
                                        Estimated Delivery Date:
                                        <span className="text-gray-border font-thin">{order.createdAt.toString()}</span>
                                    </p>
                                    <p className="flex items-center text-sm font-semibold text-gray-light gap-2">
                                        Payment Method:
                                        <span className="text-gray-border font-thin">{order.paymentMethod}</span>
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-wrap justify-center items-center lg:flex-nowrap lg:justify-between">
                                <div className="flex justify-center gap-[25px] flex-wrap lg:flex-nowrap lg:justify-normal">
                                    <Image
                                        src={order.orderItems[0].imageSrc}
                                        alt={order.orderItems[0].title}
                                        height={100}
                                        width={100}
                                        quality={90}
                                        className="min-h-[96px] w-[96px] rounded-[4px]"
                                    />
                                    <div className="flex flex-col gap-[10px]">
                                        <p className="font-semibold">{order.orderItems[0].title}</p>
                                        <p className="font-semibold flex items-center gap-1 text-sm">
                                            Color:
                                            <span className="text-gray-border">
                                                {order.orderItems[0].color}
                                            </span>
                                        </p>
                                        <p className="font-semibold flex items-center gap-1 text-sm">
                                            Qty:
                                            <span className="text-gray-border">
                                                {order.orderItems[0].quantity}
                                            </span>
                                        </p>
                                        <p className="font-semibold text-sm text-gray-border">
                                            Total: {order.orderItems[0].price}
                                        </p>
                                    </div>
                                </div>
                                <Link
                                    href={`/user/order/${order.id}`}
                                    className="text-center p-2 lg:w-36 lg:py-[14px] text-white bg-purple-principal font-semibold text-lg rounded-lg hover:opacity-80 transition-opacity"
                                >
                                    View Detail
                                </Link>
                            </div>
                        </div>
                        <div className="w-full h-[1px] bg-white-bar my-[30px]" />
                    </>
                ))
            }
        </>
    );
}