import { currencyFormatter } from "@/utils/functions/currencyFormatter";
import Image from "next/image";
import ButtonAddToCart from "./ButtonAddToCart";
import { XIcon } from "@/svgs/x-icon";
import { useWishStorage } from "@/hooks/useWishStorage";
import { useContext } from "react";
import { WishlistContext } from "@/app/context/WishlistContext";
import { toast } from "sonner";

interface Props {
    id: number;
    title: string,
    src: string,
    quantity: number;
    price: number;
    colors: Array<{ name: string, value: string }>;
    sizes: Array<string>;
}

export function WishItem({ id, title, src, colors, quantity, price, sizes }: Props) {
    const { wishItems, setWishItems } = useContext(WishlistContext);
    const { setItemsOnStorage } = useWishStorage();

    function handleDeleteItem(itemId: number) {
        const filteredData = wishItems.filter(({ id }) => id !== itemId);
        setWishItems(filteredData);
        setItemsOnStorage(filteredData);
        toast.success("Item deleted");
    }

    return (
        <div className="flex max-md:flex-wrap items-center  jusity-between gap-9 max-w-[900px]">
            <button className="hover:opacity-50 transition-all" onClick={() => { handleDeleteItem(id) }}>
                <XIcon />
            </button>
            <Image src={src} alt={title} width={110} height={110} className="w-28 h-28" />
            <div className="flex items-center md:items-start flex-col gap-3">
                <p className="text-gray-text-menu font-bold text-[22px]">{title}</p>
                <p className="text-gray-text-menu font-bold text-[22px]">Color: <span className="text-gray-light font-medium">{colors[0]?.name || "No choosed"}</span></p>
                <p className="text-gray-text-menu font-bold text-[22px]">Quantity: <span className="text-gray-light font-medium">{quantity}</span></p>
            </div>
            <div className="flex items-center gap-[50px]">
                <p className="text-gray-light font-bold text-[22px]">{currencyFormatter(price)}</p>
                <ButtonAddToCart style={{ width: "143px", height: "50px" }} withIcon={false} />
            </div>
        </div>
    );
}
