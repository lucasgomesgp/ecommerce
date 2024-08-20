"use client"

import { FormEvent, useContext, useState } from "react";

import { AddressOption } from "@/utils/types/IInfoData";
import { ButtonBackStep } from "../ButtonBackStep";
import { ButtonNextStep } from "../ButtonNextStep";
import { FormCheckoutContext } from "@/app/context/FormCheckoutContext";

interface Props {
    changeStepNumber: (stepNumber: number) => void;
}


export function ThirdStep({ changeStepNumber }: Props) {
    const { info, setInfo } = useContext(FormCheckoutContext);
    const [addressOption, setAddressOption] = useState<AddressOption>(AddressOption.SAMEBILLINGADDRESS);
    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        setInfo({
            ...info,
            addressPayment: addressOption,
        });
        changeStepNumber(4);
    }
    return (
        <div className="flex flex-col mt-[30px] border-b max-w-[70%] w-full mb-4 border-b-white-bar py-[30px] gap-3 px-4 shadow-steps rounded-lg">
            <p className="font-coreSans font-semibold text-[22px] text-gray-text-menu mb-2">
                Shipping Address
            </p>
            <span className="text-gray-text-menu">
                Select the address that matches your card or payment method.
            </span>
            <form onSubmit={handleSubmit}>
                <div className="flex py-[38px] pl-7 pr-12 flex-col rounded-xl bg-white-light gap-[25px] mt-[30px]">
                    <div className="flex gap-5 text-xl font-bold border-b border-b-gray-border pb-6">
                        <input
                            type="radio"
                            className="accent-gray-text-menu"
                            name="shippingAddress"
                            id="sameBillingAddress"
                            value="sameBillingAddress"
                            required

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
                            required
                        />
                        <label htmlFor="differentShippingAddress">
                            Use a different shipping address
                        </label>
                    </div>
                </div>
                <div className="flex flex-wrap gap-4 items-center justify-center mt-4">
                    <ButtonBackStep onClick={() => { changeStepNumber(2) }} />
                    <ButtonNextStep type="submit" />
                </div>
            </form>
        </div>
    );
}