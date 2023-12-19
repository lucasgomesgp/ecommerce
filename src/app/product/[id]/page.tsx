import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import ImageProduct from "@/components/ImageProduct";
import { getProducts } from "@/services/getProducts";
import { ArrowMenu } from "@/svgs/arrow-menu";
import { ArrowSizes } from "@/svgs/arrow-sizes";
import { sizesProduct } from "@/utils/constants/sizesProduct";
import { IProduct } from "@/utils/types/IProducts";

interface ProductData {
  data: IProduct;
}
export default async function Page({ params }: { params: { id: number } }) {
  const { data }: ProductData = await getProducts(`/${params.id}`);
  const { image } = data.attributes;

  const sizesFilter = data.attributes.sizes.filter((sizeItem) =>
    sizesProduct.includes(sizeItem)
  );
  console.log(data.attributes);
  return (
    <main className="w-full h-full">
      <Header />
      <section className="flex flex-col">
        <section className="flex flex-wrap-reverse justify-center lg:gap-[74px]">
          <ImageProduct
            title={data.attributes.title}
            src={image.data.attributes.url}
          />
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
          </div>
        </section>
      </section>
      <Footer />
    </main>
  );
}
