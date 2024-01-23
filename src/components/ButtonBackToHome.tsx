"use client"

import { useRouter } from "next/navigation"

export function ButtonBackToHome({ title, path }: { title: string, path: string }) {
    const route = useRouter();
    return (
        <button className="w-[244px] h-[46px] text-white bg-purple-principal font-semibold text-lg rounded-lg" onClick={() => { route.push(path) }}>{title}</button>
    )
}
