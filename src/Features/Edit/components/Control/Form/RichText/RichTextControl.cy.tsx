// @ts-check
/// <reference types="cypress" />

import '../../../../../../../cypress/support/commands';

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../cypress/utils/SetupTestsComponents';

import 'cypress-react-selector';
import 'cypress-real-events';
import { mount } from 'cypress/react18';
import { _translate } from '../../../../../../../cypress/utils';

import { RichTextControl } from './RichTextControl';
import { IApiControl } from '../../../../types';
import '../../../../../Edit/translations';

describe('<RichTextControl />', () => {
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
        <RichTextControl control={_control} fileId={''} context={'edit'} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('RichTextControl');
  });

  it('should render <ControlLabel />', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
    };
    mount(
      <SetupTestsComponents>
        <RichTextControl control={_control} fileId={''} context={'edit'} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('RichTextControl').react('ControlLabel');
  });

  it('should render error message if mandatory', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
      mandatory: true,
      editable: true,
    };
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
    mount(
      <SetupTestsComponents>
        <RichTextControl control={_control} fileId={''} context={'edit'} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('RichTextControl')
      .find('._FormError')
      .invoke('text')
      .and('match', new RegExp(translations.join('|'), 'gu'));
  });

  it('should be disabled and toolbar not visible', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
      editable: false,
    };
    mount(
      <SetupTestsComponents>
        <RichTextControl control={_control} fileId={''} context={'edit'} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('RichTextControl')
      .find('.DraftEditor-editorContainer div:nth-child(1)')
      .should('have.attr', 'contenteditable', 'false');
    cy.react('RichTextControl')
      .find('.rdw-editor-toolbar', { timeout: 1 })
      .should('not.exist');
  });

  it('should not be disabled and toolbar visible', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
      editable: true,
    };
    const options = [
      'rdw-block-control',
      'rdw-font-family-control',
      'rdw-list-control',
      'rdw-textalign-control',
      'rdw-color-picker',
      'rdw-image-control',
      'rdw-remove-control',
    ];
    mount(
      <SetupTestsComponents>
        <RichTextControl control={_control} fileId={''} context={'edit'} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('RichTextControl')
      .find('.DraftEditor-editorContainer div:nth-child(1)')
      .should('have.attr', 'contenteditable', 'true');
    cy.react('RichTextControl')
      .find('.rdw-editor-toolbar')
      .should('be.visible');
    cy.wait(1);
    for (const option of options) {
      cy.react('RichTextControl')
        .find('.rdw-editor-toolbar')
        .find(`[aria-label="${option}"]`)
        .should('exist')
        .should('be.visible');
    }
  });
});
