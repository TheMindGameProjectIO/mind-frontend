import axios, { AxiosError, AxiosHeaders } from "axios";
axios.defaults.headers.common["ngrok-skip-browser-warning"] = (import.meta as any).env.VITE_APP_DEV_CONNECTON_HEADER;

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

type AuthHeaders = AxiosHeaders & { Authorization: string };

privateApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN_KEY);
    if (token) {
      if (config.headers) {
        (config.headers as unknown as AuthHeaders).Authorization = `Bearer ${token}`;
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
        localStorage.removeItem(ACCESS_TOKEN_KEY);
        window.location.href = "/auth/login";
      }
    }
  }
);
