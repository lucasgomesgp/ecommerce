import { Header } from "@/components/Header";
import Image from "next/image";
import { Google } from "../../public/assets/google";
import { Twitter } from "../../public/assets/twitter";
import { BtnSocialLogin } from "@/components/BtnSocialLogin";

export default function Home() {
  return (
    <main className="w-full min-h-full">
      <Header isLoginPage />
      <section className="flex gap-[77px]">
        <div className="h-[550px] w-[550px]">
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
            <BtnSocialLogin>
              <Google />
              Continue With Google
            </BtnSocialLogin>
            <BtnSocialLogin>
              <Twitter />
              Continue With Twitter
            </BtnSocialLogin>
          </div>
          <div className="mt-14 relative text-center w-full before:absolute before:left-0 before before:h-[2px] before:w-60 before:bg-gray-border-one before:top-[50%] before:translate-y-[50%]  after:absolute after:right-0 after:h-[2px] after:w-60 after:bg-gray-border-one after:top-[50%] after:translate-y-[50%]">
            <span className="top-[50%] translate-y-[50%]">
              OR
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
