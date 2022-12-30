import { publicApi } from "./config";

export type TLoginData = {
  email: string;
  password: string;
};

export const login = async (data: TLoginData) => {
  const url = "/auth/login";
  const response = await publicApi.post(url, data);
  return response;
};
