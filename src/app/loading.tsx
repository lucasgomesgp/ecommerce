"use client"
import { HashLoader } from "react-spinners";

export default function Loading() {
  return (
    <main className="w-full min-h-screen flex items-center justify-center bg-white">
      <HashLoader
        size={190}
        color={"#8a33fd"}
        loading={true}
        speedMultiplier={1}
      />
    </main>
  );
}
