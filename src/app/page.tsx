import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Slider } from "@/components/Slider";
import { SlidesFeedbacks } from "@/components/SlidesFeedbacks";
import { TitleWithBar } from "@/components/TitleWithBar";
import { getSlides } from "@/services/getSlides";
import { ISlides } from "@/utils/types/ISlides";
import Image from "next/image";
import Link from "next/link";


export default async function Home() {
  const { data }: ISlides = await getSlides();
  return (
    <main>
      <Header isLoginPage={false} />
      {
        data?.length >= 1 && <Slider data={data} />
      }
      <section className="mt-[130px] flex flex-wrap items-center justify-center lg:gap-[30px]">
        <div className="relative">
          <Image src="/assets/low_price.png" width={600} height={355} className="w-[600px] h-[338px]" alt="Low Price" />
          <div className="flex flex-col items-start justify-center absolute left-[32px] top-0 h-full">
            <p className="font-montserrat font-extrabold text-white mb-6">Low Price</p>
            <p className="font-coreSans font-extrabold text-[34px] text-white mb-[9px]">High Coziness</p>
            <p className="font-coreSans font-medium text-white mb-[41px]">UPTO 50% OFF</p>
            <Link href="/women" className="font-coreSans font-bold text-[20px] text-white underline decoration-1 hover:opacity-70 transition-all">Explore Items</Link>
          </div>
        </div>
        <div className="relative">
          <Image src="/assets/summer_style.png" width={600} height={355} className="w-[600px] h-[355px]" alt="Summer Style" />
          <div className="flex flex-col items-start justify-center absolute left-[32px] top-0 h-full">
            <p className="font-montserrat font-extrabold text-white mb-6">Beyoung Presents</p>
            <p className="font-coreSans font-extrabold text-[34px] text-white mb-[9px] word-break lg:w-[280px]">
              Breezy Summer Style
            </p>
            <p className="font-coreSans font-medium text-white mb-[41px]">UPTO 50% OFF</p>
            <Link href="/women" className="font-coreSans font-bold text-[20px] text-white underline decoration-1 hover:opacity-70 transition-all">Explore Items</Link>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center mt-[100px]">
        <div className="self-start pl-[70px]">
          <TitleWithBar title="New Arrival" />
        </div>
      </section>
      <section className="flex flex-col justify-center items-center mt-[100px]">
        <div className="self-start pl-[70px]">
          <TitleWithBar title="Big Saving Zone" />
        </div>
      </section>
      <section className="flex flex-wrap items-center justify-center mt-[100px]">
        <div className="relative">
          <Image src="/assets/models1.png" height={639} width={613} className="h-[639px] w-[613px]" alt="Background Shop" />
          <div className="absolute top-0 left-[74px] flex flex-col items-start justify-center h-full">
            <p className="font-coreSans text-white font-extrabold text-[34px] mb-[30px]">
              WE MADE YOUR EVERYDAY FASHION BETTER!
            </p>
            <p className="text-white font-light text-xl mb-[50px] lg:w-[451px]">
              In our journey to improve everyday fashion, euphoria presents EVERYDAY wear range - Comfortable & Affordable fashion 24/7
            </p>
            <Link href="/women"
              className="bg-white text-center text-gray-text-menu py-3 px-11 font-semibold md:text-2xl rounded-lg hover:opacity-80 hover:transition-all"
            >
              Shop Now
            </Link>
          </div>
        </div>
        <Image src="/assets/models2.png" height={639} width={613} className="h-[639px] w-[613px]" alt="Background Shop" />
      </section>
      <section className="flex flex-col justify-center items-center mt-[100px]">
        <div className="self-start pl-[70px]">
          <TitleWithBar title="Categories For Men" />
        </div>
      </section>
      <section className="mt-[100px] flex justify-center">
        <Image src="/assets/top_brands.png" height={357} width={1233} alt="Top Brands" />
      </section>
      <section className="flex flex-col justify-center items-center mt-[77px]">
        <div className="self-start pl-[70px]">
          <TitleWithBar title="In The Limelight" />
        </div>
      </section>
      <section className="flex flex-col justify-center items-center mt-[77px] pb-[100px] overflow-hidden">
        <div className="self-start pl-[70px] pb-2">
          <TitleWithBar title="Feedback" />
        </div>
       <SlidesFeedbacks />
      </section>
      <Footer />
    </main>
  );
}
