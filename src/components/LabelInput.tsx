import { ReactNode } from "react";

interface Props {
    label: string;
    name: string;
    children: ReactNode;
}

export function LabelInput({ label, name, children }: Props) {
    return (
        <div className="flex flex-col gap-[10px]">
            <label htmlFor={name} className="gray-text-menu font-semibold">
                {label}
            </label>
            {children}
        </div>
    )
}
