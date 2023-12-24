"use client";
import Image from "next/image";
import ReactImageMagnify from "react-image-magnify";

interface Props {
  src: string;
  title: string;
}

export default function ImageProduct({ src, title }: Props) {
  return (
       <ReactImageMagnify
      {...{
        smallImage: {
          alt: title,
          isFluidWidth: true,
          src: `${process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL}${src}`,
        },
        largeImage: {
          src: `${process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL}${src}`,
          width: 520,
          height: 785,
        },
        isHintEnabled: true,
        shouldHideHintAfterFirstActivation: true,
      }}
    />
  );
}
