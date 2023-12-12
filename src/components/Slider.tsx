"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element/bundle";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import { ISlides } from "@/utils/types/ISlides";
register();

export function Slider({ data }: ISlides) {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      pagination={{ clickable: true }}
      navigation
      className="w-full h-[716px] max-h-[716px] pb-4"
      centeredSlides={true}
      modules={[Autoplay, Navigation, EffectFade]}
      autoplay={{
        delay: 2000,
        disableOnInteraction: true,
      }}
    >
      {data.map(({ id, attributes }) => {
        return (
          <SwiperSlide className="" key={id}>
            <Image
              key={id}
              src={`${process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL}${attributes.image.data.attributes.url}`}
              className=" w-full h-full bg-left-top"
              alt={`Slider image`}
              width={1449}
              height={716}
              priority
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
