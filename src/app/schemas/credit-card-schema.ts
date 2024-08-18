import { z } from "zod";

export const creditCardSchema = z.object({
  name: z
    .string({
      required_error: "required field",
      invalid_type_error: "Name is required",
    })
    .min(2),
  number: z
    .string({
      required_error: "required field",
      invalid_type_error: "Number is required",
    })
    .min(16, { message: "Minimum 16 characters on number" })
    .max(19, { message: "Max number of card is 19" }),
  expirationDate: z
    .string({
      required_error: "required field",
      invalid_type_error: "Expiration date is required",
    })
    .min(2),
  securityCode: z
    .string({
      required_error: "required field",
      invalid_type_error: "Security code/CVV is required",
    })
    .min(3),
});
