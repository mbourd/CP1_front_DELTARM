// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/Compliance/FormCompliance/LongTextCompliance/LongTextCompliance.job3.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../../../cypress/utils/SetupTestsComponents';

import { LongTextCompliance } from './LongTextCompliance';
import { IApiComplianceFields } from '../../../../../../types';
import '../../../../../../../Edit/translations';
import { _translate } from '../../../../../../../../../cypress/utils';
import { apiRouter } from '../../../../../../../../Services/Api';

describe('<LongTextCompliance />', () => {
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
        <LongTextCompliance
          compliance={_compliance}
          fileId={''}
          controlId={''}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('LongTextCompliance').should('exist');
    cy.react('LongTextCompliance').react('InputBase').should('exist');
  });

  it('should make one request at a time and payload/queries not empty', function () {
    const val = '132456798';
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

        req.on('response', (resp) => {
          resp.send(200, {});
        });
      },
    ).as('reqSaveValue');

    cy.mount(
      <SetupTestsComponents>
        <LongTextCompliance
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
              'Features_Edit_Control_Form_Compliance_LongTextCompliance'
            ].setApiRouteName(apiRouter.getRoutes()['setControlValue']?.name);
          })
          .then(() => {
            cy.get(`textarea:visible`).type(val).blur().clickOutside();
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
        <LongTextCompliance
          compliance={_compliance}
          fileId={''}
          controlId={''}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('LongTextCompliance').react('ComplianceLabel').should('exist');
    cy.react('LongTextCompliance').react('ComplianceFooter').should('exist');
  });

  /**
   * this code represents a test case for a React component (LongTextCompliance) to ensure that it correctly renders an error message when the setErrorMessage function is called with a specific error message. It also checks for the existence of the component and the presence of the error message in the rendered output. This test helps ensure the reliability of the component's error handling functionality.
   */
  it('should render error message', () => {
    const error = 'Error message';
    const _compliance = {
      ...structuredClone(compliance),
    };
    cy.mount(
      <SetupTestsComponents>
        <LongTextCompliance
          compliance={_compliance}
          fileId={''}
          controlId={''}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('LongTextCompliance').should('exist');
    cy.window().then((w) => {
      w[
        'Features_Edit_Control_Form_Compliance_LongTextCompliance'
      ].setErrorMessage(error);
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
        <LongTextCompliance
          compliance={_compliance}
          fileId={''}
          controlId={''}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('LongTextCompliance').should('exist');
    cy.get('._FormError').contains(new RegExp(translations.join('|'), 'gu'));
  });

  it('Should not render mandatoryValue error message when typing a value on blur', () => {
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
        <LongTextCompliance
          compliance={_compliance}
          fileId={''}
          controlId={''}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('LongTextCompliance').should('exist');
    cy.react('LongTextCompliance')
      .find('textarea')
      .each(($txts) => {
        cy.wrap($txts).each(($txt) => {
          if ($txt.is(':visible')) {
            cy.wrap($txt).type('aaaa').blur();
          }
        });
      });
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(3000).then(() => {
      cy.get('._FormError', { timeout: 1 })
        .invoke('text')
        .should('not.match', new RegExp(new RegExp(translations.join('|'))));
    });
  });
});
