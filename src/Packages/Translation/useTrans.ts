import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';
import { useCallback } from 'react';

export type UseTransReturnType = [TFunction, (language: string) => void, string | undefined];

export const useTrans = (namespace?: string | string[]): UseTransReturnType => {
  const { t, i18n } = useTranslation(namespace);

  const changeLanguage = useCallback(
    (language: string) => {
      i18n.changeLanguage(language);
    },
    [i18n],
  );

  return [t, changeLanguage, i18n.store.options.lng];
};
