"use client";

import "swiper/css";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

import { ISlides } from "@/utils/types/ISlides";
import Image from "next/image";
import Link from "next/link";
import { register } from "swiper/element/bundle";
import "../styles/swiper-reset.css";

register();

export function Slider({ data }: ISlides) {
  let widthPage = 0;
  if (typeof window !== "undefined") {
    widthPage = window.innerWidth;
  }
  const [widthOfPage, setWidthOfPage] = useState(widthPage);
  useEffect(() => {
    function getWidhtOfPage() {
      setWidthOfPage(() => {
        const width = window.innerWidth;
        return width;
      });
    }
    window.addEventListener("resize", getWidhtOfPage);
    return () => {
      window.removeEventListener("resize", getWidhtOfPage);
    };
  }, []);
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      pagination={{ clickable: true, type: "progressbar" }}
      navigation={widthOfPage >= 1024 ? true : false}
      className={`swiper-slides max-w-full h-[300px] md:h-[500px] lg:h-[716px] lg:max-h-[716px] pb-4 font-coreSans`}
      centeredSlides={true}
      modules={[Autoplay, Navigation, EffectFade, Pagination]}
      autoplay={{
        delay: 2000,
        disableOnInteraction: true,
      }}
    >
      {data.map(({ id, attributes }, index) => {
        return (
          <SwiperSlide className="relative" key={id}>
            <Image
              key={id}
              src={attributes.image.data.attributes.url}
              className=" w-full h-[300px] md:h-[500px]  lg:h-[720px] bg-left-top"
              alt={`Slider image`}
              width={2000}
              height={1000}
              priority
            />
            <section className="flex font-coreSans flex-col top-[50px] lg:-bottom-9 gap-4 md:gap-10 absolute left-8 md:left-20 lg:left-48 md:bottom-48">
              <p className="text-white text-sm md:text-base lg:text-[32px] font-medium">
                {attributes.title}
              </p>
              <h1 className="text-white text-sm md:text-[39px] lg:text-[78px] font-bold word-break md:w-[470px] leading-none">
                {attributes.centralTitle}
              </h1>
              <p className="text-white text-sm md:text-base lg:text-[32px] font-medium">
                {attributes.downTitle}
              </p>
              <Link
                href={attributes.link}
                className="bg-white text-center text-gray-text-menu py-2 font-semibold md:text-2xl md:w-[250px] rounded-lg md:py-4  hover:opacity-80 hover:transition-all"
              >
                Shop Now
              </Link>
            </section>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
