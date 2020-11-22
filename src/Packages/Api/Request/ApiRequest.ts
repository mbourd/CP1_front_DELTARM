import request from 'superagent';

import {
  ApiRequestBasicAuthType,
  ApiRequestBearerTokenType,
  ApiRequestBodyType,
  ApiRequestHeadersType,
  ApiRequestHostType,
  ApiRequestMethodType,
  ApiRequestProtocolType,
  ApiRequestQueriesType,
  ApiRequestUrlType,
  IApiRequest,
} from './types';

export class ApiRequest implements IApiRequest {
  private _protocol: ApiRequestProtocolType;
  private _host: ApiRequestHostType;
  private _url: ApiRequestUrlType = null;
  private _body: ApiRequestBodyType = {};
  private _queries: ApiRequestQueriesType = {};
  private _headers: ApiRequestHeadersType = {};
  private _method: ApiRequestMethodType = 'get';
  private _bearerToken: ApiRequestBearerTokenType = null;
  private _basicAuth: ApiRequestBasicAuthType = null;

  constructor(host: ApiRequestHostType, protocol: ApiRequestProtocolType = 'https') {
    this._protocol = protocol;
    this._host = host;
    this.addHeader('Accept', 'application/json, application/ld+json').addHeader(
      'Content-type',
      'application/json; charset=UTF-8',
    );
  }

  getBasicAuth(): ApiRequestBasicAuthType {
    return this._basicAuth;
  }

  setBasicAuth(login: string, password: string): this {
    this._basicAuth = { login, password };

    return this;
  }

  getBody(): ApiRequestBodyType {
    return this._body;
  }

  setBody(body: ApiRequestBodyType): this {
    this._body = body;

    return this;
  }

  addBody(name: string, value: unknown): this {
    this._body[name] = value;

    return this;
  }

  removeBody(name: string): this {
    delete this._body[name];

    return this;
  }

  getQueries(): ApiRequestQueriesType {
    return this._queries;
  }

  setQueries(queries: ApiRequestQueriesType): this {
    this._queries = queries;

    return this;
  }

  addQuery(name: string, value: any): this {
    this._queries[name] = value;

    return this;
  }

  removeQuery(name: string): this {
    delete this._queries[name];

    return this;
  }

  getUrl(): ApiRequestUrlType {
    return this._url;
  }

  setUrl(url: ApiRequestUrlType): this {
    this._url = url;

    return this;
  }

  getMethod(): ApiRequestMethodType {
    return this._method;
  }

  setMethod(method: ApiRequestMethodType): this {
    this._method = method;

    return this;
  }

  getProtocol(): ApiRequestProtocolType {
    return this._protocol;
  }

  setProtocol(protocol: ApiRequestProtocolType): this {
    this._protocol = protocol;

    return this;
  }

  getHost(): ApiRequestHostType {
    return this._host;
  }

  setHost(value: ApiRequestHostType): this {
    this._host = value;

    return this;
  }

  getHeaders(): ApiRequestHeadersType {
    return this._headers;
  }

  addHeader(name: string, value: string): this {
    this._headers[name] = value;

    return this;
  }

  removeHeader(name: string): this {
    delete this._headers[name];

    return this;
  }

  setBearerToken(token: ApiRequestBearerTokenType): this {
    this._bearerToken = token;

    return this;
  }

  getBearerToken(): ApiRequestBearerTokenType {
    return this._bearerToken;
  }

  get(url: string, queries: ApiRequestQueriesType = {}, body: ApiRequestBodyType = {}): Promise<any> {
    this.setUrl(url).setMethod('get').setQueries(queries).setBody(body);

    return this.send();
  }

  head(url: string, queries: ApiRequestQueriesType = {}, body: ApiRequestBodyType = {}): Promise<any> {
    this.setUrl(url).setMethod('head').setQueries(queries).setBody(body);

    return this.send();
  }

  post(url: string, body: ApiRequestBodyType = {}, queries: ApiRequestQueriesType = {}): Promise<any> {
    this.setUrl(url).setMethod('post').setBody(body).setQueries(queries);

    return this.send();
  }

  put(url: string, body: ApiRequestBodyType = {}, queries: ApiRequestQueriesType = {}): Promise<any> {
    this.setUrl(url).setMethod('put').setBody(body).setQueries(queries);

    return this.send();
  }

  patch(url: string, body: ApiRequestBodyType = {}, queries: ApiRequestQueriesType = {}): Promise<any> {
    this.setUrl(url).setMethod('patch').setBody(body).setQueries(queries);

    return this.send();
  }

  delete(url: string, body: ApiRequestBodyType = {}, queries: ApiRequestQueriesType = {}): Promise<any> {
    this.setUrl(url).setMethod('delete').setBody(body).setQueries(queries);

    return this.send();
  }

  send(): Promise<any> {
    return new Promise((resolve, reject) => {
      const agent = request[this._method](`${this._protocol}://${this._host}${this._url}`);

      agent.set(this._headers);

      if (this._bearerToken) {
        agent.set('Authorization', `Bearer ${this._bearerToken}`);
      }

      if (this._basicAuth) {
        agent.auth(this._basicAuth.login, this._basicAuth.password);
      }

      agent.query(this._queries).send(this._body);
      agent.then(resolve).catch(reject);
    });
  }
}
