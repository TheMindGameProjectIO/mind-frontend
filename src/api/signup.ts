import { publicApi } from "./config";

export type TSignUpData = {
  email: string;
  password: string;
  confirmPassword: string;
  nickname: string;
};

export const signup = async (data: TSignUpData) => {
  const url = "/auth/register";
  const response = await publicApi.post(url, data);
  return response.data;
};
