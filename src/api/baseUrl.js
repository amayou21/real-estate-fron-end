import axios from "axios";

// create base usrl
export const baseUrl = axios.create({ baseURL: "http://localhost:8001" });