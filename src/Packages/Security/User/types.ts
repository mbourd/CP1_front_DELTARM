export interface IUser {
  setEmail: (email: string | null) => IUser;
  getEmail: () => string | null;
  setUsername: (username: string) => IUser;
  getUsername: () => string;
  setLang: (lang: string) => IUser;
  getLang: () => string;
  setRoles: (roles: string[]) => IUser;
  getRoles: () => string[];
  addRole: (role: string) => IUser;
  removeRole: (role: string) => IUser;
  hasRole: (role: string) => boolean;
  isGranted: (role: string) => boolean;
  setJwt: (token: string | null) => IUser;
  hasJwt: () => boolean;
  getJwt: () => string | null;
  setExpireAt: (date: Date | null) => IUser;
  getExpireAt: () => Date | null;
  isLogged: () => boolean;
  isSessionExpired: () => boolean;
  isJwtExpired: () => boolean;
  fromJwt: (token: string) => FromJwtReturnType;
}

export type FromJwtReturnType = {
  message?: string;
  error: boolean;
};

export type FromJwtUserType = {
  roles: string[];
  email: string;
  username: string;
  exp: number;
  lang: string;
};

export type JwtData = {
  exp: number;
  iat: number;
  cli_id: number;
  user_id: number;
  context: string;
  lang: string;
  session_id: string;
};
