// @ts-check

import { translation } from './Translation';

describe('Assert Packages/Translation.ts', () => {
  beforeEach(() => {
    cy.viewport(0, 0);
  });

  it('Should add multiple resources once', () => {
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

    expect(translation.getAllResources()).to.deep.equal({
      en: { common: { name: 'Nom' } },
      fr: { common: { name: 'Name' } },
      de: { common: { name: 'Name' } },
    });
  });

  it('Should translate message in en', () => {
    translation.init().changeLanguage('en');
    translation.addBatchResource({
      default: {
        message: {
          en: 'Hello world!',
          fr: 'Bonjour tout le monde !',
          de: 'Hallo Welt!',
        },
      },
    });

    const msg1 = translation.getResource('en', 'default')?.['message'];
    const msg2 = translation.trans('default:message');
    expect(msg1).to.deep.equal('Hello world!');
    expect(msg2).to.deep.equal('Hello world!');
  });

  // it('Should translate message in de', () => {
  //   translation.init().changeLanguage('de');
  //   translation.addBatchResource({
  //     default: {
  //       message: {
  //         en: 'Hello world!',
  //         fr: 'Bonjour tout le monde !',
  //         de: 'Hallo Welt!',
  //       },
  //     },
  //   });

  //   const msg1 = translation.getResource('de', 'default')?.['message'];
  //   const msg2 = translation.trans('default:message');
  //   expect(msg1).to.deep.equal('Hallo Welt!');
  //   expect(msg2).to.deep.equal('Hallo Welt!');
  // });
});
