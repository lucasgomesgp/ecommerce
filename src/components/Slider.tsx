"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element/bundle";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import { ISlides } from "@/utils/types/ISlides";
import Link from "next/link";
import { info } from "@/utils/data/InfoSlides";
import { useEffect, useState } from "react";
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
      pagination={{ clickable: widthOfPage >= 1024 ? true : false }}
      navigation={widthOfPage >= 1024 ? true : false}
      className={`max-w-full h-[716px] max-h-[716px] pb-4 font-coreSans`}
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
              className=" w-auto h-auto bg-left-top"
              alt={`Slider image`}
              width={1449}
              height={740}
              priority
            />
            <div className="flex font-coreSans flex-col -bottom-9 gap-4 md:gap-10 absolute left-8 md:left-20 lg:left-48 md:bottom-48">
              <p className="text-white text-sm md:text-base lg:text-[32px] font-medium">
                {info[id - 1].title}
              </p>
              <h1 className="text-white text-sm md:text-[39px] lg:text-[78px] font-bold word-break md:w-[470px] leading-none">
                {info[id - 1].centralTitle}
              </h1>
              <p className="text-white text-sm md:text-base lg:text-[32px] font-medium">
                {info[id - 1].downTitle}
              </p>
              <Link
                href={info[id - 1].link}
                className="bg-white text-center text-gray-text-menu py-2 font-semibold md:text-2xl md:w-[250px] rounded-lg md:py-4  hover:opacity-80 hover:transition-all"
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
