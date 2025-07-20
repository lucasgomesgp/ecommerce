import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MainSideBarContent } from "@/components/MainSideBarContent";
import { OrdersItems } from "@/components/OrdersItems";
import { PathPage } from "@/components/PathPage";
import { getOrders } from "@/services/getOrders";

export default async function Orders() {
  let data;
  try {
    data = await getOrders();
  } catch (err) {
    data = undefined;
  }
  return (
    <main className="flex flex-col overflow-hidden">
      <Header />
      <PathPage title="Orders" />
      <MainSideBarContent>
        <div className="flex flex-[0.75] flex-col">
          <h1 className="font-coreSans text-[28px] font-semibold">My Orders</h1>
          {data !== undefined ? (
            <OrdersItems userOrders={data} />
          ) : (
            <p>Sorry, you don&#39;t have orders yet.</p>
          )}
        </div>
      </MainSideBarContent>
      <Footer />
    </main>
  );
}
