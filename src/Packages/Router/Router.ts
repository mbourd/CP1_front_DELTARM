import { diffWords } from 'diff';
import { History, Location } from 'history';
import { generatePath, matchPath, RouteProps } from 'react-router-dom';

import { IRouteDef, IRouter, RouterParamsType, RouterQueriesType } from './types';

export class Router implements IRouter {
  private _queries: Record<string, string> = {};
  private _params: Record<string, string> = {};
  private _currentRoute: IRouteDef | null = null;
  private _routes: Record<string, IRouteDef> = {};
  private _history: History | null = null;
  private _location: Location | null = null;

  public addRoute(route: IRouteDef): this {
    this._routes[route.name] = route;

    return this;
  }

  public registerRoute(route: IRouteDef): this {
    return this.addRoute(route);
  }

  public removeRoute(name: string): this {
    delete this._routes[name];

    return this;
  }

  /**
   * Get route definition by its name.
   */
  public get(name: string): IRouteDef | null {
    const route = this._routes[name];

    return route ? route : null;
  }

  public getRoute(name: string): IRouteDef | null {
    return this.get(name);
  }

  public getRoutes(): Record<string, IRouteDef> {
    return this._routes;
  }

  public setRoutes(routes: IRouteDef[]): this {
    routes.map((route) => {
      this.registerRoute(route);

      return route;
    });

    return this;
  }

  public clearRoutes(): this {
    this._routes = {};

    return this;
  }

  public setHistory(history: History | null): this {
    this._history = history;

    return this;
  }

  public getHistory(): History | null {
    return this._history;
  }

  public setLocation(location: Location | null): this {
    this._location = location;

    return this;
  }

  public getLocation(): Location | null {
    return this._location;
  }

  public find(url: string): IRouteDef | null {
    const routes: IRouteDef[] = Object.values(this._routes);

    for (let i = 0; i < routes.length; i++) {
      const route = matchPath(url, routes[i] as RouteProps);

      if (route) {
        return routes[i];
      }
    }

    return null;
  }

  public setCurrentRoute(route: IRouteDef | null): this {
    this._currentRoute = route;

    return this;
  }

  public getCurrentRoute(): IRouteDef | null {
    return this._currentRoute;
  }

  public generatePath(name: string, params?: RouterParamsType, queries?: RouterQueriesType): string | null {
    const route = this.get(name);

    if (!route) {
      return null;
    }

    return this.generateUrl(route.path, params, queries);
  }

  public generateUrl(url: string, params?: RouterParamsType, queries?: RouterQueriesType): string | null {
    if (queries) {
      url +=
        '?' +
        Object.keys(queries)
          .map((key) => {
            return encodeURIComponent(key) + '=' + encodeURIComponent(queries[key]);
          })
          .join('&');
    }

    return generatePath(url.replace(/\/\?$/, ''), params);
  }

  public getParams(): Record<string, string> {
    return this._params;
  }

  public setParams(params: Record<string, string>): this {
    this._params = params;

    return this;
  }

  public parseParams(pattern: string, url: string): Record<string, string> {
    const params: Record<string, string> = {};
    const paramsKeys: string[] = [];

    const stringRegexp = pattern.replace(/:(\w+)/g, (match, param) => {
      paramsKeys.push(param);

      return '';
    });

    const diff = diffWords(stringRegexp, url);
    let i = 0;
    diff.map((change) => {
      if (!change.added) {
        return change;
      }

      params[paramsKeys[i]] = change.value.replace(/\//g, '').replace(/\?.+/, '');
      i++;

      return change;
    });

    return params;
  }

  public getQueries(): Record<string, string> {
    return this._queries;
  }

  public setQueries(queries: Record<string, string>): this {
    this._queries = queries;

    return this;
  }

  public parseQueries(search: string): Record<string, string> {
    const queries: Record<string, string> = {};
    search.replace(/(\w+)=(\w+)/g, (match, key, value) => {
      queries[key] = value;

      return match;
    });

    return queries;
  }

  /**
   * Redirect to route using its name.
   */
  public redirectTo(name: string, params?: RouterParamsType, queries?: RouterQueriesType, force?: boolean): this {
    if (!this._history) {
      return this;
    }

    const url = this.generatePath(name, params, queries);

    if (!url) {
      return this;
    }

    if (force) {
      window.location.replace(url);
    }

    this._history.push(url);

    return this;
  }

  public redirectToUrl(url: string, queries?: RouterQueriesType, params?: RouterParamsType): this {
    if (!this._history) {
      return this;
    }

    const generatedUrl = this.generateUrl(url, params, queries);

    if (!generatedUrl) {
      return this;
    }

    this._history.push(generatedUrl);

    return this;
  }
}

export const router = new Router();
