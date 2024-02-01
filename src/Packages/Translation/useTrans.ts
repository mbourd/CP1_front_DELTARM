import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';

export type UseTransReturnType = [
  (k: string | string[], o?: Record<any, any>) => string,
  (language: string) => void,
  string | undefined,
];

export const useTrans = (namespace?: string | string[]): UseTransReturnType => {
  const { t, i18n } = useTranslation(namespace);
  const changeLanguage = useCallback(
    (language: string) => {
      i18n.changeLanguage(language);
    },
    [i18n],
  );

  const translate = (k: string | string[], o?: Record<any, any>): string => {
    return t(k, o) as string;
  };

  return [translate, changeLanguage, i18n.store.options.lng];
};
