import React, { useCallback, useEffect, useMemo, useState } from 'react';
import IdleTimer from 'react-idle-timer';
import { router } from 'Packages/Router';
import { ISecurity, IUser, JwtData, User } from 'Packages/Security';
import { useApi } from 'Services/Api';
import { getEnv } from 'Services/Helpers';

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
      try {
        const { body } = await send('loginDev');
        const user = new User();
        user.fromJwt(body.data.jwt);
        security.persistUser(user);
        setUser(user);
        router.redirectTo('dashboard');
      } catch {
        router.redirectTo('loginError');
      }
    },
    [send, security],
  );

  const logout = useCallback(() => {
    security.logout(user);
    setUser(new User());
    window.location.href = getEnv('LOGOUT_REDIRECT');
  }, [security, user]);

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

  const idleTimeout = parseInt(getEnv('IDLE_TIMEOUT')) * 1000;

  return (
    <SecurityContext.Provider value={context}>
      <IdleTimer timeout={idleTimeout} onIdle={logout} />
      {children}
    </SecurityContext.Provider>
  );
};
