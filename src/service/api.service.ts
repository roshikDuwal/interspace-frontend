import { Constants } from "@/constants/constants";
import axios from "axios";


export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const auth_token = localStorage.getItem("access_token");
  if (auth_token) {
    config.headers["Authorization"] = `Bearer ${auth_token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error?.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = localStorage.getItem("refresh_token");

      if (refreshToken === null) {
        localStorage.clear();
        window.location.href = "/signin"; // redirect immediately
        return Promise.reject(error);
      }

      try {
        const response = await axios.post(
          "/refresh-token",
          { refresh_token: refreshToken },
          {
            baseURL: process.env.NEXT_PUBLIC_API_URL,
          }
        );
        const access_token = await response.data.access_token;
        localStorage.setItem("access_token", access_token);

        return axiosInstance.request(originalRequest);
      } catch (refreshError) {
        localStorage.clear();
        window.location.href = "/signin";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export const axiosMultiPartInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

axiosMultiPartInstance.interceptors.request.use((config) => {
  const auth_token = localStorage.getItem("access_token");
  if (auth_token) {
    config.headers["Authorization"] = `Bearer ${auth_token}`;
  }
  return config;
});

axiosMultiPartInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error?.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = localStorage.getItem("refresh_token");
      if (refreshToken === null) {
        localStorage.clear();
        window.location.href = "/signin";
        return Promise.reject(error);
      }

      try {
        const response = await axiosInstance.post(Constants.REFRESH_TOKEN_URI, {
          refresh_token: refreshToken,
        });

        const access_token = await response.data.access_token;
        localStorage.setItem("access_token", access_token);

        return axiosInstance.request(originalRequest);
      } catch (refreshError) {
        localStorage.clear();
        window.location.href = "/signin";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);
