// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Manage/components/Search/Modal/CreateModal.job4.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../cypress/utils/SetupTestsComponents';

import { CreateModal } from './CreateModal';
import { IKSIOPManualInput, IMissingField } from '../../../apiRoutes/file';

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
  });
});
