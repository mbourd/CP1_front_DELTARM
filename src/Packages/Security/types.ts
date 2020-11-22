import { IUser } from './User';

export type LoginLogoutReturnType = {
  title: 'SUCCESS' | 'STORAGE_FAILED' | 'NOT_LOGGED';
  message: string;
  error: boolean;
};

export interface ISecurity {
  setRoleHierarchy: (roleHierarchy: Record<string, string[]>) => ISecurity;
  getRoleHierarchy: () => Record<string, string[]>;
  setSessionKey: (key: string) => ISecurity;
  getSessionKey: () => string;
  decodeJwtToken: <T>(token: string) => T | null;
  persistUser: (user: IUser) => LoginLogoutReturnType;
  logout: (user: IUser) => LoginLogoutReturnType;
  getUser: () => IUser;
}
