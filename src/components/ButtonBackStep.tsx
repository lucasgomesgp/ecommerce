import { ArrowLeft } from "@phosphor-icons/react";
import { ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"button"> { }
export function ButtonBackStep({ ...rest }: Props) {
    return (
        <button className="py-[14px] flex items-center justify-center gap-2 px-7 rounded-lg text-black font-medium text-lg hover:opacity-70 transition-all border bg-transparent border-gray-border-step" {...rest}>
            <ArrowLeft color="#000000" />
            Back
        </button>
    );
}