import { z } from "zod";

export const formSchema = z.object({
    firstName: z.string().min(2, { message: "First Name is required" }),
    lastName: z.string().min(2,
        { message: "Last Name is required" }),
    country: z.string().min(2, { message: "Country Name is required" }),
    companyName: z.string(),
    streetAddress: z.string().min(4, { message: "Street Address is required" }),
    apartment: z.string(),
    phone: z.string().min(2, { message: "Phone is required" }),
    city: z.string().min(2, { message: "City is required" }),
    state: z.string().min(2, { message: "State is required" }),
    postalCode: z.string().min(5, { message: "Postal Code is required" }).max(5),
    billingAddress: z.boolean(),
});
