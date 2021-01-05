import { IUser } from './User';
import { security } from './Security';
import { LoginLogoutReturnType } from './types';

interface IUseSecurity {
  user: IUser;
  logout: (user: IUser) => LoginLogoutReturnType;
}

export const useSecurity = (): IUseSecurity => {
  return {
    user: security.getUser(),
    logout: security.logout,
  };
};
