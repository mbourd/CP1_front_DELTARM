import { IRouteDef } from './types';
import { router } from './Router';

interface IUseRouter {
  currentRoute: IRouteDef | null;
}

export const useRouter = (): IUseRouter => {
  return {
    currentRoute: router.getCurrentRoute(),
  };
};
