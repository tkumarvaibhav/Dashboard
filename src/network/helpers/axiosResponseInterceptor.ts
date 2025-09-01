import axios from "axios";

const initResponseInterceptor = () => {
    axios.interceptors.response.use(
       async (response) => {
            return Promise.resolve(response);
        },
        async (error) => {
            return Promise.reject(error);
        }
    );
}

export default initResponseInterceptor;