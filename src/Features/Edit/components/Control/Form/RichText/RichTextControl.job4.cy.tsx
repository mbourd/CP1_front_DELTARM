// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/RichText/RichTextControl.job4.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../cypress/utils/SetupTestsComponents';
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

    cy.mount(
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
    cy.mount(
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
    cy.mount(
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
    cy.mount(
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
    cy.mount(
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
    cy.then(() => {
      for (const option of options) {
        cy.react('RichTextControl')
          .find('.rdw-editor-toolbar')
          .find(`[aria-label="${option}"]`)
          .should('exist')
          .should('be.visible');
      }
    });
  });

  it('should make one request at a time and payload/queries not empty', function () {
    const fileId = 'poepodgspklshipoh35465';
    const _control: IApiControl = {
      ...structuredClone(control),
      editable: true,
      control_id: 'contrIddfkljsdfglkhs',
      control_family: 'contrFamf^dqkdps',
    };
    let reqC = 0;

    cy.mount(
      <SetupTestsComponents>
        <RichTextControl control={_control} fileId={fileId} context={'edit'} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();

    cy.intercept('POST', '/control/set_value\\?*', (req) => {
      reqC++;
      req.reply({ statusCode: 200, body: {} });
    }).as('reqSaveRichText');

    cy.get('[contenteditable="true"]')
      .realClick()
      .realType('Hello world')
      .clickOutside();

    cy.wait('@reqSaveRichText').then((interception) => {
      const { request } = interception;
      const { query } = request;

      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(288).then(() => {
        expect(reqC).to.eq(1);
        cy.wrap(query).should('have.property', 'file_id');
        cy.wrap(query).should('have.property', 'elm_id');
        cy.wrap(query).should('have.property', 'control_family');
        cy.wrap(query).should('have.property', 'elm_val');
        cy.then(() => {
          expect(query.file_id).to.eq(fileId);
          expect(query.elm_id).to.eq(_control.control_id);
          expect(query.control_family).to.eq(_control.control_family);
          expect(request.body).to.not.empty;
        });
      });
    });
  });
});
