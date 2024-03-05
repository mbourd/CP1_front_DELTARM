// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/Slider/SliderControl.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../cypress/utils/SetupTestsComponents';
import { _escapeForRegExp } from '../../../../../../../cypress/utils';

import { SliderControl } from './SliderControl';
import { IApiControl } from '../../../../types';
import '../../../../../Edit/translations';
import { translation } from '../../../../../../Services';

describe('<SliderControl />', () => {
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
  const getResourceTrans = (lng: string, ns: string, key: string): string => {
    return _escapeForRegExp(translation.getResource(lng, ns)?.[key]);
  };

  it('should render', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
    };
    cy.mount(
      <SetupTestsComponents>
        <SliderControl
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
    cy.react('SliderControl');
  });

  it('should render <ControlLabel /> with control_title', () => {
    const title = 'hello world';
    const _control: IApiControl = {
      ...structuredClone(control),
      control_title: title,
    };
    cy.mount(
      <SetupTestsComponents>
        <SliderControl
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
    cy.react('SliderControl')
      .react('ControlLabel')
      .find('span')
      .eq(0)
      .should('have.text', title);
  });

  it('should render <RejectControl /> if useRejection & control_rejectable', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
      useRejection: { isRejected: true, rejectComments: [] },
      control_rejectable: { is_rejected: true, control_reject_comment: [] },
    };
    cy.mount(
      <SetupTestsComponents>
        <SliderControl
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
    cy.react('SliderControl').react('RejectControl');
  });

  it('should render with value', () => {
    const value = '23';
    const _control: IApiControl = {
      ...structuredClone(control),
      control_value: value,
    };
    cy.mount(
      <SetupTestsComponents>
        <SliderControl
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
    cy.react('SliderControl')
      .find('input[type="range"]')
      .should('have.attr', 'value', value);
  });

  it('should be disabled', () => {
    const value = '23';
    const _control: IApiControl = {
      ...structuredClone(control),
      control_value: value,
      control_options: { disabled: true },
    };
    cy.mount(
      <SetupTestsComponents>
        <SliderControl
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
    cy.react('SliderControl')
      .find('input[type="range"]')
      .should('have.attr', 'value', value)
      .should('be.disabled');
  });
  it('should not be disabled', () => {
    const value = '23';
    const _control: IApiControl = {
      ...structuredClone(control),
      control_value: value,
      control_options: { disabled: false },
    };
    cy.mount(
      <SetupTestsComponents>
        <SliderControl
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
    cy.react('SliderControl')
      .find('input[type="range"]')
      .should('have.attr', 'value', value)
      .should('not.be.disabled');
  });
  it('should not be disabled', () => {
    const value = '23';
    const _control: IApiControl = {
      ...structuredClone(control),
      control_value: value,
    };
    cy.mount(
      <SetupTestsComponents>
        <SliderControl
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
    cy.react('SliderControl')
      .find('input[type="range"]')
      .should('have.attr', 'value', value)
      .should('not.be.disabled');
  });

  it('should render error message if mandatory', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
      mandatory: true,
      editable: true,
    };
    const trans_EN =
      getResourceTrans('en', 'Edit', 'mandatoryValue') ||
      'mandatoryValue|Valeur obligatoire';
    const trans_FR =
      getResourceTrans('fr', 'Edit', 'mandatoryValue') ||
      'mandatoryValue|Valeur obligatoire';
    const trans_DE =
      getResourceTrans('de', 'Edit', 'mandatoryValue') ||
      'mandatoryValue|Valeur obligatoire';
    const translations = [trans_EN, trans_FR, trans_DE];
    cy.mount(
      <SetupTestsComponents>
        <SliderControl
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
    cy.react('SliderControl')
      .find('._FormError')
      .invoke('text')
      .and('match', new RegExp(translations.join('|'), 'gu'));
  });

  it('should render error message recording', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
      mandatory: true,
      editable: true,
    };
    const trans_EN =
      getResourceTrans('en', 'Edit', 'errorRecording') ||
      'errorRecording|' +
        _escapeForRegExp("Une erreur s'est produite durant l'enregistrement");
    const trans_FR =
      getResourceTrans('fr', 'Edit', 'errorRecording') ||
      'errorRecording|' +
        _escapeForRegExp("Une erreur s'est produite durant l'enregistrement");
    const trans_DE =
      getResourceTrans('de', 'Edit', 'errorRecording') ||
      'errorRecording|' +
        _escapeForRegExp("Une erreur s'est produite durant l'enregistrement");
    const translations = [trans_EN, trans_FR, trans_DE];
    cy.mount(
      <SetupTestsComponents>
        <SliderControl
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
    cy.react('SliderControl')
      .find('input[type="range"]')
      .parent('span')
      .click({ multiple: true, force: true });
    cy.realPress('ArrowRight');
    cy.realPress('ArrowRight');
    cy.react('SliderControl')
      .find('._FormError')
      .invoke('text')
      .and('match', new RegExp(translations.join('|'), 'gu'));
  });
});
