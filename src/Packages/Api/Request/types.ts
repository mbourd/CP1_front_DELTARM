import { ApiResponseBodyType } from '../Response';

export type ApiRequestMethodType = 'get' | 'post' | 'put' | 'patch' | 'delete' | 'head';
export type ApiRequestProtocolType = string | null;
export type ApiRequestHostType = string | null;
export type ApiRequestUrlType = string | null;
export type ApiRequestHeadersType = Record<string, string>;
export type ApiRequestParamsType = Record<string, string | number>;
export type ApiRequestQueriesType = Record<string, string | number>;
export type ApiRequestBodyType = Record<string, any>;
export type ApiRequestBearerTokenType = string | null;
export type ApiRequestBasicAuthType = { login: string; password: string } | null;

export interface IApiRequest {
  getBasicAuth(): ApiRequestBasicAuthType;
  setBasicAuth(login: string, password: string): IApiRequest;
  getBody(): ApiRequestBodyType;
  setBody(body: ApiRequestBodyType): IApiRequest;
  addBody(name: string, value: any): IApiRequest;
  removeBody(name: string): IApiRequest;
  getQueries(): ApiRequestQueriesType;
  setQueries(queries: ApiRequestQueriesType): IApiRequest;
  addQuery(name: string, value: any): IApiRequest;
  removeQuery(name: string): IApiRequest;
  getUrl(): ApiRequestUrlType;
  setUrl(url: ApiRequestUrlType): IApiRequest;
  getMethod(): ApiRequestMethodType;
  setMethod(method: ApiRequestMethodType): IApiRequest;
  getProtocol(): ApiRequestProtocolType;
  setProtocol(protocol: ApiRequestProtocolType): IApiRequest;
  getHost(): ApiRequestHostType;
  setHost(value: ApiRequestHostType): IApiRequest;
  getHeaders(): ApiRequestHeadersType;
  addHeader(name: string, value: string): IApiRequest;
  removeHeader(name: string): IApiRequest;
  setBearerToken(token: ApiRequestBearerTokenType): IApiRequest;
  getBearerToken(): ApiRequestBearerTokenType;
  get(url: string, queries: ApiRequestQueriesType, body: ApiRequestBodyType): Promise<ApiResponseBodyType>;
  head(url: string, queries: ApiRequestQueriesType, body: ApiRequestBodyType): Promise<ApiResponseBodyType>;
  post(url: string, body: ApiRequestBodyType, queries: ApiRequestQueriesType): Promise<ApiResponseBodyType>;
  put(url: string, body: ApiRequestBodyType, queries: ApiRequestQueriesType): Promise<ApiResponseBodyType>;
  patch(url: string, body: ApiRequestBodyType, queries: ApiRequestQueriesType): Promise<ApiResponseBodyType>;
  delete(url: string, body: ApiRequestBodyType, queries: ApiRequestQueriesType): Promise<ApiResponseBodyType>;
  send(): Promise<ApiResponseBodyType>;
}
