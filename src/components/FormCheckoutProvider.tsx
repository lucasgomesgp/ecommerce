"use client"

import { FormCheckoutContext, infoMock } from "@/app/context/FormCheckoutContext";
import { ReactNode, useState } from "react";

export function FormCheckoutProvider({ children }: { children: ReactNode }) {
    const [info, setInfo] = useState(infoMock);

    return (
        <FormCheckoutContext.Provider value={{ info, setInfo }}>
            {children}
        </FormCheckoutContext.Provider>
    );
}