// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/ControlLabel.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../cypress/utils/SetupTestsComponents';

import { ControlLabel } from './ControlLabel';
import { IApiControl } from './../../../../Edit/types';

describe('<ControlLabel />', () => {
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
        <ControlLabel control={_control} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('ControlLabel').should('exist');
  });

  it('should render control title', () => {
    const controlTitle = 'Hello World';
    const _control: IApiControl = {
      ...structuredClone(control),
      control_title: controlTitle,
    };
    cy.mount(
      <SetupTestsComponents>
        <ControlLabel control={_control} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('ControlLabel')
      .find('span span:nth-child(1)')
      .contains(controlTitle);
  });

  it('should render control desc 1 with tooltip', () => {
    const controlTitle = 'Hello World';
    const _control: IApiControl = {
      ...structuredClone(control),
      control_desc_1: controlTitle,
    };
    cy.mount(
      <SetupTestsComponents>
        <ControlLabel control={_control} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('ControlLabel')
      .find('span span:nth-child(2)')
      .react('BPITooltip')
      .should('have.attr', 'title', controlTitle)
      .each(($el) => {
        cy.wrap($el).trigger('mouseover');
        cy.get('[role="tooltip"]').should('exist').should('be.visible');
        cy.wrap($el).trigger('mouseout');
        cy.get('[role="tooltip"]').should('not.exist');
      });
  });
});
