// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/Text/TextControl.job4.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../cypress/utils/SetupTestsComponents';

import { TextControl } from './TextControl';
import type { IApiControl, IChapter } from '../../../../types';
import {
  _escapeForRegExp,
  _translate,
} from '../../../../../../../cypress/utils';
import RandExp from 'randexp';
import { apiRouter } from '../../../../../../Services/Api';
// import { composeStories } from '@storybook/react';
// import * as stories from './TextControl.stories';

describe('<TextControl />', () => {
  const trans_EN =
    _translate('en', 'Edit', 'mandatoryValue') ||
    'mandatoryValue|Valeur obligatoire';
  const trans_FR =
    _translate('fr', 'Edit', 'mandatoryValue') ||
    'mandatoryValue|Valeur obligatoire';
  const trans_DE =
    _translate('de', 'Edit', 'mandatoryValue') ||
    'mandatoryValue|Valeur obligatoire';
  const translations_mandatoryValue = [trans_EN, trans_FR, trans_DE];
  const control: IApiControl = {
    control_desc_1: null,
    control_desc_2: null,
    control_editable: false,
    control_conditional: false,
    control_id: '',
    control_mandatory: false,
    mandatory: false,
    control_previous_value: null,
    control_title: '',
    control_type: 'boolean',
    control_value: null,
    control_family: '',
    control_regex: null,
    control_regex_msg: null,
    control_manage_compliance: false,
    control_options: undefined,
    upload_detail: null,
    rich_text_detail: null,
    control_rejectable: null,
  };
  const fileId = '1234';
  const formState: IChapter[] = [
    {
      controls: [control],
      label: '',
      id: '',
    },
  ];
  const setFormState = () => {
    return undefined;
  };

  // it('poc: story book story component rendering', function () {
  //   const { Default } = composeStories(stories);
  //   cy.mount(
  //     <SetupTestsComponents>
  //       <Default />
  //     </SetupTestsComponents>,
  //   );
  // });
  // return;

  it('Should render', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
    };
    cy.mount(
      <SetupTestsComponents>
        <TextControl
          context={'edit'}
          control={_control}
          fileId={fileId}
          formState={formState}
          setFormState={setFormState}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('TextControl').find('input[type="text"]');
  });

  it('should make one request at a time and payload/queries not empty', function () {
    const val = '123456';
    const fileId = 'fileddd';
    const _control: IApiControl = {
      ...structuredClone(control),
      control_editable: true,
      editable: true,
      control_id: 'control_idd',
      control_family: 'cont_fam',
    };
    let reqCount = 0;

    cy.intercept(
      'POST',
      apiRouter.getRoutes()['setControlValue']?.path + '?*',
      (req) => {
        reqCount++;
        req.reply({ statusCode: 200, body: {} });
      },
    ).as('reqSaveValue');

    cy.mount(
      <SetupTestsComponents>
        <TextControl
          control={_control}
          context={'edit'}
          fileId={fileId}
          formState={[]}
          setFormState={() => undefined}
        />
      </SetupTestsComponents>,
    )
      .waitReactApp()
      .then(() => {
        cy.window()
          .then((window) => {
            window['Features_Edit_Control_TextControl'].setApiRouteName(
              apiRouter.getRoutes()['setControlValue']?.name,
            );
          })
          .then(() => {
            cy.get('input[type="text"]').type(val).blur().clickOutside();
            cy.wait('@reqSaveValue').then((interception) => {
              const { request } = interception;
              const { query } = request;

              // eslint-disable-next-line cypress/no-unnecessary-waiting
              cy.wait(500).then(() => {
                expect(reqCount).to.be.eq(1);
                cy.wrap(query).should('have.property', 'file_id');
                cy.wrap(query).should('have.property', 'elm_id');
                cy.wrap(query).should('have.property', 'elm_val');
                cy.wrap(query)
                  .should('have.property', 'control_family')
                  .then(() => {
                    expect(query.file_id).to.be.eq(fileId);
                    expect(query.elm_id).to.be.eq(_control.control_id);
                    expect(query.elm_val).to.be.eq(val);
                    expect(query.control_family).to.be.eq(
                      _control.control_family,
                    );
                  });
              });
            });
          });
      });
  });

  it('Should not be disabled', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
      editable: true,
    };
    cy.mount(
      <SetupTestsComponents>
        <TextControl
          context={'edit'}
          control={_control}
          fileId={fileId}
          formState={formState}
          setFormState={setFormState}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('TextControl')
      .find('input[type="text"]')
      .should('not.be.disabled');
  });
  it('Should be disabled', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
      editable: false,
    };
    cy.mount(
      <SetupTestsComponents>
        <TextControl
          context={'edit'}
          control={_control}
          fileId={fileId}
          formState={formState}
          setFormState={setFormState}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('TextControl').find('input[type="text"]').should('be.disabled');
  });
  it('Should be disabled', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
    };
    cy.mount(
      <SetupTestsComponents>
        <TextControl
          context={'edit'}
          control={_control}
          fileId={fileId}
          formState={formState}
          setFormState={setFormState}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('TextControl').find('input[type="text"]').should('be.disabled');
  });

  it('Should render the value if one', () => {
    const value = 'Hello world';
    const _control: IApiControl = {
      ...structuredClone(control),
      control_value: value,
    };
    cy.mount(
      <SetupTestsComponents>
        <TextControl
          context={'edit'}
          control={_control}
          fileId={fileId}
          formState={formState}
          setFormState={setFormState}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('TextControl')
      .find('input[type="text"]')
      .should('have.attr', 'value', value);
  });
  it('Should render the value if one & if disabled', () => {
    const value = 'Hello world';
    const _control: IApiControl = {
      ...structuredClone(control),
      control_value: value,
      editable: true,
    };
    cy.mount(
      <SetupTestsComponents>
        <TextControl
          context={'edit'}
          control={_control}
          fileId={fileId}
          formState={formState}
          setFormState={setFormState}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('TextControl')
      .find('input[type="text"]')
      .should('have.attr', 'value', value);
  });

  it('Should render a message error', () => {
    const error = 'Error message';
    const _control: IApiControl = {
      ...structuredClone(control),
    };
    cy.mount(
      <SetupTestsComponents>
        <TextControl
          context={'edit'}
          control={_control}
          fileId={fileId}
          formState={formState}
          setFormState={setFormState}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('TextControl');
    cy.window().then((w) => {
      w['Features_Edit_Control_TextControl'].setErrorMessage(error);
      cy.then(() => {
        cy.react('TextControl').find('._FormError').contains(error);
      });
    });
  });

  it('Should render error message if no value and is mandatory', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
      editable: true,
      control_value: null,
      mandatory: true,
    };
    const trans_EN =
      _translate('en', 'Edit', 'mandatoryValue') ||
      'mandatoryValue|Valeur obligatoire';
    const trans_FR =
      _translate('fr', 'Edit', 'mandatoryValue') ||
      'mandatoryValue|Valeur obligatoire';
    const trans_DE =
      _translate('de', 'Edit', 'mandatoryValue') ||
      'mandatoryValue|Valeur obligatoire';
    const translations = [trans_EN, trans_FR, trans_DE];

    cy.mount(
      <SetupTestsComponents>
        <TextControl
          context={'edit'}
          control={_control}
          fileId={fileId}
          formState={formState}
          setFormState={setFormState}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('TextControl')
      .find('._FormError')
      .contains(new RegExp(translations.join('|'), 'gu'));
  });
  it('Should render error message if no value and is mandatory', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
      editable: true,
      control_value: 'null',
      mandatory: true,
    };
    const trans_EN =
      _translate('en', 'Edit', 'mandatoryValue') ||
      'mandatoryValue|Valeur obligatoire';
    const trans_FR =
      _translate('fr', 'Edit', 'mandatoryValue') ||
      'mandatoryValue|Valeur obligatoire';
    const trans_DE =
      _translate('de', 'Edit', 'mandatoryValue') ||
      'mandatoryValue|Valeur obligatoire';
    const translations = [trans_EN, trans_FR, trans_DE];

    cy.mount(
      <SetupTestsComponents>
        <TextControl
          context={'edit'}
          control={_control}
          fileId={fileId}
          formState={structuredClone(formState)}
          setFormState={setFormState}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.window().then((w) => {
      w['Features_Edit_Control_TextControl'].setCanSendApi(false);
    });
    cy.react('TextControl').find('input').clear().blur();
    cy.react('TextControl')
      .find('._FormError')
      .contains(new RegExp(translations.join('|'), 'gu'));
  });

  it('Should match the value with regex', () => {
    const trans_EN =
      _translate('en', 'Edit', 'errorRecording') || 'errorRecording';
    const trans_FR =
      _translate('fr', 'Edit', 'errorRecording') || 'errorRecording';
    const trans_DE =
      _translate('de', 'Edit', 'errorRecording') || 'errorRecording';
    const translations = [trans_EN, trans_FR, trans_DE];
    const regex = '^-?((180(\\.0+)?)|(((1[0-7]\\d)|(\\d{1,2}))(\\.\\d+)?))$';
    const _control = {
      ...structuredClone(control),
      editable: true,
      control_value: null,
      control_regex: regex,
      control_regex_msg: 'Value do not match with regex',
    };
    const randExp = new RandExp(new RegExp(_control.control_regex, 'i'));
    let generated = randExp.gen();
    while (
      generated === '' ||
      !new RegExp(_control.control_regex, 'i').test(generated)
    )
      generated = randExp.gen();

    cy.mount(
      <SetupTestsComponents>
        <TextControl
          context={'edit'}
          control={_control}
          fileId={fileId}
          formState={structuredClone(formState)}
          setFormState={setFormState}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.window().then((w) => {
      w['Features_Edit_Control_TextControl'].setCanSendApi(false);
    });
    cy.react('TextControl')
      .find('input[type="text"]')
      .typeThenWait(generated, {
        typeOptions: { parseSpecialCharSequences: false },
        triggers: { blur: { exec: true } },
      });
    cy.react('TextControl').formErrorMessageShouldNotMatch([
      ...translations,
      ...translations_mandatoryValue,
      _escapeForRegExp(_control.control_regex_msg as string) as string,
    ]);
  });
  it('Should render error message if value do not match with regex', () => {
    const regex = '^-?((180(\\.0+)?)|(((1[0-7]\\d)|(\\d{1,2}))(\\.\\d+)?))$';
    const _control = {
      ...structuredClone(control),
      editable: true,
      control_value: null,
      control_regex: regex,
      control_regex_msg: 'Value do not match with regex',
    };
    const oppositeRegex = new RegExp(`^(?!.*${_control.control_regex}).*`, 'i');
    const randExpOpposite = new RandExp(oppositeRegex);
    let generated = randExpOpposite.gen();

    while (generated === '' || !oppositeRegex.test(generated))
      generated = randExpOpposite.gen();

    cy.mount(
      <SetupTestsComponents>
        <TextControl
          context={'edit'}
          control={_control}
          fileId={fileId}
          formState={structuredClone(formState)}
          setFormState={setFormState}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.window().then((w) => {
      w['Features_Edit_Control_TextControl'].setCanSendApi(false);
    });
    cy.react('TextControl')
      .find('input[type="text"]')
      .type(generated, { parseSpecialCharSequences: false })
      .blur();
    cy.react('TextControl')
      .find('._FormError')
      .should('have.text', _control.control_regex_msg);
  });
});
