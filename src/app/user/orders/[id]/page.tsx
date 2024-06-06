import { ArrowLeft } from "@/svgs/arrow-left";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Image from "next/image";
import { MainSideBarContent } from "@/components/MainSideBarContent";
import { PathPage } from "@/components/PathPage";
import { XIcon } from "@/svgs/x-icon";
import { currencyFormatter } from "@/utils/functions/currencyFormatter";
import { data } from "@/utils/mock-orders.json";
import { enUS } from "date-fns/locale";
import { format } from "date-fns";

type IOrderItems =
    [
        {
            id: string,
            paymentMethod: string,
            status: string,
            createdAt: string,
            orderItems: [
                {
                    id: string,
                    title: string,
                    quantity: string,
                    createdAt: string,
                    color: string,
                    size: string,
                    imageSrc: string,
                    price: number,
                }
            ]
        }
    ]

export default function Page({ params }: { params: number }) {
    return (
        <main className="flex flex-col overflow-hidden">
            < Header />
            <PathPage title="Orders" />
            <MainSideBarContent>
                <div className="flex flex-col flex-[0.75]">
                    <section className="flex flex-wrap gap-3 items-center">
                        <ArrowLeft />
                        <h1 className="font-coreSans text-[28px] font-semibold text-gray-text-menu">Order Details</h1>
                    </section>
                    <section className="flex flex-wrap justify-between items-center bg-white-light mt-14 px-12 py-7 rounded-lg">
                        <div className="flex flex-col justify-center gap-[10px]">
                            <p className="text-gray-text-menu font-semibold text-xl">Order no: #123456789</p>
                            <p className="text-gray-light font-medium text-lg">Placed On  2 June 2023 2:40 PM </p>
                        </div>
                        <p className="text-gray-light font-semibold">Total : <span className="text-gray-text-menu">$143.00</span></p>
                    </section>
                    <section className="mt-[50px] flex-wrap mb-[80px] bg-gray-border h-2 rounded-[4px] relative w-full flex items-center justify-between">
                        <div className="relative h-8 min-w-[32px] top-[-100%] max-w-[70px] rounded-full bg-gray-border flex items-center justify-center">
                            <p className="absolute bottom-[-70px] font-bold">Order Placed</p>
                            <div className="absolute top-0 bg-gray-text-menu w-full h-full rounded-full"></div>
                        </div>
                        <div className="relative h-8  top-[-100%] min-w-[32px] max-w-[70px] rounded-full bg-gray-border flex items-center justify-center">
                            <p className="absolute bottom-[-70px] font-bold">In progress</p>
                            <div className="absolute top-[25%] bg-gray-text-menu w-[18px] h-[18px] rounded-full"></div>
                        </div>
                        <div className="relative h-8 top-[-100%] min-w-[32px] max-w-[70px] rounded-full bg-gray-border flex items-center justify-center">
                            <p className="absolute bottom-[-70px]">Shipped</p>
                        </div>
                        <div className="relative h-8 top-[-100%] min-w-[32px] max-w-[70px] rounded-full bg-gray-border flex items-center justify-center">
                            <p className="absolute bottom-[-70px]">Delivered</p>
                        </div>
                    </section>
                    <section className="mt-[50px]">
                        <div className="w-full flex flex-wrap gap-9 bg-white-light rounded-lg py-6 pl-7 relative mt-[50px]" style={{
                            border: "0.5px solid rgba(128, 125, 126, 0.20)"
                        }}>
                            <p className="font-semibold text-gray-light">{format(data[0].createdAt, "d  MMM yyyy kk:mm a")}</p>
                            <p className="font-semibold text-gray-text-menu">Your order has been successfully verified.</p>
                            <div className="bg-white-light h-6 w-10 top-[-35%] left-32 absolute" style={{
                                clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                                border: "0.5px solid rgba(128, 125, 126, 0.20)",
                            }} />
                        </div>
                        <div className="w-full flex flex-wrap gap-9 bg-white-light rounded-lg py-6 pl-7 relative mt-[50px]" style={{
                            border: "0.5px solid rgba(128, 125, 126, 0.20)"
                        }}>
                            <p className="font-semibold text-gray-light">{format(data[0].createdAt, "d  MMM yyyy kk:mm a")}</p>
                            <p className="font-semibold text-gray-text-menu">Your order has in progress.</p>
                            <div className="bg-white-light h-6 w-10 top-[-35%] left-32 absolute" style={{
                                clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                                border: "0.5px solid rgba(128, 125, 126, 0.20)",
                            }} />
                        </div>
                    </section>
                    <section className="mt-20">
                        {data.map((item) => {
                            return item.orderItems.map(({ id, title, color, quantity, price, imageSrc }) => (
                                <div className="flex flex-col" key={id}>
                                    <div className="flex flex-wrap items-center justify-between bg-white-light rounded-lg px-[50px] py-11">
                                        <div className="flex gap-9">
                                            <Image className="rounded-[3.5px] h-[102px] w-[102px]" src={imageSrc} alt={title} height={102} width={102} />
                                            <div className="flex flex-col gap-[10px]">
                                                <p className="text-gray-text-menu text-[22px] font-bold">{title}</p>
                                                <p className="text-gray-text-menu text-[22px] font-bold gap-3">Color :
                                                    <span className="font-medium text-gray-light"> {color}</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-[60px]">
                                            <p className="text-gray-text-menu text-[22px] font-bold gap-3">Qty :
                                                <span className="font-medium text-gray-light"> {quantity}</span>
                                            </p>
                                            <p className="text-[22px] font-bold text-gray-light">{currencyFormatter(price)}</p>
                                        </div>
                                        <XIcon />
                                    </div>
                                    <div className="h-[1px] self-center bg-gray-border w-[90%]" />
                                </div>
                            ))
                        })}
                    </section>
                </div>
            </MainSideBarContent>
            <Footer />
        </main >
    );
}