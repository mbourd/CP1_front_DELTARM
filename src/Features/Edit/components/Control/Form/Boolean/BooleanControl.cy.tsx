// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/Boolean/BooleanControl.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../cypress/utils/SetupTestsComponents';

import { BooleanControl } from './BooleanControl';
import { IApiControl } from '../../../../types';
import '../../../../../Edit/translations';
import { _translate } from '../../../../../../../cypress/utils';

describe('<BooleanControl />', () => {
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

  it('should render', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
    };
    cy.mount(
      <SetupTestsComponents>
        <BooleanControl
          control={_control}
          fileId={''}
          formState={[]}
          setFormState={function (): void {
            throw new Error('Function not implemented.');
          }}
          context={'edit'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('BooleanControl').should('exist');
  });

  it('should render <RejectControl /> if useRejection & control_rejectable', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
      useRejection: { isRejected: true, rejectComments: [] },
      control_rejectable: { is_rejected: true, control_reject_comment: [] },
    };
    cy.mount(
      <SetupTestsComponents>
        <BooleanControl
          control={_control}
          fileId={''}
          formState={[]}
          setFormState={function (): void {
            throw new Error('Function not implemented.');
          }}
          context={'edit'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('BooleanControl').react('RejectControl');
  });

  it('should render error message if mandatory', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
      mandatory: true,
      editable: true,
    };
    const trans_EN = _translate(
      'en',
      'Edit',
      'mandatoryValue',
      'Valeur obligatoire',
    );
    const trans_FR = _translate(
      'fr',
      'Edit',
      'mandatoryValue',
      'Valeur obligatoire',
    );
    const trans_DE = _translate(
      'de',
      'Edit',
      'mandatoryValue',
      'Valeur obligatoire',
    );
    const translations = [trans_EN, trans_FR, trans_DE];
    cy.mount(
      <SetupTestsComponents>
        <BooleanControl
          control={_control}
          fileId={''}
          formState={[]}
          setFormState={function (): void {
            throw new Error('Function not implemented.');
          }}
          context={'edit'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('BooleanControl')
      .find('._FormError')
      .invoke('text')
      .and('match', new RegExp(translations.join('|'), 'gu'));
  });
  it('should render error message if mandatory', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
      mandatory: true,
      editable: true,
      control_value: 'false',
    };
    const trans_EN = _translate(
      'en',
      'Edit',
      'mandatoryValue',
      'Valeur obligatoire',
    );
    const trans_FR = _translate(
      'fr',
      'Edit',
      'mandatoryValue',
      'Valeur obligatoire',
    );
    const trans_DE = _translate(
      'de',
      'Edit',
      'mandatoryValue',
      'Valeur obligatoire',
    );
    const translations = [trans_EN, trans_FR, trans_DE];
    cy.mount(
      <SetupTestsComponents>
        <BooleanControl
          control={_control}
          fileId={''}
          formState={[]}
          setFormState={function (): void {
            throw new Error('Function not implemented.');
          }}
          context={'edit'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('BooleanControl').formErrorShouldBeVisible(translations);
  });

  it('should be disabled', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
      editable: false,
    };
    cy.mount(
      <SetupTestsComponents>
        <BooleanControl
          control={_control}
          fileId={''}
          formState={[]}
          setFormState={function (): void {
            throw new Error('Function not implemented.');
          }}
          context={'edit'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('BooleanControl')
      .find('input[type="checkbox"]')
      .should('be.disabled');
  });
  it('should not be disabled', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
      editable: true,
    };
    cy.mount(
      <SetupTestsComponents>
        <BooleanControl
          control={_control}
          fileId={''}
          formState={[]}
          setFormState={function (): void {
            throw new Error('Function not implemented.');
          }}
          context={'edit'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('BooleanControl')
      .find('input[type="checkbox"]')
      .should('not.be.disabled');
  });

  it('should render <ControlLabel /> and <ControlFooter/>', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
    };
    cy.mount(
      <SetupTestsComponents>
        <BooleanControl
          control={_control}
          fileId={''}
          formState={[]}
          setFormState={function (): void {
            throw new Error('Function not implemented.');
          }}
          context={'edit'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('BooleanControl').react('ControlLabel');
    cy.react('BooleanControl').react('ControlFooter');
  });

  it('shoul render error message recording', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
      editable: true,
    };
    const trans_EN = _translate(
      'en',
      'Edit',
      'errorRecording',
      "Une erreur s'est produite durant l'enregistrement",
    );
    const trans_FR = _translate(
      'fr',
      'Edit',
      'errorRecording',
      "Une erreur s'est produite durant l'enregistrement",
    );
    const trans_DE = _translate(
      'de',
      'Edit',
      'errorRecording',
      "Une erreur s'est produite durant l'enregistrement",
    );
    const translations = [trans_EN, trans_FR, trans_DE];
    cy.mount(
      <SetupTestsComponents>
        <BooleanControl
          control={_control}
          fileId={''}
          formState={[]}
          setFormState={function (): void {
            throw new Error('Function not implemented.');
          }}
          context={'edit'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('BooleanControl')
      .find('input[type="checkbox"]')
      .each(($el) => {
        cy.wrap($el).click();
      });
    cy.react('BooleanControl')
      .find('._FormError')
      .invoke('text')
      .and('match', new RegExp(translations.join('|'), 'gu'));
  });

  it('should be checked', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
      control_value: 'true',
    };
    cy.mount(
      <SetupTestsComponents>
        <BooleanControl
          control={_control}
          fileId={''}
          formState={[]}
          setFormState={function (): void {
            throw new Error('Function not implemented.');
          }}
          context={'edit'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('BooleanControl')
      .find('input[type="checkbox"]')
      .should('be.checked');
  });
  it('should not be checked', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
    };
    cy.mount(
      <SetupTestsComponents>
        <BooleanControl
          control={_control}
          fileId={''}
          formState={[]}
          setFormState={function (): void {
            throw new Error('Function not implemented.');
          }}
          context={'edit'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('BooleanControl')
      .find('input[type="checkbox"]')
      .should('not.be.checked');
  });
  it('should not be checked', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
      control_value: 'false',
    };
    cy.mount(
      <SetupTestsComponents>
        <BooleanControl
          control={_control}
          fileId={''}
          formState={[]}
          setFormState={function (): void {
            throw new Error('Function not implemented.');
          }}
          context={'edit'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('BooleanControl')
      .find('input[type="checkbox"]')
      .should('not.be.checked');
  });
});
