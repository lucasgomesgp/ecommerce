import React, { InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";
import { SignUpSchema } from "./FormSignUp";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    register: UseFormRegister<SignUpSchema>;
    nameRegister: "email" | "password";
}

export function InputFormWithRef({ nameRegister, register, ...rest }: Props) {
    const { ref } = register(nameRegister);
    return (
        <input {...register(nameRegister)} ref={ref} className="w-screen disabled:cursor-not-allowed border border-gray-text-menu  lg:w-[567px] lg:max-w-[567px] py-3 px-4 rounded-lg outline-none text-base tracking-wider"  {...rest} />
    );
}

// export const InputFormWithRef = React.forwardRef(InputRef);