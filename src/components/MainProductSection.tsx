"use client";

import "../styles/effects.css";

import { ProductData, ProductDataArr } from "@/app/shop/product/[id]/page";
import { useContext, useState } from "react";

import { ArrowMenu } from "@/svgs/arrow-menu";
import { ArrowSizes } from "@/svgs/arrow-sizes";
import ButtonAddToCart from "./ButtonAddToCart";
import { Card } from "./Card";
import { CreditCard } from "@/svgs/credit-card";
import { DeliveryDetails } from "./DeliveryDetails";
import { IShoppingCartItems } from "@/utils/types/IShoppingCartItems";
import ImageProduct from "./ImageProduct";
import { Return } from "@/svgs/return";
import { ShoppingCartContext } from "@/app/context/ShoppingCartContext";
import { SlidesImageProduct } from "./SlidesImageProduct";
import { TShirt } from "@/svgs/tshirt";
import { TitleWithBar } from "./TitleWithBar";
import { Truck } from "@/svgs/truck";
import { currencyFormatter } from "@/utils/functions/currencyFormatter";
import { sizesProduct } from "@/utils/constants/sizesProduct";
import { toast } from "sonner";
import { useItemsStorage } from "@/hooks/useItemsStorage";
import { v4 as uuidv4 } from "uuid";

