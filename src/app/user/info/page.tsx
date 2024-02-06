import { Footer } from "@/components/Footer";
import { FormAddress } from "@/components/FormAddress";
import { Header } from "@/components/Header";
import { MainSideBarContent } from "@/components/MainSideBarContent";
import PathPage from "@/components/PathPage";

export default function Info() {
    return (
        <main className="flex flex-col overflow-hidden ">
            <Header />
            <PathPage title="Info" />
            <MainSideBarContent>
                <section className="flex flex-col self-start">
                    <div className="flex flex-col gap-[20px]">
                        <h4 className="font-medium font-coreSans text-gray-text-menu text-[28px]">My Info</h4>
                        <p className="font-medium font-coreSans text-gray-text-menu text-[22px]">Add Address</p>
                    </div>
                    <FormAddress />
                </section>
            </MainSideBarContent>
            <Footer />
        </main>
    );
}
