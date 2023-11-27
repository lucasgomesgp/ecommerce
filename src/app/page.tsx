"use client";
import { Header } from "@/components/Header";
import Image from "next/image";
import { Google } from "../../public/assets/google";
import { Twitter } from "../../public/assets/twitter";
import { BtnSocialLogin } from "@/components/BtnSocialLogin";
import { InputForm } from "@/components/InputForm";
import { Eye } from "../../public/assets/eye";
import Link from "next/link";
import { useState } from "react";
import { ButtonAuth } from "@/components/ButtonAuth";

export default function Home() {
  const [passwordToggle, setPasswordToggle] = useState(false);
  return (
    <main className="w-full min-h-full">
      <Header isLoginPage={false} />
    </main>
  );
}
