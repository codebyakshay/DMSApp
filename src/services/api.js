// src/services/api.js
import { getToken } from "@/utils/tokenStorage";
import axios from "axios";

const api = axios.create({
  baseURL: "https://apis.allsoft.co/api/documentManagement",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add token dynamically to each request
api.interceptors.request.use(async (config) => {
  const token = await getToken();
  // console.log("➡️ Attaching token header:", token);
  if (token) {
    // for these endpoints, the server expects a header named "token"
    config.headers.token = token;
    // you can also keep the standard Bearer if you want:
    // config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
