import { Footer } from "@/components/Footer";
import { FormsCheckout } from "@/components/FormsCheckout";
import { Header } from "@/components/Header";
import { getAddresses } from "@/services/getAddresses";

export default async function Checkout() {
  const data = await getAddresses();
  return (
    <main className="flex flex-col">
      <Header />
      <section className="flex flex-col">
        {data ? (
          <FormsCheckout registeredAddresses={data} />
        ) : (
          <FormsCheckout />
        )}
      </section>
      <Footer />
    </main>
  );
}
