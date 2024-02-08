"use client"
import React, { FormEvent, useCallback } from "react";
import { states } from "@/utils/data/StatesNames";
import { LabelInput } from "./LabelInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { inputInfoCss } from "@/utils/constants/inputInfoCss";
import { formSchema } from "@/app/schemas/form-schema";
import { z } from "zod";

type AddressSchema = z.infer<typeof formSchema>;
export function FormAddress() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm<AddressSchema>({
        resolver: zodResolver(formSchema),
    });
    const onSubmit = (data: AddressSchema) => {
        alert("Chegou!");
        toast.success("Info sended");
    }
    function handleCancelSendForm() {
        reset();
        toast.error("All inputs was reseted");
    }
    const handleKeyUp = useCallback((event: FormEvent<HTMLInputElement>) => {
        //999-9999
        event.currentTarget.maxLength = 8;
        let value = event.currentTarget.value;
        value = value.replace(/\D/g, ""); // Remove letters
        value = value.replace(/^(\d{3})(\d)/, "$1-$2"); // Put the mask on input
        event.currentTarget.value = value;
    }, []);
    const handleFilterPostalCode = useCallback((event: FormEvent<HTMLInputElement>) => {
        //999-9999
        event.currentTarget.maxLength = 5;
        let value = event.currentTarget.value;
        value = value.replace(/\D/g, ""); // Remove letters
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
                    {errors.firstName?.message && <p role="alert" className="text-red-700 font-coreSans">{errors.firstName?.message}</p>}
                </LabelInput>
                <LabelInput label="Last Name*" name="lastName">
                    <input type="text"
                        className={inputInfoCss}
                        {...register("lastName", { required: true })}
                        placeholder="Last Name" />
                    {errors.lastName?.message && <p role="alert" className="text-red-700 font-coreSans">{errors.lastName?.message}</p>}
                </LabelInput>
                <LabelInput label="Country / Region*" name="country">
                    <input type="text"
                        className={inputInfoCss}
                        {...register("country")}
                        placeholder="Country / Region" />
                    {errors.country?.message && <p role="alert" className="text-red-700 font-coreSans">{errors.country?.message}</p>}
                </LabelInput>
                <LabelInput label="Company Name" name="companyName">
                    <input type="text"
                        className={inputInfoCss}
                        {...register("companyName")}
                        placeholder="Company (optional)" />
                    {errors.companyName?.message && <p role="alert" className="text-red-700 font-coreSans">{errors.companyName?.message}</p>}
                </LabelInput>
                <LabelInput label="Street Address*" name="streetAddress">
                    <input type="text"
                        className={inputInfoCss}
                        {...register("streetAddress", { required: true })}
                        placeholder="House number and street name" />
                    {errors.streetAddress?.message && <p role="alert" className="text-red-700 font-coreSans">{errors.firstName?.message}</p>}
                </LabelInput>
                <LabelInput label="Apt, suite, unit" name="apartment">
                    <input type="text"
                        className={inputInfoCss}
                        {...register("apartment")}
                        placeholder="apartment, suite, unit, etc. (optional)" />
                    {errors.apartment?.message && <p role="alert" className="text-red-700 font-coreSans">{errors.apartment?.message}</p>}
                </LabelInput>
                <LabelInput label="City*" name="city">
                    <input type="text"
                        className={inputInfoCss}
                        {...register("city", { required: true })}
                        placeholder="Town / City" />
                    {errors.city?.message && <p role="alert" className="text-red-700 font-coreSans">{errors.city?.message}</p>}

                </LabelInput>

                <div className="flex flex-col gap-[10px]">
                    <label htmlFor="state">
                        State*
                    </label>
                    <select
                        className="rounded-lg pl-[22px] outline-none min-h-[54px] min-w-[420px] bg-white-light"
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
                <LabelInput label="Phone*" name="phone">
                    <input
                        {...register("phone")}
                        className={inputInfoCss}
                        type="text"
                        onKeyUp={handleKeyUp}
                        placeholder="Phone"
                    />
                    {errors.phone?.message && <p role="alert" className="text-red-700 font-coreSans">{errors.phone?.message}</p>}
                </LabelInput>
                <LabelInput label="Postal Code*" name="postalCode">
                    <input type="text"
                        className={inputInfoCss}
                        onKeyUp={handleFilterPostalCode}
                        {...register("postalCode", { required: true })} placeholder="Postal Code" />
                    {errors.postalCode?.message && <p role="alert" className="text-red-700 font-coreSans">{errors.postalCode?.message}</p>}

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
                {errors.deliveryInstruction?.message && <p role="alert" className="text-red-700 font-coreSans">{errors.deliveryInstruction?.message}</p>}

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
                <button type="submit" className="bg-purple-principal rounded-md px-[40px] py-3 text-white font-semibold hover:opacity-70 transition-all">Save</button>
                <button className="font-semibold hover:opacity-70 transition-all rounded-md bg-white-light text-gray-light px-[40px] py-3" onClick={handleCancelSendForm}>Cancel</button>
            </div>
        </form>
    );
}
