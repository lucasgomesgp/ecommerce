import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MainSideBarContent } from "@/components/MainSideBarContent";
import { PathPage } from "@/components/PathPage";
import { SideMenuUser } from "@/components/SideMenuUser";

export default function Orders() {
    return (
        <main className="flex flex-col overflow-hidden ">
            <Header />
            <PathPage title="Orders" />
            <MainSideBarContent>
                <p>Orders</p>
            </MainSideBarContent>
            <Footer />
        </main>
    );
}
