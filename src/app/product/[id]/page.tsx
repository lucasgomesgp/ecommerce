import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import MainProductSection from "@/components/MainProductSection";
import { getProduct } from "@/services/getProduct";
import { getProducts } from "@/services/getProducts";
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
      {params.id && <MainProductSection product={{data: product.data}} products={products} />}
      <Footer />
    </main>
  );
}
