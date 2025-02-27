import axios from "axios";

const API_BASE_URL = "http://192.168.1.2:3000"; // Change this to your local IP

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
  timeout: 10000, // ⏳ Set timeout (10 sec) to prevent hanging requests
});

// ✅ Global error handling for better debugging
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("❌ API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;
