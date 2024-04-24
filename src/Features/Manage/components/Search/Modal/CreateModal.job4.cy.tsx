// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Manage/components/Search/Modal/CreateModal.job4.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../cypress/utils/SetupTestsComponents';

import { CreateModal } from './CreateModal';
import { IKSIOPManualInput, IMissingField } from '../../../apiRoutes/file';
import { apiRouter } from '../../../../../Services/Api';
import '../../../apiRoutes/file';

describe('<CreateModal />', function () {
  const dataManualInput: IKSIOPManualInput = {
    buttons: [],
    fields: [],
    manualFile: {
      file_num: '',
      file_avenant: '',
      typedossier: '',
    },
    header: '',
    title: '',
    fileId: null,
  };

  it('should render without crash', function () {
    cy.mount(
      <SetupTestsComponents>
        <CreateModal
          open={false}
          onClose={function (): void {
            throw new Error('Function not implemented.');
          }}
          dataManualInput={null}
        />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('CreateModal').should('not.exist');
  });
  it('should render without crash', function () {
    cy.mount(
      <SetupTestsComponents>
        <CreateModal
          open={true}
          onClose={function (): void {
            throw new Error('Function not implemented.');
          }}
          dataManualInput={dataManualInput}
        />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('CreateModal').should('exist');
  });

  it('should render', function () {
    cy.viewport(1920, 1080);
    const _dataManualInput: IKSIOPManualInput = {
      ...structuredClone(dataManualInput),
      buttons: Array.from({ length: 3 }).map((v, i) => {
        const btn = { action: 'action' + i, label: 'label' + i, order: i + '' };

        return btn;
      }),
      fields: Array.from({ length: 3 }).map((v, i) => {
        const field: IMissingField = {
          format: null,
          key: '' + i,
          label: 'field' + i,
          type: i === 0 ? 'float' : 'string',
          order: '' + i,
          value_to_display: 'value to display' + i,
        };

        return field;
      }),
      header: 'header',
      title: 'title',
    };

    cy.mount(
      <SetupTestsComponents>
        <CreateModal
          open={true}
          onClose={function (): void {
            throw new Error('Function not implemented.');
          }}
          dataManualInput={_dataManualInput}
        />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('CreateModal').should('exist');
  });

  it('should make one request at a time and payload/queries not empty', function () {
    cy.viewport(1920, 1080);
    const _dataManualInput: IKSIOPManualInput = {
      ...structuredClone(dataManualInput),
      manualFile: {
        file_num: 'filenum',
        file_avenant: 'fileavenant',
        typedossier: 'typeddoss',
      },
      buttons: Array.from({ length: 3 }).map((v, i) => {
        const btn = { action: 'action' + i, label: 'label' + i, order: i + '' };

        return btn;
      }),
      fields: Array.from({ length: 3 }).map((v, i) => {
        const field: IMissingField = {
          format: null,
          key: 'fieldKey' + i,
          label: 'field' + i,
          type: i === 0 ? 'float' : 'string',
          order: '' + i,
          value_to_display: 'value to display' + i,
        };

        return field;
      }),
      header: 'header',
      title: 'title',
    };
    const val = '1';
    let reqCount = 0;

    cy.intercept('POST', '/file/create\\?*', (req) => {
      reqCount++;
      req.on('response', (resp) => resp.send({ statusCode: 401, body: {} }));
    }).as('reqPostFileCreate');

    cy.mount(
      <SetupTestsComponents>
        <CreateModal
          open={true}
          onClose={function (): void {
            throw new Error('Function not implemented.');
          }}
          dataManualInput={_dataManualInput}
        />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('CreateModal')
      .react('GenerateFieldManual')
      .each(($GenerateFieldManual) => {
        cy.wrap($GenerateFieldManual).find('input').type(val);
      });
    cy.get('button').contains('label1').realClick();
    cy.wait('@reqPostFileCreate').then((interception) => {
      const { request } = interception;
      const { query } = request;

      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(255).then(() => {
        expect(reqCount).to.eq(1);
        cy.wrap(_dataManualInput.fields).each((f: IMissingField) => {
          cy.wrap(query).should('have.property', f.key);
        });
        cy.wrap(query).should('have.property', 'file_num');
        cy.wrap(query).should('have.property', 'file_avenant');
        cy.wrap(query).should('have.property', 'typedossier');
        cy.then(() => {
          cy.wrap(_dataManualInput.fields).each((f: IMissingField) => {
            expect(query[f.key]).to.eq(val);
          });
          expect(query.file_num).to.eq(_dataManualInput.manualFile.file_num);
          expect(query.file_avenant).to.eq(
            _dataManualInput.manualFile.file_avenant,
          );
          expect(query.typedossier).to.eq(
            _dataManualInput.manualFile.typedossier,
          );
        });
      });
    });
  });
});
