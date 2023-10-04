// @ts-check
/// <reference types="cypress" />

import '../../../../../../cypress/support/commands';

import React from 'react';
import { SetupTestsComponents } from '../../../../../../cypress/utils/SetupTestsComponents';

import 'cypress-react-selector';
import { mount } from 'cypress/react18';
import {
  _requestJWT,
  _getEnv,
  _escapeForRegExp,
} from '../../../../../../cypress/utils';

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
    mount(
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
    mount(
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
    mount(
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
