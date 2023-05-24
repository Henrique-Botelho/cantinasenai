import axios from "axios";

const api = axios.create({
  baseURL: "https://api.cantinasenai.com.br",
  timeout: 30000
});

export default api;