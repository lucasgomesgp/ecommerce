interface IOrderResponse {
    orderItems: {
        id: string;
        title: string;
        price: number;
        quantity: number;
        imageSrc: string;
        color: string;
        size: string;
        userId: string;
        createdAt: Date;
        orderId: string | null;
    }[];
}