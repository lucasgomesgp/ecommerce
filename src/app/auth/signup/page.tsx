import { FormSignUp } from "@/components/FormSignUp";
import { Header } from "@/components/Header";
import { SocialLoginOptions } from "@/components/SocialLoginOptions";
import Image from "next/image";

export default function SignUp() {
    return (
        <main className="w-full min-h-screen overflow-x-hidden">
            <Header isLoginPage />
            <section className="flex flex-col-reverse lg:flex-row  lg:gap-[77px] w-full">
                <div className="w-[694px]">
                    <Image src={"/assets/signup.png"} width={694} height={1232} alt="People taking photo" className="w-full" />
                </div>
                <section className="pr-[102px]">
                    <div className="flex flex-col gap-[10px]">
                        <h1 className="font-coreSans text-[34px] text-black-text font-medium">Sign Up</h1>
                        <p className="text-gray">Sign up for free to access to in any of our products </p>
                    </div>
                    <SocialLoginOptions />
                    <FormSignUp />
                </section>
            </section>
        </main>
    );
}
