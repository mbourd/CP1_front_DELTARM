// @ts-check
/// <reference types="cypress" />

import '../../../../../../../../../cypress/support/commands';

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../../../cypress/utils/SetupTestsComponents';

import 'cypress-react-selector';
import 'cypress-real-events';
import { mount } from 'cypress/react18';

import { BooleanCompliance } from './BooleanCompliance';
import { IApiComplianceFields } from '../../../../../../types';

describe('<BooleanCompliance />', () => {
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
        <BooleanCompliance
          compliance={_compliance}
          fileId={''}
          controlId={''}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('BooleanCompliance').should('exist');
  });

  it('should be checked', () => {
    const _compliance: IApiComplianceFields = {
      ...structuredClone(compliance),
      compliance_elm_value: 'true',
    };
    mount(
      <SetupTestsComponents>
        <BooleanCompliance
          compliance={_compliance}
          fileId={''}
          controlId={''}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('BooleanCompliance')
      .find('#checkbox-boolean' + compliance.compliance_id)
      .should('be.checked');
  });
  it('should not be checked', () => {
    const _compliance: IApiComplianceFields = {
      ...structuredClone(compliance),
      compliance_elm_value: 'false',
    };
    mount(
      <SetupTestsComponents>
        <BooleanCompliance
          compliance={_compliance}
          fileId={''}
          controlId={''}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('BooleanCompliance')
      .find('#checkbox-boolean' + compliance.compliance_id)
      .should('not.be.checked');
  });
  it('should not be checked', () => {
    const _compliance: IApiComplianceFields = {
      ...structuredClone(compliance),
    };
    mount(
      <SetupTestsComponents>
        <BooleanCompliance
          compliance={_compliance}
          fileId={''}
          controlId={''}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('BooleanCompliance')
      .find('#checkbox-boolean' + compliance.compliance_id)
      .should('not.be.checked');
  });
  it('should not be checked', () => {
    const _compliance: IApiComplianceFields = {
      ...structuredClone(compliance),
      compliance_elm_value: 'falsee',
    };
    mount(
      <SetupTestsComponents>
        <BooleanCompliance
          compliance={_compliance}
          fileId={''}
          controlId={''}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('BooleanCompliance')
      .find('#checkbox-boolean' + compliance.compliance_id)
      .should('not.be.checked');
  });

  it('should render <ComplianceLabel /> and <ComplianceFooter />', () => {
    const _compliance = {
      ...structuredClone(compliance),
    };
    mount(
      <SetupTestsComponents>
        <BooleanCompliance
          compliance={_compliance}
          fileId={''}
          controlId={''}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('BooleanCompliance').react('ComplianceLabel').should('exist');
    cy.react('BooleanCompliance').react('ComplianceFooter').should('exist');
  });

  it('should render error message', () => {
    const error = 'Error message';
    const _compliance = {
      ...structuredClone(compliance),
    };
    mount(
      <SetupTestsComponents>
        <BooleanCompliance
          compliance={_compliance}
          fileId={''}
          controlId={''}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('BooleanCompliance').should('exist');
    cy.window().then((w) => {
      w[
        'Features_Edit_Control_Form_Compliance_BooleanCompliance'
      ].setErrorMessage(error);
      cy.wait(1);
      cy.get('._FormError').contains(error);
    });
  });
});
