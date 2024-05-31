import { ArrowLeft } from "@/svgs/arrow-left";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MainSideBarContent } from "@/components/MainSideBarContent";
import { PathPage } from "@/components/PathPage";

export default function Page({ params }: { params: number }) {
    return (
        <main className="flex flex-col overflow-hidden">
            <Header />
            <PathPage title="Orders" />
            <MainSideBarContent>
                <div className="flex flex-[0.75] gap-3 items-center">
                    <ArrowLeft />
                    <h1 className="font-coreSans text-[28px] font-semibold">Order Details</h1>
                </div>
            </MainSideBarContent>
            <Footer />
        </main>
    );
}