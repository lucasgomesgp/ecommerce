import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PathPage } from "@/components/PathPage";
import { OrderSummary } from "@/components/OrderSummary";
import { FormBillingDetails } from "@/components/FormBillingDetails";
import { TitleWithBar } from "@/components/TitleWithBar";

export default function Checkout() {
    return (
        <main className="flex flex-col">
            <Header />
            <section className="flex flex-col">
                <PathPage title="Check Out" />
                <section className="flex flex-wrap-reverse lg:gap-[38px] lg:px-[70px] mt-[52px]">
                    <div className="flex-1 flex-col">
                        <TitleWithBar title="Check Out" />
                        <p className="font-semibold font-coreSans text-[22px] mt-5">Billing Details</p>
                        <FormBillingDetails />
                    </div>
                    <div className="flex-2">
                        <OrderSummary />
                    </div>
                </section>
            </section>
            <Footer />
        </main>
    );
}