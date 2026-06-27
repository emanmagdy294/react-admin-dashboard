import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://6a3287f9c6ca2aee43852f15.mockapi.io",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;