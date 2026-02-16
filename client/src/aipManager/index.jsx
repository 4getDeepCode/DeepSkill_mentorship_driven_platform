import axios from "axios";
import { USER_STORE_PERSIST } from "../const";
import { BASE_URL } from "../const/env.const";
import { getToken, removeToken } from "../helper";
import toast from "react-hot-toast";

// Create Axios Instance
const AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

// ==========================
// Request Interceptor
// ==========================
AxiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken();
      console.log("TOKEN SENT:", token);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

// ==========================
// Response Interceptor
// ==========================
AxiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;
    const message = error?.response?.data?.message || "Something went wrong";

    // Unauthorized - Token expired or invalid
    if (status === 401) {
      removeToken();
      sessionStorage.removeItem(USER_STORE_PERSIST);

      // Prevent multiple redirects
      if (window.location.pathname !== "/signin") {
        window.location.href = "/signin";
      }

      toast.error("Session expired. Please login again.");
    } else {
      toast.error(message);
    }

    return Promise.reject(error);
  },
);

export default AxiosInstance;
