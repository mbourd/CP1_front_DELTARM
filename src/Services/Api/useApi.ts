import { useApi as DRMUseApi, UseApiReturnType, apiRouter } from 'Packages/Api';
import { security } from 'Packages/Security';
import { useEffect } from 'react';
import { getEnv } from 'Services';

export const useApi = <T>(promise = false): UseApiReturnType<T> => {
  const { request, ...api } = DRMUseApi<T>(getEnv('API_HOST'), getEnv('API_PROTOCOL'), apiRouter, promise);

  useEffect(() => {
    request.setJWT(security.getUser().getJwt());
  }, [request]);

  return { request, ...api };
};
