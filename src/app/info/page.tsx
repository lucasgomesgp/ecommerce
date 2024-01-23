import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MainSideBarContent } from "@/components/MainSideBarContent";
import PathPage from "@/components/PathPage";

export default function Info() {
    return (
        <main className="flex flex-col overflow-hidden ">
            <Header />
            <PathPage title="Info" />
            <MainSideBarContent>
                <p>Info</p>
            </MainSideBarContent>
            <Footer />
        </main>
    );
}
