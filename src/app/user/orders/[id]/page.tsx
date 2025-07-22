import { AccessDenied } from "@/components/AccessDenied";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { authOptions } from "@/utils/constants/authOptions";
import { getServerSession } from "next-auth";
import { OrderData } from "@/components/OrderData";

export default async function Page({ params }: { params: { id: number } }) {
  const session = await getServerSession(authOptions);

  return (
    <main className="flex flex-col overflow-hidden">
      <Header />
      {session?.user !== undefined ? (
        <OrderData orderId={params.id} />
      ) : (
        <AccessDenied isLogged={session?.user !== undefined} />
      )}
      <Footer />
    </main>
  );
}
