import { Footer } from "@/components/Footer";
import { HeaderFilter } from "@/components/HeaderFilter";
import { ReactNode } from "react";

export default function ShopLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <HeaderFilter />
            {children}
            <Footer />
        </>
    )
}
