// @ts-check
/// <reference types="cypress" />

import '../../../../../../../cypress/support/component';

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../cypress/utils/SetupTestsComponents';

import { mount } from 'cypress/react18';

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
  };

  it('should render', () => {
    const _compliance: IApiComplianceFields = {
      ...structuredClone(compliance),
      compliance_elm_type: 'text',
    };
    mount(
      <SetupTestsComponents>
        <EditValidationContext.Provider value={{ data: null, fileId: '' }}>
          <SwitchControlCompliance compliance={_compliance} controlId={''} />
        </EditValidationContext.Provider>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('SwitchControlCompliance');
  });

  it('should render <TextCompliance />', () => {
    const _compliance: IApiComplianceFields = {
      ...structuredClone(compliance),
      compliance_elm_type: 'text',
    };
    mount(
      <SetupTestsComponents>
        <EditValidationContext.Provider value={{ data: null, fileId: '' }}>
          <SwitchControlCompliance compliance={_compliance} controlId={''} />
        </EditValidationContext.Provider>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('TextCompliance');
  });

  it('should render <LongTextCompliance />', () => {
    const _compliance: IApiComplianceFields = {
      ...structuredClone(compliance),
      compliance_elm_type: 'long_text',
    };
    mount(
      <SetupTestsComponents>
        <EditValidationContext.Provider value={{ data: null, fileId: '' }}>
          <SwitchControlCompliance compliance={_compliance} controlId={''} />
        </EditValidationContext.Provider>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('LongTextCompliance');
  });

  it('should render <SelectListCompliance />', () => {
    const _compliance: IApiComplianceFields = {
      ...structuredClone(compliance),
      compliance_elm_type: 'select_list',
    };
    mount(
      <SetupTestsComponents>
        <EditValidationContext.Provider value={{ data: null, fileId: '' }}>
          <SwitchControlCompliance compliance={_compliance} controlId={''} />
        </EditValidationContext.Provider>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('SelectListCompliance');
  });

  it('should render <FinancialCompliance />', () => {
    const _compliance: IApiComplianceFields = {
      ...structuredClone(compliance),
      compliance_elm_type: 'financial',
    };
    mount(
      <SetupTestsComponents>
        <EditValidationContext.Provider value={{ data: null, fileId: '' }}>
          <SwitchControlCompliance compliance={_compliance} controlId={''} />
        </EditValidationContext.Provider>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('FinancialCompliance');
  });

  it('should render <IntegerCompliance />', () => {
    const _compliance: IApiComplianceFields = {
      ...structuredClone(compliance),
      compliance_elm_type: 'integer',
    };
    mount(
      <SetupTestsComponents>
        <EditValidationContext.Provider value={{ data: null, fileId: '' }}>
          <SwitchControlCompliance compliance={_compliance} controlId={''} />
        </EditValidationContext.Provider>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('IntegerCompliance');
  });

  it('should render <DateCompliance />', () => {
    const _compliance: IApiComplianceFields = {
      ...structuredClone(compliance),
      compliance_elm_type: 'date',
    };
    mount(
      <SetupTestsComponents>
        <EditValidationContext.Provider value={{ data: null, fileId: '' }}>
          <SwitchControlCompliance compliance={_compliance} controlId={''} />
        </EditValidationContext.Provider>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('DateCompliance');
  });

  it('should render <CommentCompliance />', () => {
    const _compliance: IApiComplianceFields = {
      ...structuredClone(compliance),
      compliance_elm_type: 'comment',
    };
    mount(
      <SetupTestsComponents>
        <EditValidationContext.Provider value={{ data: null, fileId: '' }}>
          <SwitchControlCompliance compliance={_compliance} controlId={''} />
        </EditValidationContext.Provider>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CommentCompliance');
  });

  it('should render <PercetCompliance />', () => {
    const _compliance: IApiComplianceFields = {
      ...structuredClone(compliance),
      compliance_elm_type: 'percent',
    };
    mount(
      <SetupTestsComponents>
        <EditValidationContext.Provider value={{ data: null, fileId: '' }}>
          <SwitchControlCompliance compliance={_compliance} controlId={''} />
        </EditValidationContext.Provider>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('PercentCompliance');
  });

  it('should render <UploadCompliance />', () => {
    const _compliance: IApiComplianceFields = {
      ...structuredClone(compliance),
      compliance_elm_type: 'file_upload',
    };
    mount(
      <SetupTestsComponents>
        <EditValidationContext.Provider value={{ data: null, fileId: '' }}>
          <SwitchControlCompliance compliance={_compliance} controlId={''} />
        </EditValidationContext.Provider>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('UploadCompliance');
  });

  it('should render <RadioCompliance />', () => {
    const _compliance: IApiComplianceFields = {
      ...structuredClone(compliance),
      compliance_elm_type: 'radio',
    };
    mount(
      <SetupTestsComponents>
        <EditValidationContext.Provider value={{ data: null, fileId: '' }}>
          <SwitchControlCompliance compliance={_compliance} controlId={''} />
        </EditValidationContext.Provider>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('RadioCompliance');
  });

  it('should render <ChexboxesCompliance />', () => {
    const _compliance: IApiComplianceFields = {
      ...structuredClone(compliance),
      compliance_elm_type: 'checkbox',
    };
    mount(
      <SetupTestsComponents>
        <EditValidationContext.Provider value={{ data: null, fileId: '' }}>
          <SwitchControlCompliance compliance={_compliance} controlId={''} />
        </EditValidationContext.Provider>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('ChexboxesCompliance');
  });

  it('should render <BooleanCompliance />', () => {
    const _compliance: IApiComplianceFields = {
      ...structuredClone(compliance),
      compliance_elm_type: 'boolean',
    };
    mount(
      <SetupTestsComponents>
        <EditValidationContext.Provider value={{ data: null, fileId: '' }}>
          <SwitchControlCompliance compliance={_compliance} controlId={''} />
        </EditValidationContext.Provider>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('BooleanCompliance');
  });
});
