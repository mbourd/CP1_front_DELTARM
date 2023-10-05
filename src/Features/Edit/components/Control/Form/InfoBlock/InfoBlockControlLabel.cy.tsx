// @ts-check
/// <reference types="cypress" />

import '../../../../../../../cypress/support/commands';

import React, { useState } from 'react';
import { SetupTestsComponents } from '../../../../../../../cypress/utils/SetupTestsComponents';

import 'cypress-react-selector';
import 'cypress-real-events';
import { mount } from 'cypress/react18';

import { InfoBlockControlLabel } from './InfoBlockControlLabel';
import { IApiControl } from '../../../../types';
import '../../../../../Edit/translations';

describe('<FormulaControl />', () => {
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
  };

  it('should render', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
    };
    const DummyFC: React.FC = () => {
      const [isOpen, setIsOpen] = useState(false);

      return (
        <InfoBlockControlLabel
          control={_control}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      );
    };
    mount(
      <SetupTestsComponents>
        <DummyFC />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('InfoBlockControlLabel');
  });

  it('should render control_desc_1 with tooltip', () => {
    const desc = 'Description';
    const _control: IApiControl = {
      ...structuredClone(control),
      control_desc_1: desc,
    };
    mount(
      <SetupTestsComponents>
        <InfoBlockControlLabel
          control={_control}
          isOpen={false}
          setIsOpen={function (value: React.SetStateAction<boolean>): void {
            throw new Error('Function not implemented.');
          }}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('InfoBlockControlLabel')
      .react('BPITooltip')
      .should('have.attr', 'title', desc);
    cy.react('InfoBlockControlLabel')
      .react('BPITooltip')
      .each(($el) => {
        cy.wrap($el).trigger('mouseover');
        cy.get('[role="tooltip"]').should('exist').should('be.visible');
        cy.wrap($el).trigger('mouseout');
        cy.get('[role="tooltip"]').should('not.exist');
      });
  });

  it('should render control_title', () => {
    const desc = 'Description';
    const _control: IApiControl = {
      ...structuredClone(control),
      control_title: desc,
    };
    mount(
      <SetupTestsComponents>
        <InfoBlockControlLabel
          control={_control}
          isOpen={false}
          setIsOpen={function (value: React.SetStateAction<boolean>): void {
            throw new Error('Function not implemented.');
          }}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('InfoBlockControlLabel')
      .find('span:nth-child(1) span:nth-child(1)')
      .should('have.text', desc);
  });
});
