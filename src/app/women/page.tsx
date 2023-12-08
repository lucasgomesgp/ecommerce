import { Card } from "@/components/Card";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getWomansProduct } from "@/services/getWomansProduct";

interface ResponseData {
  data: IProduct[];
}

export default async function Women() {
  const { data }: ResponseData = await getWomansProduct("");
  return (
    <main className="flex flex-col w-full ">
      <Header />
      <section className="flex flex-col justify-center items-center w-full">
        <section className="flex justify-center items-center">
          <div className="flex flex-col">Filter AREA</div>
          <div className="flex flex-col">
            <div className="flex justify-between">
              <h3>Women’s Clothing</h3>
              <div className="flex gap-6">
                <p>New</p>
                <p>Recommended</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              {data.map(
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
        <section>Clothing for Women Online in India</section>
        <section>Buy Women's Clothing at Best Price</section>
      </section>
      <Footer />
    </main>
  );
}