interface Props {
  product: ProductData;
  products: ProductDataArr;
}
export default function MainProductSection({ product, products }: Props) {
  const [itemToCart, setItemToCart] = useState<IShoppingCartItems>({
    id: product.data.id,
    color: "",
    imageSrc: product.data.attributes.image?.data.attributes.url || "",
    price: product.data.attributes.price,
    size: "",
    title: product.data.attributes.title,
    quantity: 1,
  });
  const sizesFilter = product.data.attributes.sizes.filter((sizeItem) =>
    sizesProduct.includes(sizeItem)
  );
  const { items, setItems } = useContext(ShoppingCartContext);
  const { itemsStorage, setItemsOnStorage } = useItemsStorage();

  function handleSetItemOnLocalStorage() {
    const itemExists = itemsStorage.filter(({ id, color, size }) => {
      return (
        id === itemToCart.id &&
        color === itemToCart.color &&
        size === itemToCart.size
      );
    });
    if (itemsStorage.length !== 0) {
      if (itemExists.length >= 1) {
        const sameItemsWithNewQuantity: IShoppingCartItems[] = itemsStorage.map(
          (currentItem) => {
            const data =
              currentItem.id === itemToCart.id
                ? {
                  ...currentItem,
                  quantity: currentItem.quantity + 1,
                }
                : { ...currentItem };
            return data;
          }
        );
        setItems(sameItemsWithNewQuantity);
        setItemsOnStorage(sameItemsWithNewQuantity);
        toast.success("Quantity change with success");
        return;
      }
      toast.success("Item added");
      setItems([...items, itemToCart]);
      setItemsOnStorage([...items, itemToCart]);
      return;
    }
    toast.success("Item added");
    setItems([itemToCart]);
    setItemsOnStorage([itemToCart]);
  }
  console.log(product.data.attributes.colors);
  return (
    <section className="flex flex-col pb-4">
      <section className="flex flex-wrap-reverse justify-center lg:gap-[74px]">
        {product.data.attributes.slides === undefined ? (
          <ImageProduct
            src={product.data.attributes.image?.data.attributes.url || ""}
            title={product.data.attributes.title}
          />
        ) : (
          <SlidesImageProduct
            title={product.data.attributes.title}
            content={product.data.attributes.slides.data}
          />
        )}
        <section className="flex flex-col items-start gap-[35px] lg:mt-[30px]">
          <div className="flex items-center justify-center text-gray-light font-causten text-lg">
            Shop
            {product.data.attributes.category.map((category) => (
              <p
                className="flex gap-[10px] items-center justify-center"
                key={category}
              >
                <ArrowMenu classNames="ml-[20px]" />
                <span className="">{category}</span>
              </p>
            ))}
          </div>
          <h1 className="text-gray-text-menu font-semibold font-coreSans text-[34px] max-w-[393px]">
            {product.data.attributes.title}
          </h1>
          <div className="flex flex-col gap-[25px]">
            <div className="flex gap-5 ">
              <p className="text-black-gray  font-semibold text-lg">
                Select Size
              </p>
              <p className="flex text-gray-light text-lg font-medium items-center justify-center gap-[15px]">
                Size Guide
                <ArrowSizes />
              </p>
            </div>
            <div className="flex gap-5">
              {sizesProduct.map((size) => (
                <button
                  className={`border border-gray-border w-[38px] h-[38px] text-gray-text-menu disabled:cursor-not-allowed disabled:opacity-50 rounded-xl ${size === itemToCart.size
                    ? "bg-gray-text-menu text-white border-none"
                    : ""
                    }`}
                  key={size}
                  onClick={() => {
                    setItemToCart({ ...itemToCart, size });
                  }}
                  disabled={!sizesFilter.includes(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-[25px]">
            <p className="font-semibold text-lg">Colours Available</p>
            <div className="flex gap-5">
              {product.data.attributes.colors.map((color) => (
                <button
                  key={uuidv4()}
                  className={`rounded-full w-[30px] h-[30px] relative legend-hover shadow-md border  ${color.name === itemToCart.color
                    ? "after:absolute after:h-[42px] after:w-[42px] after:border-2 after:border-gray-light after:rounded-full  after:flex after:justify-center after:items-center after:-top-[6px] after:-right-[6px]"
                    : ""
                    }`}
                  onClick={() => {
                    setItemToCart({ ...itemToCart, color: color.name });
                  }}
                  style={{ backgroundColor: `${color.value}` }}
                >
                  <span className="absolute -top-8 text-sm left-0 text-black border border-gray-border hidden min-w-[100px] justify-center font-bold break-keep">
                    {color.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
          <div className="flex gap-[25px] mt-9">
            <ButtonAddToCart
              disabled={!itemToCart.color || !itemToCart.size}
              onClick={handleSetItemOnLocalStorage}
            />
            <p className="hover:opacity-80 flex items-center justify-center transition-opacity rounded-lg border border-gray-text-menu text-gray-text-menu text-lg bg-transparent w-[138px] max-w-[138px] h-[46px] max-h-[46px]">
              {currencyFormatter(product.data.attributes.price)}
            </p>
          </div>
          <div className="bg-gray-border w-full h-[1px]" />
          <div className="grid gap-[20px] grid-cols-2 grid-rows-2">
            <DeliveryDetails title="Secure payment">
              <CreditCard />
            </DeliveryDetails>
            <DeliveryDetails title="Size & Fit">
              <TShirt />
            </DeliveryDetails>
            <DeliveryDetails title="Free shipping">
              <Truck />
            </DeliveryDetails>
            <DeliveryDetails title="Free Shipping & Returns">
              <Return />
            </DeliveryDetails>
          </div>
        </section>
      </section>
      <section className="flex flex-col lg:px-[100px]  mt-[100px] ">
        <TitleWithBar title="Product Description" />
        <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 gap-32 justify-center mt-[30px]">
          <div className="flex flex-col">
            <p className="text-gray-text-menu text-lg font-medium">
              Description
            </p>
            <p className="text-gray-light mt-[30px]">
              {product.data.attributes.description}
            </p>
            <table className="bg-white-light rounded-xl mt-[30px] max-w-[612px] p-[50px]">
              <tbody>
                <tr className="border border-transparent border-b-gray-border-opacity px">
                  <td className="border border-t-transparent border-l-transparent border-r-gray-border-opacity">
                    <p>Fabric</p>
                    <p>{product.data.attributes.fabric}</p>
                  </td>
                  <td className="border border-t-transparent border-l-transparent border-r-gray-border-opacity">
                    <p>Pattern</p>
                    <p>{product.data.attributes.pattern}</p>
                  </td>
                  <td className="">
                    <p>Fit</p>
                    <p>{product.data.attributes.fit}</p>
                  </td>
                </tr>
                <tr className="">
                  <td className="border border-b-transparent border-l-transparent border-r-gray-border-opacity">
                    <p className="">Neck</p>
                    <p>{product.data.attributes.neck}</p>
                  </td>
                  <td className="border border-b-transparent border-l-transparent border-r-gray-border-opacity">
                    <p>Sleeve</p>
                    <p>{product.data.attributes.sleeve}</p>
                  </td>
                  <td className="">
                    <p>Style</p>
                    <p>{product.data.attributes.style}</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {product.data.attributes.video?.data !== null ? (
            <video controls width="532" height="328">
              <source
                src={product.data.attributes.video?.data.attributes.url}
                type={product.data.attributes.video?.data.attributes.mime}
              />
            </video>
          ) : (
            <p>No video</p>
          )}
        </div>
      </section>
      <section className="flex flex-col pb-[100px] lg:px-[100px] mt-[100px]">
        <TitleWithBar title="Similar Products" />
        <div className="flex flex-wrap justify-center gap-6 lg:grid lg:grid-cols-3 xl:grid-cols-4  lg:gap-[37px] mt-[30px]">
          {products.data.length >= 1 &&
            products.data.map(({ id, attributes }) => (
              <Card
                key={id}
                id={id}
                image={attributes.image?.data.attributes.url || ""}
                price={attributes.price}
                title={attributes.title}
                subTitle={attributes.subTitle}
              />
            ))}
        </div>
      </section>
    </section>
  );
}
