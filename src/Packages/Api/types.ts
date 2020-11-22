import { ApiRequest, ApiRequestBodyType, ApiRequestParamsType, ApiRequestQueriesType } from './Request';

export type UseApiReturnType<T> = {
  request: ApiRequest;
  data: T | null;
  error: any | null;
  isLoading: boolean;
  send: (
    name: string,
    params?: ApiRequestParamsType,
    queries?: ApiRequestQueriesType,
    body?: ApiRequestBodyType,
  ) => void;
};
