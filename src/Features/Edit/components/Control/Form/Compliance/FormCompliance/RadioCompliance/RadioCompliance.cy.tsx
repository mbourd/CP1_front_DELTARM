// @ts-check
/// <reference types="cypress" />

import '../../../../../../../../../cypress/support/commands';

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../../../cypress/utils/SetupTestsComponents';

import 'cypress-react-selector';
import 'cypress-real-events';
import { mount } from 'cypress/react18';

import { RadioCompliance } from './RadioCompliance';
import { IApiComplianceFields } from '../../../../../../types';
import '../../../../../../../Edit/translations';
import { _translate } from '../../../../../../../../../cypress/utils';

describe('<RadioCompliance />', () => {
  const compliance: IApiComplianceFields = {
    compliance_elm_desc_1: null,
    compliance_elm_desc_2: null,
    compliance_elm_family: '',
    compliance_elm_lib: '',
    compliance_elm_regex: new RegExp(''),
    compliance_elm_regex_msg: null,
    compliance_elm_type: 'boolean',
    compliance_elm_value: '',
    compliance_id: 'comp123',
    compliance_file_detail: null,
    compliance_elm_mandatory: false,
  };

  it('should render', () => {
    const _compliance = {
      ...structuredClone(compliance),
    };
    mount(
      <SetupTestsComponents>
        <RadioCompliance compliance={_compliance} fileId={''} controlId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('RadioCompliance').should('exist');
    cy.react('RadioCompliance').react('CheckboxWrapper').should('exist');
  });

  it('should render <ComplianceLabel /> and <ComplianceFooter />', () => {
    const _compliance = {
      ...structuredClone(compliance),
    };
    mount(
      <SetupTestsComponents>
        <RadioCompliance compliance={_compliance} fileId={''} controlId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('RadioCompliance').react('ComplianceLabel').should('exist');
    cy.react('RadioCompliance').react('ComplianceFooter').should('exist');
  });

  /**
   * this code represents a test case for a React component (RadioCompliance) to ensure that it correctly renders an error message when the setErrorMessage function is called with a specific error message. It also checks for the existence of the component and the presence of the error message in the rendered output. This test helps ensure the reliability of the component's error handling functionality.
   */
  it('should render error message', () => {
    const error = 'Error message';
    const _compliance = {
      ...structuredClone(compliance),
    };
    mount(
      <SetupTestsComponents>
        <RadioCompliance compliance={_compliance} fileId={''} controlId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('RadioCompliance').should('exist');
    cy.window().then((w) => {
      w[
        'Features_Edit_Control_Form_Compliance_RadioCompliance'
      ].setErrorMessage(error);
      cy.wait(1);
      cy.get('._FormError').contains(error);
    });
  });
  it('should render error message if mandatory', () => {
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
    const _compliance: IApiComplianceFields = {
      ...structuredClone(compliance),
      compliance_elm_value: '',
      compliance_elm_mandatory: true,
    };
    mount(
      <SetupTestsComponents>
        <RadioCompliance compliance={_compliance} fileId={''} controlId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('RadioCompliance').should('exist');
    cy.get('._FormError').contains(new RegExp(translations.join('|'), 'gu'));
  });
});
