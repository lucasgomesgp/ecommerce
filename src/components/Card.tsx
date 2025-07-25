"use client";

import { Heart } from "@phosphor-icons/react";
import { IWishItems } from "@/utils/types/IWishItems";
import Image from "next/image";
import Link from "next/link";
import { WishlistContext } from "@/app/context/WishlistContext";
import { currencyFormatter } from "@/utils/functions/currencyFormatter";
import { toast } from "sonner";
import { useContext } from "react";
import { useWishStorage } from "@/hooks/useWishStorage";

interface Props {
  id: number;
  image: string;
  title: string;
  subTitle: string;
  price: number;
  colors?: Array<{ name: string; value: string }>;
  sizes?: Array<string>;
}
export function Card({
  id,
  title,
  image,
  subTitle,
  price,
  colors,
  sizes,
}: Props) {
  const { wishItems, setWishItems } = useContext(WishlistContext);
  const { setWishItemsOnStorage } = useWishStorage();

  function handleSetOnWishlist() {
    const currentItem: IWishItems = {
      id,
      color: "",
      image,
      title,
      price,
      quantity: 1,
      colors,
      sizes,
    };
    setWishItems([...wishItems, currentItem]);
    setWishItemsOnStorage([...wishItems, currentItem]);
    toast.success("Added on wishlist");
  }
  return (
    <div className="w-[282px] relative hover:opacity-80 transition-opacity max-h-[441px]">
      {image && (
        <Link href={`/shop/product/${id}`}>
          <Image
            src={image}
            alt={title}
            quality={100}
            height={0}
            width={0}
            sizes="100vw"
            className="rounded-xl mb-[30px] h-[370px] w-[282px]"
            priority
          />
        </Link>
      )}
      <button
        className="absolute top-[26px] right-5 flex  hover:bg-red-500 group transition-all items-center justify-center rounded-full bg-white w-12 h-12"
        onClick={handleSetOnWishlist}
      >
        <Heart
          width={20}
          height={20}
          className="text-black group-hover:text-white"
        />
      </button>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <p className="font-bold overflow-hidden whitespace-nowrap text-ellipsis w-[152px]">
            {title}
          </p>
          <span>{subTitle}</span>
        </div>
        <p className="font-bold text-sm text-gray-text-menu bg-white-light px-4 py-[10px] rounded-lg">
          {currencyFormatter(price)}
        </p>
      </div>
    </div>
  );
}
