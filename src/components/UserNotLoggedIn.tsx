"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";

export function UserNotLoggedIn() {
  const { data: session } = useSession();
  return (
    <>
      {!session?.user?.name && !session?.user.email && (
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
    </>
  );
}
