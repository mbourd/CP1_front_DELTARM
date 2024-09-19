import React from 'react';
import IdleTimer from 'react-idle-timer';
import { ISecurity, IUser, JwtData, User } from 'Packages/Security';
import { useApi } from 'Services/Api';
import { getEnv } from 'Services/Helpers';
import version from '../../build-version.json';

export interface ISecurityProviderContext {
  user: IUser;
  jwt: string;
  data: any;
  logout: () => void;
  login: (token: string) => void;
}

export const SecurityContext = React.createContext<ISecurityProviderContext>({
  user: new User(),
  jwt: '',
  data: {},
  login: () => undefined,
  logout: () => undefined,
});

export interface ISecurityProviderProps {
  security: ISecurity;
}

export const SecurityProvider: React.FC<
  React.PropsWithChildren<ISecurityProviderProps>
> = ({ security, children }): React.ReactElement => {
  /**
   * -----------------------------------------------------------
   * HOOKS
   * -----------------------------------------------------------
   */
  const { send, request } = useApi<void>({ promise: true });

  /**
   * -----------------------------------------------------------
   * STATES
   * -----------------------------------------------------------
   */
  const [user, setUser] = React.useState<IUser>(security.getUser());

  /**
   * -----------------------------------------------------------
   * FUNCTIONS
   * -----------------------------------------------------------
   */
  const login = React.useCallback(
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

  const logout = React.useCallback(() => {
    const { error } = security.logout(user);
    if (!error) {
      setUser(new User());
    }
    window.location.href = getEnv('LOGOUT_REDIRECT');
  }, [security, user, setUser]);

  /**
   * -----------------------------------------------------------
   * VARIABLES
   * -----------------------------------------------------------
   */
  const idleTimeout = parseInt(getEnv('IDLE_TIMEOUT')) * 1000;
  const jwt = user.getJwt();
  request.setBearerToken(jwt);

  const context = React.useMemo(
    () => ({
      user,
      jwt,
      login,
      logout,
      data: (jwt
        ? security.decodeJwtToken<JwtData>(jwt)
        : {}) as Partial<JwtData>,
    }),
    [security, user, jwt, login, logout],
  );

  /**
   * -----------------------------------------------------------
   * CYCLE LIFE
   * -----------------------------------------------------------
   */
  React.useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> = setTimeout(() => '', 1000);

    if (jwt && context.data.exp && !user.isJwtExpired()) {
      const milliseconds = (context.data.exp * 1000 - Date.now()) / 2;

      timeout = setTimeout(async () => {
        const { body } = await send('refresh');
        const user = new User();
        user.fromJwt(body.data.jwt);
        security.persistUser(user);
        setUser(user);
      }, milliseconds);
    }

    return () => {
      if (timeout !== null) {
        clearTimeout(timeout);
      }
    };
  }, [send, jwt, context.data.exp, setUser, user, security]);

  /**
   * -----------------------------------------------------------
   * RENDER
   * -----------------------------------------------------------
   */
  return (
    <SecurityContext.Provider value={context}>
      <IdleTimer timeout={idleTimeout} onIdle={logout} />
      {children}
    </SecurityContext.Provider>
  );
};
