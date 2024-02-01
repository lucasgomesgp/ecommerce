import { ArrowDown } from "@/svgs/arrow-down";
import Link from "next/link";
import { ReactNode } from "react";

interface Props{
    children?: ReactNode;
    css: string;
    title: string;
    subTitle: string;
    discount: string;
    link: string;
    widthTitle: string;
}

export function TextSafeZone({css, title, subTitle, link, widthTitle, discount, children}:Props) {
    return (
        <div className={`absolute ${css}`}>
            {children}
            <p className={`font-coreSans font-medium text-[28px] ${widthTitle} mb-[9px]`}>
                {title}
            </p>
            <p className="font-semibold text-sm">{subTitle}</p>
            <p className="font-bold text-lg mt-[9px] mb-[30px]">{discount}</p>
            <div className="flex justify-center mb-[40px] lg:w-[140px]">
                <ArrowDown />
            </div>
            <Link href={link} className="  rounded-[4px] py-[10px] px-[25px] border border-white bg-transparent">
                SHOP NOW
            </Link>
        </div>
    )
}
