import React from 'react';
import { useApi } from 'Services';

type TCurrentUser = {
  user_id: number;
  user_last_name: string;
  user_first_name: string;
  user_profile_name: string;
  user_cli_id: number | null;
  user_profile_id: 1 | 2 | 3;
  struct_rattach_id: number | null;
  struct_rattach_name: string | null;
  reseau_rattach_name: string | null;
  service_rattach_code: string | null;
  service_rattach_name: string | null;
};

export interface IAuthStore {
  onGetCurrentUser: () => void;
  currentUser?: TCurrentUser;
}

const defaultStore: IAuthStore = {
  onGetCurrentUser: () => undefined,
  currentUser: undefined,
};

export const AuthContext = React.createContext(defaultStore);

export const AuthProvider = ({ children }: React.PropsWithChildren) => {
  /**
   * -----------------------------------------------------------
   * HOOKS
   * -----------------------------------------------------------
   */
  const { send, data: currentUserData } = useApi<any>({
    waitForAuthenticated: true,
  });

  /**
   * -----------------------------------------------------------
   * FUNCTIONS
   * -----------------------------------------------------------
   */
  const onGetCurrentUser = React.useCallback(() => {
    send('userInfo');
  }, [send]);

  /**
   * -----------------------------------------------------------
   * VARIABLES
   * -----------------------------------------------------------
   */
  const initialState: IAuthStore = React.useMemo(
    () => ({
      onGetCurrentUser,
      currentUser: currentUserData?.data,
    }),
    [currentUserData?.data, onGetCurrentUser],
  );

  /**
   * -----------------------------------------------------------
   * RENDER
   * -----------------------------------------------------------
   */
  return (
    <AuthContext.Provider value={initialState}>{children}</AuthContext.Provider>
  );
};
