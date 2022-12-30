import { publicApi } from "./config";

export type TContactUsData = {
  firstname: string;
  lastname: string;
  email: string;
  message: string;
};

export const contactus = async (data: TContactUsData) => {
  const url = "/general/contactus";
  const response = await publicApi.post(url, data);
  return response;
};
