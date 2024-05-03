import { useApi as DRMUseApi, UseApiReturnType, apiRouter } from 'Packages/Api';
import { getEnv, useSecurity } from 'Services';

export interface UseApiOptions {
  promise?: boolean;
  waitForAuthenticated?: boolean;
  canSend?: boolean;
  responseType?: 'json' | 'blob';
}

export const useApi = <T>({
  promise = false,
  waitForAuthenticated = false,
  canSend = true,
  responseType = 'json',
}: UseApiOptions = {}): UseApiReturnType<T> => {
  const { user } = useSecurity();
  const jwt = user.getJwt();

  const { request, ...api } = DRMUseApi<T>(
    getEnv('API_HOST'),
    getEnv('API_PROTOCOL'),
    apiRouter,
    promise,
    responseType,
  );
  request.setBearerToken(jwt);

  if ((waitForAuthenticated && !request.getBearerToken()) || !canSend) {
    api.send = noop;
  }

  return { request, ...api };
};

const noop = () => undefined;
