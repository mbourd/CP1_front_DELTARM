import { IUser } from './User';
import { security } from './Security';
import { LoginLogoutReturnType } from './types';

interface IUseRouter {
  user: IUser;
  logout: (user: IUser) => LoginLogoutReturnType;
}

export const useSecurity = (): IUseRouter => {
  return {
    user: security.getUser(),
    logout: security.logout,
  };
};
