// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/Upload/UploadControl.job4.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../cypress/utils/SetupTestsComponents';
import { _getEnv, _translate } from '../../../../../../../cypress/utils';
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

  // TODO: CypressError: Timed out retrying after 4000ms: `cy.invoke()` errored because your subject is: `null`. You cannot invoke any functions such as `text` on a `null` value.

  /*  it('should render error message if mandatory', () => {
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
        });*/

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

  it('should delete the file and make one request at a time payload/queries not empty', function () {
    const fileId = 'file_idd';
    let requestCount = 0;
    const title = 'hello world';
    const _control: IApiControl = {
      ...structuredClone(control),
      control_title: title,
      editable: true,
      control_editable: true,
    };
    cy.mount(
      <SetupTestsComponents>
        <UploadControl control={_control} fileId={fileId} context={'edit'} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();

    cy.intercept('POST', '/control/set_value?*', (req) => {
      req.reply({
        data: {
          file_detail: [
            {
              file_id:
                'upload/dev/cli_8/2024-3/d325d065-7676-4b57-9c56-dd9cec05b4dd',
              file_name: 'file.txt',
            },
          ],
          msg: 'ok',
        },
      });
    }).as('requestUploadFile');
    cy.intercept('POST', '/control/delete_upfile?*', (req) => {
      requestCount++;
      req.reply({
        data: {
          file_detail: [],
        },
      });
    }).as('requestDeleteFile');

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
    cy.wait('@requestUploadFile').then(() => {
      cy.get('[data-testid="delete_icon_uploadfile"]').click();
      cy.wait('@requestDeleteFile').then((interception) => {
        const { request } = interception;
        const { query } = request;

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(255).then(() => {
          expect(requestCount).to.be.eq(1);

          cy.wrap(query).should('have.property', 'file_id');
          cy.wrap(query).should('have.property', 'control_id');
          cy.wrap(query)
            .should('have.property', 'file_name')
            .then(() => {
              expect(query.file_id).to.be.eq(fileId);
              expect(query.control_id).to.be.eq(_control.control_id);
              expect(query.file_name).to.be.eq('file.txt');
            });

          cy.react('UploadList').find('span').should('have.length', 0);
        });
      });
    });
  });

  it('should attach file then able to download and make only one request at a time and payload not empty', function () {
    const fileName = 'file.txt';
    const contentFile = 'dspfojdspkfmdklqsfdskfsdf hello world';
    const fileid = 'dlqspfjkqspfj';
    const title = 'hello world';
    const _control: IApiControl = {
      ...structuredClone(control),
      control_title: title,
      editable: true,
      control_id: 'sdfpihdfconid',
      control_family: 'conttfamfdsfgjsdfj',
    };
    let requestCount = 0;

    cy.mount(
      <SetupTestsComponents>
        <UploadControl control={_control} fileId={fileid} context={'edit'} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();

    cy.intercept('POST', '/control/set_value\\?*', (req) => {
      req.reply(201, {
        data: {
          file_detail: [
            {
              file_id:
                'upload/dev/cli_8/2024-3/d325d065-7676-4b57-9c56-dd9cec05b4dd',
              file_name: fileName,
            },
          ],
          msg: 'ok',
        },
      });
    }).as('requestUploadFile');
    cy.intercept('GET', '**/*', (req) => {
      requestCount++;
      // req.on('response', (resp) => resp.send(200, { data: '' }));
      req.reply({
        statusCode: 200,
        body: contentFile,
      });
    }).as('reqGetDownloadFile');

    cy.react('UploadControl')
      .find('input[type="file"]')
      .selectFile(
        {
          contents: Cypress.Buffer.from(contentFile),
          fileName: fileName,
          mimeType: 'text/plain',
          lastModified: Date.now(),
        },
        { force: true, action: 'drag-drop' },
      );
    cy.wait('@requestUploadFile').then(() => {
      cy.contains(fileName).realClick();
      cy.wait('@reqGetDownloadFile').then((intercept) => {
        const { request } = intercept;
        const { query } = request;

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(255).then(() => {
          expect(requestCount).to.eq(1);
          cy.wrap(query).should('have.property', 'file_id');
          cy.wrap(query).should('have.property', 'file_name');
          cy.then(() => {
            expect(query.file_id).to.eq(
              'upload/dev/cli_8/2024-3/d325d065-7676-4b57-9c56-dd9cec05b4dd',
            );
            expect(query.file_name).to.eq(fileName);
          });
          cy.readFile('cypress/downloads/' + fileName).should(
            'contain',
            contentFile,
          );
        });
      });
    });
    // });
  });
});

function parseMultipartFormData(multipartFormData) {
  if (!multipartFormData.includes('------WebKitFormBoundary'))
    return multipartFormData;

  const formDataObject = {};

  // Split the multipart content into individual parts
  const parts = multipartFormData.split(/------WebKitFormBoundary.*/);

  // Remove the first and last empty parts
  parts.shift();
  parts.pop();

  // Iterate over each part to extract key-value pairs
  parts.forEach((part) => {
    const match = /name="([^"]+)"(?:\r\n|\r|\n)([\s\S]*)/.exec(part);
    if (match) {
      const key = match[1].replace(/\[\]$/, '');
      const value = match[2].trim();

      // If the key already exists, convert the value to an array
      if (Object.hasOwnProperty.call(formDataObject, key)) {
        if (Array.isArray(formDataObject[key])) {
          formDataObject[key].push(value);
        } else {
          formDataObject[key] = [formDataObject[key], value];
        }
      } else {
        formDataObject[key] = value;
      }
    }
  });

  return JSON.stringify(formDataObject);
}
