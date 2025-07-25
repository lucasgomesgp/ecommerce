"use client";

import { MouseEvent, useEffect, useState } from "react";

import { Eye } from "@/svgs/eye";
import { InputFormWithRef } from "./InputFormWithRef";
import Link from "next/link";
import { LoadingSpinner } from "./LoadingSpinner";
import { formSignUpSchema } from "@/app/schemas/form-sign-up-schema";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export type SignUpSchema = z.infer<typeof formSignUpSchema>;

export function FormSignUp() {
  const [togglePasswordVisibility, setTogglePasswordVisibility] =
    useState(false);
  const [termsAndPolicyIsAcccept, setTermsAndPolicyIsAcccept] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignUpSchema>({
    resolver: zodResolver(formSignUpSchema),
  });
  const router = useRouter();
  const session = useSession();

  async function onSubmit(data: SignUpSchema) {
    try {
      setIsLoading(true);
      const request = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const response = await request.json();
      reset();
      setIsLoading(false);
      toast.success("User created!");
      await signIn("credentials", {
        ...data,
        redirect: true,
        callbackUrl: "/",
      });
    } catch (err) {
      toast.error(
        "Ooops.... Error on sign up user. Try again with diferents info!"
      );
    }
  }
  function handleTogglePassword(event: MouseEvent) {
    event.preventDefault();
    setTogglePasswordVisibility(!togglePasswordVisibility);
  }
  useEffect(() => {
    if (session.data?.user.name || session.data?.user.email) {
      const name = session.data.user.name;
      router.push("/");
    }
  }, []);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-[30px] items-center lg:items-start mt-12"
    >
      <div className="flex flex-col">
        <label htmlFor="email" className="text-gray-text-menu">
          Email Address
        </label>
        <InputFormWithRef
          type="text"
          register={register}
          nameRegister={"email"}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="text-gray-text-menu">
            Password
          </label>
          <button
            type="button"
            className="flex items-center gap-[15px]"
            onClick={handleTogglePassword}
          >
            <Eye />
            <span className="text-gray-light text-lg">Hide</span>
          </button>
        </div>
        <InputFormWithRef
          type={togglePasswordVisibility ? "text" : "password"}
          register={register}
          nameRegister={"password"}
        />
        {errors.password ? (
          <p className="text-red-500">{errors.password.message}</p>
        ) : (
          <p className="mt-[10px] text-gray-light">
            Use 8 or more characters with a mix of letters, numbers & symbols
          </p>
        )}
      </div>
      <div className="flex flex-col text-gray-light font-medium">
        <label className="flex gap-[10px]">
          <input
            type="checkbox"
            className="accent-gray-text-menu"
            name="termsAndPolicy"
            value={termsAndPolicyIsAcccept ? 0 : 1}
            onChange={(event) => {
              setTermsAndPolicyIsAcccept(!termsAndPolicyIsAcccept);
            }}
          />
          Agree to our <span className="underline">Terms</span> of use and{" "}
          <span className="underline">Privacy Policy</span>
        </label>
        <label className="flex gap-[10px] mt-[18px] text-gray-light font-medium">
          <input
            type="checkbox"
            className="accent-gray-text-menu"
            name="newsletter"
          />
          Subscribe to our monthly newsletter
        </label>
      </div>
      <div className="flex flex-col gap-[10px] mt-5">
        <button
          type="submit"
          disabled={termsAndPolicyIsAcccept ? false : true}
          className="disabled:cursor-not-allowed disabled:opacity-70 bg-purple-principal text-white w-[80%] py-4 rounded-lg hover:opacity-80 transition-opacity"
        >
          {isLoading ? <LoadingSpinner /> : <p>Sign Up</p>}
        </button>
        <p>
          Already have an account?
          <Link href="/login" className="underline">
            Log in
          </Link>
        </p>
      </div>
    </form>
  );
}
