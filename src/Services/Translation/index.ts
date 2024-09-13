import { translation } from 'Packages/Translation';
export * from 'Packages/Translation';

const lang: any = localStorage.getItem('lang');

translation
  .useReact()
  .useSuspense(true)
  .setLanguage(lang)
  .setDebug(false)
  .init();

export { translation };
