"use client"
import { WishlistContext } from "@/app/context/WishlistContext";
import { useWishStorage } from "@/hooks/useWishStorage";
import { currencyFormatter } from "@/utils/functions/currencyFormatter";
import { IWishItems } from "@/utils/types/IWishItems";
import { HeartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { toast } from "sonner";

interface Props {
  id: number;
  image: string;
  title: string;
  subTitle: string;
  price: number;
  colors?: Array<{ name: string, value: string }>;
  sizes?: Array<string>;

}
export function Card({ id, title, image, subTitle, price, colors, sizes }: Props) {
  const { wishItems, setWishItems } = useContext(WishlistContext);
  const { setItemsOnStorage } = useWishStorage();

  function handleSetOnWishlist() {
    const currentItem: IWishItems = {
      id,
      color: "",
      image,
      title,
      price,
      quantity: 1,
      colors,
      sizes
    };
    setWishItems([...wishItems, currentItem]);
    setItemsOnStorage([...wishItems, currentItem]);
    toast.success("Added on wishlist");
  }
  return (
    <Link
      href={`/product/${id}`}
      className="w-[282px] relative hover:opacity-80 transition-opacity max-h-[441px]"
    >
      {image && (
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
      )}
      <button className="absolute top-[26px] right-5 flex border hover:bg-red-700 transition-all items-center justify-center rounded-full bg-white w-8 h-8"
        onClick={handleSetOnWishlist}
      >
        <HeartIcon width={20} height={20} color="#3C4242" />
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
    </Link>
  );
}
