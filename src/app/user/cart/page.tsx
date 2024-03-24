import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ArrowMenu } from "@/svgs/arrow-menu";
import { UserNotLoggedIn } from "@/components/UserNotLoggedIn";
import { DiscountAndCheckout } from "@/components/DiscountAndCheckout";
import { TableItemsOnCart } from "@/components/TableItemsOnCart";
import { getCoupons } from "@/services/getCoupons";

export default async function Shop() {
  const { data } = await getCoupons();
  return (
    <main className="flex flex-col">
      <Header />
      <section className="flex flex-col pl-[100px] my-[50px] font-medium text-lg">
        <div className="flex items-center gap-4">
          <p className="text-gray-text-menu ">Home</p>
          <ArrowMenu />
          <p className="text-">Add To Cart</p>
        </div>
        <p className="text-gray-light text-sm">
          Please fill in the fields below and click place order to complete your
          purchase!
        </p>
        <UserNotLoggedIn />
      </section>
      <TableItemsOnCart />
      <DiscountAndCheckout coupons={data} />
      <Footer />
    </main>
  );
}
