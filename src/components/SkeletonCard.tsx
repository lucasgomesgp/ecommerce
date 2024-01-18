import Image from "next/image";

export default function SkeletonCard({ quantity }: { quantity: number }) {
  return (
    <>
      {[...Array(quantity)].map((_, index) => (
        <div
          className="w-[282px] relative hover:opacity-80 transition-opacity max-h-[441px]"
          key={index}
        >
          <div className="w-[282px] h-[441px] mb-2 bg-gray-card rounded-md"/>
          <div className="h-4 w-full bg-gray-card rounded-3xl mb-2" />
          <div className="flex justify-between items-center gap-4">
            <div className="h-4 w-full bg-gray-card rounded-3xl" />
            <div className="h-4 w-full bg-gray-card rounded-3xl" />
          </div>
        </div>
      ))}
    </>
  );
}
