import { currencyFormatter } from "@/utils/functions/currencyFormatter";
import Image from "next/image";
import ButtonAddToCart from "./ButtonAddToCart";
import { useWishStorage } from "@/hooks/useWishStorage";
import { useContext, useState } from "react";
import { WishlistContext } from "@/app/context/WishlistContext";
import { toast } from "sonner";
import { ShoppingCartContext } from "@/app/context/ShoppingCartContext";
import { useItemsStorage } from "@/hooks/useItemsStorage";
import { ModalWishlist } from "./ModalWishlist";
import { IShoppingCartItems } from "@/utils/types/IShoppingCartItems";
import {XIconWhite} from "@/svgs/x-icon-white";
import { v4 as uuidv4 } from "uuid";
import { XIcon } from "@/svgs/x-icon";

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
    const [modalOptionsIsOpen, setModalOptionsIsOpen] = useState(false);
    const [itemFormatted, setItemFormatted] = useState<IShoppingCartItems>({
        id,
        title,
        imageSrc: src,
        color: "",
        quantity,
        price,
        size: "",

    } as IShoppingCartItems);

    const { wishItems, setWishItems } = useContext(WishlistContext);
    const { items, setItems } = useContext(ShoppingCartContext);

    const { setWishItemsOnStorage } = useWishStorage();
    const { setItemsOnStorage } = useItemsStorage();

    function handleDeleteItem(itemId: number) {
        const filteredData = wishItems.filter(({ id }) => id !== itemId);
        setWishItems(filteredData);
        setWishItemsOnStorage(filteredData);
        toast.success("Item deleted");
    }
    function handleOpenModal() {
        setModalOptionsIsOpen(!modalOptionsIsOpen);
    }

    function handleAddToCart() {
        setItems([...items, itemFormatted]);
        setItemsOnStorage([...items, itemFormatted]);
        setModalOptionsIsOpen(false);
        toast.success("Added to cart");
    }
    return (
        <>
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
                    <ButtonAddToCart style={{ width: "143px", height: "50px" }} withIcon={false} onClick={handleOpenModal} />
                </div>
            </div>
            <ModalWishlist modalStatus={modalOptionsIsOpen} setModalStatus={setModalOptionsIsOpen}>
                <div className="flex flex-col justify-center items-center py-4 w-full">
                    <button className="self-end mr-2 bg-red-700 rounded-full p-2" onClick={() => { setModalOptionsIsOpen(false) }}>
                        <XIconWhite />
                    </button>
                    <p className="font-medium text-2xl">Choose your options:</p>
                    <div className="flex flex-col mt-8 justify-center items-center gap-4 w-full">
                        <div className="flex flex-col items-center gap-4">
                            <label htmlFor="color" className="text-lg  font-bold">
                                Color:
                            </label>
                            <select name="colors" className="p-2 bg-gray-border rounded-md border"
                                onChange={(event) => { setItemFormatted({ ...itemFormatted, color: event.target.value }) }}
                            >
                                {colors.map((color) => (
                                    <option key={uuidv4()} value={color.name}>{color.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <label htmlFor="size" className="text-lg  font-bold">
                                Size:
                            </label>
                            <select name="sizes" className="p-2 bg-gray-border rounded-md border"
                                onChange={(event) => { setItemFormatted({ ...itemFormatted, size: event.target.value }) }}
                            >
                                {sizes.map((size) => (
                                    <option key={uuidv4()} value={size}>{size}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <label htmlFor="quantity" className="text-lg  font-bold">
                                Quantity:
                            </label>
                            <input type="number"
                                value={itemFormatted.quantity} name="quantity"
                                onChange={(event) => { setItemFormatted({ ...itemFormatted, quantity: Number(event.target.value) }) }}
                                className="p-2 bg-gray-border rounded-md border text-center max-w-[150px] w-24"
                            />
                        </div>
                    </div>
                    <button onClick={handleAddToCart} className="bg-green-500 p-4 text-white font-bold mt-4 rounded-md ">
                        Confirm
                    </button>
                </div>
            </ModalWishlist>
        </>
    );
}
