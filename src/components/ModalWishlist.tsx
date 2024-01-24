import { Dispatch, ReactNode, SetStateAction, useState } from "react";

interface Props { modalStatus: boolean, setModalStatus: Dispatch<SetStateAction<boolean>>, children: ReactNode };
export function ModalWishlist({ modalStatus = false, setModalStatus, children }: Props) {
    return (
        <section className={`fixed top-0 flex left-0 items-center justify-center w-full min-h-full z-[99] ${modalStatus ? "flex" : "hidden"}`} style={{ backgroundColor: "rgba(0,0,0,0.4)" }} onClick={() => { setModalStatus(false) }}>
            <div className="fixed top-[50%] left-[50%] w-[700px] max-w-[700px] min-h-[400px] bg-white rounded-md justify-self-center" onClick={(event) => { event.stopPropagation() }} style={{
                transform: "translate(-50%, -50%)"
            }}>
                {children}
            </div>
        </section >
    );
}