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
    text: "The clothes fit nicely, but some items didn’t look exactly like the photos. Delivery was quick and support was helpful. Some fabrics could be better in quality. Overall, it was a decent experience and the packaging was really nice. I’d consider buying again if they improve a few small things.",
    stars: 3.5,
  },
  {
    id: uuidv4(),
    photoUrl: "/assets/person2.png",
    name: "Ronald Richards",
    text: "Delivery was on time and the clothes are well-stitched. I really liked the shirt I bought — it fits well and the fabric is soft. Fast support too.",
    stars: 4,
  },
  {
    id: uuidv4(),
    photoUrl: "/assets/person3.png",
    name: "Savannah Nguyen",
    text: "Great variety and very stylish pieces. I ordered a set and was pleasantly surprised by the quality! Delivery was fast and support was excellent. The material feels comfortable and durable. Shopping experience was smooth and the website is easy to use. I’ll definitely shop here again. One of the best online stores I've used!",
    stars: 4,
  },
  {
    id: uuidv4(),
    photoUrl: "/assets/person1.png",
    name: "Floyd Miles",
    text: "Customer service was helpful and delivery arrived on time. The clothes were stylish, but one item had a sewing defect. Support fixed the issue, but it took a while. Sizing was inconsistent, which made it hard to choose. Overall, a decent experience, but there’s room for improvement in quality and consistency.",
    stars: 3.5,
  },
  {
    id: uuidv4(),
    photoUrl: "/assets/person2.png",
    name: "Ronald Richards",
    text: "The clothes are okay, but not as high quality as expected. Delivery was fine, and the pieces are wearable. Some stitching could be better.",
    stars: 4,
  },
  {
    id: uuidv4(),
    photoUrl: "/assets/person2.png",
    name: "Ronald Richards",
    text: "Shipping was delayed, and the fabric quality was disappointing. The shirt faded after just one wash. I expected better for the price.",
    stars: 2,
  },
  {
    id: uuidv4(),
    photoUrl: "/assets/person2.png",
    name: "Ronald Richards",
    text: "Very disappointed. Wrong size, poor quality fabric, and the return process was confusing. I wouldn’t recommend it.",
    stars: 1,
  },
];
