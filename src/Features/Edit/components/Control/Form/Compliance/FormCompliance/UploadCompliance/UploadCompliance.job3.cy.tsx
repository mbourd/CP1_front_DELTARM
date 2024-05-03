// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/Compliance/FormCompliance/UploadCompliance/UploadCompliance.job3.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../../../cypress/utils/SetupTestsComponents';

import { UploadCompliance } from './UploadCompliance';
import { IApiComplianceFields } from '../../../../../../types';
import '../../../../../../../Edit/translations';
import { _translate } from '../../../../../../../../../cypress/utils';

describe('<UploadCompliance />', () => {
  const compliance: IApiComplianceFields = {
    compliance_elm_desc_1: null,
    compliance_elm_desc_2: null,
    compliance_elm_family: '',
    compliance_elm_lib: '',
    compliance_elm_regex: new RegExp(''),
    compliance_elm_regex_msg: null,
    compliance_elm_type: 'boolean',
    compliance_elm_value: '',
    compliance_id: 'comp123',
    compliance_file_detail: null,
    compliance_elm_mandatory: false,
  };

  it('should render', () => {
    const _compliance = {
      ...structuredClone(compliance),
    };
    cy.mount(
      <SetupTestsComponents>
        <UploadCompliance compliance={_compliance} fileId={''} controlId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('UploadCompliance').should('exist');
    cy.react('UploadCompliance').find('input[type="file"]').should('exist');
  });

  it('should make on request at a time and payload/queries not empty', function () {
    const fileId = 'fileidd';
    const controlId = 'ontrolidd';
    const _compliance = {
      ...structuredClone(compliance),
      compliance_elm_family: 'compli_elm_fam',
      compliance_id: 'compl_elm_id',
    };
    let reqCount = 0;

    cy.intercept('POST', '/control/set_value?*', (req) => {
      reqCount++;
      req.reply({
        statusCode: 201,
        body: {
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
        },
      });
    }).as('reqUploadFileCompliance');

    cy.mount(
      <SetupTestsComponents>
        <UploadCompliance
          compliance={_compliance}
          fileId={fileId}
          controlId={controlId}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();

    cy.react('UploadCompliance')
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

    cy.wait('@reqUploadFileCompliance').then((interception) => {
      const { request } = interception;
      const { query } = request;
      const reqBody = parseMultipartFormData(request.body);

      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(255).then(() => {
        expect(reqCount).to.be.eq(1);
        cy.wrap(query).should('have.property', 'file_id');
        cy.wrap(query).should('have.property', 'elm_id');
        cy.wrap(query).should('have.property', 'elm_val');
        cy.wrap(query).should('have.property', 'control_family');
        cy.wrap(query)
          .should('have.property', 'compliance_id')
          .then(() => {
            expect(JSON.parse(reqBody)?.['file.txt']).to.not.null;
            expect(JSON.parse(reqBody)?.['file.txt']).to.not.undefined;
            expect(JSON.parse(reqBody)?.['file.txt']).to.not.eq('');
            expect(query.file_id).to.be.eq(fileId);
            expect(query.elm_id).to.be.eq(controlId);
            expect(query.elm_val).to.be.eq('file.txt');
            expect(query.control_family).to.be.eq(
              _compliance.compliance_elm_family,
            );
            expect(query.compliance_id).to.be.eq(_compliance.compliance_id);
          });
      });
    });
  });

  it('should attach file then able to download and make only one request at a time and payload not empty', function () {
    const fileName = 'filecompliance.txt';
    const contentFile = 'dspfojdspkfmdklqsfdskfsdf hello world';
    const fileid = 'dlqspfjkqspfj';
    const controlId = 'ontrolidd';
    const _compliance = {
      ...structuredClone(compliance),
      compliance_elm_family: 'compli_elm_fam',
      compliance_id: 'compl_elm_id',
    };
    let requestCount = 0;

    cy.mount(
      <SetupTestsComponents>
        <UploadCompliance
          compliance={_compliance}
          fileId={fileid}
          controlId={controlId}
        />
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

    cy.react('UploadCompliance')
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

  it('should delete the file and make one request at a time payload/queries not empty', function () {
    const fileId = 'fileidd';
    const controlId = 'ontrolidd';
    const _compliance = {
      ...structuredClone(compliance),
      compliance_elm_family: 'compli_elm_fam',
      compliance_id: 'compl_elm_id',
    };
    let requestCount = 0;

    cy.mount(
      <SetupTestsComponents>
        <UploadCompliance
          compliance={_compliance}
          fileId={fileId}
          controlId={controlId}
        />
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
    cy.intercept('POST', '/control/delete_upfile\\?*', (req) => {
      requestCount++;
      req.reply({
        data: {
          file_detail: [],
        },
      });
    }).as('requestDeleteFile');

    cy.react('UploadCompliance')
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
          cy.wrap(query).should('have.property', 'compliance_id');
          cy.wrap(query).should('have.property', 'control_family');
          cy.wrap(query)
            .should('have.property', 'file_name')
            .then(() => {
              expect(query.file_id).to.be.eq(fileId);
              expect(query.control_id).to.be.eq(controlId);
              expect(query.file_name).to.be.eq('file.txt');
              expect(query.compliance_id).to.be.eq(_compliance.compliance_id);
              expect(query.control_family).to.be.eq(
                _compliance.compliance_elm_family,
              );
            });

          cy.react('UploadList').find('span').should('have.length', 0);
        });
      });
    });
  });

  it('should render <ComplianceLabel /> and <ComplianceFooter />', () => {
    const _compliance = {
      ...structuredClone(compliance),
    };
    cy.mount(
      <SetupTestsComponents>
        <UploadCompliance compliance={_compliance} fileId={''} controlId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('UploadCompliance').react('ComplianceLabel').should('exist');
    cy.react('UploadCompliance').react('ComplianceFooter').should('exist');
  });

  /**
   * this code represents a test case for a React component (UploadCompliance) to ensure that it correctly renders an error message when the setErrorMessage function is called with a specific error message. It also checks for the existence of the component and the presence of the error message in the rendered output. This test helps ensure the reliability of the component's error handling functionality.
   */
  it('should render error message', () => {
    const error = 'Error message';
    const _compliance = {
      ...structuredClone(compliance),
    };
    cy.mount(
      <SetupTestsComponents>
        <UploadCompliance compliance={_compliance} fileId={''} controlId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('UploadCompliance').should('exist');
    cy.window().then((w) => {
      w[
        'Features_Edit_Control_Form_Compliance_UploadCompliance'
      ].setErrorMessage(error);
      cy.get('._FormError').contains(error);
    });
  });
  it('should render error message if mandatory', () => {
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
    const _compliance: IApiComplianceFields = {
      ...structuredClone(compliance),
      compliance_elm_value: '',
      compliance_elm_mandatory: true,
    };
    cy.mount(
      <SetupTestsComponents>
        <UploadCompliance compliance={_compliance} fileId={''} controlId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('UploadCompliance').should('exist');
    cy.get('._FormError').contains(new RegExp(translations.join('|'), 'gu'));
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
