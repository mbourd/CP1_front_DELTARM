// @ts-check

import React from 'react';

import { SetupTestsComponents } from '../../../../../../../cypress/utils/SetupTestsComponents';
import 'cypress-react-selector';
import { mount } from 'cypress/react18';

import '../../../../../Edit/translations';
import { TextControl } from './TextControl';
import { IApiControl } from '../../../../types';
import { _translate } from '../../../../../../../cypress/utils';
import RandExp from 'randexp';

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
  const formState = [{ controls: [control] }];
  const setFormState = () => {
    return undefined;
  };

  it('Should render', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
    };
    mount(
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

  it('Should not be disabled', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
      editable: true,
    };
    mount(
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
    mount(
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
    mount(
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
    mount(
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
    mount(
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
    mount(
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
      cy.wait(500);
      cy.react('TextControl').find('._FormError').contains(error);
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

    mount(
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

    mount(
      <SetupTestsComponents>
        <TextControl
          context={'edit'}
          control={_control}
          fileId={fileId}
          formState={[{ controls: [_control] }]}
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
    const regex = '^-?((180(\\.\\d*)?)|(((1[0-7]\\d)|(\\d{1,2}))(\\.\\d*)?))$';
    const _control = {
      ...structuredClone(control),
      editable: true,
      control_value: null,
      control_regex: regex,
      control_regex_msg: 'Value do not match with regex',
    };
    const randExp = new RandExp(new RegExp(_control.control_regex, 'i'));
    const generated = randExp.gen();

    mount(
      <SetupTestsComponents>
        <TextControl
          context={'edit'}
          control={_control}
          fileId={fileId}
          formState={[{ controls: [_control] }]}
          setFormState={setFormState}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    // cy.window().then((w) => {
    //   w['Features_Edit_Control_TextControl'].setCanSendApi(false);
    // });
    cy.react('TextControl')
      .find('input[type="text"]')
      .typeThenWait(generated, {
        typeOptions: { parseSpecialCharSequences: false },
        triggers: { blur: { exec: true } },
      });
    // cy.react('TextControl')
    //   .get('._FormError', { timeout: 1 })
    //   .should('not.exist');
    cy.react('TextControl').formErrorMessageShouldNotMatch(
      translations_mandatoryValue,
    );
  });
  it('Should render error message if value do not match with regex', () => {
    const regex = '^-?((180(\\.\\d*)?)|(((1[0-7]\\d)|(\\d{1,2}))(\\.\\d*)?))$';
    const _control = {
      ...structuredClone(control),
      editable: true,
      control_value: null,
      control_regex: regex,
      control_regex_msg: 'Value do not match with regex',
    };
    const oppositeRegex = new RegExp(`^(?!${_control.control_regex}).*$`, 'i');
    const randExpOpposite = new RandExp(oppositeRegex);
    const generated = randExpOpposite.gen();

    mount(
      <SetupTestsComponents>
        <TextControl
          context={'edit'}
          control={_control}
          fileId={fileId}
          formState={[{ controls: [_control] }]}
          setFormState={setFormState}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('TextControl')
      .find('input[type="text"]')
      .type(generated, { parseSpecialCharSequences: false })
      .blur();
    cy.wait(255);
    cy.react('TextControl')
      .find('._FormError')
      .should('have.text', _control.control_regex_msg);
  });
});
