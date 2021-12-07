import { translation } from 'Packages/Translation';
export * from 'Packages/Translation';

translation
  .useReact()
  .useSuspense(true)
  .setLanguage('fr')
  .setDebug(false)
  .init();

export { translation };
