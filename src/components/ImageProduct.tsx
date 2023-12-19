"use client";
import Image from "next/image";

interface Props {
  src: string;
  title: string;
}

export default function ImageProduct({ src, title }: Props) {
  return (
    <Image
      src={`${process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL}${src}`}
      width={520}
      height={785}
      priority
      alt={title}
      className="transition-opacity opactiy-0 duration-200 w-[520px]"
      onLoadingComplete={(image) => image.classList.remove("opacity-0")}
    />
  );
}
