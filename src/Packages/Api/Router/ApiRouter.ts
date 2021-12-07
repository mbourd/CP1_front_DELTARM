import { ApiRequestParamsType, ApiRequestQueriesType } from '../Request';
import { IApiRouteDef, IApiRouter } from './types';

class ApiRouter implements IApiRouter {
  private _routes: Record<string, IApiRouteDef> = {};

  public addRoute(route: IApiRouteDef): this {
    this._routes[route.name] = route;

    return this;
  }

  public registerRoute(route: IApiRouteDef): this {
    return this.addRoute(route);
  }

  public setRoutes(routes: IApiRouteDef[]): this {
    routes.map((route) => {
      this.registerRoute(route);

      return route;
    });

    return this;
  }

  public removeRoute(name: string): this {
    delete this._routes[name];

    return this;
  }

  public getRoute(name: string): IApiRouteDef | null {
    const route = this._routes[name];

    return route ? route : null;
  }

  public changeRouteUrl(name: string, url: string): IApiRouteDef | null {
    const route = this._routes[name];
    route.path = url;

    return route ? route : null;
  }

  public getRoutes(): Record<string, IApiRouteDef> {
    return this._routes;
  }

  public clearRoutes(): this {
    this._routes = {};

    return this;
  }

  public generatePath(
    name: string,
    params?: ApiRequestParamsType,
    queries?: ApiRequestQueriesType,
  ): string | null {
    const route = this.getRoute(name);

    if (!route) {
      return null;
    }

    return this.generateUrl(
      route.path,
      params || route.params || {},
      queries || route.queries || {},
    );
  }

  public generateUrl(
    url: string,
    params?: ApiRequestParamsType,
    queries?: ApiRequestQueriesType,
  ): string | null {
    if (!params) {
      return url;
    }

    url = url.replace(/:(\w+)/g, (match, param) => {
      const hasParam = Object.prototype.hasOwnProperty.call(params, param);

      return hasParam ? params[param].toString() : match;
    });

    if (!queries) {
      return url;
    }

    const stringQueries = Object.keys(queries)
      .map((key) => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(queries[key]);
      })
      .join('&');
    if (stringQueries) {
      url += '?' + stringQueries;
    }

    return url;
  }
}

export const apiRouter = new ApiRouter();
