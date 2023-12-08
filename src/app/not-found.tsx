import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function NotFound() {
  return (
    <main className="w-full min-h-full">
      <Header isLoginPage={false} />
      <section className="flex items-center justify-center h-32">
        <h3 className="font-bold">Página não encontrada!</h3>
      </section>
      <Footer />
    </main>
  );
}
