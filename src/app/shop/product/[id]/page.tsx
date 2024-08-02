import { IProduct } from "@/utils/types/IProducts";
import MainProductSection from "@/components/MainProductSection";
import { NotFoundData } from "@/svgs/not-found-data";
import { getProduct } from "@/services/getProduct";
import { getProducts } from "@/services/getProducts";

export interface ProductData {
  data: IProduct;
}
export interface ProductDataArr {
  data: IProduct[];
}
export default async function Page({ params }: { params: { id: string } }) {
  const product: ProductData = await getProduct(params.id);
  const products: ProductDataArr = await getProducts();
  return (
    <main className="w-full h-full">
      {product?.data?.id ?
        <MainProductSection product={{ data: product.data }} products={products} /> : (
          <div className="flex flex-col items-center justify-center w-full">
            <p className="font-coreSans">Error searching for product information</p>
            <div className="w-[full] md:w-[500px] overflow-hidden">
              <NotFoundData />
            </div>
          </div>
        )}
    </main>
  );
}
