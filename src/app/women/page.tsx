import { Card } from "@/components/Card";
import { FilterType } from "@/components/FilterType";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getWomansProduct } from "@/services/getWomansProduct";
import { IProduct } from "@/utils/types/IProducts";
interface ResponseData {
  data: IProduct[];
}

export default async function Woman() {
  const { data }: ResponseData = await getWomansProduct("");
  return (
    <main className="flex flex-col w-full ">
      <Header />
      <section className="flex flex-col justify-center items-center w-full">
        <section className="flex flex-wrap lg:flex-nowrap gap-[50px] justify-center items-center ">
          <details
            className="flex flex-col border border-gray-border w-[295px] self-start relative border-t-transparent"
            id="filter"
            open
          >
            <summary className="flex justify-between items-center px-7 py-5">
              <h3 className="text-[22px] font-bold text-gray-border">Filter</h3>
            </summary>
            <div className="border border-t-gray-border ">
              <p>Tops</p>
            </div>
            <FilterType title="Price">
              <div className="flex items-center justify-center flex-col border border-t-gray-border py-10">
                <input type="range" id="range" className="overflow-visible" />
                <div className="flex items-center justify-center mt-5">
                  <input
                    className="w-24 h-8 border rounded-lg border-gray-border"
                    type="number"
                    name="minValue"
                  />
                  <input
                    className="w-24 h-8 border rounded-lg border-gray-border"
                    type="number"
                    name="maxValue"
                  />
                </div>
              </div>
            </FilterType>
          </details>
          <div className="flex flex-col">
            <div className="flex justify-between my-[50px] text-[22px]">
              <h3 className="font-bold text-[22px]">Women’s Clothing</h3>
              <div className="flex gap-6 font-semibold">
                <p>New</p>
                <p>Recommended</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center xl:grid xl:grid-cols-3 gap-6">
              {data.length &&
                data.map(
                  ({ id, attributes: { title, subTitle, image, price } }) => (
                    <Card
                      key={id}
                      id={id}
                      title={title}
                      subTitle={subTitle}
                      image={`${process.env.STRAPI_IMAGE_URL}${image.data.attributes.url}`}
                      price={price}
                    />
                  )
                )}
            </div>
          </div>
        </section>
        <section>Clothing for Woman Online in India</section>
        <section>Buy Woman's Clothing at Best Price</section>
      </section>
      <Footer />
    </main>
  );
}
