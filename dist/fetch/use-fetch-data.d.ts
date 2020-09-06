import { AxiosError } from "axios";
interface Fulfilled<T> {
    status: "fulfilled";
    data: T;
    error: null;
    isPending: false;
    isRejected: false;
    isFulfilled: true;
}
interface Rejected {
    status: "rejected";
    data: null;
    error: AxiosError<any>;
    isPending: false;
    isRejected: true;
    isFulfilled: false;
}
interface Pending {
    status: "pending";
    data: null;
    error: null;
    isPending: true;
    isRejected: false;
    isFulfilled: false;
}
interface Null {
    status: null;
    data: null;
    error: null;
    isPending: false;
    isRejected: false;
    isFulfilled: false;
}
export declare type UseFetchData<T> = Fulfilled<T> | Rejected | Pending | Null;
export interface IMutationFunction {
    fulfilled: (data: any) => void;
    rejected: (err: any) => void;
    pending: () => void;
    reset: () => void;
}
export declare const createFetchData: <T>() => UseFetchData<T>;
export declare const useFetchData: <T>() => [UseFetchData<T>, IMutationFunction];
export {};
