import { FormBillingDetails } from "./FormBillingDetails";
import { FormPayment } from "./FormPayment";
import { OrderSummary } from "./OrderSummary";
import { TitleWithBar } from "./TitleWithBar";

export enum PaymentType {
  CARD = "CARD",
  CASH = "CASH",
  PAYPAL = "PAYPAL",
}

export function FormsCheckout() {
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
          <FormPayment />
        </div>
      </section>
      <section className="flex-2">
        <OrderSummary />
      </section>
    </section>
  );
}
