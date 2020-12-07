import { ApiRequest, ApiRequestBodyType, ApiRequestParamsType, ApiRequestQueriesType } from './Request';
import { IApiRouteDef } from './Router';

export type UseApiReturnType<T> = {
  request: ApiRequest;
  data: T | null;
  error: IUseApiError | null;
  isLoading: boolean;
  callState: UseApiCallStateType;
  route: IApiRouteDef | null;
  send: (
    name: string,
    params?: ApiRequestParamsType,
    queries?: ApiRequestQueriesType,
    body?: ApiRequestBodyType,
  ) => Promise<any> | void;
};

export type UseApiCallStateType =
  | 'NOT_INIT'
  | 'INIT'
  | 'IS_LOADING'
  | 'NO_DATA'
  | 'NOT_FOUND'
  | 'BAD_REQUEST'
  | 'ERROR'
  | 'SERVER_ERROR'
  | 'SUCCESS';

export interface IUseApiError {
  name: string;
  message: string;
  status: number;
  headers?: Record<string, any>;
  response?: Record<string, any>;
}
