import React from 'react';
import { History, Location } from 'history';

export type RouterParamsType = Record<string, any>;
export type RouterQueriesType = Record<string, any>;

export interface IDispatchRoute {
  url: string;
  router: IRouter;
  notFoundComponent: React.ReactNode;
}

export interface IRouter {
  addRoute: (route: IRouteDef) => IRouter;
  registerRoute: (route: IRouteDef) => IRouter;
  removeRoute: (name: string) => IRouter;
  /**
   * Get route definition by its name.
   */
  get: (name: string) => IRouteDef | null;
  getRoute: (name: string) => IRouteDef | null;
  getRoutes: () => Record<string, IRouteDef>;
  setRoutes: (routes: IRouteDef[]) => IRouter;
  clearRoutes: () => IRouter;
  setHistory: (history: History | null) => IRouter;
  getHistory: () => History | null;
  setLocation: (location: Location | null) => IRouter;
  getLocation: () => Location | null;
  find: (url: string) => IRouteDef | null;
  setCurrentRoute: (route: IRouteDef | null) => IRouter;
  getCurrentRoute: () => IRouteDef | null;
  generatePath: (
    name: string,
    params?: RouterParamsType,
    queries?: RouterQueriesType,
  ) => string | null;
  generateUrl: (
    url: string,
    params?: RouterParamsType,
    queries?: RouterQueriesType,
  ) => string | null;
  getParams: () => Record<string, string>;
  setParams: (params: Record<string, string>) => IRouter;
  parseParams: (pattern: string, url: string) => Record<string, string>;
  getQueries: () => Record<string, string>;
  setQueries: (queries: Record<string, string>) => IRouter;
  parseQueries: (search: string) => Record<string, string>;
  /**
   * Redirect to route using its name.
   */
  redirectTo: (
    name: string,
    params?: RouterParamsType,
    queries?: RouterQueriesType,
    force?: boolean,
  ) => IRouter;
  redirectToUrl: (
    url: string,
    queries?: RouterQueriesType,
    params?: RouterParamsType,
  ) => IRouter;
}

export interface IRouteDef {
  /**
   * Name of route.
   */
  name: string;
  /**
   * Route path. Relative value.
   * @example '/login' '/logout' '/user/:id/show'
   */
  path: string;
  /**
   * Component to render if path value matches. Null value can be set.
   */
  component: React.ReactNode;
  /**
   * @see https://reactrouter.com/web/api/Route/exact-bool
   */
  exact: boolean;
  /**
   * @see https://reactrouter.com/web/api/Route/strict-bool
   */
  strict: boolean;
  /**
   * @see https://reactrouter.com/web/api/Route/sensitive-bool
   */
  sensitive: boolean;
  /**
   * Path params validation object.
   * @example
   *    {
   *      id: /^[0-9]+$/;
   *    }
   */
  params?: Record<string, RegExp>;
  /**
   * Props to pass to the component.
   */
  props?: Record<string, any>;

  roles?: string[];
}
