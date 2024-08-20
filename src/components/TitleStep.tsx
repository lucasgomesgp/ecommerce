import { Check } from "@phosphor-icons/react";

interface Props {
    title: string;
    isCompleted?: boolean;
    haveBorder?: boolean;
}
export function TitleStep({ title, isCompleted, haveBorder }: Props) {
    const borderIsGreen = haveBorder && isCompleted;
    return (
        <div className={`flex flex-col items-center justify-center `}>
            <div className="relative">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors
                ${isCompleted ?
                        " bg-green-600"
                        : "bg-black-gray "}`
                }>
                    {isCompleted && (<Check color="#FFFFFF" />)}
                </div>
                <div className={`hidden lg:h-[2px] lg:w-20 absolute left-14 top-[14px] transition-all 
                    ${haveBorder ? "lg:inline" : "lg:hidden"} 
                    ${borderIsGreen ? "bg-green-600" : "bg-slate-700"}`}
                />
            </div>
            <p className={`transition-colors ${isCompleted ? "text-green-600" : ""}`}>{title}</p>
        </div>
    );
}