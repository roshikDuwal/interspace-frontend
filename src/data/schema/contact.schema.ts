import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(2, "Name is required"),

  email: z.email("Invalid email"),

  phone: z.string().min(10, "Phone required"),

  message: z.string().min(10, "Message too short"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;