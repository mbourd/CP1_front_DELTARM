// @ts-check
/// <reference types="cypress" />

import '../../../../../../../cypress/support/commands';

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../cypress/utils/SetupTestsComponents';

import 'cypress-react-selector';
import 'cypress-real-events';
import { mount } from 'cypress/react18';
import {
  _requestJWT,
  _getEnv,
  _escapeForRegExp,
  _translate,
} from '../../../../../../../cypress/utils';

import { DateTimeControl } from './DateTimeControl';
import { IApiControl, IChapter } from '../../../../types';
import '../../../../../Edit/translations';
import { translation } from '../../../../../../Services';

describe('<DateTimeControl />', () => {
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
    mount(
      <SetupTestsComponents>
        <DateTimeControl
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
    cy.react('DateTimeControl');
  });

  it('should render <ControlLabel /> and <ControlFooter/>', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
    };
    mount(
      <SetupTestsComponents>
        <DateTimeControl
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
    cy.react('DateTimeControl').react('ControlLabel');
    cy.react('DateTimeControl').react('ControlFooter');
  });

  it('should be disabled', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
      editable: false,
    };
    mount(
      <SetupTestsComponents>
        <DateTimeControl
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
    cy.react('DateTimeControl')
      .find('input[type="datetime-local"]')
      .should('be.disabled');
  });
  it('should be disabled', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
    };
    mount(
      <SetupTestsComponents>
        <DateTimeControl
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
    cy.react('DateTimeControl')
      .find('input[type="datetime-local"]')
      .should('be.disabled');
  });
  it('should not be disabled', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
      editable: true,
    };
    mount(
      <SetupTestsComponents>
        <DateTimeControl
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
    cy.react('DateTimeControl')
      .find('input[type="datetime-local"]')
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
        <DateTimeControl
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
    cy.react('DateTimeControl')
      .find('._FormError')
      .invoke('text')
      .and('match', new RegExp(translations.join('|'), 'gu'));
  });

  it('should have default value', () => {
    const value = '1987-03-23T08:30';
    const _control: IApiControl = {
      ...structuredClone(control),
      control_value: value,
    };
    mount(
      <SetupTestsComponents>
        <DateTimeControl
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
    cy.react('DateTimeControl')
      .find('input[type="datetime-local"]')
      .should('have.attr', 'value', value);
  });
  it('should not have default value', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
    };
    mount(
      <SetupTestsComponents>
        <DateTimeControl
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
    cy.react('DateTimeControl')
      .find('input[type="datetime-local"]')
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
        <DateTimeControl
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
    cy.react('DateTimeControl').react('RejectControl');
  });
});
