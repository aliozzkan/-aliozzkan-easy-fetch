import { UseFetchData } from "./use-fetch-data";
interface Null {
    status: null;
    data: null;
    error: null;
    isPending: false;
    isRejected: false;
    isFulfilled: false;
}
export declare type FetchData<T> = UseFetchData<T>;
export declare function createInitialValue<T>(): Null;
export interface IMutationFunction {
    fulfilled: (data: any) => void;
    rejected: (err: any) => void;
    pending: () => void;
    reset: () => void;
}
export declare function mutationFetch<T>(t: {
    setState: (object: any) => void;
}, stateName: any): IMutationFunction;
export {};
