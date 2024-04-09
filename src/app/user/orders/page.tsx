import { ButtonOrderOption } from "@/components/ButtonOrderOption";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MainSideBarContent } from "@/components/MainSideBarContent";
import { PathPage } from "@/components/PathPage";

export default function Orders() {
  return (
    <main className="flex flex-col overflow-hidden ">
      <Header />
      <PathPage title="Orders" />
      <MainSideBarContent>
        <div className="flex flex-[0.75] flex-col">
          <h1 className="font-coreSans text-[28px] font-semibold">My Orders</h1>
          <div className="flex border-b-[3px] border-b-white-light mt-[38px] justify-between">
            <ButtonOrderOption title="Active" />
            <ButtonOrderOption title="Cancelled" />
            <ButtonOrderOption title="Completed" />
          </div>
        </div>
      </MainSideBarContent>
      <Footer />
    </main>
  );
}
