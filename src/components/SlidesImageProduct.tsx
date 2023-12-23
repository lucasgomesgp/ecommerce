"use client";
import { useState } from "react";
import ImageProduct from "./ImageProduct";
import { ISlidesProduct } from "@/utils/types/ISlidesProduct";
import Image from "next/image";
import { IImagesProductFormatted } from "@/utils/types/IImagesProductFormatted";
import { ArrowSlideProductTop } from "@/svgs/arrow-slide-product-top";
import { ArrowSlideProductDown } from "@/svgs/arrow-slide-product-down";

interface Props {
  title: string;
  content?: Array<ISlidesProduct>;
}
export function SlidesImageProduct({ title, content }: Props) {
  let idsSlides = 0;
  const [positionSlide, setPositionSlide] = useState(0);
  let slideFormatted: Array<IImagesProductFormatted> | undefined = [];
  let imageSrc = content ? content[positionSlide]?.attributes?.url : "";

  slideFormatted = content?.map((current) => {
    const slideCurrent = {
      idSlide: idsSlides + 1,
      ...current,
    };
    idsSlides += 1;
    return slideCurrent;
  });
  return (
    <div className="flex gap-9 bg-white-light pl-[104px]  relative -left-20">
      <div className="flex flex-col gap-[22px] pt-4">
        {slideFormatted?.map(({ id, idSlide, attributes }) => {
          return (
            <button
              key={id}
              onClick={() => {
                setPositionSlide(idSlide - 1);
              }}
              className={`relative flex hover:opacity-70 transition-opacity items-center justify-center before:absolute before:self-center  before:rounded-xl  before:w-[77px] before:h-[77px]  ${
                idSlide === positionSlide + 1
                  ? "before:border before:border-gray-text-menu"
                  : ""
              }`}
            >
              <Image
                className="rounded-[9px] "
                src={`${process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL}${attributes.url}`}
                alt={title}
                width={50}
                height={50}
                priority
              />
            </button>
          );
        })}
        <div className="flex flex-col">
          <button
            onClick={() => {
              setPositionSlide(positionSlide - 1);
            }}
            className="disabled:cursor-not-allowed"
            disabled={positionSlide === 0}
          >
            <ArrowSlideProductDown />
          </button>
          <button
            onClick={() => {
              setPositionSlide(positionSlide + 1);
            }}
            className="disabled:cursor-not-allowed"
            disabled={positionSlide + 1 === content?.length}
          >
            <ArrowSlideProductTop />
          </button>
        </div>
      </div>
      <ImageProduct title={title} src={imageSrc} />
    </div>
  );
}
