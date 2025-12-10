import axios from "axios";

// Use the environment variable, fallback to localhost for local development
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5600/api",
  withCredentials: true, // needed if backend uses cookies
});

export default api;
