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
  function currencyFormatter(value: number){
    const currency = new Intl.NumberFormat("en-US",{
      style: "currency",
      currency: "USD",
    });
    return currency.format(value);
  }
  return (
    <Link href={`/product/${id}`} className="w-[282px]">
      <Image src={image} alt={title} width={282} height={370} quality={100} className="rounded-xl mb-[30px]"/>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <p className="font-bold overflow-hidden whitespace-nowrap text-ellipsis w-[152px]">{title}</p>
          <span>{subTitle}</span>
        </div>
        <p className="font-bold text-sm text-gray-text-menu bg-white-light px-4 py-[10px] rounded-lg">{currencyFormatter(price)}</p>
      </div>
    </Link>
  );
}
