import { z } from "zod";

export const formSignUpSchema = z.object({
    email: z.string().min(2, { message: "This field is required" },).email({ message: "Email not valid" }),
    password: z.string().min(8, { message: "Must be 8 or more characters long" }),
});