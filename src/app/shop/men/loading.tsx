import { CriteriaArea } from "@/components/CriteriaArea";
import { Filters } from "@/components/Filters";
import { SkeletonCard } from "@/components/SkeletonCard";

export default function Loading() {
  return (
    <main className="flex flex-col w-full">
      <section className="flex flex-wrap lg:flex-nowrap gap-[50px] justify-center mb-16">
        <Filters />
        <div className="flex flex-col">
          <CriteriaArea title="Men's Clothing" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-12">
            <SkeletonCard quantity={1} />
            <SkeletonCard quantity={1} />
            <SkeletonCard quantity={1} />
            <SkeletonCard anotherClassName="mt-8" quantity={1} />
            <SkeletonCard anotherClassName="mt-8" quantity={1} />
            <SkeletonCard anotherClassName="mt-8" quantity={1} />
          </div>
        </div>
      </section>
    </main>
  );
}
