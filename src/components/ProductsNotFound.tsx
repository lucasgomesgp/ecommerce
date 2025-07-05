import Image from "next/image";

export function ProductsNotFound({ category }: { category?: string }) {
    return (
        <div className="flex mt-4 gap-4 flex-col justify-center items-center w-full">
            <p className="font-causten text-lg">
                No products in stock for {category} category
            </p>
            <Image
                src={"/assets/empty-data.svg"}
                alt="Empty icon"
                width={700}
                height={1200}
                className="w-full h-full max-w-[600px]"
            />
        </div>
    );
}