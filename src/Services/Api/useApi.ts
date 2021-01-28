import { useApi as DRMUseApi, UseApiReturnType, apiRouter } from 'Packages/Api';
import { useContext } from 'react';
import { getEnv, SecurityContext } from 'Services';

export interface UseApiOptions {
  promise?: boolean;
  waitForAuthenticated?: boolean;
}

export const useApi = <T>({ promise = false, waitForAuthenticated = false }: UseApiOptions = {}): UseApiReturnType<
  T
> => {
  const { jwt } = useContext(SecurityContext);

  const { request, ...api } = DRMUseApi<T>(getEnv('API_HOST'), getEnv('API_PROTOCOL'), apiRouter, promise);
  request.setBearerToken(jwt);

  if (waitForAuthenticated && !request.getBearerToken()) {
    api.send = noop;
  }

  return { request, ...api };
};

const noop = () => undefined;
