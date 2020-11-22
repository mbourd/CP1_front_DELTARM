export type ApiResponseBodyType = Record<string, any>;
export type ApiResponseReqType = Record<string, any>;
export type ApiResponseHeadersType = Record<string, string>;

export type ApiResponseType = {
  text: string;
  body: ApiResponseBodyType;
  header: ApiResponseHeadersType;
  headers: ApiResponseHeadersType;
  type: string;
  charset: string;
  status: number;
  statusType: number;
  statusCode?: number;
  statusText?: string;
  info: boolean;
  ok: boolean;
  redirect: boolean;
  clientError: boolean;
  serverError: boolean;
  error: Error | null;
  accepted: boolean;
  noContent: boolean;
  badRequest: boolean;
  unauthorized: boolean;
  notAcceptable: boolean;
  notFound: boolean;
  forbidden: boolean;
  created?: boolean;
  xhr?: XMLHttpRequest;
  req?: ApiResponseReqType;

  files?: any;
};

export interface IApiResponse {
  isAccepted(): boolean;
  isBadRequest(): boolean;
  getBody(): ApiResponseBodyType;
  setBody(body: ApiResponseBodyType): IApiResponse;
  getData<T>(): T;
  getCharset(): string;
  isClientError(): boolean;
  isCreated(): boolean;
  hasError(): boolean;
  getError(): Error | null;
  getErrorMessage(): string | null;
  isForbidden(): boolean;
  getHeaders(): ApiResponseHeadersType;
  isNotFound(): boolean;
  isOk(): boolean;
  isRedirect(): boolean;
  getStatusCode(): number | null;
  getStatusText(): string | null;
  getStatusType(): number;
  getTextResponse(): string;
  getType(): string;
  isUnauthorized(): boolean;
  getOriginalRequest(): ApiResponseReqType;
}
