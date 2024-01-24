"use client"
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export function UserNotLoggedIn() {
    const { data: session } = useSession();
    return (
        <>
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
            )
            }
        </>
    )
}
