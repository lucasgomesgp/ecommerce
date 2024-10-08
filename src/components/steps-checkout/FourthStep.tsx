"use client";

import { MagicExit, MagicMotion } from "react-magic-motion";
import { useContext, useState } from "react";

import { ButtonBackStep } from "../ButtonBackStep";
import { ErrorText } from "../ErrorText";
import { EyeSecurity } from "@/svgs/eye-security";
import { FormCheckoutContext } from "@/app/context/FormCheckoutContext";
import { GooglePlay } from "@/svgs/google-pay";
import { ICreditCardInfo } from "@/utils/types/ICreditCardInfo";
import { LoadingSpinner } from "../LoadingSpinner";
import { PayPass } from "@/svgs/paypass";
import { PaymentType } from "@/utils/types/IInfoData";
import { Paypal } from "@/svgs/paypal";
import { ShoppingCartContext } from "@/app/context/ShoppingCartContext";
import { Visa } from "@/svgs/visa";
import { createCreditCard } from "@/services/createCreditCard";
import { creditCardInfoObj } from "@/utils/constants/creditCardInfoObj";
import { creditCardSchema } from "@/app/schemas/credit-card-schema";
import { deleteCreditCard } from "@/services/deleteCreditCard";
import { getSubTotal } from "@/utils/functions/getSubTotal";
import { getTotal } from "@/utils/functions/getTotal";
import { toast } from "sonner";
import { useCouponsStorage } from "@/hooks/useCouponsStorage";
import { useForm } from "react-hook-form";
import { useFormValidation } from "@/hooks/useFormValidation";
import { useItemsStorage } from "@/hooks/useItemsStorage";
import { useSession } from "next-auth/react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props {
    changeStepNumber: (stepNumber: number) => void;
}

export type CreditCardSchema = z.infer<typeof creditCardSchema>;

