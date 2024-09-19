import jwt_decode from 'jwt-decode';
import { ISecurity, LoginLogoutReturnType } from './types';
import { IUser, User } from './User';

export class Security implements ISecurity {
  private _roleHierarchy: Record<string, string[]> = {};
  private _sessionKey = 'security';

  public setRoleHierarchy(roleHierarchy: Record<string, string[]>): this {
    this._roleHierarchy = roleHierarchy;

    return this;
  }

  public getRoleHierarchy(): Record<string, string[]> {
    return this._roleHierarchy;
  }

  public setSessionKey(key: string): this {
    this._sessionKey = key;

    return this;
  }

  public getSessionKey(): string {
    return this._sessionKey;
  }

  public decodeJwtToken<T>(token: string): T | null {
    try {
      return jwt_decode(token) as T;
    } catch (e) {
      return null;
    }
  }

  public persistUser(user: IUser): LoginLogoutReturnType {
    try {
      localStorage.setItem(this._sessionKey, JSON.stringify(user));
    } catch (e: any) {
      return { title: 'STORAGE_FAILED', message: e.message, error: true };
    }

    return {
      title: 'SUCCESS',
      message: `'${user.getUsername}' has been successfully saved.`,
      error: false,
    };
  }

  public logout(user: IUser): LoginLogoutReturnType {
    if (!user.isLogged()) {
      return {
        title: 'NOT_LOGGED',
        message: `User is not logged.`,
        error: true,
      };
    }

    const username = user.getUsername();
    user
      .setEmail(null)
      .setUsername(User.Roles.ANON)
      .setRoles([User.Roles.ANON])
      .setJwt('')
      .setExpireAt(null)
      .setLang('fr');
    try {
      localStorage.setItem(this._sessionKey, JSON.stringify(user));
    } catch (e: any) {
      return { title: 'STORAGE_FAILED', message: e.message, error: true };
    }

    return {
      title: 'SUCCESS',
      message: `'${username}' has been successfully logged out.`,
      error: false,
    };
  }

  public getUser(): IUser {
    const stringifyUser = localStorage.getItem(this._sessionKey);

    if (!stringifyUser) {
      return new User();
    }

    return Object.assign(new User(), JSON.parse(stringifyUser));
  }
}

export const security = new Security();
