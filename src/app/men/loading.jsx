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
          <div className="flex flex-col mb-8">
            <CriteriaArea title="Men’s Clothing" />
            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center xl:grid xl:grid-cols-3 gap-6">
              <SkeletonCard quantity={4} />
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </main>
  );
}
