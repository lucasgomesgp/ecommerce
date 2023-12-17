import { Card } from "@/components/Card";
import { Filters } from "@/components/Filters";
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
          <Filters />
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
