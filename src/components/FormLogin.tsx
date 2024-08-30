"use client"

import React, { MouseEvent, useEffect, useState } from 'react'
import { signIn, useSession } from 'next-auth/react';

import { CircleNotch } from '@phosphor-icons/react';
import { Eye } from '@/svgs/eye';
import { InputFormWithRef } from './InputFormWithRef';
import Link from 'next/link';
import { LoadingSpinner } from './LoadingSpinner';
import { formLoginSchema } from '@/app/schemas/form-login-schema';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

type LoginSchema = z.infer<typeof formLoginSchema>;
export default function FormLogin() {
    const [togglePasswordVisibility, setTogglePasswordVisibility] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm<LoginSchema>({
        resolver: zodResolver(formLoginSchema),
    });
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const session = useSession();

    async function onSubmit(data: LoginSchema) {
        setIsLoading(true);
        const res = await signIn<"credentials">("credentials", {
            ...data,
            redirect: false,
        });
        setIsLoading(false);
        if (res?.error) {
            toast.error(res.error);
        } else {
            router.push("/");
        }
    }
    function handleToggleVisibilityPassword(event: MouseEvent) {
        event.preventDefault();
        setTogglePasswordVisibility(!togglePasswordVisibility);
    }
    useEffect(() => {
        if (session.data?.user.name || session.data?.user.email) {
            const name = session.data.user.name;
            router.push("/");
            toast.success(`Welcome  ${name}`);
        }
    }, []);
    return (
        <form className="mt-12" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col mb-8">
                <label htmlFor="username" className="mb-[10px]">
                    User name or email address
                </label>
                <InputFormWithRef
                    type="text"
                    disabled={isLoading}
                    register={register}
                    nameRegister={"email"}
                />
                {errors.email?.message && <p className="text-red-500">{errors.email.message}</p>}
            </div>
            <div className="flex flex-col ">
                <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-gray-text-menu">
                        Password
                    </label>
                    <button type="button" className="flex items-center gap-[15px]" onClick={handleToggleVisibilityPassword}>
                        <Eye />
                        <span className="text-gray-light text-lg">Hide</span>
                    </button>
                </div>
                <InputFormWithRef
                    type={togglePasswordVisibility ? "text" : "password"}
                    disabled={isLoading}
                    register={register}
                    nameRegister={"password"}
                />
                {errors.password?.message && <p className="text-red-500">{errors.password.message}</p>}
                <Link
                    href={"/"}
                    className="text-right underline text-gray-text-menu decoration-gray-text-menu mt-[10px]"
                >
                    Forget your password
                </Link>
            </div>
            <button className={`flex outline-none gap-4 items-center justify-center  bg-purple-principal text-white w-36  py-3 border rounded-lg text-center ${isLoading ? "cursor-not-allowed opacity-80" : ""}`} type="submit" >
                {isLoading ? (
                    <LoadingSpinner />
                ) : (
                    <p>Sign In</p>
                )}
            </button>
        </form >
    );
}