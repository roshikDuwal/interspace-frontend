import { Constants } from "@/constants/constants";
import { axiosInstance } from "../api.service";

export const submitContact = async (
  payload: any
) => {
  const response = await axiosInstance.post(
    Constants.CONTACT_SUBMIT,
    payload
  );

  return response.data;
};