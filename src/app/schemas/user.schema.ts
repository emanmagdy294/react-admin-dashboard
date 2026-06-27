import { z } from "zod";

export const userSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters"),

  email: z
    .email("Invalid email address"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters"),

  mobile: z
    .string()
    .min(11, "Mobile must be 11 digits")
    .max(11, "Mobile must be 11 digits"),
});

export type UserFormData = z.infer<typeof userSchema>;