// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/Compliance/FormCompliance/SelectListCompliance/SelectListCompliance.job3.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../../../cypress/utils/SetupTestsComponents';

import { SelectListCompliance } from './SelectListCompliance';
import { IApiComplianceFields } from '../../../../../../types';
import '../../../../../../../Edit/translations';
import { _translate } from '../../../../../../../../../cypress/utils';
import { apiRouter } from '../../../../../../../../Services/Api';

describe('<SelectListCompliance />', () => {
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
        <SelectListCompliance
          compliance={_compliance}
          fileId={''}
          controlId={''}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('SelectListCompliance').should('exist');
    cy.react('SelectListCompliance').react('Select').should('exist');
  });

  it('should make one request at a time and payload/queries not empty', function () {
    const val = '22';
    const fileId = 'fileddd';
    const controlid = 'contrfdqs';
    const _compliance = {
      ...structuredClone(compliance),
      compliance_id: 'compliance_idd',
      compliance_elm_family: 'compli_elm_fam',
      control_answer_choices: [
        {
          choice_id: '11',
          choice_lib: 'choice lib 11',
        },
        {
          choice_id: '22',
          choice_lib: 'choice lib 22',
        },
      ],
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
        <SelectListCompliance
          compliance={_compliance}
          fileId={fileId}
          controlId={controlid}
        />
      </SetupTestsComponents>,
    )
      .waitReactApp()
      .then(() => {
        cy.window()
          .then((window) => {
            window[
              'Features_Edit_Control_Form_Compliance_SelectListCompliance'
            ].setApiRouteName(apiRouter.getRoutes()['setControlValue']?.name);
          })
          .then(() => {
            cy.react('Select').realClick();
            cy.react('Select').contains('choice lib 22').realClick();
            cy.wait('@reqSaveValue').then((interception) => {
              const { request } = interception;
              const { query } = request;

              // eslint-disable-next-line cypress/no-unnecessary-waiting
              cy.wait(500).then(() => {
                expect(reqCount).to.be.eq(1);
                cy.wrap(query).should('have.property', 'file_id');
                cy.wrap(query).should('have.property', 'elm_id');
                cy.wrap(query).should('have.property', 'compliance_id');
                cy.wrap(query).should('have.property', 'elm_val');
                cy.wrap(query).should('have.property', 'control_family');
                cy.then(() => {
                  expect(query.file_id).to.be.eq(fileId);
                  expect(query.elm_id).to.be.eq(controlid);
                  expect(query.compliance_id).to.be.eq(
                    _compliance.compliance_id,
                  );
                  expect(query.elm_val).to.be.eq(val);
                  expect(query.control_family).to.be.eq(
                    _compliance.compliance_elm_family,
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
        <SelectListCompliance
          compliance={_compliance}
          fileId={''}
          controlId={''}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('SelectListCompliance').react('ComplianceLabel').should('exist');
    cy.react('SelectListCompliance').react('ComplianceFooter').should('exist');
  });

  /**
   * this code represents a test case for a React component (SelectListCompliance) to ensure that it correctly renders an error message when the setErrorMessage function is called with a specific error message. It also checks for the existence of the component and the presence of the error message in the rendered output. This test helps ensure the reliability of the component's error handling functionality.
   */
  it('should render error message', () => {
    const error = 'Error message';
    const _compliance = {
      ...structuredClone(compliance),
    };
    cy.mount(
      <SetupTestsComponents>
        <SelectListCompliance
          compliance={_compliance}
          fileId={''}
          controlId={''}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('SelectListCompliance').should('exist');
    cy.window().then((w) => {
      w[
        'Features_Edit_Control_Form_Compliance_SelectListCompliance'
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
        <SelectListCompliance
          compliance={_compliance}
          fileId={''}
          controlId={''}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('SelectListCompliance').should('exist');
    cy.get('._FormError').contains(new RegExp(translations.join('|'), 'gu'));
  });
});
