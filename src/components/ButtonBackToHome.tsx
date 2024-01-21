"use client"

import { useRouter } from "next/navigation"

export function ButtonBackToHome() {
    const route = useRouter();
    return (
        <button className="w-[244px] h-[46px] text-white bg-purple-principal font-semibold text-lg rounded-lg" onClick={() => { route.push("/") }}>Back to HomePage</button>
    )
}
