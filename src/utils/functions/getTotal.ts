import { IShoppingCartItems } from "../types/IShoppingCartItems";

export function getTotal(items: IShoppingCartItems[], discount: number = 0) {
    let accumulator = 0, shipping = 5;
    items?.map((current) => {
        accumulator += (current.price * current.quantity);
    });
    const discountFormatted = discount / 100;
    let total = discount === 0 ? accumulator : accumulator - (discountFormatted * accumulator);
    total += shipping;
    return total;
}