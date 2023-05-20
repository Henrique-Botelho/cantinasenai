import axios from "axios";

const api = axios.create({
  baseURL: "https://api.cantinasenai.com.br"
});

export default api;