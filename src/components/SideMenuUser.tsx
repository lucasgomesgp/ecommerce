"use client"
import { signOut, useSession } from "next-auth/react"
import { ButtonActionSideMenu } from "./ButtonActionSideMenu";
import { Orders } from "@/svgs/orders";
import { InfoUser } from "@/svgs/info-user";
import { SignOut } from "@/svgs/sign-out";
import { Wishlist } from "@/svgs/wishlist";

export function SideMenuUser() {
    const { data: session } = useSession();
    const isLoggedIn = session?.user?.email;
   
    return (
        <section className="flex flex-col gap-10">
            <div className="flex flex-col items-start justify-center">
                <h3 className="font-medium font-coreSans text-[28px] pl-[15px] text-gray-text-menu relative before:absolute before:w-[6px] before:h-7 before:bg-purple-principal before:rounded-[10px] before:top-0 before:bottom-0 before:left-0 before:m-auto">
                    Hello {session?.user?.name || ""}
                </h3>
                <p className="text-gray-light text-sm">Welcome to your Account</p>
            </div>
            <section className="flex flex-col">
                <ButtonActionSideMenu title="My Orders" destination="/orders">
                    <Orders />
                </ButtonActionSideMenu>
                <ButtonActionSideMenu title="Wishlist" destination="/wishlist">
                    <Wishlist />
                </ButtonActionSideMenu>
                <ButtonActionSideMenu title="My info" disabled={!isLoggedIn} destination="/info">
                    <InfoUser />
                </ButtonActionSideMenu>
                <ButtonActionSideMenu title="Sign out" disabled={!isLoggedIn}>
                    <SignOut />
                </ButtonActionSideMenu>
            </section>
        </section>
    );
}
