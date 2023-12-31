import { currencyFormatter } from "@/utils/functions/currencyFormatter";
import { HeartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

interface Props {
  id: number;
  image: string;
  title: string;
  subTitle: string;
  price: number;
}
export function Card({ id, title, image, subTitle, price }: Props) {
  return (
    <Link
      href={`/product/${id}`}
      className="w-[282px] relative hover:opacity-80 transition-opacity max-h-[441px]"
    >
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
      <button className="absolute top-[26px] right-5 flex items-center justify-center rounded-full bg-white w-8 h-8">
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
