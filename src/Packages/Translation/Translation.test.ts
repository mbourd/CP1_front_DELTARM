import { translation } from './Translation';

describe('Translation', () => {
  it('should add resources', () => {
    translation.init();

    translation.addResource('en', 'common', {
      connexion: 'Connexion message',
      remove: 'Remove message',
    });

    expect(translation.getAllResources()).toStrictEqual({
      en: {
        common: { connexion: 'Connexion message', remove: 'Remove message' },
      },
    });
  });

  it('should add multiple resources once', () => {
    translation.init();
    translation.addBatchResource({
      common: {
        name: {
          en: 'Nom',
          fr: 'Name',
        },
      },
    });

    expect(translation.getAllResources()).toStrictEqual({
      en: { common: { name: 'Nom' } },
      fr: { common: { name: 'Name' } },
    });
  });

  it('should translate message', () => {
    translation.setLanguage('en').init();
    translation.addBatchResource({
      default: {
        message: {
          en: 'Hello world!',
          fr: 'Bonjour tout le monde !',
        },
      },
    });

    expect(translation.trans('default:message')).toStrictEqual('Hello world!');
  });
});
