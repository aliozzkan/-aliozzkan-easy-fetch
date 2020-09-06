import { UseFetchData } from "./use-fetch-data";

interface Null {
  status: null;
  data: null;
  error: null;
  isPending: false;
  isRejected: false;
  isFulfilled: false;
}

export type FetchData<T> = UseFetchData<T>;

const initialValue: Null = {
  status: null,
  data: null,
  error: null,
  isPending: false,
  isRejected: false,
  isFulfilled: false,
};

export function createInitialValue<T>(): Null {
  const initial: FetchData<T> = { ...initialValue };
  return initial;
}

export interface IMutationFunction {
  fulfilled: (data: any) => void;
  rejected: (err: any) => void;
  pending: () => void;
  reset: () => void;
}

export function mutationFetch<T>(
  t: { setState: (object: any) => void },
  stateName: any
): IMutationFunction {
  return {
    pending: () => {
      t.setState({
        [stateName]: {
          ...initialValue,
          status: "pending",
          isPending: true,
        },
      });
    },
    fulfilled: (data: T) => {
      t.setState({
        [stateName]: {
          ...initialValue,
          status: "fulfilled",
          data: data,
          isFulfilled: true,
        },
      });
    },
    rejected: (error: any) => {
      t.setState({
        [stateName]: {
          ...initialValue,
          status: "rejected",
          error,
          isRejected: true,
        },
      });
    },
    reset: () => {
      t.setState({
        [stateName]: {
          ...initialValue,
        },
      });
    },
  };
}
