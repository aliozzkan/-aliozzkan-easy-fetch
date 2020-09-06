import { AxiosPromise, AxiosError } from "axios";
import { IMutationFunction } from "./use-fetch-data";
export interface ServerError {
}
export declare type err = AxiosError<any>;
declare type apiFunction<D> = (arg: {
    jsonData?: D | null;
}) => AxiosPromise<any>;
export declare function createService<D, T>(apiFunction: apiFunction<D>): (mutation: IMutationFunction | null, cb?: {
    onSuccess?: ((data: T) => void) | undefined;
    onError?: ((error: err) => void) | undefined;
}) => (apiFunctionData?: {
    jsonData?: null | D;
    recaptchaKey?: string | null;
} | null) => Promise<boolean>;
export {};
