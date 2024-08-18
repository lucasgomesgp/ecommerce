import { AddressCardsArea } from "@/components/AddressCardsArea";
import { CardAddress } from "@/components/CardAddress";
import { ContactInfoTexts } from "@/components/ContactInfoTexts";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MainSideBarContent } from "@/components/MainSideBarContent";
import { PathPage } from "@/components/PathPage";
import { authOptions } from "@/utils/constants/authOptions";
import { getAllItems } from "@/utils/functions/address/getAllAddress";
import { removeItem } from "@/utils/functions/address/removeItem";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Info() {
    const addresses = await getAllItems();
    const session = await getServerSession(authOptions);

    async function handleRemoveItem(id: string, userId: string) {
        "use server"
        try {
            await removeItem(id, userId);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <main className="flex flex-col overflow-hidden ">
            <Header />
            <PathPage title="Personal Info" />
            <MainSideBarContent>
                <section className="flex flex-col self-start gap-7 px-8 flex-auto lg:flex-[0.8]">
                    <section className="flex flex-col w-full gap-[30px]">
                        <div className="flex flex-col gap-[20px]">
                            <h4 className="font-medium font-coreSans text-gray-text-menu text-[28px]">My Info</h4>
                            <p className="font-medium font-coreSans text-gray-text-menu text-[22px]">Contact Details</p>
                        </div>
                        {session?.user !== undefined && (
                            <>
                                <ContactInfoTexts title="Your Name" text={session.user.name || ""} />
                                <ContactInfoTexts title="Email" text={session.user.email || ""} />
                                <ContactInfoTexts title="Phone" text={session.user?.phone || ""} />
                                <ContactInfoTexts title="Password" text={"******"} />
                            </>
                        )}
                    </section>
                    <section className="flex flex-col w-full">
                        <div className="flex items-center justify-between">
                            <p className="font-medium font-coreSans text-gray-text-menu text-[22px]">Address</p>
                            <Link href="/user/address" className="font-semibold  text-gray-text-menu text-lg">Add New</Link>
                        </div>
                        <AddressCardsArea addresses={addresses} removeItem={handleRemoveItem} />
                    </section>
                </section>
            </MainSideBarContent>
            <Footer />
        </main>
    );
}
