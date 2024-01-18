import { CriteriaArea } from "@/components/CriteriaArea";
import { Filters } from "@/components/Filters";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import SkeletonCard from "@/components/SkeletonCard";

export default function Loading() {

  return (
    <main className="flex flex-col w-full">
      <Header />
      <section className="flex flex-col">
        <section className="flex flex-wrap lg:flex-nowrap gap-[50px] justify-center ">
          <Filters />
          <div className="flex flex-col">
            <CriteriaArea title="Men’s Clothing" />
            <div className="flex flex-wrap items-center justify-center xl:grid xl:grid-cols-3 gap-6">
                <SkeletonCard quantity={3} />
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </main>
  );
}
