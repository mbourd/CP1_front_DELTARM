import { IRouteDef } from './types';
import { router } from './Router';

interface IUseRouter {
  queries: Record<string, string>;
  params: Record<string, string>;
  currentRoute: IRouteDef | null;
}

export const useRouter = (): IUseRouter => {
  return {
    queries: router.getQueries(),
    params: router.getParams(),
    currentRoute: router.getCurrentRoute(),
  };
};
