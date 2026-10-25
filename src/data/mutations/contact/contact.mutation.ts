import { submitContact } from "@/service/contact/contact.api";
import { useMutation } from "@tanstack/react-query";



export const useContact = () => {
  return useMutation({
    mutationFn: submitContact,
  });
};