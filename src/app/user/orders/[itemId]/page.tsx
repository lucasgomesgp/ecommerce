import { ArrowLeft } from "@phosphor-icons/react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MainSideBarContent } from "@/components/MainSideBarContent";
import { PathPage } from "@/components/PathPage";

export default async function Page({ params }: { params: { itemId: string } }) {
    return (
        <main className="flex flex-col overflow-hidden">
            <Header />
            <PathPage title="Orders" />
            <MainSideBarContent>
                <div className="flex flex-[0.75] flex-col">
                    <h1 className="font-coreSans text-[28px] font-semibold">Order Details</h1>
                    <ArrowLeft />
                </div>
            </MainSideBarContent>
            <Footer />
        </main>
    );
}