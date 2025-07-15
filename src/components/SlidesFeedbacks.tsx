"use client";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { IFeedbackData, feedbackData } from "@/utils/data/Feedback";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import { Star } from "@/svgs/star";
import { StarEmpty } from "@/svgs/star-empty";
import { StarHalf } from "@/svgs/star-half";
import { getRandomId } from "@/utils/functions/getRandomId";
import { register } from "swiper/element/bundle";
import "../styles/swiper-feedback.css";

register();

export function SlidesFeedbacks() {
  function returnStars(feedback: IFeedbackData) {
    return [...Array(5)].map((value, index) => {
      const currentNumber = Number(feedback.stars.toString().split(".")[0]);
      const numberLength = feedback.stars.toString().split(".").length;
      const indexCompare = index + 1; // First position is zero, so plus 1 for compare with number of starts
      if (indexCompare <= currentNumber) {
        return <Star key={getRandomId(feedback.id)} />;
      }
      if (index === currentNumber && numberLength === 2) {
        return <StarHalf key={getRandomId(feedback.id)} />;
      }
      return <StarEmpty key={getRandomId(feedback.id)} />;
    });
  }

  return (
    <div className="w-[1200px] max-w-full overflow-hidden flex justify-center items-center">
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        autoplay={{
          delay: 3000,
        }}
        pagination={{
          clickable: true,
          type: "bullets",
          dynamicBullets: true,
        }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 30 },
        }}
        modules={[Pagination, Navigation]}
        className="swiper-feedback"
      >
        {feedbackData.map((feedback, index) => (
          <SwiperSlide
            key={getRandomId(feedback.id)}
            className="w-[250px] md:w-[380px] pb-12"
          >
            <div className="border  h-[300px] w-[250px] md:w-[380px] mx-auto bg-white border-gray-border flex flex-col rounded-[10px] overflow-hidden gap-[20px] p-[23px]">
              <div className="flex items-center justify-between">
                <Image
                  src={feedback.photoUrl}
                  alt={feedback.name}
                  height={100}
                  width={100}
                  className="h-[58px] w-[58px]"
                />
                <div className="flex gap-[10px]">{returnStars(feedback)}</div>
              </div>
              <p className="text-gray-text-menu font-coreSans text-[22px]">
                {feedback.name}
              </p>
              <p className="text-gray-light text-sm text-ellipsis">
                {feedback.text}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
