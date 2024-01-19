import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import MainProductSection from "@/components/MainProductSection";
import { getProduct } from "@/services/getProduct";
import { getProducts } from "@/services/getProducts";
import { NotFoundData } from "@/svgs/not-found-data";
import { IProduct } from "@/utils/types/IProducts";

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
      <Header />
      {product?.data?.id ?
        <MainProductSection product={{ data: product.data }} products={products} /> : (
          <div className="flex flex-col items-center justify-center w-full">
            <p className="font-coreSans">Erro searching for product information</p>
            <div className="w-[full] md:w-[500px] overflow-hidden">
              <NotFoundData />
            </div>
          </div>
        )}
      <Footer />
    </main>
  );
}
