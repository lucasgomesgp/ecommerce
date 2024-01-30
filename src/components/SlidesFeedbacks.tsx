"use client"
import { IFeedbackData, feedbackData } from "@/utils/data/Feedback";
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../app/swiper-feedback.css';
import { Star } from "@/svgs/star";
import { StarHalf } from "@/svgs/star-half";
import { StarEmpty } from "@/svgs/star-empty";

export function SlidesFeedbacks() {
    function returnStars(feedback: IFeedbackData) {
        return [...Array(5)].map((value, index) => {
            const currentNumber = Number(feedback.stars.toString().split(".")[0]);
            const numberLength = feedback.stars.toString().split(".").length;
            const indexCompare = index + 1;
            if (indexCompare <= currentNumber) {
                return (
                    <Star />
                );
            }
            if (index === currentNumber && numberLength === 2) {
                return (<StarHalf />);
            }
            return (<StarEmpty />);
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
            modules={[Pagination]}
            id="swiper-feedback"
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                480: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                },
            }}
        >
            {feedbackData.map((feedback, index) => (
                <SwiperSlide key={feedback.id} className="swiper-div">
                    <div className="border h-[292px] bg-white border-gray-border flex flex-col rounded-[10px] w-[396px] gap-[20px] p-[23px]" >
                        <div className="flex items-center justify-between">
                            <Image src={feedback.photoUrl} alt={feedback.name} height={100} width={100} className="h-[58px] w-[58px]" />
                            <div className="flex gap-[10px]">
                                {returnStars(feedback)}
                            </div>
                        </div>
                        <p className="text-gray-text-menu font-coreSans text-[22px]">{feedback.name}</p>
                        <p className="text-gray-light text-sm ">{feedback.text}</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
