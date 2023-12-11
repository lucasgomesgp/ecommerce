import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Slider } from "@/components/Slider";

export default function Home() {
  return (
    <main>
      <Header isLoginPage={false} />
      <Slider />
      <Footer />
    </main>
  );
}
