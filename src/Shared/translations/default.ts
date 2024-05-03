import { translation, useTrans } from 'Services';
import { useCallback } from 'react';

const namespace = 'Default';
const transDefault = {
  loading: {
    en: 'Loading...',
    fr: 'Chargement...',
    de: 'Wird geladen...',
  },
  serverErrorLabel: {
    en: 'Report the problem',
    fr: 'Signaler le problème',
    de: 'Melden Sie das Problem',
  },
  serverErrorMessage: {
    en: 'The server is not responding.',
    fr: 'Le serveur ne répond pas.',
    de: 'Der Server antwortet nicht.',
  },
  filesToBeProcessed: {
    en: 'Files to be processed',
    fr: 'Dossiers à traiter',
    de: 'Zu verarbeitende Dateien',
  },
  filesInValidation: {
    en: 'Files in validation',
    fr: 'Dossiers en validation',
    de: 'Dateien in Validierung',
  },
  rejectedFiles: {
    en: 'Rejected files',
    fr: 'Dossiers rejetés',
    de: 'Abgelehnte Dateien',
  },
  allFiles: {
    en: 'All files',
    fr: 'Tous les dossiers',
    de: 'Alle Dateien',
  },
  logout: {
    en: 'Logout',
    fr: 'Déconnexion',
    de: 'Ausloggen',
  },
  information: {
    en: 'Information',
    fr: 'Informations',
    de: 'Information',
  },
  settingUp: {
    en: 'Setting up',
    fr: 'Mise en place',
    de: 'Einrichten',
  },
  disbursement: {
    en: 'Disbursement',
    fr: 'Décaissement',
    de: 'Auszahlung',
  },
  postDisbursement: {
    en: 'Post Disbursement',
    fr: 'Post Décaissement',
    de: 'Postauszahlung',
  },
  cloture: {
    en: 'Cloture',
    fr: 'Cloture',
    de: 'Fechten',
  },
};
translation.addBatchResource({
  Default: transDefault,
});
type UseTransDefaultReturnType = [
  (key: keyof typeof transDefault, options?: any) => string,
  typeof transDefault,
];
export const useTransDefault = (): UseTransDefaultReturnType => {
  const [trans, changeLang, lang] = useTrans(namespace);
  const _trans = useCallback(
    (key: keyof typeof transDefault, options?: any): string => {
      return trans(key, options);
    },
    [trans],
  );

  return [_trans, transDefault];
};
