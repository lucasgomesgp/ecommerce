import { Card } from "@/components/Card";
import CardArrival from "@/components/CardArrival";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Slider } from "@/components/Slider";
import { SlidesFeedbacks } from "@/components/SlidesFeedbacks";
import { TitleWithBar } from "@/components/TitleWithBar";
import { getSlides } from "@/services/getSlides";
import { getWomenWithLimit } from "@/services/getWomenWithLimit";
import { ArrowDown } from "@/svgs/arrow-down";
import { ArrowDownBlack } from "@/svgs/arrow-down-black";
import { categoriesForMen } from "@/utils/data/CategoriesForMen";
import { ISlides } from "@/utils/types/ISlides";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";


export default async function Home() {
  const { data }: ISlides = await getSlides();
  const womenData = await getWomenWithLimit();
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
        <div className="self-start md:pl-[70px]">
          <TitleWithBar title="New Arrival" />
          <div className="flex flex-wrap gap-[38px] mt-[70px]">
            <CardArrival link="/shop/joggers" imageSrc="/assets/knitted_joggers.png" name="Knitted Joggers" />
            <CardArrival link="/shop/men" imageSrc="/assets/full_sleeve.png" name="Full Sleeve" />
            <CardArrival link="/shop/men" imageSrc="/assets/active_tshirt.png" name="Active T-Shirts" />
            <CardArrival link="/shop/women" imageSrc="/assets/urban_shirt.png" name="Urban Shirts" />
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center mt-[100px]">
        <div className="self-start md:pl-[70px]">
          <TitleWithBar title="Big Saving Zone" />
          <div className="flex flex-wrap gap-[20px] mt-[70px]">
            <div className="relative text-white">
              <Image src="/assets/hawaiian_style.png" className="w-full h-full" alt="Hawaiian Shirt" height={393} width={400} />
              <div className="absolute hidden lg:flex flex-col top-16 left-[20px]">
                <p className="font-coreSans font-medium lg:text-[28px] w-[134px] lg:mb-[9px]">
                  Hawaiian Shirts
                </p>
                <p className="font-semibold text-sm">
                  Dress up in summer vibe
                </p>
                <p className="font-bold lg:text-lg lg:mt-[9px] lg:mb-[30px]">
                  UPTO 50% OFF
                </p>
                <div className="flex justify-center lg:mb-[40px] lg:w-[140px]">
                  <ArrowDown />
                </div>
                <Link href={"/shop/men"} className="rounded-[4px] text-xs py-[10px] px-[25px] border border-white bg-transparent">
                  SHOP NOW
                </Link>
              </div>
            </div>
            <div className="relative text-white ">
              <Image src="/assets/printed.png" alt="Printed T-Shirt" height={393} width={400} />
              <div className="lg:flex flex-col absolute hidden top-4 right-[26px] lg:max-w-[160px] ">
                <Link href="/women" className="hover:opacity-80 transition-opacity text-white bg-gray-text-menu mb-[26px] px-[16px] py-[10px] self-end rounded-[4px]">
                  Limited Stock
                </Link>
                <p className="font-coreSans font-medium lg:text-[28px] w-[90px]  lg:mb-[15px] self-end">
                  Printed
                  T-Shirt
                </p>
                <p className="font-semibold text-sm text-start lg:mb-[10px]">
                  New Designs Every Week
                </p>
                <p className="font-bold lg:text-lg lg:mt-[9px] lg:mb-[27px] self-end">
                  UPTO 40% OFF
                </p>
                <div className="self-center lg:mb-[30px]">
                  <ArrowDown />
                </div>
                <Link href={"/women"} className="hover:opacity-80 text-xs transition-opacity text-center rounded-[4px] py-[10px] px-[25px] border border-white bg-transparent">
                  SHOP NOW
                </Link>
              </div>
            </div>
            <div className="relative text-gray-text-menu">
              <Image src="/assets/joggers.png" alt="Cargo Joggers" height={393} width={400} />
              <div className="lg:flex flex-col items-start absolute hidden top-16 right-[17px] lg:max-w-[156px] ">
                <p className="font-coreSans font-medium lg:text-[28px] w-[114px]  lg:mb-[9px] self-start">
                  Cargo
                  Joggers
                </p>
                <p className="font-semibold text-sm text-start lg:mb-[10px]">
                  Move with style & comfort
                </p>
                <p className="font-bold lg:text-lg lg:mt-[9px] lg:mb-[30px] text-center">
                  UPTO 50% OFF
                </p>
                <div className="ml-[51px] lg:mb-[36px]">
                  <ArrowDownBlack />
                </div>
                <Link href={"/women"} className="hover:opacity-80 text-xstransition-opacity text-center rounded-[4px] py-[10px] px-[25px] border border-gray-text-menu bg-transparent">
                  SHOP NOW
                </Link>
              </div>
            </div>
            <div className="relative text-gray-text-menu">
              <Image src="/assets/urban.png" alt="Urban Shirts" height={393} width={610} />
              <div className="lg:flex flex-col items-start absolute hidden top-[45px] right-[120px] lg:max-w-[133px] ">
                <p className="font-coreSans font-medium lg:text-[32px] w-[99px] lg:mb-[10px] self-start">
                  Urban
                  Shirts
                </p>
                <p className="font-semibold  text-start lg:mb-[11px]">
                  Live In Confort
                </p>
                <p className="font-bold lg:text-[20px] lg:mb-[36px] text-center">
                  FLAT 60% OFF
                </p>
                <div className="self-center lg:mb-[43px]">
                  <ArrowDownBlack />
                </div>
                <Link href={"/shop/men"} className="hover:opacity-80 text-xs transition-opacity text-center rounded-[4px] w-full py-[11px]  border-2 border-gray-text-menu bg-transparent">
                  SHOP NOW
                </Link>
              </div>
            </div>
            <div className="relative text-gray-text-menu">
              <Image src="/assets/oversized.png" alt="Oversized T-Shirts" height={393} width={610} />
              <div className="lg:flex flex-col items-start absolute hidden top-[45px] right-[120px] lg:max-w-[133px] ">
                <p className="font-coreSans font-medium lg:text-[32px] w-[163px] lg:mb-[10px] self-start">
                  Oversized
                  T-Shirts
                </p>
                <p className="font-semibold  text-start lg:mb-[11px]">
                  Street Style Icon
                </p>
                <p className="font-bold lg:text-[20px] lg:mb-[36px] text-center">
                  FLAT 60% OFF
                </p>
                <div className="self-center lg:mb-[44px]">
                  <ArrowDownBlack />
                </div>
                <Link href={"/shop/men"} className="hover:opacity-80 text-xs transition-opacity text-center rounded-[4px] w-full py-[11px]  border-2 border-gray-text-menu bg-transparent">
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-wrap items-center justify-center lg:justify-normal lg:pl-[70px] mt-[100px] ">
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
        <Image src="/assets/models2.png" height={639} width={626} className="h-[639px] w-[626px]" alt="Background Shop" />
      </section>
      <section className="flex flex-col justify-center items-center mt-[100px]">
        <div className="self-start md:pl-[70px]">
          <TitleWithBar title="Categories For Men" />
          <div className="flex justify-center items-center flex-wrap mt-[70px] lg:grid lg:grid-cols-4  gap-[50px]">
            {categoriesForMen.map(({ id, imageSrc, title, subTitle }) => (
              <Link href="/shop/men" key={id} className="flex flex-col gap-[14px] hover:opacity-80 transition-opacity">
                <Image src={imageSrc} alt={title} height={393} width={270} />
                <div className="flex flex-col">
                  <p className="text-black-title font-causten font-bold">{title}</p>
                  <div className="flex justify-between">
                    <p className="text-gray-text-light font-causten font-medium">{subTitle}</p>
                    <ArrowLongRightIcon color="#797979" width={17} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="mt-[100px] flex justify-center">
        <Image src="/assets/top_brands.png" height={357} width={1233} alt="Top Brands" />
      </section>
      <section className="flex flex-col justify-center items-center mt-[77px]">
        <div className="self-start md:pl-[70px]">
          <TitleWithBar title="In The Limelight" />
          <div className="flex flex-wrap gap-[50px] justify-center lg:justify-start">
            {womenData?.data?.length >= 1
              &&
              womenData.data.map(({ id, attributes }) => (
                <Card key={id}
                  id={id}
                  image={attributes.image?.data.attributes.url || ""}
                  price={attributes.price}
                  subTitle={attributes.subTitle}
                  title={attributes.title}
                  colors={attributes.colors}
                  sizes={attributes.sizes}
                />
              )
              )}
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center mt-[77px] pb-[100px] overflow-hidden">
        <div className="self-start md:pl-[70px] pb-2">
          <TitleWithBar title="Feedback" />
        </div>
        <SlidesFeedbacks />
      </section>
      <Footer />
    </main>
  );
}
