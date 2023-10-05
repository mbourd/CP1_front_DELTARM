// @ts-check
/// <reference types="cypress" />

import '../../../../../../../../cypress/support/commands';

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../../cypress/utils/SetupTestsComponents';

import 'cypress-react-selector';
import 'cypress-real-events';
import { mount } from 'cypress/react18';

import { ComplianceFooter } from './ComplianceFooter';
import { IApiComplianceFields } from '../../../../../types';

describe('<ComplianceFooter />', () => {
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
  };

  it('should render', () => {
    const _compliance = {
      ...structuredClone(compliance),
    };
    mount(
      <SetupTestsComponents>
        <ComplianceFooter compliance={_compliance} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('ComplianceFooter').should('exist');
  });

  it('should render compliance_elm_desc_1 in tooltip', () => {
    const title = 'Hello';
    const _compliance = {
      ...structuredClone(compliance),
      compliance_elm_desc_2: title,
    };
    mount(
      <SetupTestsComponents>
        <ComplianceFooter compliance={_compliance} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('ComplianceFooter')
      .react('BPITooltip')
      .should('have.attr', 'title', title);
    cy.react('ComplianceFooter')
      .react('BPITooltip')
      .each(($el) => {
        cy.wrap($el).trigger('mouseover');
        cy.get('[role="tooltip"]').should('exist').should('be.visible');
        cy.wrap($el).trigger('mouseout');
        cy.get('[role="tooltip"]').should('not.exist');
      });
  });
});
