// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/Upload/UploadControl.job4.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../cypress/utils/SetupTestsComponents';
import {
  // _requestJWT,
  _getEnv,
  _translate,
} from '../../../../../../../cypress/utils';

import { UploadControl } from './UploadControl';
import '../../../../../Edit/translations';
import { IApiControl } from '../../../../types';

describe('<UploadControl />', () => {
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

  // before(() => {
  //   _requestJWT();
  // });

  beforeEach(() => {
    const client_info = [
      {
        cli_app_name: 'Module Formulaire - ABC',
        cli_btn_faq_url: null,
        cli_btn_faq_visible: false,
        cli_file_name_regex: null,
        cli_id: 8,
        cli_logo_url:
          'https://s3-drm-cp1.s3.eu-west-3.amazonaws.com/ressources/logo_client/delta-rm.png',
        cli_name: 'Groupe ABC',
        cli_valid_mode: 'global',
        file_search_placeholder: 'Numéro de Dossier',
      },
    ];
    const security = {
      _roles: [],
      _email: null,
      _jwt: _getEnv('JWT'),
      _lang: 'fr',
      _username: 'anon',
      _expireAt: '2023-09-02T11:49:04.000Z',
    };
    window.localStorage.setItem('client_info', JSON.stringify(client_info));
    window.localStorage.setItem('security', JSON.stringify(security));
  });

  it('should render', () => {
    const _control = {
      ...structuredClone(control),
    };
    cy.mount(
      <SetupTestsComponents>
        <UploadControl control={_control} fileId={''} context={'edit'} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('UploadControl');
  });

  it('should render error message if mandatory', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
      mandatory: true,
    };
    const trans_EN = _translate(
      'en',
      'Edit',
      'mandatoryValue',
      'Valeur obligatoire',
    );
    const trans_FR = _translate(
      'fr',
      'Edit',
      'mandatoryValue',
      'Valeur obligatoire',
    );
    const trans_DE = _translate(
      'de',
      'Edit',
      'mandatoryValue',
      'Valeur obligatoire',
    );
    const translations = [trans_EN, trans_FR, trans_DE];
    cy.mount(
      <SetupTestsComponents>
        <UploadControl control={_control} fileId={''} context={'edit'} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('UploadControl')
      .react('FormError')
      .invoke('text')
      .and('match', new RegExp(translations.join('|'), 'gu'));
  });

  it('the button should be disabled', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
      editable: false,
      control_id: 'btn-file',
    };
    cy.mount(
      <SetupTestsComponents>
        <UploadControl control={_control} fileId={''} context={'edit'} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('UploadControl')
      .find(`#upload-id${_control.control_id}`)
      .should('be.disabled');
  });

  it('the button should not be disabled', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
      editable: true,
      control_id: 'btn-file',
    };
    cy.mount(
      <SetupTestsComponents>
        <UploadControl control={_control} fileId={''} context={'edit'} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('UploadControl')
      .find(`#upload-id${_control.control_id}`)
      .should('not.be.disabled');
  });

  it('should render <RejectControl /> if useRejection & control_rejectable', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
      useRejection: { isRejected: true, rejectComments: [] },
      control_rejectable: { is_rejected: true, control_reject_comment: [] },
    };
    cy.mount(
      <SetupTestsComponents>
        <UploadControl control={_control} fileId={''} context={'edit'} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('UploadControl').react('RejectControl');
  });

  it('should render <ControlLabel /> with control_title', () => {
    const title = 'hello world';
    const _control: IApiControl = {
      ...structuredClone(control),
      control_title: title,
    };
    cy.mount(
      <SetupTestsComponents>
        <UploadControl control={_control} fileId={''} context={'edit'} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('UploadControl')
      .react('ControlLabel')
      .find('span')
      .eq(0)
      .should('have.text', title);
  });

  it('should attach file and make only one request at a time', function () {
    let requestCount = 0;
    const title = 'hello world';
    const _control: IApiControl = {
      ...structuredClone(control),
      control_title: title,
      editable: true,
    };
    cy.mount(
      <SetupTestsComponents>
        <UploadControl control={_control} fileId={''} context={'edit'} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();

    cy.intercept('POST', '/control/set_value?*', (req) => {
      requestCount++;
      req.reply({});
    }).as('requestUploadFile');

    // cy.fixture('test_to_upload1.txt').then((content) => {
    // cy.react('UploadControl').find('input[type="file"]').attachFile(
    //   {
    //     fileContent: content.toString(),
    //     fileName: 'test_to_upload1.txt',
    //     mimeType: 'text/plain',
    //   },
    //   { subjectType: 'drag-n-drop', force: true },
    // );
    cy.react('UploadControl')
      .find('input[type="file"]')
      .selectFile(
        {
          contents: Cypress.Buffer.from('file contents'),
          fileName: 'file.txt',
          mimeType: 'text/plain',
          lastModified: Date.now(),
        },
        { force: true, action: 'drag-drop' },
      );
    cy.wait(1000).then(() => {
      expect(requestCount).to.be.eq(1);
    });
    // });
  });
});
