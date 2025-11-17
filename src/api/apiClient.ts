import axios from "axios";
import { getToken } from "../utilis/auth/authHelper";

const apiClient = axios.create({
  // baseURL: "http:10.105.224.44:3000/",
  baseURL: "http://localhost:3000/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: interceptors for auth, logging, etc.
apiClient.interceptors.request.use(
  async (request) => {
    const token = await getToken();
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }
    console.log("📤 Request:", request.method?.toUpperCase(), request.url);
    console.log("📤 Request Body:", request.data);
    return request;
  },
  (error) => {
    console.error("❌ Request Error:", error);
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    console.log(
      "✅ Response from:",
      response.config.url,
      "Status:",
      response.status
    );
    return response;
  },
  (error) => {
    console.error("❌ API Error:", error.message);
    if (error.response) {
      console.error("Response status:", error.response.status);
      console.error("Response data:", error.response.data);
    }
    return Promise.reject(error);
  }
);

export default apiClient;
