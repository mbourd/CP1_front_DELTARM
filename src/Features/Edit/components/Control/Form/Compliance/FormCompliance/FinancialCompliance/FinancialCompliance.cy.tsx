// @ts-check
/// <reference types="cypress" />

import '../../../../../../../../../cypress/support/commands';

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../../../cypress/utils/SetupTestsComponents';

import 'cypress-react-selector';
import 'cypress-real-events';
import { mount } from 'cypress/react18';

import { FinancialCompliance } from './FinancialCompliance';
import { IApiComplianceFields } from '../../../../../../types';

describe('<FinancialCompliance />', () => {
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
  };

  it('should render', () => {
    const _compliance = {
      ...structuredClone(compliance),
    };
    mount(
      <SetupTestsComponents>
        <FinancialCompliance
          compliance={_compliance}
          fileId={''}
          controlId={''}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('FinancialCompliance').should('exist');
    cy.react('FinancialCompliance').react('InputBase').should('exist');
  });

  it('should render <ComplianceLabel /> and <ComplianceFooter />', () => {
    const _compliance = {
      ...structuredClone(compliance),
    };
    mount(
      <SetupTestsComponents>
        <FinancialCompliance
          compliance={_compliance}
          fileId={''}
          controlId={''}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('FinancialCompliance').react('ComplianceLabel').should('exist');
    cy.react('FinancialCompliance').react('ComplianceFooter').should('exist');
  });

  /**
   * this code represents a test case for a React component (ChexboxesCompliance) to ensure that it correctly renders an error message when the setErrorMessage function is called with a specific error message. It also checks for the existence of the component and the presence of the error message in the rendered output. This test helps ensure the reliability of the component's error handling functionality.
   */
  it('should render error message', () => {
    const error = 'Error message';
    const _compliance = {
      ...structuredClone(compliance),
    };
    mount(
      <SetupTestsComponents>
        <FinancialCompliance
          compliance={_compliance}
          fileId={''}
          controlId={''}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('FinancialCompliance').should('exist');
    cy.window().then((w) => {
      w[
        'Features_Edit_Control_Form_Compliance_FinancialCompliance'
      ].setErrorMessage(error);
      cy.wait(1);
      cy.get('._FormError').contains(error);
    });
  });
});
