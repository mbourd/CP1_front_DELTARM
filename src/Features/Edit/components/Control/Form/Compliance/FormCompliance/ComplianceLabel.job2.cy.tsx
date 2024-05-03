// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/Compliance/FormCompliance/ComplianceLabel.job2.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../../cypress/utils/SetupTestsComponents';

import { ComplianceLabel } from './ComplianceLabel';
import { IApiComplianceFields } from '../../../../../types';

describe('ComplianceLabel', () => {
  const compliance: IApiComplianceFields = {
    compliance_elm_desc_1: null,
    compliance_elm_desc_2: null,
    compliance_elm_family: '',
    compliance_elm_lib: '',
    compliance_elm_regex: new RegExp(''),
    compliance_elm_regex_msg: null,
    compliance_elm_type: 'boolean',
    compliance_elm_value: '',
    compliance_id: '',
    compliance_file_detail: null,
    compliance_elm_mandatory: false,
  };

  it('should render', () => {
    const _compliance = {
      ...structuredClone(compliance),
    };
    cy.mount(
      <SetupTestsComponents>
        <ComplianceLabel compliance={_compliance} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('ComplianceLabel').should('exist');
  });

  it('should render compliance_elm_desc_1 in tooltip', () => {
    const title = 'Hello';
    const _compliance = {
      ...structuredClone(compliance),
      compliance_elm_desc_1: title,
    };
    cy.mount(
      <SetupTestsComponents>
        <ComplianceLabel compliance={_compliance} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('ComplianceLabel')
      .react('BPITooltip')
      .each(($el) => {
        cy.wrap($el).trigger('mouseover');
        cy.get('[role="tooltip"]').should('exist').should('be.visible');
        cy.get('[role="tooltip"]').should('have.text', title);
        cy.wrap($el).trigger('mouseout');
        cy.get('[role="tooltip"]').should('not.exist');
      });
  });

  it('should render compliance_elm_lib', () => {
    const title = 'Compliance';
    const _compliance = {
      ...structuredClone(compliance),
      compliance_elm_lib: title,
    };
    cy.mount(
      <SetupTestsComponents>
        <ComplianceLabel compliance={_compliance} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('ComplianceLabel').find('span span:nth-child(1)').contains(title);
  });
});
