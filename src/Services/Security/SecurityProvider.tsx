import React, { useCallback, useEffect, useMemo, useState } from 'react';
import IdleTimer from 'react-idle-timer';
import { ISecurity, IUser, JwtData, User } from 'Packages/Security';
import { useApi } from 'Services/Api';
import { getEnv } from 'Services/Helpers';
import version from '../../build-version.json';

export interface ISecurityProviderContext {
  user: IUser;
  jwt: string | null;
  data: any;
  login: (token: string) => void;
  logout: () => void;
}

export interface IAppContext {
  logoUrl: string | null;
  appName: string | null;
  filePlaceholder: string | undefined;
  fileRegex: RegExp | string | null;
  titleName: string | null;
}

export const SecurityContext = React.createContext<ISecurityProviderContext>({
  user: new User(),
  jwt: null,
  data: {},
  login: () => undefined,
  logout: () => undefined,
});

export const AppContext = React.createContext<IAppContext>({
  logoUrl: null,
  appName: null,
  filePlaceholder: undefined,
  fileRegex: null,
  titleName: null,
});

export interface ISecurityProviderProps {
  security: ISecurity;
}

export const SecurityProvider: React.FC<ISecurityProviderProps> = ({
  security,
  children,
}): React.ReactElement => {
  const [user, setUser] = useState<IUser>(security.getUser());
  const jwt = user.getJwt();

  const { send, request } = useApi<void>({ promise: true });
  const {
    send: clientInfos,
    data: dataClientInfos,
    request: requestClientInfos,
  } = useApi<any>({
    waitForAuthenticated: true,
  });
  request.setBearerToken(jwt);
  requestClientInfos.setBearerToken(jwt);

  const login = useCallback(
    async (token: string) => {
      const { body } = await send(
        'login',
        {},
        {
          token,
          front_version: `${version.buildMajor}.${version.buildMinor}.${version.buildRevision}`,
        },
      );
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
      data: (jwt
        ? security.decodeJwtToken<JwtData>(jwt)
        : {}) as Partial<JwtData>,
      login,
      logout,
    }),
    [security, user, jwt, login, logout],
  );

  useEffect(() => {
    if (user.isJwtExpired()) {
      return;
    }
    if (context.data.cli_id) {
      clientInfos('clientInfo', {}, { cli_id: context.data.cli_id });
    }
  }, [context.data.cli_id, clientInfos, user]);

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

  const appContext = useMemo(
    () => ({
      logoUrl: dataClientInfos?.data[0].cli_logo_url,
      appName: dataClientInfos?.data[0].cli_app_name,
      filePlaceholder: dataClientInfos?.data[0].file_search_placeholder,
      fileRegex: dataClientInfos?.data[0].cli_file_name_regex,
      titleName: dataClientInfos?.data[0].cli_name,
    }),
    [dataClientInfos],
  );

  const idleTimeout = parseInt(getEnv('IDLE_TIMEOUT')) * 1000;

  return (
    <SecurityContext.Provider value={context}>
      <AppContext.Provider value={appContext}>
        <IdleTimer timeout={idleTimeout} onIdle={logout} />
        {children}
      </AppContext.Provider>
    </SecurityContext.Provider>
  );
};
