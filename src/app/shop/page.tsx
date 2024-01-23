"use client";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ShoppingCartContext } from "@/app/context/ShoppingCartContext";
import { ArrowMenu } from "@/svgs/arrow-menu";
import { CartEmpty } from "@/svgs/cart-empty";
import { TrashPurple } from "@/svgs/trash-purple";
import { currencyFormatter } from "@/utils/functions/currencyFormatter";
import { IShoppingCartItems } from "@/utils/types/IShoppingCartItems";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { ButtonBackToHome } from "@/components/ButtonBackToHome";
import { useItemsStorage } from "@/hooks/useItemsStorage";

export default function Shop() {
  const { itemsStorage, setItemsOnStorage } = useItemsStorage();
  const { items, setItems } = useContext(ShoppingCartContext);
  const { data: session } = useSession();
  const MySwal = withReactContent(Swal);

  function getTotalValue() {
    let accumulator = 0;
    itemsStorage?.map((current) => {
      accumulator += (current.price * current.quantity);
    });
    return accumulator;
  }
  let totalValue = getTotalValue();
  function handleChangeQuantity(type: "minus" | "plus", id: number, color: string, size: string) {
    const data = items?.map((item) => {
      if (item.id === id && item.color === color && item.size === size) {
        const quant = type === "minus" ? item.quantity - 1 : item.quantity + 1;
        console.log(quant);
        return { ...item, quantity: quant };
      }
      return { ...item };
    })
    setItemsOnStorage(data);
    setItems(data);
  }
  function handleDeleteItem(item: IShoppingCartItems) {
    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#57F287",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        const itemsFiltered = itemsStorage.filter((currentItem) =>
          currentItem.color !== item.color ||
          currentItem.size !== item.size
        );
        setItemsOnStorage(itemsFiltered);
        setItems(itemsFiltered);
      }
    });
  }
  return (
    <main className="flex flex-col">
      <Header />
      <section className="flex flex-col pl-[100px] my-[50px] font-medium text-lg">
        {items.length >= 1 && (
          <>
            <div className="flex items-center gap-4">
              <p className="text-gray-text-menu ">Home</p>
              <ArrowMenu />
              <p className="text-">Add To Cart</p>
            </div>
            <p className="text-gray-light text-sm">
              Please fill in the fields below and click place order to complete your
              purchase!
            </p>
          </>
        )}
        {!session?.user?.name && (
          <p className="text-sm font-normal text-gray-light">
            Already registered?
            <Link
              href={"/login"}
              className="ml-1 text-purple-principal font-semibold"
            >
              Please login here
            </Link>
          </p>
        )}
      </section>
      {itemsStorage?.length >= 1 ? (
        <table>
          <tbody>
            <tr className="w-full align-middle text-center bg-gray-text-menu h-[76px] text-uppercase font-semibold text-white text-lg uppercase">
              <th className="lg:pl-[70px] lg:text-left">Product Details</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>shipping</th>
              <th>subtotal</th>
              <th>action</th>
            </tr>
            {itemsStorage.map((item) => (
              <tr key={uuidv4()} className="text-center">
                <td className="flex px-[50px]">
                  <Image
                    src={item.imageSrc}
                    height={105}
                    width={120}
                    style={{ width: "105px", height: "120px" }}
                    alt={item.title}
                    className="rounded-xl"
                  />
                  <div className="flex flex-col">
                    <p className="text-gray-text-menu text-lg font-bold w-[200px] text-ellipsis">
                      {item.title}
                    </p>
                    <span className="text-sm text-gray-light">
                      Color: {item.color}
                    </span>
                    <span className="text-sm text-gray-light">
                      Size: {item.size}
                    </span>
                  </div>
                </td>
                <td className="font-bold text-lg">
                  {currencyFormatter(item.price)}
                </td>
                <td className="min-w-[100px]">
                  <div className="flex justify-center items-center gap-3 h-[36px] min-w-[100px] rounded-xl bg-white-light w-full  text-gray-text-menu font-medium">
                    <button
                      className="px-2 disabled:cursor-not-allowed disabled:opacity-70" disabled={item.quantity <= 1} onClick={() => { handleChangeQuantity("minus", item.id, item.color, item.size) }}>
                      -
                    </button>
                    <input
                      type="number"
                      name="quantity"
                      value={item.quantity}
                      readOnly
                      className="w-8 text-center outline-none bg-white-light"
                    />
                    <button className="px-2 disabled:cursor-not-allowed"
                      onClick={() => { handleChangeQuantity("plus", item.id, item.color, item.size) }}>
                      +
                    </button>
                  </div>
                </td>
                <td className="text-gray-border text-lg font-bold uppercase">
                  FREE
                </td>
                <td className="font-bold text-lg">
                  {currencyFormatter(item.price * item.quantity)}
                </td>
                <td>
                  <button onClick={() => { handleDeleteItem(item) }}>
                    <TrashPurple />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="flex flex-col gap-7 items-center justify-center mb-12">
          <div className="h-[350px] w-[450px]">
            <Image src="/assets/empty-cart.png" alt="Empty cart icon" width={450} height={330} className="w-full h-full" />
          </div>
          <h2 className="font-semibold font-coreSans mb-3 text-4xl">Your cart is empty and sad :(</h2>
          <p className="text-gray-light font-coreSans">Add something to make it happy!</p>
          <ButtonBackToHome title="Continue Shopping" path="/men" />
        </div>
      )}
      {items.length >= 1 && (
        <section className="flex flex-wrap pb-[50px] pt-7 w-full bg-white-light items-center justify-around">
          <section className="flex flex-col">
            <p className="mb-[10px] text-gray-text-menu font-semibold text-2xl">
              Discount Codes
            </p>
            <span className="mb-[41px] text-gray-light">
              Enter your coupon code if you have one
            </span>
            <div className="flex">
              <input
                type="text"
                name="coupon"
                className="h-[43px] border border-gray-border rounded-tl-xl rounded-bl-xl"
              />
              <button className="mb-[37px] bg-purple-principal rounded-tr-xl h-[43px] px-[31px] py-[12px] rounded-br-xl text-white font-semibold">
                Apply Coupon
              </button>
            </div>
            <button className="bg-transparent text-gray-text-menu border border-gray-border rounded-lg px-[20px] py-[12px] h-[43px] font-semibold">
              Continue Shopping
            </button>
          </section>
          <section className="flex justify-center flex-col gap-[15px] text-gray-text-menu text-[22px]">
            <div className="flex gap-14  justify-between">
              <p>Sub Total</p>
              <p>{currencyFormatter(totalValue)}</p>
            </div>
            <div className="flex gap-14  justify-between">
              <p>Shipping</p>
              <p>{currencyFormatter(0)}</p>
            </div>
            <div className="flex mt-[30px] gap-14  justify-between font-bold">
              <p>Grand Total</p>
              <p>{currencyFormatter(totalValue)}</p>
            </div>
            <div className="w-full h-[1px] bg-gray-border my-[30px]" />
            <button className="px-[20px] py-3 text-white  font-semibold text-lg bg-purple-principal rounded-lg">
              Proceed To Checkout
            </button>
          </section>
        </section>
      )}
      <Footer />
    </main>
  );
}
