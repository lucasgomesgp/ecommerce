"use client";
import { useState } from "react";
import ImageProduct from "./ImageProduct";
import { ISlidesProduct } from "@/utils/types/ISlidesProduct";
import Image from "next/image";
import { IImagesProductFormatted } from "@/utils/types/IImagesProductFormatted";

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
    return { idSlide: idsSlides + 1, ...current };
  });

  return (
    <div className="flex gap-9">
      <div className="flex flex-col gap-[22px]">
        {slideFormatted?.map(({ id, idSlide, attributes }) => (
          <button
            key={id}
            onClick={() => {
              setPositionSlide(idSlide - 1);
            }}
          >
            <Image
              className="rounded-[9px] hover:opacity-70 transition-opacity"
              src={`${process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL}${attributes.url}`}
              alt={title}
              width={50}
              height={50}
              priority
            />
          </button>
        ))}
      </div>
      <ImageProduct title={title} src={imageSrc} />
    </div>
  );
}
