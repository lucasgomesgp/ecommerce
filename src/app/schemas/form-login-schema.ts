import { z } from "zod";

export const formLoginSchema = z.object({
    email: z.string().min(2, { message: "Email is required" }).email({ message: "Email is incorrect" }),
    password: z.string().min(8, { message: "Minimum of 8 characters on password" }),
});