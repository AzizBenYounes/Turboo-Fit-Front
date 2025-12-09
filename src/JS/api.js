import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5600/api",
  withCredentials: true, // needed if using cookies
});

export default api;