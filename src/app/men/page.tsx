import { Card } from "@/components/Card";
import { CriteriaArea } from "@/components/CriteriaArea";
import { Filters } from "@/components/Filters";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { InfoTableDownSection } from "@/components/InfoTableDownSection";
import { getProductByCategory } from "@/services/getProductByCategory";
import { sortArray } from "@/utils/functions/sortArray";

export default async function Men() {
  const { data } = await getProductByCategory({ category: "men"});
  const mensData = data.length >= 1 ? data.filter(({ attributes }) => {
    return attributes.category.includes("men");
  }) : [];
  const dataByPrice = sortArray(mensData);
  return (
    <main className="flex flex-col w-full">
      <Header />
      <section className="flex flex-col">
        <section className="flex flex-wrap lg:flex-nowrap gap-[50px] justify-center">
          <Filters maxRangeValue={dataByPrice[0].attributes.price}/>
          <div className="flex flex-col">
            <CriteriaArea title="Men’s Clothing" />
            <div className="flex flex-wrap items-center justify-center xl:grid xl:grid-cols-3 gap-6">
              {mensData?.length >= 1 && (
                mensData?.map(
                  ({ id, attributes: { title, subTitle, price, image, colors, sizes } }) => (
                    <Card
                      key={id}
                      id={id}
                      title={title}
                      subTitle={subTitle}
                      price={price}
                      image={image?.data.attributes.url || ""}
                      colors={colors}
                      sizes={sizes}
                    />
                  )
                )
              )}
            </div>
          </div>
        </section>
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
      <Footer />
    </main>
  );
}
