// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/DataGrid/DataGridFields/DataGridUpload/DataGridUpload.job4.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../../../cypress/utils/SetupTestsComponents';
import { DataGridUpload } from './DataGridUpload';

describe('<DataGridControlAgGrid /> - part 1', function () {
  before(() => {});

  beforeEach(() => {
    // Check if Cypress is running from the CLI or open interface
    // if (!Cypress.config('isTextTerminal')) cy.viewport(1600, 720);
    cy.viewport(1600, 720);
  });

  afterEach(() => {});

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
    let reqCount = 0;

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
    cy.wait(1000).then(() => {
      expect(reqCount).to.be.eq(1);
    });
  });
});
