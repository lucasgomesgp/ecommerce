import { Card } from "@/components/Card";
import { CriteriaArea } from "@/components/CriteriaArea";
import { Filters } from "@/components/Filters";
import Image from "next/image";
import { InfoTableDownSection } from "@/components/InfoTableDownSection";
import { getProductByCategory } from "@/services/getProductByCategory";
import { searchInput } from "@/utils/functions/searchInput";
import { sortArray } from "@/utils/functions/sortArray";

export default async function Men({
  searchParams,
}: {
  searchParams: { query?: string; page?: string };
}) {
  const queryInputSearch = searchParams?.query || "";

  const { data } = await getProductByCategory({ category: "men" });

  let dataFiltered = searchInput(data, "men", queryInputSearch);
  const dataByPrice = sortArray(dataFiltered);
  return (
    <main className="flex flex-col w-full">
      <section className="flex flex-col">
        {dataFiltered?.length >= 1 ? (
          <section className="flex flex-wrap lg:flex-nowrap gap-[50px] justify-center">
            <Filters maxRangeValue={dataByPrice[0]?.attributes.price} />
            <div className="flex flex-col">
              <CriteriaArea title="Men’s Clothing" />
              <div className="flex flex-wrap items-center justify-center xl:grid xl:grid-cols-3 gap-6">
                {dataFiltered?.map(({ id, attributes }) => (
                  <Card
                    key={id}
                    id={id}
                    title={attributes.title}
                    subTitle={attributes.subTitle}
                    price={attributes.price}
                    image={attributes.image?.data.attributes.url || ""}
                    colors={attributes.colors}
                    sizes={attributes.sizes}
                  />
                ))}
              </div>
            </div>
          </section>
        ) : (
          <p>No data for Mens clothing</p>
        )}
        {dataFiltered.length === 0 && (
          <div className="flex mt-4 gap-4 flex-col justify-center items-center w-full">
            <p className="font-causten text-lg">
              No products were found when searching for &quot;
              {queryInputSearch}&quot;
            </p>
            <Image
              src={"/assets/empty-data.svg"}
              alt="Empty icon"
              width={700}
              height={1200}
              className="w-full h-full max-w-[600px]"
            />
          </div>
        )}
        <InfoTableDownSection
          data={dataByPrice}
          titleFirstArea="Clothing for Men Online in India"
          titleTableArea="Buy Men's Clothing at Best Price"
          titleTableFirstCol="Men's Clothing"
          titleTableSecondCol="Best Price"
        >
          <p>Men section area</p>
        </InfoTableDownSection>
      </section>
    </main>
  );
}
