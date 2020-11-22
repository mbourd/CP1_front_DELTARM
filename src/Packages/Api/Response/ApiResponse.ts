import {
  ApiResponseBodyType,
  ApiResponseHeadersType,
  ApiResponseReqType,
  ApiResponseType,
  IApiResponse,
} from './types';

export class ApiResponse implements IApiResponse {
  private readonly _response: ApiResponseType;

  constructor(response: ApiResponseType) {
    this._response = response;
  }

  public isAccepted(): boolean {
    return this._response.accepted;
  }

  public isBadRequest(): boolean {
    return this._response.badRequest;
  }

  public getBody(): ApiResponseBodyType {
    return this._response.body;
  }

  public setBody(body: ApiResponseBodyType): this {
    this._response.body = body;

    return this;
  }

  public getData<T>(): T {
    return this._response.body as T;
  }

  public getCharset(): string {
    return this._response.charset;
  }

  public isClientError(): boolean {
    return this._response.clientError;
  }

  public isCreated(): boolean {
    return !!this._response.created;
  }

  public hasError(): boolean {
    return !!this._response.error;
  }

  public getError(): Error | null {
    return this._response.error;
  }

  public getErrorMessage(): string | null {
    if (this._response.error) {
      return this._response.error.message;
    }

    return null;
  }

  public isForbidden(): boolean {
    return this._response.forbidden;
  }

  public getHeaders(): ApiResponseHeadersType {
    return this._response.headers;
  }

  public isNotFound(): boolean {
    return this._response.notFound;
  }

  public isOk(): boolean {
    return this._response.ok;
  }

  public isRedirect(): boolean {
    return this._response.redirect;
  }

  public getStatusCode(): number | null {
    const code = this._response.statusCode;

    return code ? code : null;
  }

  public getStatusText(): string | null {
    const text = this._response.statusText;

    return text ? text : null;
  }

  public getStatusType(): number {
    return this._response.statusType;
  }

  public getTextResponse(): string {
    return this._response.text;
  }

  public getType(): string {
    return this._response.type;
  }

  public isUnauthorized(): boolean {
    return this._response.unauthorized;
  }

  public getOriginalRequest(): ApiResponseReqType {
    const req = this._response.req;

    return req ? req : {};
  }
}

export const FakeResponse = {
  text: '',
  body: {},
  type: 'FakeResponse',
  charset: 'utf-8',
  status: 200,
  statusType: 0,
  statusCode: 0,
  statusText: 'fake',
  info: false,
  ok: true,
  redirect: false,
  clientError: false,
  serverError: false,
  error: false,
  accepted: true,
  noContent: true,
  badRequest: false,
  unauthorized: false,
  notAcceptable: false,
  notFound: false,
  forbidden: false,
  created: true,
};
