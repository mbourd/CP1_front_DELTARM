// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/Compliance/FormCompliance/BooleanCompliance/BooleanCompliance.job2.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../../../cypress/utils/SetupTestsComponents';

import { BooleanCompliance } from './BooleanCompliance';
import { IApiComplianceFields } from '../../../../../../types';
import { apiRouter } from '../../../../../../../../Services/Api';

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
    cy.mount(
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

  it('should make one request at a time and payload/queries not empty', function () {
    const fileId = 'fileddd';
    const controlId = 'controlIDd';
    const _compliance = {
      ...structuredClone(compliance),
      compliance_id: 'compliance_idd',
      compliance_elm_family: 'compli_elm_fam',
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
        <BooleanCompliance
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
              'Features_Edit_Control_Form_Compliance_BooleanCompliance'
            ].setApiRouteName(apiRouter.getRoutes()['setControlValue']?.name);
          })
          .then(() => {
            cy.get(`#checkbox-boolean${_compliance.compliance_id}`).realClick();
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
                    expect(query.elm_val).to.be.eq('true');
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

  it('should be checked', () => {
    const _compliance: IApiComplianceFields = {
      ...structuredClone(compliance),
      compliance_elm_value: 'true',
    };
    cy.mount(
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
    cy.mount(
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
    cy.mount(
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
    cy.mount(
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
    cy.mount(
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
    cy.mount(
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
