export interface IWishItems { 
    id: number;
    title: string;
    color: string;
    price: number;
    image: string;
    quantity: number;
    colors?: Array<{name: string, value: string}>;
    sizes?: Array<string>;
};