import { Card } from "@/components/Card";
import { DeliveryDetails } from "@/components/DeliveryDetails";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import ImageProduct from "@/components/ImageProduct";
import { SlidesImageProduct } from "@/components/SlidesImageProduct";
import { TitleWithBar } from "@/components/TitleWithBar";
import { getProducts } from "@/services/getProducts";
import { ArrowMenu } from "@/svgs/arrow-menu";
import { ArrowSizes } from "@/svgs/arrow-sizes";
import { CartProduct } from "@/svgs/cart-product";
import { CreditCard } from "@/svgs/credit-card";
import { Return } from "@/svgs/return";
import { Truck } from "@/svgs/truck";
import { TShirt } from "@/svgs/tshirt";
import { sizesProduct } from "@/utils/constants/sizesProduct";
import { currencyFormatter } from "@/utils/functions/currencyFormatter";
import { IProduct } from "@/utils/types/IProducts";
import Image from "next/image";

interface ProductData {
  data: IProduct;
}
interface ProductDataArr {
  data: IProduct[];
}
export default async function Page({ params }: { params: { id: number } }) {
  const { data }: ProductData = await getProducts(`/${params.id}?populate=*`);
  const datas: ProductDataArr = await getProducts(
    `?filters[category][$contains]=${data.attributes.category[0]}&populate=*`
  );

  const sizesFilter = data.attributes.sizes.filter((sizeItem) =>
    sizesProduct.includes(sizeItem)
  );

  return (
    <main className="w-full h-full">
      <Header />
      <section className="flex flex-col pb-4">
        <section className="flex flex-wrap-reverse justify-center lg:gap-[74px]">
          {data.attributes.slides === undefined ||
          data.attributes.slides.data === null ? (
            <ImageProduct
              src={data.attributes.image.data.attributes.url}
              title={data.attributes.title}
            />
          ) : (
            <SlidesImageProduct
              title={data.attributes.title}
              content={data.attributes.slides?.data}
            />
          )}
          <section className="flex flex-col items-start gap-[35px] lg:mt-[30px]">
            <div className="flex items-center justify-center text-gray-light font-causten text-lg">
              Shop
              {data.attributes.category.map((category) => (
                <p
                  className="flex gap-[10px] items-center justify-center"
                  key={category}
                >
                  <ArrowMenu classNames="ml-[20px]" />
                  <span className="">{category}</span>
                </p>
              ))}
            </div>
            <h1 className="text-gray-text-menu font-semibold font-coreSans text-[34px] max-w-[393px]">
              {data.attributes.title}
            </h1>
            <div className="flex flex-col gap-[25px]">
              <div className="flex gap-5 ">
                <p className="text-black-gray  font-semibold text-lg">
                  Select Size
                </p>
                <p className="flex text-gray-light text-lg font-medium items-center justify-center gap-[15px]">
                  Size Guide
                  <ArrowSizes />
                </p>
              </div>
              <div className="flex gap-5">
                {sizesProduct.map((size) => (
                  <button
                    className="border border-gray-border w-[38px] h-[38px] text-gray-text-menu disabled:cursor-not-allowed disabled:opacity-50 rounded-xl"
                    key={size}
                    disabled={sizesFilter.includes(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-[25px]">
              <p className="font-semibold text-lg">Colours Available</p>
              <div className="flex gap-5">
                {data.attributes.colors.map((color) => (
                  <button
                    key={color}
                    className="rounded-full w-[30px] h-[30px]"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
            <div className="flex gap-[25px] mt-9">
              <button className="hover:opacity-80 transition-opacity rounded-lg bg-purple-principal text-lg text-white flex gap-3 items-center justify-center w-[200px] h-[46px] max-w-[200px] max-h-[46px]">
                <CartProduct />
                Add to cart
              </button>
              <button className="hover:opacity-80 transition-opacity rounded-lg border border-gray-text-menu text-gray-text-menu text-lg bg-transparent w-[138px] max-w-[138px] h-[46px] max-h-[46px]">
                {currencyFormatter(data.attributes.price)}
              </button>
            </div>
            <div className="bg-gray-border w-full h-[1px]" />
            <div className="grid gap-[20px] grid-cols-2 grid-rows-2">
              <DeliveryDetails title="Secure payment">
                <CreditCard />
              </DeliveryDetails>
              <DeliveryDetails title="Size & Fit">
                <TShirt />
              </DeliveryDetails>
              <DeliveryDetails title="Free shipping">
                <Truck />
              </DeliveryDetails>
              <DeliveryDetails title="Free Shipping & Returns">
                <Return />
              </DeliveryDetails>
            </div>
          </section>
        </section>
        <section className="flex flex-col lg:px-[100px]  mt-[100px] ">
          <TitleWithBar title="Product Description" />
          <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 gap-32 justify-center mt-[30px]">
            <div className="flex flex-col">
              <p className="text-gray-text-menu text-lg font-medium">
                Description
              </p>
              <p className="text-gray-light mt-[30px]">
                {data.attributes.description}
              </p>
              <table className="bg-white-light rounded-xl mt-[30px] max-w-[612px] p-[50px]">
                <tbody>
                  <tr className="border border-transparent border-b-gray-border-opacity px">
                    <td className="border border-t-transparent border-l-transparent border-r-gray-border-opacity">
                      <p>Fabric</p>
                      <p>{data.attributes.fabric}</p>
                    </td>
                    <td className="border border-t-transparent border-l-transparent border-r-gray-border-opacity">
                      <p>Pattern</p>
                      <p>{data.attributes.pattern}</p>
                    </td>
                    <td className="">
                      <p>Fit</p>
                      <p>{data.attributes.fit}</p>
                    </td>
                  </tr>
                  <tr className="">
                    <td className="border border-b-transparent border-l-transparent border-r-gray-border-opacity">
                      <p className="">Neck</p>
                      <p>{data.attributes.neck}</p>
                    </td>
                    <td className=" border border-b-transparent border-l-transparent border-r-gray-border-opacity">
                      <p>Sleeve</p>
                      <p>{data.attributes.sleeve}</p>
                    </td>
                    <td className="">
                      <p>Style</p>
                      <p>{data.attributes.style}</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {data.attributes.video.data !== null ? (
              <video controls width="532" height="328">
                <source
                  src={`${process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL}${data.attributes.video.data.attributes.url}`}
                  type={data.attributes.video.data.attributes.mime}
                />
              </video>
            ):(
              <p>No video</p>
            )}
          </div>
        </section>
        <section className="flex flex-col pb-[100px] lg:px-[100px] mt-[100px]">
          <TitleWithBar title="Similar Products" />
          <div className="lg:grid lg:grid-cols-4  lg:gap-[37px] mt-[30px]">
            {datas.data.map(({ id, attributes }) => (
              <Card
                key={id}
                id={id}
                image={`${process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL}${attributes.image.data.attributes.url}`}
                price={attributes.price}
                title={attributes.title}
                subTitle={attributes.subTitle}
              />
            ))}
          </div>
        </section>
      </section>
      <Footer />
    </main>
  );
}
