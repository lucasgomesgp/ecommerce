import { v4 as uuidv4 } from "uuid";

export interface IFeedbackData {
    id: string;
    photoUrl: string;
    name: string;
    text: string;
    stars: number;

}
export const feedbackData: Array<IFeedbackData> = [
    {
        id: uuidv4(),
        photoUrl: "/assets/person1.png",
        name: "Floyd Miles",
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        stars: 3.5
    },
    {
        id: uuidv4(),
        photoUrl: "/assets/person2.png",
        name: "Ronald Richards",
        text: "ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        stars: 4
    },
    {
        id: uuidv4(),
        photoUrl: "/assets/person3.png",
        name: "Savannah Nguyen",
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        stars: 4
    },
    {
        id: uuidv4(),
        photoUrl: "/assets/person1.png",
        name: "Floyd Miles",
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        stars: 3.5
    },
    {
        id: uuidv4(),
        photoUrl: "/assets/person2.png",
        name: "Ronald Richards",
        text: "ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        stars: 4
    },
    {
        id: uuidv4(),
        photoUrl: "/assets/person2.png",
        name: "Ronald Richards",
        text: "ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        stars: 2
    },
    {
        id: uuidv4(),
        photoUrl: "/assets/person2.png",
        name: "Ronald Richards",
        text: "ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        stars: 1
    },
];