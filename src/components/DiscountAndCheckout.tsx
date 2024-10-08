"use client";

import { FormEvent, useContext, useEffect, useState } from "react";

import { ICoupons } from "@/utils/types/ICoupons";
import { ShoppingCartContext } from "@/app/context/ShoppingCartContext";
import { XIcon } from "@/svgs/x-icon";
import { currencyFormatter } from "@/utils/functions/currencyFormatter";
import { getSubTotal } from "@/utils/functions/getSubTotal";
import { getTotal } from "@/utils/functions/getTotal";
import { toast } from "sonner";
import { useCouponsStorage } from "@/hooks/useCouponsStorage";
import { useRouter } from "next/navigation";

export function DiscountAndCheckout({ coupons }: { coupons: ICoupons[] }) {
  const { items } = useContext(ShoppingCartContext);
  const { getCoupon, changeCoupon } = useCouponsStorage();
  const router = useRouter();

  const [coupon, setCoupon] = useState({
    onInput: "",
    applied: getCoupon()?.value || "",
  });

  function couponExists() {
    const couponIsAvailable = coupons.filter(
      (currentCoupon) => currentCoupon.attributes.value === coupon.onInput
    );
    return couponIsAvailable;
  }
  function handleApplyCoupon(event: FormEvent) {
    event.preventDefault();
    const couponIsAvailable = couponExists();

    if (couponIsAvailable.length >= 1) {
      couponFormatted();
    } else {
      toast.error("Coupon not exists");
    }
  }
  function couponFormatted() {
    const couponUsed = couponExists();
    if (couponUsed.length >= 1) {
      setCoupon({
        ...coupon,
        applied: couponUsed[0]?.attributes.value,
      });
      changeCoupon({
        value: couponUsed[0].attributes.value,
        percentage: couponUsed[0].attributes.discountPercentage,
      });
      toast.success("Coupon applied");
    }
  }
  function handleRemoveCoupon() {
    setCoupon({ ...coupon, applied: "" });
    changeCoupon({ value: "", percentage: "" });
    toast.success("Coupon removed");
  }
  function handleRedirectToCheckout() {
    router.push("/user/checkout");
  }
  useEffect(() => {
    if (getCoupon() === undefined) {
      changeCoupon({ value: "", percentage: "" });
    }
  }, []);
  return (
    <>
      {items.length >= 1 && (
        <section className="flex flex-wrap pb-[50px] pt-7 w-full bg-white-light items-center justify-around">
          <section className="flex flex-col">
            <p className="mb-[10px] text-gray-text-menu font-semibold text-2xl">
              Discount Codes
            </p>
            <span className="mb-[41px] text-gray-light">
              Enter your coupon code if you have one
            </span>
            <form onSubmit={handleApplyCoupon} className="flex">
              <input
                type="text"
                name="coupon"
                value={coupon.onInput}
                placeholder="Coupon"
                readOnly={coupon.applied !== ""}
                onChange={(event) => {
                  setCoupon({
                    ...coupon,
                    onInput: event.target.value.toLowerCase(),
                  });
                }}
                className="pl-2 outline-none h-[43px] border read-only:cursor-not-allowed border-gray-border rounded-tl-xl rounded-bl-xl"
              />
              <button
                className="mb-[37px] bg-purple-principal disabled:opacity-50 disabled:cursor-not-allowed rounded-tr-xl h-[43px] px-[31px] py-[12px] rounded-br-xl text-white font-semibold"
                type="submit"
                disabled={coupon.onInput === "" || coupon.applied !== ""}
              >
                Apply Coupon
              </button>
            </form>
            {coupon.applied && (
              <div className="flex mb-4 gap-2">
                <p className="flex gap-2">
                  Coupon Applied:
                  <span className="font-bold">{coupon.applied}</span>
                </p>
                <button onClick={handleRemoveCoupon}>
                  <XIcon />
                </button>
              </div>
            )}
            <button
              className="bg-transparent text-gray-text-menu border border-gray-border rounded-lg px-[20px] py-[12px] h-[43px] font-semibold"
              onClick={() => {
                router.push("/");
              }}
            >
              Continue Shopping
            </button>
          </section>
          <section className="flex justify-center flex-col gap-[15px] text-gray-text-menu text-[22px]">
            <div className="flex gap-14  justify-between">
              <p>Sub Total</p>
              <p>
                {currencyFormatter(
                  getSubTotal(items, Number(getCoupon()?.percentage || 0))
                )}
              </p>
            </div>
            <div className="flex gap-14  justify-between">
              <p>Shipping</p>
              <p>{currencyFormatter(5)}</p>
            </div>
            <div className="flex mt-[30px] gap-14  justify-between font-bold">
              <p>Grand Total</p>
              <p>
                {currencyFormatter(
                  getTotal(items, Number(getCoupon()?.percentage || 0))
                )}
              </p>
            </div>
            <div className="w-full h-[1px] bg-gray-border my-[30px]" />
            <button
              className="px-[20px] py-3 text-white  font-semibold text-lg bg-purple-principal rounded-lg"
              onClick={handleRedirectToCheckout}
            >
              Proceed To Checkout
            </button>
          </section>
        </section>
      )}
    </>
  );
}
