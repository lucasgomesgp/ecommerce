"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element/bundle";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import { ISlides } from "@/utils/types/ISlides";
import Link from "next/link";
import localFont from "next/font/local";
register();

const coreSans = localFont({
  src:[
   {
    path: "../fonts/CoreSansG-Medium.ttf",
    weight: "500",
    style: "normal",
  },
  {
    path: "../fonts/CoreSansG-Heavy.ttf",
    weight: "800",
    style: "normal",
  }],
  variable: "--font-coresans"
})

export function Slider({ data }: ISlides) {
  const info = [
    {
      title: "T-shirt / Tops",
      centralTitle: "Summer Value Pack",
      downTitle: "cool / colorful / comfy",
      link: "/woman",
    },
    {
      title: "Suits / T-shirt",
      centralTitle: "Fashion Value Pack",
      downTitle: "cool / colorful / comfy",
      link: "/men",
    },
  ];

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      pagination={{ clickable: true }}
      navigation
      className={`w-full h-[716px] max-h-[716px] pb-4 ${coreSans.className}`}
      centeredSlides={true}
      modules={[Autoplay, Navigation, EffectFade]}
      autoplay={{
        delay: 2000,
        disableOnInteraction: true,
      }}
    >
      {data.map(({ id, attributes }) => {
        return (
          <SwiperSlide className="relative" key={id}>
            <Image
              key={id}
              src={`${process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL}${attributes.image.data.attributes.url}`}
              className=" w-full h-full bg-left-top"
              alt={`Slider image`}
              width={1449}
              height={716}
              priority
            />
            <div className="flex flex-col gap-10 absolute left-48 bottom-48">
              <p className="text-white text-[32px] font-coreSans font-medium">{info[id-1].title}</p>
              <h1 className="text-white text-[78px] font-bold word-break w-[470px] leading-none">{info[id-1].centralTitle}</h1>
              <p className="text-white text-[32px] font-medium">{info[id-1].downTitle}</p>
              <Link
                href={info[id - 1].link}
                className="bg-white text-center text-gray-text-menu font-semibold text-2xl w-[250px] rounded-lg py-4  hover:opacity-80 hover:transition-all"
              >
                Shop Now
              </Link>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
