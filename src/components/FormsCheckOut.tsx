"use client";

import { MagicExit, MagicMotion } from "react-magic-motion";

import { ErrorText } from "./ErrorText";
import { EyeSecurity } from "@/svgs/eye-security";
import { FormBillingDetails } from "./FormBillingDetails";
import { GooglePlay } from "@/svgs/google-pay";
import { OrderSummary } from "./OrderSummary";
import { PayPass } from "@/svgs/paypass";
import { Paypal } from "@/svgs/paypal";
import { TitleWithBar } from "./TitleWithBar";
import { Visa } from "@/svgs/visa";
import { creditCardSchema } from "@/app/schemas/credit-card-schema";
import { paymentOrderProcess } from "@/services/paymentOrderProcess";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useFormValidation } from "@/hooks/useFormValidation";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export type CreditCardSchema = z.infer<typeof creditCardSchema>;
export enum PaymentType {
  CARD,
  CASH,
  PAYPAL,
}

export function FormsCheckout() {
  const [toggleCreditCard, setToggleCreditCard] = useState(false);
  const [securityCodeIsVisible, setSecurityCodeIsVisible] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<PaymentType>(
    PaymentType.CARD
  );
  const { maskDate, maskCardNumber, maskSecurityCode } = useFormValidation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreditCardSchema>({
    resolver: zodResolver(creditCardSchema),
  });

  function onSubmit(data: CreditCardSchema) {
    if (!paymentMethod) {
      toast.error("Select payment method");
      return;
    }
    try {
      paymentOrderProcess(data, paymentMethod);
    } catch (err) {
      toast.error(`${err}`);
    }
  }

  return (
    <section className="px-4 flex flex-col lg:flex-row lg:flex-wrap-reverse lg:gap-[38px] lg:px-[70px] mt-[52px]">
      <section className="flex-1 flex-col">
        <TitleWithBar title="Check Out" />
        <p className="font-semibold font-coreSans text-[22px] mt-5">
          Billing Details
        </p>
        <FormBillingDetails />
        <div className="flex flex-col mt-[30px] border-b border-b-white-bar py-[30px]">
          <p className="font-coreSans font-semibold text-[22px] text-gray-text-menu mb-2">
            Shipping Address
          </p>
          <span className="text-gray-text-menu">
            Select the address that matches your card or payment method.
          </span>
          <div className="flex py-[38px] pl-7 pr-12 flex-col rounded-xl bg-white-light gap-[25px] mt-[30px]">
            <div className="flex gap-5 text-xl font-bold border-b border-b-gray-border pb-6">
              <input
                type="radio"
                className="accent-gray-text-menu"
                name="shippingAddress"
                id="sameBillingAddress"
                value="sameBillingAddress"
              />
              <label htmlFor="sameBillingAddress">
                Same as Billing address
              </label>
            </div>
            <div className="flex gap-5 text-xl font-bold">
              <input
                type="radio"
                className="accent-gray-text-menu"
                name="shippingAddress"
                id="differentShippingAddress"
                value="differentShippingAddress"
              />
              <label htmlFor="differentShippingAddress">
                Use a different shipping address
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-[30px] border-b border-b-white-bar py-[30px]">
          <p className="font-coreSans font-semibold text-[22px] text-gray-text-menu mb-2">
            Shipping Method
          </p>
          <div className="flex py-[38px] pl-7 pr-12 flex-col rounded-xl bg-white-light gap-[25px] mt-[30px]">
            <div className="flex gap-5 text-xl font-bold border-b border-b-gray-border pb-6">
              <p className="font-bold text-xl">Arrives by </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <p className="font-bold text-xl">Delivery Charges</p>
                <span className="font-medium text-gray-light">
                  Additional fess may apply
                </span>
              </div>
              <p className="font-bold text-xl">$5.00</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-[30px] py-[30px]">
          <div className="flex flex-col gap-2">
            <p className="font-coreSans font-semibold text-[22px] text-gray-text-menu mb-2">
              Payment Method
            </p>
            <span className="text-gray-text-menu">
              All transactions are secure and encrypted.
            </span>
          </div>
          <MagicMotion>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col mt-[30px]"
            >
              <div className="bg-white-light rounded-xl">
                <section className="cursor-pointer border-b-gray-border border-b pb-[30px] flex pl-7 pr-12 flex-col gap-[25px] mt-[30px] overflow-hidden">
                  <div className="flex gap-[20px] items-center">
                    <input
                      type="radio"
                      id="credit-card"
                      name="paymentMethod"
                      value="credit-card"
                      className="border accent-gray-text-menu"
                      onClick={(event) => {
                        setToggleCreditCard(!toggleCreditCard);
                        setPaymentMethod(PaymentType.CARD);
                      }}
                    />
                    <div className="flex flex-col gap-[5px]">
                      <label
                        className="text-gray-text-menu font-bold"
                        htmlFor="credit-card"
                      >
                        Credit Card
                      </label>
                      <span className="text-gray-text-menu">
                        We accept all major credit cards.
                      </span>
                    </div>
                  </div>
                  <MagicExit exit={{ opacity: 0 }}>
                    <div
                      className={`flex flex-col ${
                        toggleCreditCard ? "" : "hidden"
                      }`}
                      key="exclude"
                    >
                      <div className="flex flex-wrap gap-5 mt-[30px]">
                        <GooglePlay />
                        <Visa />
                        <Paypal />
                        <PayPass />
                      </div>
                      <div className="flex flex-wrap lg:grid lg:grid-cols-2 lg:grid-rows-2 mt-[30px] gap-[30px]">
                        <div className="flex flex-col gap-[10px]">
                          <input
                            {...register("number")}
                            className="text-sm border border-gray-text-menu h-[49px] rounded-md pl-5 text-gray-light outline-none"
                            type="text"
                            name="card-number"
                            placeholder="Card number"
                            onKeyUp={maskCardNumber}
                          />
                          <ErrorText text={errors.number?.message} />
                        </div>
                        <div className="flex flex-col gap-[10px]">
                          <input
                            {...register("name")}
                            className="text-sm border border-gray-text-menu h-[49px] rounded-md pl-5 text-gray-light outline-none"
                            type="text"
                            name="name-card"
                            placeholder="Name of card"
                          />
                          <ErrorText text={errors.name?.message} />
                        </div>
                        <div className="flex flex-col gap-[10px]">
                          <input
                            {...register("expirationDate")}
                            className="text-sm border border-gray-text-menu h-[49px] rounded-md pl-5 text-gray-light outline-none"
                            type="text"
                            name="expiration-date"
                            placeholder="Expiration date (MM/YY)"
                            onKeyUp={maskDate}
                          />
                          <ErrorText text={errors.expirationDate?.message} />
                        </div>
                        <div className="flex flex-col gap-[10px]">
                          <div className="relative flex items-center h-[49px]">
                            <input
                              {...register("securityCode")}
                              type={securityCodeIsVisible ? "text" : "password"}
                              className="w-full text-sm border border-gray-text-menu h-full rounded-md pl-5 text-gray-light outline-none"
                              name="security-code"
                              placeholder="Security Code"
                              onKeyUp={maskSecurityCode}
                            />
                            <button
                              className="absolute right-2 top-1/3 -translate-y-1/2"
                              onClick={() => {
                                setSecurityCodeIsVisible(
                                  !securityCodeIsVisible
                                );
                              }}
                            >
                              <EyeSecurity />
                            </button>
                          </div>
                          <ErrorText text={errors.securityCode?.message} />
                        </div>
                      </div>
                    </div>
                  </MagicExit>
                </section>
                <div className="flex pl-7 border-b-gray-border border-b pb-[30px] pr-12 gap-[25px] mt-[30px]">
                  <input
                    type="radio"
                    id="cash"
                    className="accent-gray-text-menu"
                    name="paymentMethod"
                    value="cash"
                    onClick={() => {
                      setToggleCreditCard(false);
                      setPaymentMethod(PaymentType.CASH);
                    }}
                  />
                  <div className="flex flex-col gap-[5px]">
                    <label
                      className="text-gray-text-menu font-bold"
                      htmlFor="cash"
                    >
                      Cash on delivery
                    </label>
                    <span className="text-gray-text-menu">
                      Pay with cash upon delivery.
                    </span>
                  </div>
                </div>
                <div className="flex pl-7 pr-12 gap-9 mt-[30px] pb-11">
                  <input
                    type="radio"
                    id="paypal"
                    className="accent-gray-text-menu"
                    name="paymentMethod"
                    value="paypal"
                    onClick={() => {
                      setToggleCreditCard(false);
                      setPaymentMethod(PaymentType.PAYPAL);
                    }}
                  />
                  <label
                    className="text-gray-text-menu font-bold"
                    htmlFor="paypal"
                  >
                    Paypal
                  </label>
                </div>
              </div>
              <button className="mt-[30px]  text-white bg-purple-principal rounded-lg font-medium  w-[108px] h-[54px]">
                Pay Now
              </button>
            </form>
          </MagicMotion>
        </div>
      </section>
      <section className="flex-2">
        <OrderSummary />
      </section>
    </section>
  );
}
