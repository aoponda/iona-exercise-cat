import axios from "axios";
import type { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "https://api.thecatapi.com/v1",
  headers: {
    "Content-type": "application/json",
  },
});

export default apiClient;