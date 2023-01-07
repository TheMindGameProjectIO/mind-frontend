import axios, { AxiosError, AxiosHeaders } from "axios";
import { Headers } from "../enums";
import { authRoutes } from "../routes";
axios.defaults.headers.common["ngrok-skip-browser-warning"] = (import.meta as any).env.VITE_APP_DEV_CONNECTON_HEADER;
axios.defaults.headers.common["Bypass-Tunnel-Reminder"] = (import.meta as any).env.VITE_APP_DEV_CONNECTON_HEADER;

const API_BASE_URL = (import.meta as any).env.VITE_APP_API_BASE_URL;
export const ACCESS_TOKEN_KEY = "RJWPOASXZ";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const privateApi = axios.create({
  baseURL: API_BASE_URL,
  headers,
});

export const publicApi = axios.create({
  baseURL: API_BASE_URL,
  headers,
});

type AuthHeaders = AxiosHeaders & { authorization: string };

privateApi.interceptors.request.use(
  (config) => {
    const jwtToken = localStorage.getItem(ACCESS_TOKEN_KEY);
    if (jwtToken) {
      if (config.headers) {
        (config.headers as unknown as AuthHeaders)[Headers.AUTHORIZATION] = jwtToken;
      }
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

privateApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error instanceof AxiosError) {
      if (error.response?.status === 401) {
        localStorage.clear();
        window.location.href = authRoutes.login;
      }
    }

    return Promise.reject(error);
  }
);
