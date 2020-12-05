import { useMemo, useState, useRef, useCallback } from 'react';

import {
  ApiRequestBodyType,
  ApiRequestHostType,
  ApiRequestParamsType,
  ApiRequestProtocolType,
  ApiRequestQueriesType,
} from './Request';
import { ApiRequest } from './Request';
import { IApiRouter, IApiRouteDef } from './Router';
import { UseApiReturnType, IUseApiError, UseApiCallStateType } from './types';

/**
 * Hook to use for call api.
 */
export const useApi = <T>(
  host: ApiRequestHostType,
  protocol: ApiRequestProtocolType = 'https',
  router: IApiRouter,
): UseApiReturnType<T> => {
  const [isLoading, setIsLoading] = useState(false);

  const currentRoute = useRef<IApiRouteDef | null>(null);
  const data = useRef<T | null>(null);
  const error = useRef<IUseApiError | null>(null);
  const callState = useRef<UseApiCallStateType>('NOT_INIT');
  const request = useMemo(() => new ApiRequest(host, protocol), [host, protocol]);

  const send = useCallback(
    (name: string, params?: ApiRequestParamsType, queries?: ApiRequestQueriesType, body?: ApiRequestBodyType) => {
      currentRoute.current = null;
      const route = router.getRoute(name);
      data.current = null;
      error.current = null;

      callState.current = 'IS_LOADING';
      setIsLoading(true);

      if (!route) {
        error.current = {
          name: 'NoRouteDefinition',
          message: `Route definition '${name}' not found!`,
          status: 400,
        };
        callState.current = 'ERROR';
        data.current = null;
        setIsLoading(false);

        return;
      }

      const mergeParams = Object.assign(route.params || {}, params);
      const url = router.generateUrl(route.path, mergeParams);

      if (!url) {
        error.current = {
          name: 'UrlGeneration',
          message: 'Url generation failed!',
          status: 400,
        };
        callState.current = 'ERROR';
        data.current = null;
        setIsLoading(false);

        return;
      }

      currentRoute.current = route;
      const mergeBody = Object.assign({}, route.body || {}, body);
      const mergeQueries = Object.assign({}, route.queries || {}, queries);
      request.setUrl(url).setMethod(route.method).setQueries(mergeQueries).setBody(mergeBody);

      if (currentRoute.current && currentRoute.current.fixtures) {
        let body = currentRoute.current.fixtures();
        if (currentRoute.current.handler) {
          body = currentRoute.current.handler(body);
        }
        data.current = body;
        error.current = null;
        callState.current = 'SUCCESS';
        setIsLoading(false);

        return;
      }

      request
        .send()
        .then((res) => {
          if (currentRoute.current && currentRoute.current.handler) {
            res.body = currentRoute.current.handler(res.body);
          }
          callState.current = 'SUCCESS';
          if (currentRoute.current && currentRoute.current.callState) {
            callState.current = currentRoute.current.callState(res.body, null, callState.current);
          }
          data.current = res.body;
          error.current = null;
          setIsLoading(false);
        })
        .catch((err) => {
          if (err.response) {
            error.current = {
              name: 'ErrorWithResponse',
              message: err.message,
              status: err.status,
              headers: err.response.headers,
              response: err.response,
            };

            callState.current = 'BAD_REQUEST';
          } else {
            error.current = {
              name: 'ErrorWithoutResponse',
              message: '',
              status: err.status || 500,
            };
            callState.current = 'SERVER_ERROR';
          }
          data.current = null;
          if (currentRoute.current && currentRoute.current.callState) {
            callState.current = currentRoute.current.callState(null, err, callState.current);
          }
          setIsLoading(false);
        });
    },
    [request, router],
  );

  if (error.current && error.current.status >= 400 && error.current.status <= 499) {
    callState.current = error.current?.response ? 'BAD_REQUEST' : 'NOT_FOUND';
  }

  return { request, isLoading, data: data.current, error: error.current, callState: callState.current, send };
};
