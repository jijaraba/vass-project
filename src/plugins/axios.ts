import axios, { AxiosInstance } from "axios";

const $axios: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

export default $axios;
