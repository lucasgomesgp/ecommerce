import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PathPage } from "@/components/PathPage";
import { OrderSummary } from "@/components/OrderSummary";

export default function Checkout() {
    return (
        <main className="flex flex-col">
            <Header />
            <section className="flex flex-col">
                <PathPage title="Check Out" />
                <section className="flex">
                    <div className="flex flex-2">
                        Form
                    </div>
                    <OrderSummary />
                </section>
            </section>
            <Footer />
        </main>
    );
}