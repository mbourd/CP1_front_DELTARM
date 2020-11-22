import { FromJwtUserType, IUser, FromJwtReturnType } from './types';
import { security } from '../Security';

export class User implements IUser {
  public static Roles = { ANON: 'anon' };

  private _roles: string[] = [];
  private _email: string | null = null;
  private _jwt: string | null = null;
  private _username: string = User.Roles.ANON;
  private _expireAt: Date | null = null;

  public addRole(role: string): this {
    this._roles.push(role);

    return this;
  }

  public getEmail(): string | null {
    return this._email;
  }

  public getRoles(): string[] {
    return this._roles;
  }

  public getJwt(): string | null {
    return this._jwt;
  }

  public getUsername(): string {
    return this._username;
  }

  public hasRole(role: string): boolean {
    // Todo: Use role hierarchy
    return this._roles.includes(role);
  }

  public isGranted(role: string): boolean {
    // Todo
    return false;
  }

  /**
   * This function checks if user is logged. It based on JWT.
   */
  public isLogged(): boolean {
    if (this._jwt === null) {
      return false;
    }

    return !this.isJwtExpired();
  }

  public isSessionExpired(): boolean {
    const expireAt = this.getExpireAt();

    return expireAt ? new Date() > expireAt : false;
  }

  public isJwtExpired(): boolean {
    const jwt = this._jwt;

    if (!jwt) {
      return false;
    }

    const decodedJwt = security.decodeJwtToken<{ exp: number }>(jwt);

    if (!decodedJwt) {
      return false;
    }

    if (!decodedJwt.exp) {
      return false;
    }

    return new Date() > new Date(decodedJwt.exp * 1000);
  }

  public fromJwt(token: string): FromJwtReturnType {
    const decodedJwt = security.decodeJwtToken<FromJwtUserType>(token);

    if (!decodedJwt) {
      return { message: 'Error while decoding JWT', error: true };
    }

    // Set roles
    if (decodedJwt.roles) {
      this._roles = decodedJwt.roles;
    }

    // Set email
    if (decodedJwt.email) {
      this._email = decodedJwt.email;
    }

    // Set username
    if (decodedJwt.username) {
      this._username = decodedJwt.username;
    }

    // Set expireAt
    if (decodedJwt.exp) {
      this._expireAt = new Date(decodedJwt.exp * 1000);
    }

    this._jwt = token;

    return { error: false };
  }

  public removeRole(role: string): this {
    const index = this._roles.indexOf(role);
    if (index > -1) {
      this._roles.splice(index, 1);
    }

    return this;
  }

  public setEmail(email: string | null): this {
    this._email = email;

    return this;
  }

  public setRoles(roles: string[]): this {
    this._roles = roles;

    return this;
  }

  public setJwt(token: string | null): this {
    this._jwt = token;

    return this;
  }

  public hasJwt(): boolean {
    return !!this._jwt;
  }

  public setUsername(username: string): this {
    this._username = username;

    return this;
  }

  public setExpireAt(date: Date | null): this {
    this._expireAt = date;

    return this;
  }

  public getExpireAt(): Date | null {
    return this._expireAt;
  }
}
