"use client";
import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
interface Props {
  src: string;
  title: string;
}

export default function ImageProduct({ src, title }: Props) {
  return (
    <Zoom>
      <Image
        src={src}
        height={1000}
        width={1000}
        alt={title}
        style={{ width: "520px", height: "785px" }}
        priority
      />
    </Zoom>
  );
}
