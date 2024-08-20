import { CheckCompleted } from "@/svgs/check-completed";
import Link from "next/link";
import Realistic from "react-canvas-confetti/dist/presets/realistic";

export function OrderCompleted({ orderId }: { orderId: number }) {
    return (
        <section className="flex flex-col justify-center items-center gap-4 w-full max-w-[50%] shadow-steps p-8 rounded-lg mb-4 font-inter">
            <Realistic autorun={{ speed: 1, duration: 1 }} />
            <h2 className="text-blue-text font-medium text-lg text-center">Thank you for your purchase!</h2>
            <CheckCompleted />
            <p className="text-center text-sm text-overlay-modal">
                Your order has been successfully completed and is now being processed. You can view the details of your order anytime by
                <Link className="text-blue-text" href={`/user/orders/${orderId}`}> clicking here</Link>.
                An email confirmation with your order details and estimated delivery time will be sent to you shortly. If you have any questions or need assistance, please contact our customer support team. We appreciate your business and hope you enjoy your purchase!
            </p>
            <Link href="/user/cart" className="bg-blue-text px-4 py-2 text-white rounded-md hover:opacity-90 transition-opacity">
                Back to shop
            </Link>
        </section>
    );
}