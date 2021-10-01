import React, { useCallback, useEffect, useMemo, useState } from 'react';
import IdleTimer from 'react-idle-timer';
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

  const { send, request } = useApi<void>({ promise: true });
  request.setBearerToken(jwt);

  const login = useCallback(
    async (token: string) => {
      const { body } = await send('login', {}, { token });
      const user = new User();
      user.fromJwt(body.data.jwt);
      security.persistUser(user);
      setUser(user);
    },
    [send, security, setUser],
  );

  const logout = useCallback(() => {
    const { error } = security.logout(user);
    if (!error) {
      setUser(new User());
    }
    window.location.href = getEnv('LOGOUT_REDIRECT');
  }, [security, user, setUser]);

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
    let timeout: ReturnType<typeof setTimeout> = setTimeout(() => '', 1000);

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
  }, [send, jwt, context.data, setUser]);

  const idleTimeout = parseInt(getEnv('IDLE_TIMEOUT')) * 1000;

  return (
    <SecurityContext.Provider value={context}>
      <IdleTimer timeout={idleTimeout} onIdle={logout} />
      {children}
    </SecurityContext.Provider>
  );
};
