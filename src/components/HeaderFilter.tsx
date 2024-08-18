"use client"
import { ChangeEvent, useState } from "react";
import { Header } from "./Header";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function HeaderFilter() {
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const [value, setValue] = useState(() =>{
        const query = params.get("query");
        if(query) return query;
        return "";
    });
    const pathname = usePathname();
    const { replace } = useRouter();

    function handleChangeInput(event: ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value);
        if (event.target.value) {
            params.set("query", event.target.value.toLowerCase());
        } else {
            params.delete("query");
        }
        replace(`${pathname}?${params.toString()}`);
    }
    return (
        <Header>
            <div className="relative">
                <input
                    type="text"
                    name="elementSearch"
                    placeholder="Search"
                    onChange={handleChangeInput}
                    value={value}
                    className="w-full px-10 py-3 bg-white-light  rounded-lg outline-none"
                />
                <button className="absolute left-5 top-1/3">
                    <MagnifyingGlassIcon width={14} height={14} color="#807D7E" />
                </button>
            </div>
        </Header>
    );
}
