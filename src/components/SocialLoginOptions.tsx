"use client"
import { BtnSocialLogin } from "@/components/BtnSocialLogin";
import { Github } from "@/svgs/github";
import { Google } from "@/svgs/google";
import { signIn, useSession } from "next-auth/react";
import { toast } from "sonner";


export function SocialLoginOptions() {
    const { data: session, status } = useSession();
    function handleLoginOptions(provider: "google" | "github") {
        try {
            signIn(provider, { callbackUrl: "/" })
        } catch (err) {
            const providerString = provider.toString().toUpperCase();
            toast.error(`Error on Sign In with ${providerString}`);
        }
    }
    return (
        <div className="flex flex-col gap-5 mt-12 items-center lg:items-start max-w-full">
            <BtnSocialLogin
                disabled={status === "authenticated"}
                onClick={() => { handleLoginOptions("google") }}
            >
                <Google />
                Continue With Google
            </BtnSocialLogin>
            <BtnSocialLogin
                disabled={status === "authenticated"}
                onClick={() => { handleLoginOptions("github") }}

            >
                <Github />
                Continue With Github
            </BtnSocialLogin>
        </div>
    )
}
