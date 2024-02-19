import { translation } from './Translation';

describe('Translation', () => {
  it('should add multiple resources once', () => {
    translation.init();
    translation.addBatchResource({
      common: {
        name: {
          en: 'Nom',
          fr: 'Name',
          de: 'Name',
        },
      },
    });

    expect(translation.getAllResources()).toStrictEqual({
      en: { common: { name: 'Nom' } },
      fr: { common: { name: 'Name' } },
      de: { common: { name: 'Name' } },
    });
  });

  it('should translate message', () => {
    translation.setLanguage('en').init();
    translation.addBatchResource({
      default: {
        message: {
          en: 'Hello world!',
          fr: 'Bonjour tout le monde !',
          de: 'Hallo Welt!',
        },
      },
    });

    expect(translation.trans('default:message')).toStrictEqual('Hello world!');
  });
});
