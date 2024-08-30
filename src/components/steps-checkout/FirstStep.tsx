"use client";

import React, { useContext, useEffect, useMemo, useState } from "react";
import { inputDetail, inputDetailMin } from "@/utils/constants/inputInfoCss";

import { Address } from "../FormsCheckout";
import { ErrorText } from "../ErrorText";
import { FormCheckoutContext } from "@/app/context/FormCheckoutContext";
import { LabelInput } from "../LabelInput";
import { LoadingSpinner } from "../LoadingSpinner";
import { formSchema } from "@/app/schemas/form-billing-details";
import { states } from "@/utils/data/StatesNames";
import { useForm } from "react-hook-form";
import { useFormValidation } from "@/hooks/useFormValidation";
import { useSession } from "next-auth/react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export type AddressSchema = z.infer<typeof formSchema>;

interface Props {
    changeStepNumber: (stepNumber: number) => void;
    addressChossedOnModal?: Address;
}
export function FirstStep({ changeStepNumber, addressChossedOnModal }: Props) {
    const { data: session } = useSession();
    const [isLoading, setIsLoading] = useState(false);
    const { maskPostalCode, maskPhone } = useFormValidation();
    const { info, setInfo } = useContext(FormCheckoutContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,

    } = useForm<AddressSchema>({
        defaultValues: useMemo(() => {
            return {
                id: addressChossedOnModal?.id || "",
                apartment: addressChossedOnModal?.apartment || "",
                billingAddress: addressChossedOnModal?.billingAddress,
                city: addressChossedOnModal?.city,
                companyName: addressChossedOnModal?.companyName || "",
                country: addressChossedOnModal?.country,
                deliveryInstruction: addressChossedOnModal?.deliveryInstruction || "",
                firstName: addressChossedOnModal?.firstName,
                lastName: addressChossedOnModal?.lastName,
                phone: addressChossedOnModal?.phone,
                postalCode: addressChossedOnModal?.postalCode,
                state: addressChossedOnModal?.state,
                streetAddress: addressChossedOnModal?.streetAddress || "",
            }
        }, [addressChossedOnModal]),
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: AddressSchema) => {
        if (session?.user.email) {
            setIsLoading(true);
            console.log(addressChossedOnModal?.id);
            setInfo({
                ...info,
                address: {
                    id: addressChossedOnModal?.id,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    country: data.country,
                    companyName: data.companyName,
                    streetAddress: data.streetAddress,
                    apartment: data.apartment,
                    phone: data.phone,
                    city: data.city,
                    state: data.state,
                    postalCode: data.postalCode,
                    billingAddress: data.billingAddress,
                    deliveryInstruction: data.deliveryInstruction,
                },
                total: 0,
            });
            console.log(info);
            changeStepNumber(2);
            setIsLoading(false);
        }
    }
    useEffect(() => {
        if (addressChossedOnModal !== undefined) {
            reset({
                apartment: addressChossedOnModal?.apartment || "",
                billingAddress: addressChossedOnModal?.billingAddress,
                city: addressChossedOnModal?.city,
                companyName: addressChossedOnModal?.companyName || "",
                country: addressChossedOnModal?.country,
                deliveryInstruction: addressChossedOnModal?.deliveryInstruction || "",
                firstName: addressChossedOnModal?.firstName,
                lastName: addressChossedOnModal?.lastName,
                phone: addressChossedOnModal?.phone,
                postalCode: addressChossedOnModal?.postalCode,
                state: addressChossedOnModal?.state,
                streetAddress: addressChossedOnModal?.streetAddress || "",
            });
        }
    }, [addressChossedOnModal]);
    return (
        <section className="max-w-[70%] items-center justify-center px-4 rounded-lg mb-4 shadow-steps">
            <form
                className="flex flex-col border-b border-b-white-bar py-[30px]"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="flex justify-center gap-[38px] flex-wrap  lg:grid lg:grid-cols-2">
                    <LabelInput label="First Name*" name="firstName">
                        <input
                            type="text"
                            className={inputDetail}
                            {...register("firstName", { required: true })}
                            placeholder="First Name"
                        />
                        <ErrorText text={errors.firstName?.message} />
                    </LabelInput>
                    <LabelInput label="Last Name*" name="lastName">
                        <input
                            type="text"
                            className={inputDetail}
                            {...register("lastName", { required: true })}
                            placeholder="Last Name"
                        />
                        <ErrorText text={errors.lastName?.message} />
                    </LabelInput>
                    <LabelInput label="Country / Region*" name="country">
                        <input
                            type="text"
                            className={inputDetail}
                            {...register("country")}
                            placeholder="Country / Region"
                        />
                        <ErrorText text={errors.country?.message} />
                    </LabelInput>
                    <LabelInput label="Company Name" name="companyName">
                        <input
                            type="text"
                            className={inputDetail}
                            {...register("companyName")}
                            placeholder="Company (optional)"
                        />
                        <ErrorText text={errors.companyName?.message} />
                    </LabelInput>
                    <LabelInput label="Street Address*" name="streetAddress">
                        <input
                            type="text"
                            className={inputDetail}
                            {...register("streetAddress", { required: true })}
                            placeholder="House number and street name"
                        />
                        <ErrorText text={errors.streetAddress?.message} />
                    </LabelInput>
                    <LabelInput label="Apt, suite, unit" name="apartment">
                        <input
                            type="text"
                            className={inputDetail}
                            {...register("apartment")}
                            placeholder="apartment, suite, unit, etc. (optional)"
                        />
                        <ErrorText text={errors.apartment?.message} />
                    </LabelInput>
                    <div className="flex flex-auto flex-col flex-wrap items-center  lg:grid lg:grid-cols-3 gap-8 lg:col-span-2">
                        <LabelInput label="City*" name="city">
                            <input
                                type="text"
                                className={inputDetailMin}
                                {...register("city", { required: true })}
                                placeholder="Town / City"
                            />
                            <ErrorText text={errors.city?.message} />
                        </LabelInput>

                        <div className="flex flex-col gap-[10px]">
                            <label htmlFor="state" className="font-semibold">
                                State*
                            </label>
                            <select
                                className={inputDetail}
                                placeholder="State"
                                {...register("state")}
                            >
                                <option value="">Choose your state</option>
                                {states.map((state) => (
                                    <option
                                        value={state.name.toLowerCase()}
                                        key={state.abbreviation}
                                    >
                                        {state.name}
                                    </option>
                                ))}
                            </select>
                            <ErrorText text={errors.state?.message} />
                        </div>
                        <LabelInput label="Postal Code*" name="postalCode">
                            <input
                                type="text"
                                className={inputDetailMin}
                                onKeyUp={maskPostalCode}
                                {...register("postalCode", { required: true })}
                                placeholder="Postal Code"
                                maxLength={5}
                            />
                            <ErrorText text={errors.postalCode?.message} />
                        </LabelInput>
                    </div>
                    <LabelInput label="Phone*" name="phone">
                        <input
                            {...register("phone")}
                            className={inputDetailMin}
                            type="text"
                            onKeyUp={maskPhone}
                            placeholder="Phone"
                            maxLength={7}
                        />
                        <ErrorText text={errors.phone?.message} />
                    </LabelInput>
                    <LabelInput label="Delivery Instruction" name="deliveryInstruction">
                        <input
                            {...register("deliveryInstruction")}
                            className={inputDetailMin}
                            type="text"
                            placeholder="Write your instructions here..."
                            maxLength={70}
                        />
                        <ErrorText text={errors.deliveryInstruction?.message} />
                    </LabelInput>
                </div>
                <div className="flex gap-[10px] mt-8 self-center">
                    <input
                        type="checkbox"
                        {...register("billingAddress")}
                        id="billingAddress"
                    />
                    <label htmlFor="billingAddress">Set as default billing address</label>
                </div>
                <div className="mt-[40px] flex gap-[30px] self-center">
                    <button
                        disabled={isLoading}
                        type="submit"
                        className="bg-purple-principal rounded-md px-[40px] py-3 text-white font-medium hover:opacity-70 transition-all"
                    >
                        {isLoading ? <LoadingSpinner /> : <span>Continue to delivery</span>}
                    </button>
                </div>
            </form>
        </section>
    );
}
