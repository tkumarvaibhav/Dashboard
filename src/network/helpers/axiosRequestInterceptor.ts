import axios, { AxiosHeaders } from "axios";

const initRequestInterceptor = () => {
    axios.interceptors.request.use(
        (config) => {
            const headers=new AxiosHeaders({
                ...config.headers,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            })
            config.headers=headers;
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );
}

export default initRequestInterceptor;
