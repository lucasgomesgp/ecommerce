import { IShoppingCartItems } from "../types/IShoppingCartItems";

export function getSubTotal(items: IShoppingCartItems[], discount: number = 0) {
    let accumulator = 0;
    items?.map((current) => {
        accumulator += (current.price * current.quantity);
    });
    const discountFormatted = discount / 100;
    const total = discount === 0 ? accumulator : accumulator - (discountFormatted * accumulator);
    return total;
}