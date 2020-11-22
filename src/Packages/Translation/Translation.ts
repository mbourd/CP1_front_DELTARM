import i18n, { StringMap, TFunctionKeys, TFunctionResult, TOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import {
  ITranslation,
  InitOptionsType,
  FallbackLanguageType,
  SupportedLanguagesType,
  FallbackNamespaceType,
  MissingKeyHandlerType,
  BatchResourceType,
} from './types';

/**
 * Translation service.
 *
 * @example
 *  import translation from '@deltarm/translation';
 *  // ...
 *  translation.useReact().detectLanguage().setDebug(true).init();
 *  // ..
 */
export class Translation implements ITranslation {
  private _options: InitOptionsType = {
    lng: 'en',
    fallbackLng: ['en', 'fr'],
    supportedLngs: ['en', 'fr'],
    debug: false,
    defaultNS: 'common',
    fallbackNS: false,
    missingKeyHandler: false,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  };

  public trans<
    TResult extends TFunctionResult = string,
    TKeys extends TFunctionKeys = string,
    // eslint-disable-next-line @typescript-eslint/ban-types
    TInterpolationMap extends object = StringMap
  >(key: TKeys | TKeys[], options?: TOptions<TInterpolationMap> | string): TResult {
    return i18n.t<TResult, TKeys, TInterpolationMap>(key, options);
  }

  public changeLanguage(language: string): this {
    i18n.changeLanguage(language);

    return this;
  }

  public useSuspense(suspense: boolean): this {
    this._options.react.useSuspense = suspense;

    return this;
  }

  public addBatchResource(resources: BatchResourceType): this {
    const namespaces = Object.keys(resources);
    namespaces.map((namespace) => {
      const keys = Object.keys(resources[namespace]);
      keys.map((key) => {
        const languages = Object.keys(resources[namespace][key]);
        languages.map((language) => {
          i18n.addResource(language, namespace, key, resources[namespace][key][language]);

          return language;
        });

        return key;
      });

      return namespace;
    });

    return this;
  }

  public addResource(language: string, namespace: string, resources: any, deep?: boolean, overwrite?: boolean): this {
    i18n.addResourceBundle(language, namespace, resources, deep, overwrite);

    return this;
  }

  public hasResource(language: string, namespace: string): boolean {
    return i18n.hasResourceBundle(language, namespace);
  }

  public getResource<T>(language: string, namespace: string): T {
    return i18n.getResourceBundle(language, namespace);
  }

  public getAllResources(): any {
    return i18n.store.data;
  }

  public removeResource(language: string, namespace: string): this {
    i18n.removeResourceBundle(language, namespace);

    return this;
  }

  public escapeValue(escape: boolean): this {
    this._options.interpolation.escapeValue = escape;

    return this;
  }

  public setMissingKeyHandler(handler: MissingKeyHandlerType): this {
    this._options.missingKeyHandler = handler;

    return this;
  }

  public getMissingKeyHandler(): MissingKeyHandlerType {
    return this._options.missingKeyHandler;
  }

  public setFallbackNamespace(namespace: FallbackNamespaceType): this {
    this._options.fallbackNS = namespace;

    return this;
  }

  public getFallbackNamespace(): FallbackNamespaceType {
    return this._options.fallbackNS;
  }

  public setDefaultNamespace(namespace: string): this {
    this._options.defaultNS = namespace;

    return this;
  }

  public getDefaultNamespace(): string {
    return this._options.defaultNS;
  }

  public setDebug(debug: boolean): this {
    this._options.debug = debug;

    return this;
  }

  public getDebug(): boolean {
    return this._options.debug;
  }

  public setSupportedLanguage(languages: SupportedLanguagesType): this {
    this._options.supportedLngs = languages;

    return this;
  }

  public getSupportedLanguage(): SupportedLanguagesType {
    return this._options.supportedLngs;
  }

  public setFallbackLanguage(language: FallbackLanguageType): this {
    this._options.fallbackLng = language;

    return this;
  }

  public getFallbackLanguage(): FallbackLanguageType {
    return this._options.fallbackLng;
  }

  public setLanguage(language: string): this {
    this._options.lng = language;

    return this;
  }

  public getLanguage(): string {
    return this._options.lng;
  }

  public getOptions(): InitOptionsType {
    return this._options;
  }

  public setOptions(options: InitOptionsType): this {
    this._options = options;

    return this;
  }

  public useReact(): this {
    i18n.use(initReactI18next);

    return this;
  }

  public detectLanguage(): this {
    i18n.use(LanguageDetector);

    return this;
  }

  public init(): this {
    i18n.init(this._options);

    return this;
  }
}

export const translation = new Translation();
