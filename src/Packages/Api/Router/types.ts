import { ApiRequestBodyType, ApiRequestMethodType, ApiRequestParamsType, ApiRequestQueriesType } from '../Request';

export interface IApiRouter {
  addRoute: (route: IApiRouteDef) => IApiRouter;
  registerRoute: (route: IApiRouteDef) => IApiRouter;
  setRoutes: (routes: IApiRouteDef[]) => IApiRouter;
  removeRoute: (name: string) => IApiRouter;
  getRoute: (name: string) => IApiRouteDef | null;
  getRoutes: () => Record<string, IApiRouteDef>;
  clearRoutes: () => IApiRouter;
  generateUrl: (name: string, params?: ApiRequestParamsType, queries?: ApiRequestQueriesType) => string | null;
  generatePath: (name: string, params?: ApiRequestParamsType, queries?: ApiRequestQueriesType) => string | null;
}

export interface IApiRouteDef {
  /**
   * Name of route.
   */
  name: string;
  /**
   * Method of route : get post put ...
   */
  method: ApiRequestMethodType;
  /**
   * Route path, like '/login' '/user/:id'
   */
  path: string;
  /**
   * Default params of route.
   */
  params?: ApiRequestParamsType;
  /**
   * Default queries of routes.
   */
  queries?: ApiRequestQueriesType;
  /**
   * Default body content of route.
   */
  body?: ApiRequestBodyType;
  /**
   * Api response handler. If define, this callback will be call after api response. Can be use for data transforming.
   */
  handler?: (body: any) => NonNullable<any>;
  /**
   * Use fake data instead of api data.
   */
  fixtures?: () => NonNullable<any>;
}
