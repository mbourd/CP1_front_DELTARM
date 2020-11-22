import { useMemo, useState, useRef, useCallback } from 'react';

import {
  ApiRequestBodyType,
  ApiRequestHostType,
  ApiRequestParamsType,
  ApiRequestProtocolType,
  ApiRequestQueriesType,
} from './Request';
import { ApiRequest } from './Request';
import { FakeResponse } from './Response';
import { IApiRouter, IApiRouteDef } from './Router';
import { UseApiReturnType } from './types';

/**
 * Hook to use for call api.
 *
 * @param host Server host.
 * @param protocol Server protocol.
 * @param router
 * @example
 *    // ...
 *    const { request, isLoading, data, error, send } = useApi('jsonplaceholder.typicode.com', 'https');
 *    // ...
 */
export const useApi = <T>(
  host: ApiRequestHostType,
  protocol: ApiRequestProtocolType = 'https',
  router: IApiRouter,
): UseApiReturnType<T> => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<any | null>(null);

  const currentRoute = useRef<IApiRouteDef | null>(null);
  const request = useMemo(() => new ApiRequest(host, protocol), [host, protocol]);

  const send = useCallback(
    (name: string, params?: ApiRequestParamsType, queries?: ApiRequestQueriesType, body?: ApiRequestBodyType) => {
      currentRoute.current = null;
      const route = router.getRoute(name);

      if (!route) {
        const error = new Error();
        error.name = 'NoRouteDefinition';
        error.message = `Route definition '${name}' not found!`;
        setError(error);

        return;
      }

      const mergeParams = Object.assign(route.params || {}, params);
      const url = router.generateUrl(route.path, mergeParams);

      if (!url) {
        const error = new Error();
        error.name = 'UrlGeneration';
        error.message = 'Url generation failed!';
        setError(error);

        return;
      }

      currentRoute.current = route;
      const mergeBody = Object.assign(route.body || {}, body);
      const mergeQueries = Object.assign(route.queries || {}, queries);
      request.setUrl(url).setMethod(route.method).setQueries(mergeQueries).setBody(mergeBody);

      setIsLoading(true);

      if (currentRoute.current && currentRoute.current.fixtures) {
        let body = currentRoute.current.fixtures();
        if (currentRoute.current.handler) {
          body = currentRoute.current.handler(body);
        }
        setData(body);
        setIsLoading(false);

        return;
      }

      request
        .send()
        .then((res) => {
          if (currentRoute.current && currentRoute.current.handler) {
            res.body = currentRoute.current.handler(res.body);
          }
          setData(res.body);
          setIsLoading(false);
        })
        .catch((error) => {
          if (error.response) {
            setError(error.response);
          } else {
            setError({
              ...FakeResponse,
              header: request.getHeaders(),
              headers: request.getHeaders(),
              error: error,
              text: '',
              body: {},
              type: 'BadResponse',
              status: 500,
              statusText: 'error',
              ok: false,
              serverError: true,
              accepted: false,
              badRequest: true,
              notAcceptable: true,
              created: false,
            });
          }

          setIsLoading(false);
        });
    },
    [request, router],
  );

  return { request, isLoading, data, error, send };
};
