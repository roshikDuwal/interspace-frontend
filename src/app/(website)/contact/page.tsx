"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ContactFormValues, contactSchema } from "@/data/schema/contact.schema";
import { useContact } from "@/data/mutations/contact/contact.mutation";

export default function ContactPage() {
  const { mutate, isPending } = useContact();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    mutate(data);
  };

  return (
    <section className="container mx-auto px-4 py-24 max-w-2xl">
      <h1 className="text-5xl font-bold">Contact Us</h1>

      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 mt-10"
      >
        <Input placeholder="Full Name" {...form.register("fullName")} />
        <Input placeholder="Email" {...form.register("email")} />
        <Input placeholder="Phone" {...form.register("phone")} />
        <Textarea placeholder="Message" {...form.register("message")} />

        <Button type="submit" disabled={isPending}>
          {isPending ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </section>
  );
}