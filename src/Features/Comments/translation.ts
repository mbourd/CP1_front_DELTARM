import { useCallback } from 'react';
import { translation, useTrans } from '../../Services';

const namespace = 'Comments';
const transComments = {
  validateMessage: {
    en: 'Press the ENTER key to validate your message',
    fr: 'Appuyez sur la touche ENTREE pour valider votre message',
    de: 'Drücken Sie die EINGABETASTE, um Ihre Nachricht zu bestätigen',
  },
};

translation.addBatchResource({
  Comments: transComments,
});

type UseTransCommentsReturnType = {
  trans: (
    key: keyof typeof transComments,
    options?: Record<any, any>,
  ) => string;
  transComments: typeof transComments;
  currentLang: string | undefined;
  changeLang: (lang: string) => void;
};
export const useTransComments = (): UseTransCommentsReturnType => {
  const [trans, changeLang, currentLang] = useTrans(namespace);
  const translate = useCallback(
    (key: keyof typeof transComments, options?: Record<any, any>): string => {
      return trans(key, options);
    },
    [trans],
  );

  return { trans: translate, transComments, currentLang, changeLang };
};
