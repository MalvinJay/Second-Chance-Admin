import axios, { AxiosResponse, AxiosError } from "axios";
import Cookies from "js-cookie";

// const BASE_API_URL = "https://63d4-154-160-9-117.ngrok-free.app/api";
const BASE_API_URL = "https://d466-154-160-7-209.ngrok-free.app/api";

// Create an Axios instance
const AXIOS_INSTANCE = axios.create({
    baseURL: BASE_API_URL,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
});

// Add an interceptor to include the token
AXIOS_INSTANCE.interceptors.request.use(
    (config) => {
        // Get the token from wherever it is store. most like localStorage
        const token = Cookies.get("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

const onResponseSuccess = (response: AxiosResponse) => {
    return response;
};

function onResponseError(err: AxiosError) {
    const status = err.status || (err.response ? err.response.status : 0);
    const currentURL = window.location.href.toString().split(window.location.host)[1];
    if (status === 401 && currentURL !== "/login") {
        Cookies.remove("token");
        window.location.href = "/login";
    }
    return Promise.reject(err);
}

AXIOS_INSTANCE.interceptors.response.use(onResponseSuccess, onResponseError);

export default AXIOS_INSTANCE;
