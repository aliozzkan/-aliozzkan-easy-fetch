import { AxiosError } from "axios";
interface httpOptions {
    baseURL?: string;
    timeout?: number;
    token?: string;
    onUnauthorized?: (error: AxiosError) => void;
}
export declare const http: (option?: httpOptions | undefined) => import("axios").AxiosInstance;
export {};
