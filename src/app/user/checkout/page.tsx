import { Footer } from "@/components/Footer";
import { FormsCheckout } from "@/components/FormsCheckout";
import { Header } from "@/components/Header";
import { authOptions } from "@/utils/constants/authOptions";
import { getAddresses } from "@/services/getAddresses";
import { getServerSession } from "next-auth";

export default async function Checkout() {
  const data = await getAddresses();
  const session = await getServerSession(authOptions);

  return (
    <main className="flex flex-col">
      <Header />
      <section className="flex flex-col">
        {data && session?.user.id ? (
          <FormsCheckout registeredAddresses={data} />
        ) : (
          <p>You not logged in!</p>
        )}
      </section>
      <Footer />
    </main>
  );
}
