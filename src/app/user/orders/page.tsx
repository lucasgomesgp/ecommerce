import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MainSideBarContent } from "@/components/MainSideBarContent";
import { OrdersList } from "@/components/OrdersList";
import { PathPage } from "@/components/PathPage";

export default function Orders() {
  return (
    <main className="flex flex-col overflow-hidden">
      <Header />
      <PathPage title="Orders" />
      <MainSideBarContent>
        <div className="flex flex-[0.75] flex-col">
          <h1 className="font-coreSans text-[28px] font-semibold">My Orders</h1>
          <OrdersList />
        </div>
      </MainSideBarContent>
      <Footer />
    </main>
  );
}
