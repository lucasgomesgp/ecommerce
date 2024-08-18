import { ButtonBackToHome } from "@/components/ButtonBackToHome";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="w-full min-h-full overflow-hidden">
      <Header isLoginPage={false} />
      <section className="flex flex-col items-center justify-center mt-[82px] mb-[100px]">
        <div className="w-[395px] h-[274px] overflow-hidden">
          <Image
            src="/assets/404.png"
            alt="Not found"
            width={400}
            height={300}
            className="w-full h-full"
          />
        </div>
        <h3 className="font-semibold font-coreSans text-3xl mt-3">Oops! Page not found</h3>
        <p className="text-gray-light font-medium max-w-[414px] text-center mt-[10px] mb-[42px]">
          The page you are looking for might have been removed or
          temporarily unavailable.
        </p>
        <ButtonBackToHome title="Back to HomePage" path="/"/>
      </section>
      <Footer />
    </main>
  );
}