export function FourthStep({ changeStepNumber }: Props) {

    const { items } = useContext(ShoppingCartContext);

    const [toggleCreditCard, setToggleCreditCard] = useState(false);
    const [securityCodeIsVisible, setSecurityCodeIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState<PaymentType>();
    const { itemsStorage } = useItemsStorage();
    const { info, setInfo } = useContext(FormCheckoutContext);

    const [creditCardInfo, setCreditCardInfo] = useState<ICreditCardInfo>({
        card: {
            id: "",
            nameOnCard: "",
            number: "",
            securityCode: "",
            userId: "",
            expirationCode: "",
        },
    });

    const { getCoupon } = useCouponsStorage();
    const { data: session } = useSession();
    const { maskDate, maskCardNumber } = useFormValidation();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<CreditCardSchema>({
        resolver: zodResolver(creditCardSchema),
    });

    const onSubmit = async (data: CreditCardSchema) => {
        try {
            if (!session) {
                toast.error("You not logged in!");
                return;
            }
            setIsLoading(true);
            const result: ICreditCardInfo = await createCreditCard(data);
            setCreditCardInfo({
                card: {
                    id: result.card.id,
                    nameOnCard: result.card.nameOnCard,
                    number: result.card.number,
                    securityCode: result.card.securityCode,
                    userId: result.card.userId,
                    expirationCode: result.card.expirationCode,
                },
            });
            toast.success("Credit card created");
        } catch (err) {
            toast.error(`${err}`);
        } finally {
            setIsLoading(false);
        }
    };
    async function handlePaymentProcess() {
        setIsLoading(true);
        if (itemsStorage.length === 0) {
            toast.error("Your cart is empty!");
            setIsLoading(false);
            return;
        }
        if (!paymentMethod) {
            toast.error("Choose on payment method!");
        } else {
            if (paymentMethod === "CARD" && !creditCardInfo.card.id) {
                toast.error("Create your card first!");
                setIsLoading(false);
                return;
            }
            if (creditCardInfo.card.id && paymentMethod !== "CARD") {
                toast.error("Your card has added, select CREDIT CARD or delete it for choose another payment method!");
                setIsLoading(false);
                return;
            }
            try {
                let total = getTotal(items, Number(getCoupon()?.percentage || 0));
                let subTotal = getSubTotal(items, Number(getCoupon()?.percentage || 0));
                setInfo({
                    ...info,
                    paymentMethod,
                    items,
                    total,
                    subTotal,
                    card_id: creditCardInfo.card.id,
                })
                changeStepNumber(5);
            } catch (err) {
                toast.error("Error on create order!");
                console.log(err);
            }
        }
        setIsLoading(false);
    }

    async function handleDeleteCard() {
        if (creditCardInfo?.card.id) {
            await deleteCreditCard(creditCardInfo.card.id);
            setCreditCardInfo(creditCardInfoObj);
            toast.success("Credit card deleted!");
            reset();
        } else {
            toast.error("You don't have card!");
            return;
        }
    }
    function handleChangeRadioButtonStatus(typeOfPayment: PaymentType) {
        if (typeOfPayment === PaymentType.CARD) {
            setToggleCreditCard(!toggleCreditCard);
            setPaymentMethod(PaymentType.CARD);
        } else {
            setToggleCreditCard(false);
            setPaymentMethod(typeOfPayment);
        }
    }

    return (
        <div className="flex flex-col mt-[30px] py-[30px] w-full max-w-[70%] shadow-steps rounded-lg px-4 mb-4">
            <div className="flex flex-col gap-2">
                <p className="font-coreSans font-semibold text-[22px] text-gray-text-menu mb-2">
                    Payment Method
                </p>
                <span className="text-gray-text-menu">
                    All transactions are secure and encrypted.
                </span>
            </div>
            <section className="flex flex-col mt-[30px]">
                <div className="bg-white-light rounded-xl">
                    <MagicMotion>
                        <section className="cursor-pointer border-b-gray-border border-b pb-[30px] flex pl-7 pr-12 flex-col gap-[25px] mt-[30px] overflow-hidden">
                            <div className="flex gap-[20px] items-center">
                                <input
                                    type="radio"
                                    id="credit-card"
                                    name="paymentMethod"
                                    value="credit-card"
                                    className="border accent-gray-text-menu"
                                    onClick={() => {
                                        handleChangeRadioButtonStatus(PaymentType.CARD);
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
                                <div className="relative">
                                    {toggleCreditCard && (
                                        <form
                                            onSubmit={handleSubmit(onSubmit)}
                                            className="flex-col"
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
                                                        className="text-sm border border-gray-text-menu h-[49px] rounded-md pl-5 text-gray-light outline-none"
                                                        type="text"
                                                        placeholder="Card number"
                                                        onKeyUp={maskCardNumber}
                                                        maxLength={16}
                                                        {...register("number")}
                                                    />
                                                    <ErrorText text={errors.number?.message} />
                                                </div>
                                                <div className="flex flex-col gap-[10px]">
                                                    <input
                                                        className="text-sm border border-gray-text-menu h-[49px] rounded-md pl-5 text-gray-light outline-none"
                                                        type="text"
                                                        placeholder="Name of card"
                                                        {...register("name")}
                                                    />
                                                    <ErrorText text={errors.name?.message} />
                                                </div>
                                                <div className="flex flex-col gap-[10px]">
                                                    <input
                                                        className="text-sm border border-gray-text-menu h-[49px] rounded-md pl-5 text-gray-light outline-none"
                                                        type="text"
                                                        placeholder="Expiration date (MM/YY)"
                                                        onKeyUp={maskDate}
                                                        {...register("expirationDate")}
                                                        maxLength={5}
                                                    />
                                                    <ErrorText text={errors.expirationDate?.message} />
                                                </div>
                                                <div className="flex flex-col gap-[10px]">
                                                    <div className="relative flex items-center h-[49px]">
                                                        <input
                                                            type={securityCodeIsVisible ? "text" : "password"}
                                                            className="w-full text-sm border border-gray-text-menu h-full rounded-md pl-5 text-gray-light outline-none"
                                                            placeholder="Security Code"
                                                            maxLength={3}
                                                            {...register("securityCode")}
                                                        />
                                                        <button
                                                            className="absolute right-2 top-1/2 -translate-y-1/2"
                                                            onClick={() => {
                                                                setSecurityCodeIsVisible(!securityCodeIsVisible);
                                                            }}
                                                        >
                                                            <EyeSecurity />
                                                        </button>
                                                    </div>
                                                    <ErrorText text={errors.securityCode?.message} />
                                                </div>
                                            </div>
                                            <button
                                                type="submit"
                                                className="mt-[30px]  text-white bg-purple-principal rounded-lg font-medium  w-[108px] h-[54px] disabled:opacity-70"
                                                disabled={
                                                    isLoading ||
                                                    (creditCardInfo.card.id !== "" &&
                                                        creditCardInfo.card.nameOnCard !== "")
                                                }
                                            >
                                                {isLoading ? <LoadingSpinner /> : <span>Add card</span>}
                                            </button>
                                        </form>
                                    )}
                                    {creditCardInfo.card.id !== "" && (
                                        <button
                                            className={`mt-[30px] absolute  transition-all left-40 text-white bg-red-500 rounded-lg font-medium  w-[108px] h-[54px] disabled:opacity-70 bottom-0${toggleCreditCard ? "" : "hidden"
                                                }`}
                                            disabled={isLoading}
                                            onClick={handleDeleteCard}
                                        >
                                            {isLoading ? <LoadingSpinner /> : <span>Remove</span>}
                                        </button>
                                    )}
                                </div>
                            </MagicExit>
                        </section>
                    </MagicMotion>

                    <div className="flex pl-7 border-b-gray-border border-b pb-[30px] pr-12 gap-[25px] mt-[30px]">
                        <input
                            type="radio"
                            id="cash"
                            className="accent-gray-text-menu"
                            name="paymentMethod"
                            value="cash"
                            onClick={() => {
                                handleChangeRadioButtonStatus(PaymentType.CASH);
                            }}
                        />
                        <div className="flex flex-col gap-[5px]">
                            <label className="text-gray-text-menu font-bold" htmlFor="cash">
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
                                handleChangeRadioButtonStatus(PaymentType.PAYPAL);
                            }}
                        />
                        <label className="text-gray-text-menu font-bold" htmlFor="paypal">
                            Paypal
                        </label>
                    </div>
                </div>
            </section>
            <div className="flex flex-wrap gap-4 items-center justify-center mt-[30px]">
                <ButtonBackStep onClick={() => { changeStepNumber(3) }} />
                <button
                    className="text-white bg-purple-principal rounded-lg font-medium cursor-pointer w-[108px] h-[54px] disabled:cursor-not-allowed disabled:opacity-40"
                    disabled={isLoading || !paymentMethod}
                    onClick={handlePaymentProcess}
                >
                    {isLoading ? <LoadingSpinner /> : <span>Pay Now</span>}
                </button>
            </div>
        </div>

    );
}
