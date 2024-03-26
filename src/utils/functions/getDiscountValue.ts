import { IShoppingCartItems } from "../types/IShoppingCartItems";

export function getDiscountValue(items: IShoppingCartItems[], discount: number = 0) {
    let accumulator = 0;
    items?.map((current) => {
        accumulator += (current.price * current.quantity);
    });
    const discountFormatted = discount / 100;
    const result = discount === 0 ? 0 : discountFormatted * accumulator;
    return result;
}