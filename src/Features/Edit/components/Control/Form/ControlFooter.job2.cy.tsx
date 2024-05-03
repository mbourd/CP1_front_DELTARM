// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/ControlFooter.job2.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../cypress/utils/SetupTestsComponents';

import { ControlFooter } from './ControlFooter';
import { IApiControl } from './../../../../Edit/types';

describe('<ControlFooter />', () => {
  const control: IApiControl = {
    control_desc_1: null,
    control_desc_2: null,
    control_editable: false,
    control_conditional: false,
    control_id: '',
    control_mandatory: false,
    mandatory: false,
    control_previous_value: null,
    control_title: '',
    control_type: 'boolean',
    control_value: null,
    control_family: '',
    control_regex: null,
    control_regex_msg: null,
    control_manage_compliance: false,
    control_options: undefined,
    upload_detail: null,
    rich_text_detail: null,
    control_rejectable: null,
    control_font_size: 'standard',
    control_font_color: 'black',
  };

  it('should render', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
    };
    cy.mount(
      <SetupTestsComponents>
        <ControlFooter control={_control} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('ControlFooter').should('exist');
  });

  it('shoul render previous value in tooltip', () => {
    const controlPreviousValue = '2023-03-23';
    const _control: IApiControl = {
      ...structuredClone(control),
      control_previous_value: controlPreviousValue,
    };
    cy.mount(
      <SetupTestsComponents>
        <ControlFooter control={_control} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('ControlFooter').react('BPITooltip').should('exist');
    cy.react('ControlFooter')
      .react('BPITooltip')
      .each(($el) => {
        cy.wrap($el).trigger('mouseover');
        cy.get('[role="tooltip"]').should('exist').should('be.visible');
        cy.get('[role="tooltip"]').should('have.text', controlPreviousValue);
        cy.wrap($el).trigger('mouseout');
        cy.get('[role="tooltip"]').should('not.exist');
      });
  });

  it('shoul render previous value if type date in tooltip', () => {
    const controlPreviousValue = '2023-03-23';
    const _control: IApiControl = {
      ...structuredClone(control),
      control_previous_value: controlPreviousValue,
      control_type: 'date',
    };
    cy.mount(
      <SetupTestsComponents>
        <ControlFooter control={_control} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('ControlFooter').react('BPITooltip').should('exist');
    cy.react('ControlFooter')
      .react('BPITooltip')
      .each(($el) => {
        cy.wrap($el).trigger('mouseover');
        cy.get('[role="tooltip"]').should('exist').should('be.visible');
        cy.get('[role="tooltip"]').should(
          'have.text',
          new Date(controlPreviousValue).toLocaleDateString(),
        );
        cy.wrap($el).trigger('mouseout');
        cy.get('[role="tooltip"]').should('not.exist');
      });
  });

  it('should render control desc 2 with tooltip', () => {
    const controlTitle = 'Hello World';
    const _control: IApiControl = {
      ...structuredClone(control),
      control_desc_2: controlTitle,
    };
    cy.mount(
      <SetupTestsComponents>
        <ControlFooter control={_control} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('ControlFooter')
      .react('BPITooltip')
      .each(($el) => {
        cy.wrap($el).trigger('mouseover');
        cy.get('[role="tooltip"]').should('exist').should('be.visible');
        cy.get('[role="tooltip"]').should('have.text', controlTitle);
        cy.wrap($el).trigger('mouseout');
        cy.get('[role="tooltip"]').should('not.exist');
      });
  });
});
