import { Footer } from "@/components/Footer";
import { FormsCheckout } from "@/components/FormsCheckout";
import { Header } from "@/components/Header";
import { PathPage } from "@/components/PathPage";

export default function Checkout() {
  return (
    <main className="flex flex-col">
      <Header />
      <section className="flex flex-col">
        <FormsCheckout />
      </section>
      <Footer />
    </main>
  );
}
