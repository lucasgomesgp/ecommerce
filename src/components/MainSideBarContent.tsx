import { ReactNode } from "react";
import { SideMenuUser } from "./SideMenuUser";

export function MainSideBarContent({ children }: { children: ReactNode }) {
    return (
        <section className="flex flex-wrap items-start justify-around mt-[52px] pb-4">
            <SideMenuUser />
            {children}
        </section>
    );
}
