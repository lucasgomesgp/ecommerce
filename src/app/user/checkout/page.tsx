import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PathPage } from "@/components/PathPage";
import { FormsCheckOut } from "@/components/FormsCheckOut";

export default function Checkout() {
    return (
        <main className="flex flex-col">
            <Header />
            <section className="flex flex-col">
                <PathPage title="Check Out" />
                <FormsCheckOut />
            </section>
            <Footer />
        </main >
    );
}