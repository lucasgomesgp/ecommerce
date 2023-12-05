import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getProducts } from "@/services/getProducts";

interface ResponseData {
  data: Array<IProduct>;
}

export default async function Home() {
  const { data }: ResponseData = await getProducts();
  return (
    <main className="w-full min-h-full">
      <Header isLoginPage={false} />
      {data.map(({ id, attributes }) => (
        <p key={id}>{attributes.title}</p>
      ))}
      <Footer />
    </main>
  );
}
