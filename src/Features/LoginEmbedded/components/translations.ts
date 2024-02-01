import { translation, useTrans } from 'Services';
import { useCallback } from 'react';

const namespace = 'Login';
const transLogin = {
  pageTitle: {
    en: 'Logging in...',
    fr: 'Connexion en cours...',
    de: 'Einloggen...',
  },
  errorTitle: {
    en: "Couldn't log in",
    fr: "L'authentification a échoué",
    de: 'Anmeldung nicht möglich',
  },
  logoutButton: {
    en: 'Logout',
    fr: 'Déconnexion',
    de: 'Ausloggen',
  },
};
translation.addBatchResource({
  [namespace]: transLogin,
});
type UseTransLoginReturnType = {
  trans: (key: keyof typeof transLogin, options?: Record<any, any>) => string;
  transLogin: typeof transLogin;
  currentLang: string | undefined;
  changeLang: (lang: string) => void;
};
export const useTransLoginEmbedded = (): UseTransLoginReturnType => {
  const [trans, changeLang, currentLang] = useTrans(namespace);
  const translate = useCallback(
    (key: keyof typeof transLogin, options?: any): string => {
      return trans(key, options);
    },
    [trans],
  );

  return { trans: translate, transLogin, currentLang, changeLang };
};
