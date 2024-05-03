import { translation, useTrans } from 'Services';
import { useCallback } from 'react';

const namespace = 'MainHeader';
const transMainHeader = {
  brand: {
    en: 'French BPI',
    fr: 'BPI France',
    de: 'BPI Frankreich',
  },
  reports: {
    en: 'Reports',
    fr: 'Rapports',
    de: 'Berichte',
  },
  tutorials: {
    en: 'Tutorials',
    fr: 'Tutoriels',
    de: 'Tutorials',
  },
  comments: {
    en: 'Comments',
    fr: 'Commentaires',
    de: 'Kommentare',
  },
  english: {
    en: 'English',
    fr: 'Anglais',
    de: 'Englisch',
  },
  french: {
    en: 'French',
    fr: 'Français',
    de: 'Französisch',
  },
};
translation.addBatchResource({
  MainHeader: transMainHeader,
});
type UseTransMainHeaderReturnType = {
  trans: (
    key: keyof typeof transMainHeader,
    options?: Record<any, any>,
  ) => string;
  transMainHeader: typeof transMainHeader;
  currentLang: string | undefined;
  changeLang: (lang: string) => void;
};
export const useTransMainHeader = (): UseTransMainHeaderReturnType => {
  const [trans, changeLang, currentLang] = useTrans(namespace);
  const translate = useCallback(
    (key: keyof typeof transMainHeader, options?: any): string => {
      return trans(key, options);
    },
    [trans],
  );

  return { trans: translate, transMainHeader, currentLang, changeLang };
};
