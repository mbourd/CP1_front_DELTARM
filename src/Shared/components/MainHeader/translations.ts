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
type UseTransMainHeaderReturnType = [
  (key: keyof typeof transMainHeader, options?: any) => string,
  typeof transMainHeader,
];
export const useTransMainHeader = (): UseTransMainHeaderReturnType => {
  const [trans, changeLang, lang] = useTrans(namespace);
  const _trans = useCallback(
    (key: keyof typeof transMainHeader, options?: any): string => {
      return trans(key, options);
    },
    [trans],
  );

  return [_trans, transMainHeader];
};
