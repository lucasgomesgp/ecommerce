import {v4 as uuidv4} from "uuid";

export interface CategoriesForMenType{
    id: string;
    imageSrc: string;
    title: string;
    subTitle: string;
}

export const categoriesForMen = [
    {
        id: uuidv4(),
        imageSrc: "/assets/men1.png",
        title: "Shirts",
        subTitle: "Explore Now!",
    },
    {
        id: uuidv4(),
        imageSrc: "/assets/men2.png",
        title: "Printed T-Shirts",
        subTitle: "Explore Now!",
    },
    {
        id: uuidv4(),
        imageSrc: "/assets/men3.png",
        title: "Plain T-Shirt",
        subTitle: "Explore Now!",
    },
    {
        id: uuidv4(),
        imageSrc: "/assets/men4.png",
        title: "Polo T-Shirt",
        subTitle: "Explore Now!",
    },
    {
        id: uuidv4(),
        imageSrc: "/assets/men5.png",
        title: "Hoodies & Sweetshirt",
        subTitle: "Explore Now!",
    },
    {
        id: uuidv4(),
        imageSrc: "/assets/men6.png",
        title: "Jeans",
        subTitle: "Explore Now!",
    },
    {
        id: uuidv4(),
        imageSrc: "/assets/men7.png",
        title: "Activewear",
        subTitle: "Explore Now!",
    },
    {
        id: uuidv4(),
        imageSrc: "/assets/men8.png",
        title: "Boxers",
        subTitle: "Explore Now!",
    }
];