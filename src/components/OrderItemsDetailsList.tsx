import Image from "next/image";
import { XIcon } from "@/svgs/x-icon";
import { currencyFormatter } from "@/utils/functions/currencyFormatter";

type Props = {
    id: string,
    imageSrc: string,
    title: string,
    color: string,
    quantity: number,
    price: number,
    borderBottomIsActive: boolean,
}
export function OrderItemsDetailsList({ id, imageSrc, title, color, quantity, price, borderBottomIsActive = false }: Props) {
    return (
        <div className="flex flex-col">
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
            {borderBottomIsActive && (<div className="h-[1px] self-center bg-gray-border w-[90%]" />)}
        </div>
    );
}