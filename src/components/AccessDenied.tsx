"use client"

import BlockedAnimation from "./BlockedAnimation";
import Link from "next/link";

interface Props {
    isLogged: boolean;
}
export function AccessDenied({ isLogged }: Props) {
    return (
        <div className="flex flex-col items-center justify-center gap-1 py-4">
            <h2 className="font-inter font-bold text-xl">Access Restricted</h2>
            <BlockedAnimation />
            {isLogged ?
                (<p className="font-inter max-w-[60%] w-full">
                    Alternatively, this order may not exist. Please verify the order ID or contact support if you believe this is an error.
                    Thank you!
                </p>) : (
                    <p className="font-inter max-w-[60%] w-full"> It looks like you’re trying to access a page that requires you to be logged in.
                        Please <Link className="underline text-blue-800 font-bold" href="/login">sign in</Link> to your account to view this content.
                        If you don’t have an account yet, you can <Link className="underline text-blue-800 font-bold" href="/signup">register</Link> here to get started!
                        If you’re already a member, just log in and you’ll be able to access the page.
                    </p>
                )
            }
        </div>
    );
}