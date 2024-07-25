"use client";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { IFeedbackData, feedbackData } from "@/utils/data/Feedback";
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from "next/image";
import { Star } from "@/svgs/star";
import { StarEmpty } from "@/svgs/star-empty";
import { StarHalf } from "@/svgs/star-half";
import { getRandomId } from "@/utils/functions/getRandomId";
import { register } from "swiper/element/bundle";

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
    <Swiper
      slidesPerView={3}
      spaceBetween={0}
      autoplay
      pagination={{
        clickable: true,
        type: "bullets",
      }}
      modules={[Pagination, Navigation]}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      {feedbackData.map((feedback, index) => (
        <SwiperSlide key={getRandomId(feedback.id)} className="border min-h-[292px] bg-white border-gray-border flex flex-col rounded-[10px] max-w-[396px] gap-[20px] p-[23px]">
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
          <p className="text-gray-light text-sm ">{feedback.text}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
