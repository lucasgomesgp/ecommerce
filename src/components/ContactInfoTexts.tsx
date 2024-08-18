interface Props {
    title: string;
    text: string;
}

export function ContactInfoTexts({ title, text }: Props) {
    return (
        <div className="flex flex-col w-full border-b pb-[20px] gap-2">
            <p className="font-semibold text-lg text-gray-light">{title}</p>
            <div className="flex flex-wrap items-center justify-between">
                <p className="text-gray-text-menu font-semibold text-lg">{text || "Empty"}</p>
                <button className="text-gray-text-menu font-semibold text-lg">Change</button>
            </div>
        </div>
    )
}
