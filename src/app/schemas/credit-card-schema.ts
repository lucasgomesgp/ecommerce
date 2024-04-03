import { z } from "zod";

export const creditCardSchema = z.object({
    name: z.string().min(2, { message: "Name is required" }),
    number: z.string().min(16, { message: "Number of card is required" }).max(19, { message: "Max number of card is 19" }),
    expirationDate: z.string().min(2, { message: "Expiration date is required" }),
    securityCode: z.string().min(3, { message: "Security code/CVV is required" }),
});
