import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

interface Props {
  title: string;
  subtitle: string;
  link: string;
  srcImage: string;
  altImage: string;
}
export default function ButtonAppShopping({
  title,
  subtitle,
  link,
  srcImage,
  altImage,
}: Props) {
  return (
    <Link
      href={link}
      className="text-white flex items-center gap-3 pl-[9px] pr-5 justify-center bg-gray-icon py-[14px] min-w-[150px] h-[50px] hover:opacity-70 transition-all"
    >
      <Image src={srcImage} width={30} height={32} alt={altImage} />
      <div className="flex flex-col">
        <p className="text-[10px]">{title}</p>
        <span className="text-lg">{subtitle}</span>
      </div>
    </Link>
  );
}
