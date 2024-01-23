import { Dispatch, ReactNode, SetStateAction, useState } from "react";

interface Props { modalStatus: boolean, setModalStatus: Dispatch<SetStateAction<boolean>>, children: ReactNode };
export function ModalWishlist({ modalStatus = false, setModalStatus, children }: Props) {
    const heightModal = document.body.scrollHeight;
    return (
        <section className={`absolute top-0 flex left-0 items-center justify-center w-full h-[${heightModal}] min-h-full z-[99] ${modalStatus ? "flex" : "hidden"}`} style={{ backgroundColor: "rgba(0,0,0,0.4)" }}>
            <div className="w-[700px] max-w-[700px] min-h-[400px] bg-white rounded-md justify-self-center">
                {children}
            </div>
        </section >
    );
}