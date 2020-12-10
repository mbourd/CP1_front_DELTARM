import { useApi as DRMUseApi, UseApiReturnType, apiRouter } from 'Packages/Api';
import { useContext } from 'react';
import { getEnv, SecurityContext } from 'Services';

export const useApi = <T>(promise = false): UseApiReturnType<T> => {
  const { jwt } = useContext(SecurityContext);

  const { request, ...api } = DRMUseApi<T>(getEnv('API_HOST'), getEnv('API_PROTOCOL'), apiRouter, promise);
  request.setBearerToken(jwt);

  return { request, ...api };
};
