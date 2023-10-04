// @ts-check
/// <reference types="cypress" />

import '../../../../../../../cypress/support/commands';

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../cypress/utils/SetupTestsComponents';

import 'cypress-react-selector';
import 'cypress-real-events';
import { mount } from 'cypress/react18';

import { JoditRichTextControl } from './JoditRichTextControl';
import { IApiControl } from '../../../../types';
import '../../../../../Edit/translations';

describe('<JoditRichTextControl />', () => {
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
    mount(
      <SetupTestsComponents>
        <JoditRichTextControl control={_control} fileId={''} context={'edit'} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('JoditRichTextControl');
  });

  it('should render <RejectControl /> if useRejection & control_rejectable', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
      useRejection: { isRejected: true, rejectComments: [] },
      control_rejectable: { is_rejected: true, control_reject_comment: [] },
    };
    mount(
      <SetupTestsComponents>
        <JoditRichTextControl control={_control} fileId={''} context={'edit'} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('RejectControl');
  });

  it('should be editable', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
      control_editable: true,
    };
    mount(
      <SetupTestsComponents>
        <JoditRichTextControl control={_control} fileId={''} context={'edit'} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('JoditRichTextControl')
      .find('.jodit-workplace div:nth-child(1)')
      .should('have.attr', 'contenteditable', 'true');
  });

  it('should render rich text options and available', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
      control_editable: true,
    };
    const options = [
      'Bold',
      'Italic',
      'Insert Unordered List',
      'Insert Ordered List',
      'Clear Formatting',
      'Font size',
      'Fill color or set the text color',
      'Insert format block',
      'Align',
      'Open editor in fullsize',
    ];

    mount(
      <SetupTestsComponents>
        <JoditRichTextControl control={_control} fileId={''} context={'edit'} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('JoditRichTextControl')
      .find('.jodit-workplace div:nth-child(1)')
      .should('have.attr', 'contenteditable', 'true');

    for (const option of options) {
      cy.react('JoditRichTextControl')
        .get(`[aria-label="${option}"]`)
        .should('exist')
        .should('not.be.disabled');
    }
  });

  it('should render rich text options and unavailable', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
    };
    const options = [
      'Bold',
      'Italic',
      'Insert Unordered List',
      'Insert Ordered List',
      'Clear Formatting',
      'Font size',
      'Fill color or set the text color',
      'Insert format block',
      'Align',
    ];

    mount(
      <SetupTestsComponents>
        <JoditRichTextControl control={_control} fileId={''} context={'edit'} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('JoditRichTextControl').find('.jodit-workplace div:nth-child(1)');

    for (const option of options) {
      cy.react('JoditRichTextControl')
        .get(`[aria-label="${option}"]`)
        .should('exist')
        .should('be.disabled');
    }
  });

  it('should render error message', () => {
    const msg = 'Error Message';
    const _control: IApiControl = {
      ...structuredClone(control),
    };
    mount(
      <SetupTestsComponents>
        <JoditRichTextControl control={_control} fileId={''} context={'edit'} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('JoditRichTextControl');
    cy.window().then((w) => {
      w['Features_Edit_JoditRichTextControl'].setMessage(msg);
      cy.wait(1);
      cy.react('JoditRichTextControl').get('._FormError').contains(msg);
    });
  });
});
