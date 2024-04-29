// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/DataGrid/DataGridFields/DataGridUpload/DataGridUpload.job4.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../../../cypress/utils/SetupTestsComponents';
import { DataGridUpload } from './DataGridUpload';

describe('<DataGridControlAgGrid /> - part 1', function () {
  before(() => {
    //
  });

  beforeEach(() => {
    // Check if Cypress is running from the CLI or open interface
    // if (!Cypress.config('isTextTerminal')) cy.viewport(1600, 720);
    cy.viewport(1600, 720);
  });

  afterEach(() => {
    //
  });

  it('should render', function () {
    cy.mount(
      <SetupTestsComponents>
        <DataGridUpload
          value={[]}
          fileId={''}
          controlId={''}
          columnId={0}
          rowNum={0}
          editable={true}
          mandatory={false}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('DataGridUpload').should('exist');
  });

  it('should call request only once at a time', function () {
    const fileId = 'fileIddfdf';
    const controlId = 'controlidgjisdkfnkl';
    let reqCount = 0;

    cy.mount(
      <SetupTestsComponents>
        <DataGridUpload
          value={[]}
          fileId={fileId}
          controlId={controlId}
          columnId={0}
          rowNum={0}
          editable={true}
          mandatory={false}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();

    cy.intercept('POST', '/control/data_grid/save_value?*', (req) => {
      reqCount++;
      req.reply(200, [{ file_id: '', file_name: 'file.txt' }]);
    }).as('requestUploadFile');

    cy.react('DataGridUpload')
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

    cy.wait('@requestUploadFile').then((interception) => {
      const { request } = interception;
      const { query } = request;
      const reqBody = parseMultipartFormData(request.body);

      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(255).then(() => {
        expect(reqCount).to.be.eq(1);
        cy.wrap(query).should('have.property', 'file_id');
        cy.wrap(query).should('have.property', 'elm_id');
        cy.wrap(query).should('have.property', 'elm_val');
        cy.wrap(query).should('have.property', 'row_num');
        cy.wrap(query).should('have.property', 'col_elm_id');
        cy.then(() => {
          expect(JSON.parse(reqBody)?.['file.txt']).to.not.null;
          expect(JSON.parse(reqBody)?.['file.txt']).to.not.undefined;
          expect(JSON.parse(reqBody)?.['file.txt']).to.not.eq('');
          expect(query.file_id).to.eq(fileId);
          expect(query.elm_id).to.eq(controlId);
          expect(query.elm_val).to.eq('file.txt');
          expect(query.row_num).to.eq(0 + '');
          expect(query.col_elm_id).to.eq(0 + '');
        });
      });
    });
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
