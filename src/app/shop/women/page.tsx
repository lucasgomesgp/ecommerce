import { Card } from "@/components/Card";
import { CriteriaArea } from "@/components/CriteriaArea";
import { Filters } from "@/components/Filters";
import { IProduct } from "@/utils/types/IProducts";
import Image from "next/image";
import { InfoTableDownSection } from "@/components/InfoTableDownSection";
import { getProductByCategory } from "@/services/getProductByCategory";
import { searchInput } from "@/utils/functions/searchInput";
import { sortArray } from "@/utils/functions/sortArray";
import { ProductsNotFound } from "@/components/ProductsNotFound";

interface ResponseData {
  data: IProduct[];
}

export default async function Women({
  searchParams,
}: {
  searchParams: { query?: string; page: string };
}) {
  const { data }: ResponseData = await getProductByCategory({
    category: "women",
  });
  const dataIsAvailable = data !== null;

  const dataByPrice = dataIsAvailable ? sortArray(data) : [];
  const queryWomenInput = searchParams?.query || "";
  const dataFiltered = dataIsAvailable ? searchInput(data, "women", queryWomenInput) : [];
  return (
    <main className="flex flex-col w-full">
      <section className="flex flex-col">
        {dataFiltered.length >= 1 && (
          <section className="flex flex-wrap lg:flex-nowrap gap-[50px] justify-center">
            <Filters maxRangeValue={dataByPrice[0].attributes.price} />
            <div className="flex flex-col">
              <CriteriaArea title="Women’s Clothing" />
              <div className="flex flex-wrap items-center justify-center xl:grid xl:grid-cols-3 gap-6">
                {dataFiltered?.map(({ id, attributes }) => (
                  <Card
                    key={id}
                    id={id}
                    title={attributes.title}
                    subTitle={attributes.subTitle}
                    image={attributes.image?.data.attributes.url || ""}
                    price={attributes.price}
                    colors={attributes.colors}
                    sizes={attributes.sizes}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
        {dataFiltered.length === 0 && (
          <ProductsNotFound category="Women's" />
        )}
        <InfoTableDownSection
          data={dataByPrice}
          titleFirstArea="Clothing for Woman Online in India"
          titleTableArea="Buy Women's Clothing at Best Price"
          titleTableFirstCol="Women's Clothing"
          titleTableSecondCol="Best Price"
        >
          <p className="text-xl font-bold text-gray-light lg:mt-[10px]">
            Reexplore Women&aposs Clothing Collection Online at Euphoria
          </p>
          <p className="text-xl text-gray-light lg:mt-[5px]">
            Women&aposs Clothing – Are you searching for the best website to buy
            Clothing for Women online in India? Well, your search for the
            coolest and most stylish womens clothing ends here. From trendy
            Casual Womens Wear Online shopping to premium quality cotton
            women&aposs apparel,
            <span className="text-xl font-bold">Euphoria</span> has closet of
            Women Collection covered with the latest and best designs of
            Women&aposs Clothing Online.
          </p>
          <p className="text-xl text-gray-light lg:mt-[3px]">
            Our collection of clothes for women will make you the trendsetter
            with an iconic resemblance of choice in Womens Wear.
          </p>
          <p className="text-xl font-bold text-gray-light lg:mt-[2px]">
            One-Stop Destination to Shop Every Clothing for Women: Euphoria
          </p>
          <p className="text-xl text-gray-light lg:mt-[5px]">
            Today, Clothing for Women is gaining more popularity above all. This
            is because gone are the days when women were used to carrying
            uncomfortable fashion. Today, a lady looks prettier when she is in
            Casual Womens Wear which is a comfortable outfit. Concerning this,
            <span className="text-xl font-bold">Euphoria</span> has a big fat
            range of Stylish Women&aposs Clothing that would make her the winner
            wherever she goes.
          </p>
          <p className="text-xl text-gray-light">
            Our collection of clothes for women will make you the trendsetter
            with an iconic resemblance of choice in Womens Wear. It is quite
            evident to say that there are very few Womens Clothing online stores
            where you can buy Western Wear for Women comprising the premium
            material and elegant design that you are always seeking for.
            Basically,
          </p>
          <p className="text-xl font-bold text-gray-light">See More</p>
        </InfoTableDownSection>
      </section>
    </main>
  );
}
