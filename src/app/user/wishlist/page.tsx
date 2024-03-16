"use client"
import { ButtonBackToHome } from "@/components/ButtonBackToHome";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MainSideBarContent } from "@/components/MainSideBarContent";
import PathPage from "@/components/PathPage";
import { WishItem } from "@/components/WishItem";
import { useContext } from "react";
import { WishlistContext } from "../../context/WishlistContext";
import Image from "next/image";
import {v4 as uuidv4} from "uuid";

export default function Wishlist() {
    const { wishItems } = useContext(WishlistContext);
    return (
        <main className="flex flex-col overflow-hidden" id="page">
            <Header />
            <PathPage title="Wishlist" />
            <MainSideBarContent>
                {wishItems?.length === 0 ? (
                    <div className="flex flex-col items-center max-w-[693px] w-[693px] py-[78px] px-[117px] border" style={{
                        boxShadow: " 2px 2px 4px 0px rgba(0, 0, 0, 0.05), -2px -2px 4px 0px rgba(0, 0, 0, 0.05)",
                    }}>
                        <Image src="/assets/wishlist-empty.png" alt="Heart green icon" width={200} height={200} className="max-h-[170px] max-w-[170px]" />
                        <h3 className="mt-[60px] text-gray-text-menu text-[34px] font-medium font-coreSans">Your wishlist is empty.</h3>
                        <p className="mt-[10px] max-w-[455px] mb-[42px] text-gray-light text-center">You don’t have any products in the wishlist yet. You will find a lot
                            of interesting products on our Shop page.</p>
                        <ButtonBackToHome title="Continue Shopping" path="/" />
                    </div>
                ) : (
                    <div className="flex flex-col self-start">
                        <h4 className="font-coreSans font-medium text-[28px]">Wishlist</h4>
                        <div className="flex flex-col gap-[30px]">
                            {wishItems?.map(({ id, image, price, quantity, title, colors, sizes }, index) => (
                                <>
                                    <WishItem key={uuidv4()} id={id} title={title} colors={colors || []} src={image} price={price} quantity={quantity} sizes={sizes || []} />
                                    {wishItems.length !== index && (<div className="bg-white-bar w-full h-[1px] mt-[30px]" key={uuidv4()} />)}
                                </>
                            ))}
                        </div>
                    </div>
                )}
            </MainSideBarContent>
            <Footer />
        </main>
    )
}
