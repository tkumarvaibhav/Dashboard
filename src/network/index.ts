import axios from "axios";
import initRequestInterceptor from "./helpers/axiosRequestInterceptor";
import initResponseInterceptor from "./helpers/axiosResponseInterceptor";

// Initialize axios base URL from environment (Vite)
const BASE_URL = (import.meta as any).env?.VITE_API_BASE_URL as string | undefined;
if (BASE_URL) {
  axios.defaults.baseURL = BASE_URL;
}

export const updateBaseUrl=(url:string)=>{
    axios.defaults.baseURL=url;
}

initRequestInterceptor();
initResponseInterceptor();

const http={
    get:(url:string)=>axios.get(url),
    post:(url:string,data:any)=>axios.post(url,data),
    put:(url:string,data:any)=>axios.put(url,data),
    delete:(url:string)=>axios.delete(url)
};

export default http;

