import { router } from 'Packages/Router';
import { ISecurity, IUser, JwtData, User } from 'Packages/Security';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useApi } from 'Services/Api';

export interface ISecurityProviderContext {
  user: IUser;
  jwt: string | null;
  data: any;
  login: (token: string) => void;
  logout: () => void;
}

export const SecurityContext = React.createContext<ISecurityProviderContext>({
  user: new User(),
  jwt: null,
  data: {},
  login: () => undefined,
  logout: () => undefined,
});

export interface ISecurityProviderProps {
  security: ISecurity;
}

export const SecurityProvider: React.FC<ISecurityProviderProps> = ({ security, children }): React.ReactElement => {
  const [user, setUser] = useState<IUser>(security.getUser());
  const jwt = user.getJwt();

  const { send, request } = useApi<unknown>(true);
  request.setBearerToken(jwt);

  const login = useCallback(
    async (token: string) => {
      const { body } = await send('login', {}, { token });
      const user = new User();
      user.fromJwt(body.data.jwt);
      setUser(user);
      router.redirectTo('dashboard');
    },
    [send],
  );

  const logout = useCallback(async () => {
    setUser(new User());
  }, []);

  const context = useMemo(
    () => ({
      user,
      jwt,
      data: (jwt ? security.decodeJwtToken<JwtData>(jwt) : {}) as Partial<JwtData>,
      login,
      logout,
    }),
    [security, user, jwt, login, logout],
  );

  useEffect(() => {
    security.persistUser(user);
  }, [user, security]);

  useEffect(() => {
    let timeout: number | null = null;

    if (jwt && context.data.exp) {
      const milliseconds = (context.data.exp * 1000 - Date.now()) / 2;

      timeout = setTimeout(async () => {
        const { body } = await send('refresh');
        const user = new User();
        user.fromJwt(body.data.jwt);
        setUser(user);
      }, milliseconds);
    }

    return () => {
      if (timeout !== null) {
        clearTimeout(timeout);
      }
    };
  }, [send, jwt, context.data]);

  return <SecurityContext.Provider value={context}>{children}</SecurityContext.Provider>;
};
