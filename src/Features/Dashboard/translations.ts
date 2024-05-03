import { translation, useTrans } from 'Services';
import { useCallback } from 'react';

const namespace = 'Dashboard';
const transDashboard = {
  pageTitle: {
    en: 'Dashboard',
    fr: 'Tableau de bord',
    de: 'Armaturenbrett',
  },
  file: {
    en: 'File',
    fr: 'Dossier',
    de: 'Datei',
  },
  file_plurial: {
    en: 'Files',
    fr: 'Dossiers',
    de: 'Dateien',
  },
  state2role0: {
    en: 'Files in Validation',
    fr: 'Dossiers en Validation',
    de: 'Dateien in Validierung',
  },
  state2role1: {
    en: 'Files to Validate',
    fr: 'Dossiers à Valider',
    de: 'Zu validierende Dateien',
  },
  noClientFound: {
    en: 'No client found',
    fr: 'Aucun client trouvé',
    de: 'Keine Kunden gefunden',
  },
  noRecordAvailable: {
    en: 'No records available',
    fr: 'Aucun dossier disponible',
    de: 'Keine Aufzeichnungen verfügbar',
  },
  noServerResponding: {
    en: 'The server is not responding',
    fr: 'Le serveur ne répond pas',
    de: 'Der Server antwortet nicht',
  },
  responseFromKSIOP: {
    en: 'Response from KSIOP',
    fr: 'Réponse de KSIOP',
    de: 'Antwort von KSIOP',
  },
  fileNotFound: {
    en: 'File not found!',
    fr: 'Dossier introuvable !',
    de: 'Datei nicht gefunden!',
  },
  manage: {
    en: 'Manage',
    fr: 'Gestion',
    de: 'Verwalten',
  },
  cancelSearch: {
    en: 'Cancel search',
    fr: 'Annuler la recherche',
    de: 'Suche abbrechen',
  },
};
translation.addBatchResource({
  Dashboard: transDashboard,
});
type UseTransDashboardReturnType = {
  trans: (
    key: keyof typeof transDashboard,
    options?: Record<any, any>,
  ) => string;
  transDashboard: typeof transDashboard;
  currentLang: string | undefined;
  changeLang: (lang: string) => void;
};
export const useTransDashboard = (): UseTransDashboardReturnType => {
  const [trans, changeLang, currentLang] = useTrans(namespace);
  const translate = useCallback(
    (key: keyof typeof transDashboard, options?: Record<any, any>): string => {
      return trans(key, options);
    },
    [trans],
  );

  return { trans: translate, transDashboard, currentLang, changeLang };
};
