import axios, { AxiosInstance } from "axios";

export function useApi() {
  const headers = {
    "Content-Type": "application/json",
    "Access-control-Allow-Origin": "*",
  };

  const api: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers,
    //beaer token
  });

  return api;
}
