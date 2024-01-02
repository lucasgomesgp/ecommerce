"use client"
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ShoppingCartContext } from "@/contexts/ShoppingCartContext";
import { useContext } from "react";

export default function Shop() {
  const {items, setItems} = useContext(ShoppingCartContext);
  return (
    <main className="flex flex-col">
      <Header />
      {items.map(({title})=>(
        <p key={title}>{title}</p>
      ))}
      <Footer />
    </main>
  );
}
