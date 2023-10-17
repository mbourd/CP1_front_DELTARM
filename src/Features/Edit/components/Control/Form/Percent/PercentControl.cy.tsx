// @ts-check
/// <reference types="cypress" />

import '../../../../../../../cypress/support/commands';

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../cypress/utils/SetupTestsComponents';

import 'cypress-react-selector';
import 'cypress-real-events';
import { mount } from 'cypress/react18';
import { _translate } from '../../../../../../../cypress/utils';

import { PercentControl } from './PercentControl';
import { IApiControl, IChapter } from '../../../../types';
import '../../../../../Edit/translations';
import RandExp from 'randexp';

describe('<PercentControl />', () => {
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

  it('should render', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
    };

    mount(
      <SetupTestsComponents>
        <PercentControl
          control={_control}
          fileId={''}
          context={'edit'}
          formState={[]}
          setFormState={function (
            value: React.SetStateAction<IChapter[]>,
          ): void {
            throw new Error('Function not implemented.');
          }}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('PercentControl');
  });

  it('should render <ControlLabel /> and <ControlFooter/>', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
    };
    mount(
      <SetupTestsComponents>
        <PercentControl
          control={_control}
          fileId={''}
          formState={[]}
          setFormState={function (
            value: React.SetStateAction<IChapter[]>,
          ): void {
            throw new Error('Function not implemented.');
          }}
          context={'edit'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('PercentControl').react('ControlLabel');
    cy.react('PercentControl').react('ControlFooter');
  });

  it('should be disabled', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
      editable: false,
    };
    mount(
      <SetupTestsComponents>
        <PercentControl
          control={_control}
          fileId={''}
          formState={[]}
          setFormState={function (
            value: React.SetStateAction<IChapter[]>,
          ): void {
            throw new Error('Function not implemented.');
          }}
          context={'edit'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('PercentControl').find('input[type="text"]').should('be.disabled');
  });
  it('should be disabled', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
    };
    mount(
      <SetupTestsComponents>
        <PercentControl
          control={_control}
          fileId={''}
          formState={[]}
          setFormState={function (
            value: React.SetStateAction<IChapter[]>,
          ): void {
            throw new Error('Function not implemented.');
          }}
          context={'edit'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('PercentControl').find('input[type="text"]').should('be.disabled');
  });
  it('should not be disabled', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
      editable: true,
    };
    mount(
      <SetupTestsComponents>
        <PercentControl
          control={_control}
          fileId={''}
          formState={[]}
          setFormState={function (
            value: React.SetStateAction<IChapter[]>,
          ): void {
            throw new Error('Function not implemented.');
          }}
          context={'edit'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('PercentControl')
      .find('input[type="text"]')
      .should('not.be.disabled');
  });

  it('should render error message if mandatory', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
      mandatory: true,
      editable: true,
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
        <PercentControl
          control={_control}
          fileId={''}
          formState={[]}
          setFormState={function (
            value: React.SetStateAction<IChapter[]>,
          ): void {
            throw new Error('Function not implemented.');
          }}
          context={'edit'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('PercentControl')
      .find('._FormError')
      .invoke('text')
      .and('match', new RegExp(translations.join('|'), 'gu'));
  });

  it('should have default value', () => {
    const value = '1987';
    const _control: IApiControl = {
      ...structuredClone(control),
      control_value: value,
    };
    mount(
      <SetupTestsComponents>
        <PercentControl
          control={_control}
          fileId={''}
          formState={[]}
          setFormState={function (
            value: React.SetStateAction<IChapter[]>,
          ): void {
            throw new Error('Function not implemented.');
          }}
          context={'edit'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('PercentControl')
      .find('input[type="text"]')
      .should('have.attr', 'value', '1987.00');
  });
  it('should not have default value', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
    };
    mount(
      <SetupTestsComponents>
        <PercentControl
          control={_control}
          fileId={''}
          formState={[]}
          setFormState={function (
            value: React.SetStateAction<IChapter[]>,
          ): void {
            throw new Error('Function not implemented.');
          }}
          context={'edit'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('PercentControl')
      .find('input[type="text"]')
      .should('have.attr', 'value', '');
  });

  it('should render <RejectControl /> if useRejection & control_rejectable', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
      useRejection: { isRejected: true, rejectComments: [] },
      control_rejectable: { is_rejected: true, control_reject_comment: [] },
    };
    mount(
      <SetupTestsComponents>
        <PercentControl
          control={_control}
          fileId={''}
          formState={[]}
          setFormState={function (
            value: React.SetStateAction<IChapter[]>,
          ): void {
            throw new Error('Function not implemented.');
          }}
          context={'edit'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('PercentControl').react('RejectControl');
  });

  it('Should match the value with regex', () => {
    const regex = '^-?[0-9]\\d*(\\.\\d+)?$';
    const _control = {
      ...structuredClone(control),
      editable: true,
      control_value: null,
      control_regex: regex,
      control_regex_msg: 'Value do not match with regex',
    };
    const randExp = new RandExp(new RegExp(regex, 'i'));
    let generated = randExp.gen();

    while (generated === '') {
      generated = randExp.gen();
    }

    mount(
      <SetupTestsComponents>
        <PercentControl
          context={'edit'}
          control={_control}
          fileId={fileId}
          formState={formState}
          setFormState={setFormState}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.window().then((w) => {
      w['Features_Edit_Control_PercentControl'].setCanSendApi(false);
    });
    cy.react('PercentControl')
      .find('input[type="text"]')
      .type(generated, { parseSpecialCharSequences: false })
      .blur();
    cy.wait(255);
    cy.react('PercentControl')
      .get('._FormError', { timeout: 1 })
      .should('not.exist');
  });
  it('Should render error message if value do not match with regex', () => {
    const regex = '^-?[0-9]\\d*(\\.\\d+)?$';
    const oppositeRegex = new RegExp(`^(?!${regex}).*$`, 'i');
    const _control = {
      ...structuredClone(control),
      editable: true,
      control_value: null,
      control_regex: regex,
      control_regex_msg: 'Value do not match with regex',
    };
    const randExpOpposite = new RandExp(oppositeRegex);
    let generated = randExpOpposite.gen();

    while (generated === '') {
      generated = randExpOpposite.gen();
    }

    mount(
      <SetupTestsComponents>
        <PercentControl
          context={'edit'}
          control={_control}
          fileId={fileId}
          formState={formState}
          setFormState={setFormState}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('PercentControl')
      .find('input[type="text"]')
      .type(generated, { parseSpecialCharSequences: false })
      .blur();
    cy.wait(255);
    cy.react('PercentControl')
      .find('._FormError')
      .should('have.text', _control.control_regex_msg);
  });
});
