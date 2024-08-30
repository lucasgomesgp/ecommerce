import FormLogin from "@/components/FormLogin";
import { Header } from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { SocialLoginOptions } from "@/components/SocialLoginOptions";

export default function Login() {
  return (
    <main className="w-full min-h-full overflow-hidden">
      <Header isLoginPage />
      <section className="flex flex-col-reverse items-center lg:flex-row lg:gap-[77px] w-full ">
        <div className="lg:h-[956px] lg:w-[695px]">
          <Image
            src={"/assets/login-bg.png"}
            alt="Background"
            width={695}
            height={956}
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start mt-16 lg:pr-[100px] w-full lg:w-auto">
          <h1 className="text-[34px] font-bold">Sign In Page</h1>
          <SocialLoginOptions />
          <div className="mt-14 relative text-center w-full before:absolute before:left-0 before before:h-[2px] before:w-60 before:bg-gray-border-one before:top-[50%] before:translate-y-[50%]  after:absolute after:right-0 after:h-[2px] after:w-60 after:bg-gray-border-one after:top-[50%] after:translate-y-[50%]">
            <span className="top-[50%] translate-y-[50%]">OR</span>
          </div>
          <FormLogin />
          <span className="text-gray-text-menu mt-[10px]">
            Don’t have an account?{" "}
            <Link href={"/signup"} className="underline">
              Sign up
            </Link>
          </span>
        </div>
      </section>
    </main>
  );
}
