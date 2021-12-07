import { StringMap, TFunctionKeys, TFunctionResult, TOptions } from 'i18next';

export type FallbackLanguageType = false | string | string[];
export type SupportedLanguagesType = false | string[];
export type FallbackNamespaceType = false | string | string[];
export type MissingKeyHandlerType =
  | false
  | ((
      languages: string[],
      namespace: string,
      key: string,
      fallbackValue: string,
    ) => void);

export type InitOptionsType = {
  lng: string;
  fallbackLng: FallbackLanguageType;
  supportedLngs: SupportedLanguagesType;
  debug: boolean;
  defaultNS: string;
  fallbackNS: FallbackNamespaceType;
  missingKeyHandler: MissingKeyHandlerType;
  interpolation: {
    escapeValue: boolean;
  };
  react: {
    useSuspense: boolean;
  };
};

export type BatchResourceType = {
  [namespaces: string]: {
    [keys: string]: {
      [languages: string]: string;
    };
  };
};

export interface ITranslation {
  /**
   * Main translation function.
   * @see https://www.i18next.com/translation-function/essentials
   */
  trans: <
    TResult extends TFunctionResult = string,
    TKeys extends TFunctionKeys = string,
    // eslint-disable-next-line @typescript-eslint/ban-types
    TInterpolationMap extends object = StringMap
  >(
    key: TKeys | TKeys[],
    options?: TOptions<TInterpolationMap> | string,
  ) => TResult;
  /**
   * Changes the language.
   */
  changeLanguage: (language: string) => ITranslation;

  /**
   * Set it to false if you do not want to use Suspense.
   * @default true
   */
  useSuspense: (suspense: boolean) => ITranslation;

  /**
   * Adds multiple resources once.
   */
  addBatchResource: (
    resources: BatchResourceType,
    deep?: boolean,
    overwrite?: boolean,
  ) => ITranslation;
  /**
   * Adds a complete resource.
   * Setting deep param to true will extend existing translations in that file.
   * Setting overwrite to true it will overwrite existing translations in that file.
   */
  addResource: (
    language: string,
    namespace: string,
    resources: any,
    deep?: boolean,
    overwrite?: boolean,
  ) => ITranslation;
  /**
   * Checks if a resource exists.
   */
  hasResource: (language: string, namespace: string) => boolean;

  /**
   * Returns a resource resource.
   */
  getResource: <T>(language: string, namespace: string) => T;

  /**
   * Removes an existing resource.
   */
  removeResource: (language: string, namespace: string) => ITranslation;

  /**
   * Sets language to use (overrides language detection).
   * @default 'en'
   */
  setLanguage: (language: string) => ITranslation;
  /**
   * Gets language to use.
   */
  getLanguage: () => string;
  /**
   * Sets language to use if translations in user language are not available.
   * @default ['en', 'fr']
   */
  setFallbackLanguage: (language: FallbackLanguageType) => ITranslation;
  /**
   * Gets language to use if translations in user language are not available.
   */
  getFallbackLanguage: () => FallbackLanguageType;
  /**
   * Sets array of allowed languages.
   * @default ['en', 'fr']
   */
  setSupportedLanguage: (languages: SupportedLanguagesType) => ITranslation;
  /**
   * Gets array of allowed languages.
   */
  getSupportedLanguage: () => SupportedLanguagesType;
  /**
   * Sets logs info level to console output. Helps finding issues with loading not working.
   * @default false
   */
  setDebug: (debug: boolean) => ITranslation;
  /**
   * Gets logs info level to console output. Helps finding issues with loading not working.
   */
  getDebug: () => boolean;
  /**
   * Sets default namespace used if not passed to translation function.
   * @default 'common'
   */
  setDefaultNamespace: (namespace: string) => ITranslation;
  /**
   * Gets default namespace used if not passed to translation function.
   */
  getDefaultNamespace: () => string;
  /**
   * Sets string or array of namespaces to lookup key if not found in given namespace.
   * @default false
   */
  setFallbackNamespace: (language: FallbackNamespaceType) => ITranslation;
  /**
   * Gets string or array of namespaces to lookup key if not found in given namespace.
   */
  getFallbackNamespace: () => FallbackNamespaceType;
  /**
   * Sets used for custom missing key handling (needs saveMissing set to true!).
   * @default false
   */
  setMissingKeyHandler: (handler: MissingKeyHandlerType) => ITranslation;
  /**
   * Gets used for custom missing key handling (needs saveMissing set to true!).
   */
  getMissingKeyHandler: () => MissingKeyHandlerType;
  /**
   * Escape passed in values to avoid xss injection
   * @default false
   */
  escapeValue: (escape: boolean) => ITranslation;
  /**
   * Pass the i18n instance to react-i18next. Must call before init method.
   */
  useReact: () => ITranslation;
  /**
   * Detect user language. Must call before init method.
   * @see https://github.com/i18next/i18next-browser-languageDetector
   */
  detectLanguage: () => ITranslation;
  /**
   * Initialize translation.
   */
  init: () => ITranslation;
  /**
   * Sets initial options.
   * @param options
   */
  setOptions: (options: InitOptionsType) => ITranslation;
  /**
   * Gets initial options.
   */
  getOptions: () => InitOptionsType;
}
