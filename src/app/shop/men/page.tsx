import { Card } from "@/components/Card";
import { CriteriaArea } from "@/components/CriteriaArea";
import { Filters } from "@/components/Filters";
import { InfoTableDownSection } from "@/components/InfoTableDownSection";
import { getProductByCategory } from "@/services/getProductByCategory";
import { searchInput } from "@/utils/functions/searchInput";
import { sortArray } from "@/utils/functions/sortArray";
import { ProductsNotFound } from "@/components/ProductsNotFound";

export default async function Men({
  searchParams,
}: {
  searchParams: { query?: string; page?: string };
}) {
  const queryInputSearch = searchParams?.query || "";

  const { data } = await getProductByCategory({ category: "men" });
  const dataIsAvailable = Array.isArray(data) ? data : [];

  let dataFiltered = dataIsAvailable ? searchInput(data, "men", queryInputSearch) : [];
  const dataByPrice = dataIsAvailable ? sortArray(dataFiltered) : [];
  return (
    <main className="flex flex-col w-full">
      <section className="flex flex-col">
        {dataFiltered.length >= 1 && (
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
        )}
        {dataFiltered.length === 0 ? (
          <ProductsNotFound category="Men&apos;s" />
        ) : (
          <InfoTableDownSection
            data={dataByPrice}
            titleFirstArea="Clothing for Men Online in India"
            titleTableArea="Buy Men's Clothing at Best Price"
            titleTableFirstCol="Men's Clothing"
            titleTableSecondCol="Best Price"
          >
            <p className="text-xl font-bold text-gray-light lg:mt-[10px]">
              Reexplore Men&apos;s Clothing Collection Online at Euphoria
            </p>
            <p className="text-xl text-gray-light lg:mt-[5px]">
              Men&apos;s Clothing – Are you searching for the best website to buy
              Clothing for Men online in India? Well, your search for the
              coolest and most stylish mens clothing ends here. From trendy
              Casual Mens Wear Online shopping to premium quality cotton
              men&apos;s apparel,
              <span className="text-xl font-bold">Euphoria</span> has closet of
              Men Collection covered with the latest and best designs of
              Men&apos;s Clothing Online.
            </p>
            <p className="text-xl text-gray-light lg:mt-[3px]">
              Our collection of clothes for men will make you the trendsetter
              with an iconic resemblance of choice in Mens Wear.
            </p>
            <p className="text-xl font-bold text-gray-light lg:mt-[2px]">
              One-Stop Destination to Shop Every Clothing for Men: Euphoria
            </p>
            <p className="text-xl text-gray-light lg:mt-[5px]">
              Today, Clothing for Men is gaining more popularity above all. This
              is because gone are the days when men were used to carrying
              uncomfortable fashion. Today, a gentleman looks sharper when he is in
              Casual Mens Wear which is a comfortable outfit. Concerning this,
              <span className="text-xl font-bold">Euphoria</span> has a big fat
              range of Stylish Men&apos;s Clothing that would make him the winner
              wherever he goes.
            </p>
            <p className="text-xl text-gray-light">
              Our collection of clothes for men will make you the trendsetter
              with an iconic resemblance of choice in Mens Wear. It is quite
              evident to say that there are very few Mens Clothing online stores
              where you can buy Western Wear for Men comprising the premium
              material and elegant design that you are always seeking for.
            </p>
            <p className="text-xl font-bold text-gray-light">See More</p>
          </InfoTableDownSection>
        )}

      </section>
    </main>
  );
}
