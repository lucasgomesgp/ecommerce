import { ArrowRight } from "@phosphor-icons/react";
import { ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"button"> { }
export function ButtonNextStep({ ...rest }: Props) {
    return (
        <button className="py-[14px] flex items-center justify-center gap-2 px-7 rounded-lg text-white font-medium text-lg hover:opacity-70 transition-all bg-purple-principal" {...rest}>
            Next
            <ArrowRight color="#FFFFFF" />
        </button>
    );
}