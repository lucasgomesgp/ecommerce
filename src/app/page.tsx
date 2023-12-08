import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default async function Home() {
  return (
    <main className="w-full min-h-full">
      <Header isLoginPage={false} />
      <Footer />
    </main>
  );
}
