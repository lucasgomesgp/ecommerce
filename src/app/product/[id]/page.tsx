import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import ImageProduct from "@/components/ImageProduct";
import { getProducts } from "@/services/getProducts";
import { IProduct } from "@/utils/types/IProducts";
interface ProductData {
  data: IProduct;
}
export default async function Page({ params }: { params: { id: number } }) {
  const { data }: ProductData = await getProducts(`/${params.id}`);
  const { image } = data.attributes;

  return (
    <main className="w-full h-full">
      <Header />
      <section className="flex flex-col">
        <section className="flex">
          <ImageProduct
            title={data.attributes.title}
            src={image.data.attributes.url}
          />
        </section>
      </section>
      <Footer />
    </main>
  );
}
