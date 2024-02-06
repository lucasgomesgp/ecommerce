"use client";
import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import Image from "next/image";
import { BtnSocialLogin } from "@/components/BtnSocialLogin";
import { InputForm } from "@/components/InputForm";
import { Eye } from "../../../svgs/eye";
import { ButtonAuth } from "@/components/ButtonAuth";
import { Google } from "../../../svgs/google";
import { Github } from "../../../svgs/github";
import { signIn } from "next-auth/react";

export default function Login() {
  const [passwordToggle, setPasswordToggle] = useState(false);
  return (
    <main className="w-full min-h-full">
      <Header isLoginPage />
      <section className="flex flex-col-reverse items-center lg:flex-row lg:gap-[77px]">
        <div className="lg:h-[956px] lg:w-[695px]">
          <Image
            src={"/assets/login-bg.png"}
            alt="Background"
            width={695}
            height={956}
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col items-start justify-start mt-16 pr-[100px]">
          <h1 className="text-[34px] font-bold">Sign In Page</h1>
          <div className="flex flex-col gap-5 mt-12">
            <BtnSocialLogin
              onClick={() => {
                signIn("google", { callbackUrl: "/" });
              }}
            >
              <Google />
              Continue With Google
            </BtnSocialLogin>
            <BtnSocialLogin
              onClick={() => {
                signIn("github", { callbackUrl: "/" });
              }}
            >
              <Github />
              Continue With Github
            </BtnSocialLogin>
          </div>
          <div className="mt-14 relative text-center w-full before:absolute before:left-0 before before:h-[2px] before:w-60 before:bg-gray-border-one before:top-[50%] before:translate-y-[50%]  after:absolute after:right-0 after:h-[2px] after:w-60 after:bg-gray-border-one after:top-[50%] after:translate-y-[50%]">
            <span className="top-[50%] translate-y-[50%]">OR</span>
          </div>
          <div className="flex flex-col mt-12 mb-8">
            <label htmlFor="username" className="mb-[10px]">
              User name or email address
            </label>
            <InputForm type="text" name="username" />
          </div>
          <div className="flex flex-col ">
            <label
              htmlFor="password"
              className="flex items-center justify-between mb-3"
            >
              Password
              <button
                className="flex gap-[15px] items-center justify-center"
                onClick={() => {
                  setPasswordToggle(!passwordToggle);
                }}
              >
                <Eye />
                <span className="text-gray-light">Hide</span>
              </button>
            </label>
            <InputForm
              type={passwordToggle ? "text" : "password"}
              name="password"
            />
            <Link
              href={"/"}
              className="text-right underline text-gray-text-menu decoration-gray-text-menu mt-[10px]"
            >
              Forget your password
            </Link>
          </div>
          <ButtonAuth isActive text="Sign In" />
          <span className="text-gray-text-menu mt-[10px]">
            Don’t have an account?{" "}
            <Link href={"/"} className="underline">
              Sign up
            </Link>
          </span>
        </div>
      </section>
    </main>
  );
}
