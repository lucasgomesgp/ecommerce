import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Slider } from "@/components/Slider";
import { getSlides } from "@/services/getSlides";
import { ISlides } from "@/utils/types/ISlides";

export default async function Home() {
  const {data} : ISlides = await getSlides();

  return (
    <main>
      <Header isLoginPage={false} />
      <Slider data={data}/>
      <Footer />
    </main>
  );
}
