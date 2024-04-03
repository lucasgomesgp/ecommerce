"use client"
import React, { FormEvent, useCallback, useState } from "react";
import { states } from "@/utils/data/StatesNames";
import { LabelInput } from "./LabelInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { inputInfoCss } from "@/utils/constants/inputInfoCss";
import { formSchema } from "@/app/schemas/form-schema";
import { z } from "zod";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { LoadingSpinner } from "./LoadingSpinner";
import { getPhoneMasked } from "@/utils/functions/getPhoneMasked";
import { getPostalCodeMasked } from "@/utils/functions/getPostalCodeMasked";
import { ErrorText } from "./ErrorText";

export type AddressSchema = z.infer<typeof formSchema>;
export function FormAddress() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm<AddressSchema>({
        resolver: zodResolver(formSchema),
    });
    const { data: session } = useSession();
    const onSubmit = async (data: AddressSchema) => {
        if (session?.user.email) {
            try {
                setIsLoading(true);
                await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/address`, {
                    method: "POST",
                    body: JSON.stringify(data),
                });
                toast.success("Info updated");
                router.push("/user/info");
                router.refresh();
            } catch (err) {
                toast.error("Error on update info");
            } finally {
                setIsLoading(false);
            }
        }
    }
    function handleCancelSendForm() {
        reset();
        toast.error("All inputs was reseted");
    }
    const handleKeyUp = useCallback((event: FormEvent<HTMLInputElement>) => {
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
        <form className="flex flex-col mt-[50px]" onSubmit={handleSubmit(onSubmit)}>
            <div className="lg:grid lg:grid-cols-2 lg:gap-[42px]">
                <LabelInput label="First Name*" name="firstName">
                    <input type="text"
                        className={inputInfoCss}
                        {...register("firstName", { required: true })}
                        placeholder="First Name" />
                        <ErrorText text={errors.firstName?.message} />
                </LabelInput>
                <LabelInput label="Last Name*" name="lastName">
                    <input type="text"
                        className={inputInfoCss}
                        {...register("lastName", { required: true })}
                        placeholder="Last Name" />
                        <ErrorText text={errors.lastName?.message} />
                </LabelInput>
                <LabelInput label="Country / Region*" name="country">
                    <input type="text"
                        className={inputInfoCss}
                        {...register("country")}
                        placeholder="Country / Region" />
                        <ErrorText text={errors.country?.message} />
                </LabelInput>
                <LabelInput label="Company Name" name="companyName">
                    <input type="text"
                        className={inputInfoCss}
                        {...register("companyName")}
                        placeholder="Company (optional)" />
                        <ErrorText text={errors.companyName?.message} />
                </LabelInput>
                <LabelInput label="Street Address*" name="streetAddress">
                    <input type="text"
                        className={inputInfoCss}
                        {...register("streetAddress", { required: true })}
                        placeholder="House number and street name" />
                        <ErrorText text={errors.streetAddress?.message} />
                </LabelInput>
                <LabelInput label="Apt, suite, unit" name="apartment">
                    <input type="text"
                        className={inputInfoCss}
                        {...register("apartment")}
                        placeholder="apartment, suite, unit, etc. (optional)" />
                        <ErrorText text={errors.apartment?.message} />
                </LabelInput>
                <LabelInput label="City*" name="city">
                    <input type="text"
                        className={inputInfoCss}
                        {...register("city", { required: true })}
                        placeholder="Town / City" />
                        <ErrorText text={errors.city?.message} />

                </LabelInput>

                <div className="flex flex-col gap-[10px]">
                    <label htmlFor="state" className="font-semibold">
                        State*
                    </label>
                    <select
                        className="rounded-lg text-gray-light pl-[22px] outline-none min-h-[54px] min-w-[420px] bg-white-light"
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
                    <ErrorText text={errors.state?.message} />

                </div>
                <LabelInput label="Phone*" name="phone">
                    <input
                        {...register("phone")}
                        className={inputInfoCss}
                        type="text"
                        onKeyUp={handleKeyUp}
                        placeholder="Phone"
                    />
                        <ErrorText text={errors.phone?.message} />
                </LabelInput>
                <LabelInput label="Postal Code*" name="postalCode">
                    <input type="text"
                        className={inputInfoCss}
                        onKeyUp={handleFilterPostalCode}
                        {...register("postalCode", { required: true })} placeholder="Postal Code" />
                        <ErrorText text={errors.postalCode?.message} />

                </LabelInput>
            </div>
            <div className="flex flex-col gap-[10px] mt-[30px]">
                <label htmlFor="deliveryInstruction" className="gray-text-menu font-semibold">
                    Delivery Instruction
                </label>
                <textarea
                    className="w-full min-h-[149px] h-[149px] pl-[22px]  outline-none bg-white-light lg:mt-7 rounded-md resize-none pt-2"
                    {...register("deliveryInstruction")} placeholder="Delivery Instruction"
                />
                        <ErrorText text={errors.deliveryInstruction?.message} />

            </div>
            <div className="flex flex-col mt-[30px] gap-[14px]">
                <div className="flex gap-[11px]">
                    <input type="checkbox" {...register("shippingAddress")} id="shippingAddress" />
                    <label htmlFor="shippingAddress">Set as default shipping address</label>
                </div>
                <div className="flex gap-[11px]">
                    <input type="checkbox" {...register("billingAddress")} id="billingAddress" />
                    <label htmlFor="billingAddress">Set as default billing address</label>
                </div>
            </div>
            <div className="mt-[60px] flex gap-[30px]">
                <button disabled={isLoading} type="submit" className="bg-purple-principal rounded-md px-[40px] py-3 text-white font-semibold hover:opacity-70 transition-all">
                    {isLoading ? (
                        <LoadingSpinner />
                    ) : (
                        <span>Save</span>
                    )}
                </button>
                <button disabled={isLoading} className="font-semibold hover:opacity-70 transition-all rounded-md bg-white-light text-gray-light px-[40px] py-3" onClick={handleCancelSendForm}>Cancel</button>
            </div>
        </form>
    );
}
