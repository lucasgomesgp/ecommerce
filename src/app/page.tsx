import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Slider } from "@/components/Slider";
import { getSlides } from "@/services/getSlides";
import { ISlides } from "@/utils/types/ISlides";
import Head from "next/head";

export default async function Home() {
  const {data} : ISlides = await getSlides();

  return (
    <>
    <Head>
    <meta charSet="utf-8" /> 
        </Head>
    <main>
      <Header isLoginPage={false} />
      <Slider data={data}/>
      <Footer />
    </main>
    </>
  );
}
