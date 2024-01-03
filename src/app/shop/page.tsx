"use client";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ShoppingCartContext } from "@/contexts/ShoppingCartContext";
import { ArrowMenu } from "@/svgs/arrow-menu";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useContext } from "react";

export default function Shop() {
  const { items, setItems } = useContext(ShoppingCartContext);
  const { data: session } = useSession();

  return (
    <main className="flex flex-col">
      <Header />
      <section className="flex flex-col lg:pl-[100px] mt-[50px] font-medium text-lg">
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
      <section className="flex pb-[50px] pt-7 w-full bg-white-light items-center justify-around">
        <section className="flex flex-col">
          <p className="mb-[10px] text-gray-text-menu font-semibold text-2xl">Discount Codes</p>
          <span className="mb-[41px] text-gray-light">Enter your coupon code if you have one</span>
          <div className="flex">
            <input type="text" name="coupon" className="h-[43px] border border-gray-border rounded-tl-xl rounded-bl-xl"/>
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
            <p>$513.00</p>
          </div>
          <div className="flex gap-14  justify-between">
            <p>Shipping</p>
            <p>$513.00</p>
          </div>
          <div className="flex mt-[30px] gap-14  justify-between font-bold">
            <p>Grand Total</p>
            <p>$513.00</p>
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
