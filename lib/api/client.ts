import axios from "axios";
import { AxiosHeaders } from "axios";

let authToken: string | null = null;

export function setAuthToken(token: string | null) {
  authToken = token;
}

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  const headers = AxiosHeaders.from(config.headers);

  if (authToken) {
    headers.set("Authorization", `Bearer ${authToken}`);
  } else {
    headers.delete("Authorization");
  }

  config.headers = headers;
  return config;
});
