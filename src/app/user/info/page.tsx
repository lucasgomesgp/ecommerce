import { AddressCardsArea } from "@/components/AddressCardsArea";
import { ContactInfoTexts } from "@/components/ContactInfoTexts";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Link from "next/link";
import { MainSideBarContent } from "@/components/MainSideBarContent";
import { PathPage } from "@/components/PathPage";
import { authOptions } from "@/utils/constants/authOptions";
import { deleteAddress } from "@/services/deleteAddress";
import { getAddresses } from "@/services/getAddresses";
import { getServerSession } from "next-auth";
import Image from "next/image";

export default async function Info() {
    const addresses = await getAddresses();
    const session = await getServerSession(authOptions);

    async function handleRemoveItem(id: string) {
        "use server"
        try {
            await deleteAddress(id);
        } catch (err) {
            throw new Error("Error on delete address");
        }
    }
    return (
        <main className="flex flex-col overflow-hidden ">
            <Header />
            <PathPage title="Personal Info" />
            <MainSideBarContent>
                <section className="flex flex-col self-start gap-7 px-8 flex-auto lg:flex-[0.8]">
                    {!session?.user ? (
                        <div className="flex flex-col self-center items-center justify-center">
                            <p>Unfortunately, you cannot access this area without sign in! <span>for login <Link href="/login" className="underline text-blue-700">click here</Link></span></p>
                            <Image src="/assets/alert.png" alt="Alert icon" width={300} height={300} />
                        </div>
                    ) : (
                        <>
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
                        </>
                    )}
                </section>
            </MainSideBarContent>
            <Footer />
        </main>
    );
}
