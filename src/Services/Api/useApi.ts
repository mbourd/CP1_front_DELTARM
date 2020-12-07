import { useApi as DRMUseApi, UseApiReturnType, apiRouter } from 'Packages/Api';
import { getEnv } from 'Services';

export const useApi = <T>(promise = false): UseApiReturnType<T> => {
  return DRMUseApi<T>(getEnv('API_HOST'), getEnv('API_PROTOCOL'), apiRouter, promise);
};
