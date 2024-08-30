import * as Dialog from '@radix-ui/react-dialog';

import { useContext, useState } from "react";

import ButtonAddToCart from "./ButtonAddToCart";
import { IShoppingCartItems } from "@/utils/types/IShoppingCartItems";
import Image from "next/image";
import { ShoppingCartContext } from "@/app/context/ShoppingCartContext";
import Swal from "sweetalert2";
import { WishlistContext } from "@/app/context/WishlistContext";
import { X } from "@phosphor-icons/react";
import { XIcon } from "@/svgs/x-icon";
import { currencyFormatter } from "@/utils/functions/currencyFormatter";
import { toast } from "sonner";
import { useItemsStorage } from "@/hooks/useItemsStorage";
import { useWishStorage } from "@/hooks/useWishStorage";
import { v4 as uuidv4 } from "uuid";

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
    const [itemFormatted, setItemFormatted] = useState<IShoppingCartItems>({
        id,
        title,
        imageSrc: src,
        color: colors[0]?.name || "",
        quantity,
        price,
        size: sizes[0] || "",

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

    function handleAddToCart() {
        Swal.fire({
            title: "Confirm your chooses?",
            showCancelButton: true,
            confirmButtonText: "Add to cart",
            icon: "info",
            cancelButtonColor: "#D33",
            confirmButtonColor: "#008000",
        }).then((result) => {
            if (result.isConfirmed) {
                toast.success("Added to cart");
                setItems([...items, itemFormatted]);
                setItemsOnStorage([...items, itemFormatted]);
            }
        });
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
                </div>
                <Dialog.Root>
                    <Dialog.Trigger>
                        <ButtonAddToCart style={{ width: "143px", height: "50px" }} withIcon={false} />
                    </Dialog.Trigger>
                    <Dialog.Portal>
                        <Dialog.Overlay className="bg-overlay-modal fixed inset-0 z-40" />
                        <Dialog.Content className="flex flex-col bg-white justify-center z-50 items-center py-4  fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] min-w-[400px] rounded-md">
                            <Dialog.Close className="absolute top-4 right-4 rounded-md  p-2 bg-red-500 hover:bg-red-400">
                                <X color="#FFFFFF" />
                            </Dialog.Close>
                            <Dialog.Title className="font-medium text-xl leading-6 font-coreSans">Choose your options</Dialog.Title>
                            <div className="flex flex-col mt-8 justify-center items-center gap-4 w-full">
                                <div className="flex flex-col items-center gap-4">
                                    <label htmlFor="color" className="text-lg  font-bold">
                                        Color
                                    </label>
                                    <select name="colors" className="p-2 bg-slate-100 rounded-md border font-thin"
                                        onChange={(event) => { setItemFormatted({ ...itemFormatted, color: event.target.value }) }}
                                        value={itemFormatted.color}
                                    >
                                        {colors.map((color) => (
                                            <option key={uuidv4()} value={color.name}>{color.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="flex flex-col items-center gap-4">
                                    <label htmlFor="size" className="text-lg  font-bold">
                                        Size
                                    </label>
                                    <select name="sizes" className="p-2 bg-slate-100 rounded-md border"
                                        onChange={(event) => { setItemFormatted({ ...itemFormatted, size: event.target.value }) }}
                                        value={itemFormatted.size}
                                    >
                                        {sizes.map((size) => (
                                            <option key={uuidv4()} value={size}>{size}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="flex flex-col items-center gap-4">
                                    <label htmlFor="quantity" className="text-lg  font-bold">
                                        Quantity
                                    </label>
                                    <input type="number"
                                        value={itemFormatted.quantity} name="quantity"
                                        onChange={(event) => { setItemFormatted({ ...itemFormatted, quantity: Number(event.target.value) }) }}
                                        className="p-2 bg-slate-100 rounded-md border text-center max-w-[150px] w-24"
                                    />
                                </div>
                            </div>
                            <Dialog.Close>
                                <button onClick={handleAddToCart} className="bg-green-500 p-4 text-white font-bold mt-4 rounded-md ">
                                    Confirm
                                </button>
                            </Dialog.Close>
                        </Dialog.Content>
                    </Dialog.Portal >
                </Dialog.Root>
            </div>
        </>
    );
}
