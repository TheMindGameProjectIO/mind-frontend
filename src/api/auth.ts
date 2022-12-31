import { userFactory } from "../types";
import { publicApi, privateApi } from "./config";

export type TLoginData = {
  email: string;
  password: string;
};

export type TSignUpData = {
  email: string;
  password: string;
  confirmPassword: string;
  nickname: string;
};

export class AuthController {
  static async signup(data: TSignUpData) {
    const url = "/auth/register";
    const response = await publicApi.post(url, data);
    return response.data;
  }

  static async login(data: TLoginData) {
    const url = "/auth/login";
    const response = await publicApi.post(url, data);

    const jwtToken = response.headers.authorization;
    return { user: userFactory(response.data), jwtToken };
  }

  static async me() {
    const url = "/auth/me";
    const response = await privateApi.get(url);
    return response.data;
  }
}
