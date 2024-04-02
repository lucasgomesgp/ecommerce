"use client"
import React, { FormEvent, useCallback, useState } from "react";
import { states } from "@/utils/data/StatesNames";
import { LabelInput } from "./LabelInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { formSchema } from "@/app/schemas/form-billing-details";
import { z } from "zod";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { LoadingSpinner } from "./LoadingSpinner";
import { inputDetail, inputDetailMin } from "@/utils/constants/inputInfoCss";
import { getPhoneMasked } from "@/utils/functions/getPhoneMasked";
import { getPostalCodeMasked } from "@/utils/functions/getPostalCodeMasked";

export type AddressSchema = z.infer<typeof formSchema>;
export function FormBillingDetails() {
    const router = useRouter();
    const { data: session } = useSession();
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm<AddressSchema>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: AddressSchema) => {
        if (session?.user.email) {
            try {
                setIsLoading(true);
                await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/address`, {
                    method: "POST",
                    body: JSON.stringify(data),
                });
                toast.success("Billing address created!");
                reset();
                console.log(data);
            } catch (err) {
                toast.error("Error on update info");
            } finally {
                setIsLoading(false);
            }
        }
    }

    const handleMaskPhone = useCallback((event: FormEvent<HTMLInputElement>) => {
        event.currentTarget.maxLength = 8;
        let value = event.currentTarget.value;
        value = getPhoneMasked(value);
        event.currentTarget.value = value;
    }, []);
    const handleFilterPostalCode = useCallback((event: FormEvent<HTMLInputElement>) => {
        event.currentTarget.maxLength = 5;
        let value = event.currentTarget.value;
        value = getPostalCodeMasked(value);
        event.currentTarget.value = value;
    }, []);

    return (
        <form className="flex flex-col mt-[50px] border-b border-b-white-bar py-[30px]" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-[38px] flex-wrap  lg:grid lg:grid-cols-2">
                <LabelInput label="First Name*" name="firstName">
                    <input type="text"
                        className={inputDetail}
                        {...register("firstName", { required: true })}
                        placeholder="First Name" />
                    {errors.firstName?.message && <p role="alert" className="text-red-700 font-coreSans">{errors.firstName?.message}</p>}
                </LabelInput>
                <LabelInput label="Last Name*" name="lastName">
                    <input type="text"
                        className={inputDetail}
                        {...register("lastName", { required: true })}
                        placeholder="Last Name" />
                    {errors.lastName?.message && <p role="alert" className="text-red-700 font-coreSans">{errors.lastName?.message}</p>}
                </LabelInput>
                <LabelInput label="Country / Region*" name="country">
                    <input type="text"
                        className={inputDetail}
                        {...register("country")}
                        placeholder="Country / Region" />
                    {errors.country?.message && <p role="alert" className="text-red-700 font-coreSans">{errors.country?.message}</p>}
                </LabelInput>
                <LabelInput label="Company Name" name="companyName">
                    <input type="text"
                        className={inputDetail}
                        {...register("companyName")}
                        placeholder="Company (optional)" />
                    {errors.companyName?.message && <p role="alert" className="text-red-700 font-coreSans">{errors.companyName?.message}</p>}
                </LabelInput>
                <LabelInput label="Street Address*" name="streetAddress">
                    <input type="text"
                        className={inputDetail}
                        {...register("streetAddress", { required: true })}
                        placeholder="House number and street name" />
                    {errors.streetAddress?.message && <p role="alert" className="text-red-700 font-coreSans">{errors.firstName?.message}</p>}
                </LabelInput>
                <LabelInput label="Apt, suite, unit" name="apartment">
                    <input type="text"
                        className={inputDetail}
                        {...register("apartment")}
                        placeholder="apartment, suite, unit, etc. (optional)" />
                    {errors.apartment?.message && <p role="alert" className="text-red-700 font-coreSans">{errors.apartment?.message}</p>}
                </LabelInput>
                <div className="flex flex-auto flex-col flex-wrap lg:grid lg:grid-cols-3 gap-8 lg:col-span-2">
                    <LabelInput label="City*" name="city">
                        <input type="text"
                            className={inputDetailMin}
                            {...register("city", { required: true })}
                            placeholder="Town / City" />
                        {errors.city?.message && <p role="alert" className="text-red-700 font-coreSans">{errors.city?.message}</p>}

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
                                <option value={state.name.toLowerCase()} key={state.abbreviation}>
                                    {state.name}
                                </option>
                            ))}
                        </select>
                        {errors.state?.message && <p role="alert" className="text-red-700 font-coreSans">{errors.state?.message}</p>}

                    </div>
                    <LabelInput label="Postal Code*" name="postalCode">
                        <input type="text"
                            className={inputDetailMin}
                            onKeyUp={handleFilterPostalCode}
                            {...register("postalCode", { required: true })} placeholder="Postal Code" />
                        {errors.postalCode?.message && <p role="alert" className="text-red-700 font-coreSans">{errors.postalCode?.message}</p>}

                    </LabelInput>
                </div>
                <LabelInput label="Phone*" name="phone">
                    <input
                        {...register("phone")}
                        className={inputDetailMin}
                        type="text"
                        onKeyUp={handleMaskPhone}
                        placeholder="Phone"
                    />
                    {errors.phone?.message && <p role="alert" className="text-red-700 font-coreSans">{errors.phone?.message}</p>}
                </LabelInput>
            </div>
            <div className="mt-[60px] flex gap-[30px]">
                <button disabled={isLoading} type="submit" className="bg-purple-principal rounded-md px-[40px] py-3 text-white font-medium hover:opacity-70 transition-all">
                    {isLoading ? (
                        <LoadingSpinner />
                    ) : (
                        <span>Continue to delivery</span>
                    )}
                </button>
            </div>
            <div className="flex gap-[10px] mt-5">
                <input type="checkbox" {...register("billingAddress")} id="billingAddress" />
                <label htmlFor="billingAddress">Set as default billing address</label>
            </div>
        </form>
    );
}
