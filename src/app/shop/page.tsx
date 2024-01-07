"use client";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ArrowMenu } from "@/svgs/arrow-menu";
import { TrashPurple } from "@/svgs/trash-purple";
import { currencyFormatter } from "@/utils/functions/currencyFormatter";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Shop() {
  const { itemsStorage } = useLocalStorage();
  const { data: session } = useSession();

  function getTotalValue() {
    let accumulator = 0;
    itemsStorage.map((current) => {
      accumulator += (current.price * current.quantity);
    });
    return accumulator;
  }
  let totalValue = getTotalValue();
  return (
    <main className="flex flex-col">
      <Header />
      <section className="flex flex-col lg:pl-[100px] my-[50px] font-medium text-lg">
        <div className="flex items-center gap-4">
          <p className="text-gray-text-menu ">Home</p>
          <ArrowMenu />
          <p className="text-">Add To Cart</p>
        </div>
        <p className="text-gray-light text-sm">
          Please fill in the fields below and click place order to complete your
          purchase!
        </p>
        {session?.user?.name && (
          <p className="text-sm font-normal text-gray-light">
            Already registered?
            <Link
              href={"/login"}
              className="ml-1 text-purple-principal font-semibold"
            >
              Please login here
            </Link>
          </p>
        )}
      </section>
      {itemsStorage.length >= 1 && (
        <table>
          <tbody>
            <tr className="w-full align-middle text-center bg-gray-text-menu h-[76px] text-uppercase font-semibold text-white text-lg uppercase">
              <th className="lg:pl-[70px] lg:text-left">Product Details</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>shipping</th>
              <th>subtotal</th>
              <th>action</th>
            </tr>
            {itemsStorage.map((item) => (
              <tr key={item.id} className="text-center">
                <td className="flex px-[50px]">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL}${item.imageSrc}`}
                    height={105}
                    width={120}
                    style={{ width: "105px", height: "120px" }}
                    alt={item.title}
                    className="rounded-xl"
                  />
                  <div className="flex-col">
                    <p className="text-gray-text-menu text-lg font-bold w-[200px] text-ellipsis">
                      {item.title}
                    </p>
                    <span className="text-sm text-gray-light">
                      Color: {item.color}
                    </span>
                    <span className="text-sm text-gray-light">
                      Size: {item.size}
                    </span>
                  </div>
                </td>
                <td className="font-bold text-lg">
                  {currencyFormatter(item.price)}
                </td>
                <td className="min-w-[100px]">
                  <div className="flex justify-center items-center gap-3 h-[36px] min-w-[100px] rounded-xl bg-white-light w-full  text-gray-text-menu font-medium">
                    <button className="  px-2">+</button>
                    <input
                      type="number"
                      name="quantity"
                      value={item.quantity}
                      readOnly
                      className=" w-8 text-center outline-none bg-white-light"
                    />
                    <button className=" px-2">-</button>
                  </div>
                </td>
                <td className="text-gray-border text-lg font-bold uppercase">
                  FREE
                </td>
                <td className="font-bold text-lg">
                  {currencyFormatter(item.price * item.quantity)}
                </td>
                <td>
                  <button>
                    <TrashPurple />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <section className="flex flex-wrap pb-[50px] pt-7 w-full bg-white-light items-center justify-around">
        <section className="flex flex-col">
          <p className="mb-[10px] text-gray-text-menu font-semibold text-2xl">
            Discount Codes
          </p>
          <span className="mb-[41px] text-gray-light">
            Enter your coupon code if you have one
          </span>
          <div className="flex">
            <input
              type="text"
              name="coupon"
              className="h-[43px] border border-gray-border rounded-tl-xl rounded-bl-xl"
            />
            <button className="mb-[37px] bg-purple-principal rounded-tr-xl h-[43px] px-[31px] py-[12px] rounded-br-xl text-white font-semibold">
              Apply Coupon
            </button>
          </div>
          <button className="bg-transparent text-gray-text-menu border border-gray-border rounded-lg px-[20px] py-[12px] h-[43px] font-semibold">
            Continue Shopping
          </button>
        </section>
        <section className="flex justify-center flex-col gap-[15px] text-gray-text-menu text-[22px]">
          <div className="flex gap-14  justify-between">
            <p>Sub Total</p>
            <p>{currencyFormatter(totalValue)}</p>
          </div>
          <div className="flex gap-14  justify-between">
            <p>Shipping</p>
            <p>{currencyFormatter(0)}</p>
          </div>
          <div className="flex mt-[30px] gap-14  justify-between font-bold">
            <p>Grand Total</p>
            <p>{currencyFormatter(totalValue)}</p>
          </div>
          <div className="w-full h-[1px] bg-gray-border my-[30px]" />
          <button className="px-[20px] py-3 text-white  font-semibold text-lg bg-purple-principal rounded-lg">
            Proceed To Checkout
          </button>
        </section>
      </section>
      <Footer />
    </main>
  );
}
