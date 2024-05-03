// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/InfoBlock/InfoBlockControl.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../cypress/utils/SetupTestsComponents';

import { InfoBlockControl } from './InfoBlockControl';
import { IApiControl } from '../../../../types';
import '../../../../../Edit/translations';

describe('<InfoBlockControl />', () => {
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
    cy.mount(
      <SetupTestsComponents>
        <InfoBlockControl control={_control} context={'edit'} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('InfoBlockControl');
  });

  it('should render <RejectControl /> if useRejection & control_rejectable', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
      useRejection: { isRejected: true, rejectComments: [] },
      control_rejectable: { is_rejected: true, control_reject_comment: [] },
    };
    cy.mount(
      <SetupTestsComponents>
        <InfoBlockControl control={_control} context={'edit'} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('InfoBlockControl').react('RejectControl');
  });

  it('should render control_value if isOpen = true', () => {
    const v = 'Hello world!';
    const _control: IApiControl = {
      ...structuredClone(control),
      control_value: v,
    };
    cy.mount(
      <SetupTestsComponents>
        <InfoBlockControl control={_control} context={'edit'} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('InfoBlockControl');
    cy.window().then((w) => {
      w['Features_Edit_InfoBlockControl'].setIsOpen(true);
      cy.wait(1);
      cy.react('InfoBlockControl').contains(v);
    });
  });

  it('should not render control_value if isOpen = false', () => {
    const v = 'Hello world!';
    const _control: IApiControl = {
      ...structuredClone(control),
      control_value: v,
    };
    cy.mount(
      <SetupTestsComponents>
        <InfoBlockControl control={_control} context={'edit'} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('InfoBlockControl');
    cy.window().then((w) => {
      w['Features_Edit_InfoBlockControl'].setIsOpen(false);
      cy.wait(1);
      cy.react('InfoBlockControl')
        .invoke('text')
        .then((t) => {
          expect(t).to.not.match(new RegExp(v, 'gu'));
        });
    });
  });
});
