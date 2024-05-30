import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MainSideBarContent } from "@/components/MainSideBarContent";
import { OrdersItems } from "@/components/OrdersItems";
import { PathPage } from "@/components/PathPage";
import { getAllOrders } from "../../../utils/functions/address/getAllOrders";

export default async function Orders() {
  // const data = await getAllOrders();
  return (
    <main className="flex flex-col overflow-hidden">
      <Header />
      <PathPage title="Orders" />
      <MainSideBarContent>
        <div className="flex flex-[0.75] flex-col">
          <h1 className="font-coreSans text-[28px] font-semibold">My Orders</h1>
          <OrdersItems />
        </div>
      </MainSideBarContent>
      <Footer />
    </main>
  );
}
