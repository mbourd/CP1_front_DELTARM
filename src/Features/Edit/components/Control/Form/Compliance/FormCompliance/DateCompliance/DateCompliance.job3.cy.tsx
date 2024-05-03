// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/Compliance/FormCompliance/DateCompliance/DateCompliance.job3.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../../../cypress/utils/SetupTestsComponents';

import { DateCompliance } from './DateCompliance';
import { IApiComplianceFields } from '../../../../../../types';
import '../../../../../../../Edit/translations';
import { _translate } from '../../../../../../../../../cypress/utils';
import { apiRouter } from '../../../../../../../../Services/Api';

describe('<DateCompliance />', () => {
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
    cy.mount(
      <SetupTestsComponents>
        <DateCompliance compliance={_compliance} fileId={''} controlId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('DateCompliance').should('exist');
    cy.react('DateCompliance').react('InputBase').should('exist');
  });

  it('should make one request at a time and payload/queries not empty', function () {
    const val = '2023-03-23';
    const fileId = 'fileddd';
    const controlId = 'controlIDd';
    const _compliance = {
      ...structuredClone(compliance),
      compliance_id: 'compliance_idd',
      compliance_elm_family: 'compli_elm_fam',
      compliance_elm_lib: 'compl_elem_lib',
    };
    let reqCount = 0;

    cy.intercept(
      'POST',
      apiRouter.getRoutes()['setControlValue']?.path + '?*',
      (req) => {
        reqCount++;
        req.reply({ statusCode: 200, body: {} });
      },
    ).as('reqSaveValue');

    cy.mount(
      <SetupTestsComponents>
        <DateCompliance
          compliance={_compliance}
          fileId={fileId}
          controlId={controlId}
        />
      </SetupTestsComponents>,
    )
      .waitReactApp()
      .then(() => {
        cy.window()
          .then((window) => {
            window[
              'Features_Edit_Control_Form_Compliance_DateCompliance'
            ].setApiRouteName(apiRouter.getRoutes()['setControlValue']?.name);
          })
          .then(() => {
            cy.get(`input[type="date"]`).type(val).blur().clickOutside();
            cy.wait('@reqSaveValue').then((interception) => {
              const { request } = interception;
              const { query } = request;

              // eslint-disable-next-line cypress/no-unnecessary-waiting
              cy.wait(500).then(() => {
                expect(reqCount).to.be.eq(1);
                cy.wrap(query).should('have.property', 'file_id');
                cy.wrap(query).should('have.property', 'compliance_id');
                cy.wrap(query).should('have.property', 'elm_id');
                cy.wrap(query).should('have.property', 'elm_val');
                cy.wrap(query)
                  .should('have.property', 'control_family')
                  .then(() => {
                    expect(query.file_id).to.be.eq(fileId);
                    expect(query.elm_id).to.be.eq(controlId);
                    expect(query.elm_val).to.be.eq(val);
                    expect(query.control_family).to.be.eq(
                      _compliance.compliance_elm_family,
                    );
                    expect(query.compliance_id).to.be.eq(
                      _compliance.compliance_id,
                    );
                  });
              });
            });
          });
      });
  });

  it('should render <ComplianceLabel /> and <ComplianceFooter />', () => {
    const _compliance = {
      ...structuredClone(compliance),
    };
    cy.mount(
      <SetupTestsComponents>
        <DateCompliance compliance={_compliance} fileId={''} controlId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('DateCompliance').react('ComplianceLabel').should('exist');
    cy.react('DateCompliance').react('ComplianceFooter').should('exist');
  });

  /**
   * this code represents a test case for a React component (DateCompliance) to ensure that it correctly renders an error message when the setErrorMessage function is called with a specific error message. It also checks for the existence of the component and the presence of the error message in the rendered output. This test helps ensure the reliability of the component's error handling functionality.
   */
  it('should render error message', () => {
    const error = 'Error message';
    const _compliance = {
      ...structuredClone(compliance),
    };
    cy.mount(
      <SetupTestsComponents>
        <DateCompliance compliance={_compliance} fileId={''} controlId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('DateCompliance').should('exist');
    cy.window().then((w) => {
      w['Features_Edit_Control_Form_Compliance_DateCompliance'].setErrorMessage(
        error,
      );
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
    cy.mount(
      <SetupTestsComponents>
        <DateCompliance compliance={_compliance} fileId={''} controlId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('DateCompliance').should('exist');
    cy.get('._FormError').contains(new RegExp(translations.join('|'), 'gu'));
  });

  it('should not render error message when blur input', () => {
    const _compliance: IApiComplianceFields = {
      ...structuredClone(compliance),
      compliance_elm_lib: 'Test date',
      compliance_elm_value: '',
      compliance_elm_mandatory: true,
    };
    cy.mount(
      <SetupTestsComponents>
        <DateCompliance compliance={_compliance} fileId={''} controlId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('DateCompliance').should('exist');
    cy.react('DateCompliance').find('input[type="date"]').type('2023-03-23');
    cy.react('DateCompliance')
      .find('input[type="date"]')
      .trigger('change')
      .blur();
    cy.get('._FormError', { timeout: 1 }).should('not.exist');
  });

  it('should not render error message if value', () => {
    const _compliance: IApiComplianceFields = {
      ...structuredClone(compliance),
      compliance_elm_lib: 'Test date',
      compliance_elm_value: '2023-03-23',
      compliance_elm_mandatory: true,
    };
    cy.mount(
      <SetupTestsComponents>
        <DateCompliance compliance={_compliance} fileId={''} controlId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('DateCompliance').should('exist');
    cy.react('DateCompliance').find('input[type="date"]');
    cy.get('._FormError', { timeout: 23 }).should('not.exist');
  });
});
