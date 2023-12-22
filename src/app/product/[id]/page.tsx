import { DeliveryDetails } from "@/components/DeliveryDetails";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import ImageProduct from "@/components/ImageProduct";
import { SlidesImageProduct } from "@/components/SlidesImageProduct";
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

interface ProductData {
  data: IProduct;
}
export default async function Page({ params }: { params: { id: number } }) {
  const { data }: ProductData = await getProducts(`/${params.id}`);

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
          <div className="flex flex-col items-start gap-[35px] lg:mt-[30px]">
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
          </div>
        </section>
      </section>
      <Footer />
    </main>
  );
}
