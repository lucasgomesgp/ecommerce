import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PathPage } from "@/components/PathPage";
import { OrderSummary } from "@/components/OrderSummary";
import { FormBillingDetails } from "@/components/FormBillingDetails";
import { TitleWithBar } from "@/components/TitleWithBar";
import Image from "next/image";
import { EyeSecurity } from "@/svgs/eye-security";

export default function Checkout() {
    return (
        <main className="flex flex-col">
            <Header />
            <section className="flex flex-col">
                <PathPage title="Check Out" />
                <section className="flex flex-wrap-reverse lg:gap-[38px] lg:px-[70px] mt-[52px]">
                    <section className="flex-1 flex-col">
                        <TitleWithBar title="Check Out" />
                        <p className="font-semibold font-coreSans text-[22px] mt-5">Billing Details</p>
                        <FormBillingDetails />
                        <div className="flex flex-col mt-[30px] border-b border-b-white-bar py-[30px]">
                            <p className="font-coreSans font-semibold text-[22px] text-gray-text-menu mb-2">Shipping Address</p>
                            <span className="text-gray-text-menu">Select the address that matches your card or payment method.</span>
                            <div className="flex py-[38px] pl-7 pr-12 flex-col rounded-xl bg-white-light gap-[25px] mt-[30px]">
                                <div className="flex gap-5 text-xl font-bold border-b border-b-gray-border pb-6">
                                    <input type="radio" name="shippingAddress" id="sameBillingAddress" value="sameBillingAddress" />
                                    <label htmlFor="sameBillingAddress">Same as Billing address</label>
                                </div>
                                <div className="flex gap-5 text-xl font-bold">
                                    <input type="radio" name="shippingAddress" id="differentShippingAddress" value="differentShippingAddress" />
                                    <label htmlFor="differentShippingAddress">Use a different shipping address</label>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col mt-[30px] border-b border-b-white-bar py-[30px]">
                            <p className="font-coreSans font-semibold text-[22px] text-gray-text-menu mb-2">Shipping Method</p>
                            <div className="flex py-[38px] pl-7 pr-12 flex-col rounded-xl bg-white-light gap-[25px] mt-[30px]">
                                <div className="flex gap-5 text-xl font-bold border-b border-b-gray-border pb-6">
                                    <p className="font-bold text-xl">Arrives by </p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col gap-2">
                                        <p className="font-bold text-xl">Delivery Charges</p>
                                        <span className="font-medium text-gray-light">Additional fess may apply</span>
                                    </div>
                                    <p className="font-bold text-xl">$5.00</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col mt-[30px] py-[30px]">
                            <div className="flex flex-col gap-2">
                                <p className="font-coreSans font-semibold text-[22px] text-gray-text-menu mb-2">Payment Method</p>
                                <span className="text-gray-text-menu">All transactions are secure and encrypted.</span>
                            </div>
                            <div className="flex flex-col bg-white-light rounded-xl mt-[30px]">
                                <section className="cursor-pointer border-b-gray-border border-b pb-[30px] flex pl-7 pr-12 flex-col gap-[25px] mt-[30px] overflow-hidden">
                                    <div className="flex gap-[20px] items-center">
                                        <input type="radio" id="credit-card" name="paymentMethod" value="credit-card" className="border" />
                                        <div className="flex flex-col gap-[5px]">
                                            <label htmlFor="credit-card">Credit Card</label>
                                            <span className="text-gray-text-menu">We accept all major credit cards.</span>
                                        </div>
                                    </div>
                                    <div className={`flex flex-col transition-all ${false ?  "hidden": ""}`}>
                                        <div className="flex gap-5 mt-[30px]">
                                            <Image src="/assets/google-play.svg" alt="Google Icon" width={80} height={46} className="w-[80px] h-[46px]" />
                                            <Image src="/assets/visa.svg" alt="Visa Icon" width={80} height={46} className="w-[80px] h-[46px]" />
                                            <Image src="/assets/paypal.svg" alt="Paypal Icon" width={80} height={46} className="w-[80px] h-[46px]" />
                                            <Image src="/assets/paypass.svg" alt="Paypass Icon" width={80} height={46} className="w-[80px] h-[46px]" />
                                        </div>
                                        <div className="flex flex-wrap lg:grid lg:grid-cols-2 lg:grid-rows-2">
                                            <input className="border border-gray-text-menu" type="text" name="card-number" placeholder="Card number" />
                                            <input className="border border-gray-text-menu" type="text" name="name-card" placeholder="Name of card" />
                                            <input className="border border-gray-text-menu" type="text" name="expiration-date" placeholder="Expiration date (MM/YY)" />
                                            <div className="relative">
                                                <input className="border w-full border-gray-text-menu" type="text" name="security-code" placeholder="Security Code" />
                                                <div className="absolute right-2 top-1">
                                                    <EyeSecurity />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </section>
                                <div className="flex pl-7 border-b-gray-border border-b pb-[30px] pr-12 gap-[25px] mt-[30px]">
                                    <input type="radio" id="cash" name="paymentMethod" value="cash" />
                                    <div className="flex flex-col gap-[5px]">
                                        <label htmlFor="cash">Cash on delivery</label>
                                        <span className="text-gray-text-menu">Pay with cash upon delivery.</span>
                                    </div>
                                </div>
                                <div className="flex pl-7 pr-12 gap-9 mt-[30px] pb-11">
                                    <input type="radio" id="paypal" name="paymentMethod" value="paypal" />
                                    <label htmlFor="cash">Paypal</label>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="flex-2">
                        <OrderSummary />
                    </section>
                </section>
                <button className="md:ml-[70px] text-white bg-purple-principal rounded-lg font-medium mb-[100px] w-[108px] h-[54px]">Pay Now</button>
            </section>
            <Footer />
        </main >
    );
}