// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/JoditRichTextControl/JoditRichTextControl.job4.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../cypress/utils/SetupTestsComponents';

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
    cy.mount(
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
    cy.mount(
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
    cy.mount(
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
    cy.viewport(999, 500);
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
      'Open in fullsize',
    ];

    cy.mount(
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
    cy.viewport(999, 500);
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

    cy.mount(
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
        .should('have.attr', 'disabled', 'disabled');
    }
  });

  it('should render error message', () => {
    const msg = 'Error Message';
    const _control: IApiControl = {
      ...structuredClone(control),
    };
    cy.mount(
      <SetupTestsComponents>
        <JoditRichTextControl control={_control} fileId={''} context={'edit'} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('JoditRichTextControl');
    cy.window().then((w) => {
      cy.then(() =>
        w['Features_Edit_JoditRichTextControl'].setMessage(msg),
      ).then(() =>
        cy.react('JoditRichTextControl').get('._FormError').contains(msg),
      );
    });
  });

  it('should make one request at a time and payload or queries not empty', function () {
    cy.viewport(1000, 600);
    const fileId = 'fileIdd';
    const _control: IApiControl = {
      ...structuredClone(control),
      control_editable: true,
      control_id: 'contr_idd',
      control_family: 'contr_famil',
    };
    let reqCount = 0;

    cy.intercept('POST', '/control/set_value?*', (req) => {
      reqCount++;
      req.reply({ statusCode: 200, body: { data: {} } });
    }).as('reqSaveJodit');

    cy.mount(
      <SetupTestsComponents>
        <JoditRichTextControl
          control={_control}
          fileId={fileId}
          context={'edit'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();

    cy.get('.jodit-wysiwyg').realClick().realType('Hello').clickOutside();

    cy.wait('@reqSaveJodit').then((interception) => {
      const { request } = interception;
      const { query } = request;

      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(255).then(() => {
        expect(reqCount).to.be.lte(2);

        cy.wrap(query).should('have.property', 'file_id');
        cy.wrap(query).should('have.property', 'elm_id');
        cy.wrap(query)
          .should('have.property', 'control_family')
          .then(() => {
            expect(query.file_id).to.be.eq(fileId);
            expect(query.elm_id).to.be.eq(_control.control_id);
            expect(query.control_family).to.be.eq(_control.control_family);
            expect(request.body).to.be.eq('<p>Hello</p>');
          });
      });
    });
  });
});
