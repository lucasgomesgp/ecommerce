"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element/bundle";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
register();

export function Slider() {
  const data = [
    { id: 1, src: "http://localhost:1337/uploads/banner_55de528580.png" },
    { id: 2, src: "http://localhost:1337/uploads/banner_55de528580.png" },
    { id: 3, src: "http://localhost:1337/uploads/banner_55de528580.png" },
    { id: 4, src: "http://localhost:1337/uploads/banner_55de528580.png" },
  ];
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
      {data.map(({ id, src }) => (
        <>
          <SwiperSlide className="">
            <Image
              key={id}
              src={src}
              className=" w-full h-full bg-left-top"
              alt={`Product thumb gallery`}
              width={1449}
              height={716}
              priority
            />
          </SwiperSlide>
        </>
      ))}
    </Swiper>
  );
}
