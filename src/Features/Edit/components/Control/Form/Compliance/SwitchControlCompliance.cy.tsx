// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/Compliance/SwitchControlCompliance.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../cypress/utils/SetupTestsComponents';

import { SwitchControlCompliance } from './SwitchControlCompliance';
import { EditValidationContext } from '../../../../../../Features/Edit';
import { IApiComplianceFields } from '../../../../types';

describe('<SwitchControlCompliance />', () => {
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
    const _compliance: IApiComplianceFields = {
      ...structuredClone(compliance),
      compliance_elm_type: 'text',
    };
    cy.mount(
      <SetupTestsComponents>
        <EditValidationContext.Provider value={{ data: null, fileId: '' }}>
          <SwitchControlCompliance compliance={_compliance} controlId={''} />
        </EditValidationContext.Provider>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('SwitchControlCompliance').should('exist');
  });

  it('should render <TextCompliance />', () => {
    const _compliance: IApiComplianceFields = {
      ...structuredClone(compliance),
      compliance_elm_type: 'text',
    };
    cy.mount(
      <SetupTestsComponents>
        <EditValidationContext.Provider value={{ data: null, fileId: '' }}>
          <SwitchControlCompliance compliance={_compliance} controlId={''} />
        </EditValidationContext.Provider>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('TextCompliance').should('exist');
  });

  it('should render <LongTextCompliance />', () => {
    const _compliance: IApiComplianceFields = {
      ...structuredClone(compliance),
      compliance_elm_type: 'long_text',
    };
    cy.mount(
      <SetupTestsComponents>
        <EditValidationContext.Provider value={{ data: null, fileId: '' }}>
          <SwitchControlCompliance compliance={_compliance} controlId={''} />
        </EditValidationContext.Provider>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('LongTextCompliance').should('exist');
  });

  it('should render <SelectListCompliance />', () => {
    const _compliance: IApiComplianceFields = {
      ...structuredClone(compliance),
      compliance_elm_type: 'select_list',
    };
    cy.mount(
      <SetupTestsComponents>
        <EditValidationContext.Provider value={{ data: null, fileId: '' }}>
          <SwitchControlCompliance compliance={_compliance} controlId={''} />
        </EditValidationContext.Provider>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('SelectListCompliance').should('exist');
  });

  it('should render <FinancialCompliance />', () => {
    const _compliance: IApiComplianceFields = {
      ...structuredClone(compliance),
      compliance_elm_type: 'financial',
    };
    cy.mount(
      <SetupTestsComponents>
        <EditValidationContext.Provider value={{ data: null, fileId: '' }}>
          <SwitchControlCompliance compliance={_compliance} controlId={''} />
        </EditValidationContext.Provider>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('FinancialCompliance').should('exist');
  });

  it('should render <IntegerCompliance />', () => {
    const _compliance: IApiComplianceFields = {
      ...structuredClone(compliance),
      compliance_elm_type: 'integer',
    };
    cy.mount(
      <SetupTestsComponents>
        <EditValidationContext.Provider value={{ data: null, fileId: '' }}>
          <SwitchControlCompliance compliance={_compliance} controlId={''} />
        </EditValidationContext.Provider>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('IntegerCompliance').should('exist');
  });

  it('should render <DateCompliance />', () => {
    const _compliance: IApiComplianceFields = {
      ...structuredClone(compliance),
      compliance_elm_type: 'date',
    };
    cy.mount(
      <SetupTestsComponents>
        <EditValidationContext.Provider value={{ data: null, fileId: '' }}>
          <SwitchControlCompliance compliance={_compliance} controlId={''} />
        </EditValidationContext.Provider>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('DateCompliance').should('exist');
  });

  it('should render <CommentCompliance />', () => {
    const _compliance: IApiComplianceFields = {
      ...structuredClone(compliance),
      compliance_elm_type: 'comment',
    };
    cy.mount(
      <SetupTestsComponents>
        <EditValidationContext.Provider value={{ data: null, fileId: '' }}>
          <SwitchControlCompliance compliance={_compliance} controlId={''} />
        </EditValidationContext.Provider>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CommentCompliance').should('exist');
  });

  it('should render <PercetCompliance />', () => {
    const _compliance: IApiComplianceFields = {
      ...structuredClone(compliance),
      compliance_elm_type: 'percent',
    };
    cy.mount(
      <SetupTestsComponents>
        <EditValidationContext.Provider value={{ data: null, fileId: '' }}>
          <SwitchControlCompliance compliance={_compliance} controlId={''} />
        </EditValidationContext.Provider>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('PercentCompliance').should('exist');
  });

  it('should render <UploadCompliance />', () => {
    const _compliance: IApiComplianceFields = {
      ...structuredClone(compliance),
      compliance_elm_type: 'file_upload',
    };
    cy.mount(
      <SetupTestsComponents>
        <EditValidationContext.Provider value={{ data: null, fileId: '' }}>
          <SwitchControlCompliance compliance={_compliance} controlId={''} />
        </EditValidationContext.Provider>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('UploadCompliance').should('exist');
  });

  it('should render <RadioCompliance />', () => {
    const _compliance: IApiComplianceFields = {
      ...structuredClone(compliance),
      compliance_elm_type: 'radio',
    };
    cy.mount(
      <SetupTestsComponents>
        <EditValidationContext.Provider value={{ data: null, fileId: '' }}>
          <SwitchControlCompliance compliance={_compliance} controlId={''} />
        </EditValidationContext.Provider>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('RadioCompliance').should('exist');
  });

  it('should render <ChexboxesCompliance />', () => {
    const _compliance: IApiComplianceFields = {
      ...structuredClone(compliance),
      compliance_elm_type: 'checkbox',
    };
    cy.mount(
      <SetupTestsComponents>
        <EditValidationContext.Provider value={{ data: null, fileId: '' }}>
          <SwitchControlCompliance compliance={_compliance} controlId={''} />
        </EditValidationContext.Provider>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('ChexboxesCompliance').should('exist');
  });

  it('should render <BooleanCompliance />', () => {
    const _compliance: IApiComplianceFields = {
      ...structuredClone(compliance),
      compliance_elm_type: 'boolean',
    };
    cy.mount(
      <SetupTestsComponents>
        <EditValidationContext.Provider value={{ data: null, fileId: '' }}>
          <SwitchControlCompliance compliance={_compliance} controlId={''} />
        </EditValidationContext.Provider>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('BooleanCompliance').should('exist');
  });
});
