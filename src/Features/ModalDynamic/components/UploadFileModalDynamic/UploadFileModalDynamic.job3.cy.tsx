// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/ModalDynamic/components/UploadFileModalDynamic/UploadFileModalDynamic.job3.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';

import { UploadFileModalDynamic } from './UploadFileModalDynamic';
import { IElementModal } from '../types';
import { cloneDeep } from 'lodash';
import { DownloadFile } from '../../../../Shared/components/UploadList/UploadList.style';

describe('<UploadFileModalDynamic />', function () {
  const element: IElementModal = {
    element: 'upload',
    items: [],
    attribute: {
      type: '',
      id: '',
      placeholder: '',
      mandatory: false,
      multiline: false,
      multilineRows: null,
      option: undefined,
      mode: undefined,
    },
    value: null,
    editable: true,
  };

  it('should render without crash', function () {
    cy.mount(
      <SetupTestsComponents>
        <UploadFileModalDynamic
          element={element}
          index={0}
          handleChangeValue={function (): void {}}
          register={function (): void {}}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('UploadFileModalDynamic').should('exist');
  });

  it('should attach file and replace if mode=single', function () {
    const _element = {
      ...cloneDeep(element),
      attribute: { ...cloneDeep(element.attribute), mode: 'single' },
    };

    cy.mount(
      <SetupTestsComponents>
        <UploadFileModalDynamic
          element={_element}
          index={0}
          handleChangeValue={function (): void {}}
          register={function (): void {}}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('UploadFileModalDynamic')
      .find('input[type="file"]')
      .selectFile(
        {
          contents: Cypress.Buffer.from('file contents'),
          fileName: 'file.txt',
          mimeType: 'text/plain',
          lastModified: Date.now(),
        },
        { force: true, action: 'drag-drop' },
      )
      .then(() => {
        cy.get(`.${DownloadFile.styledComponentId}`)
          .should('have.length', 1)
          .should('have.text', 'file.txt');
        cy.react('UploadFileModalDynamic')
          .find('input[type="file"]')
          .selectFile(
            {
              contents: Cypress.Buffer.from('file contents'),
              fileName: 'file_other.txt',
              mimeType: 'text/plain',
              lastModified: Date.now(),
            },
            { force: true, action: 'drag-drop' },
          )
          .then(() => {
            cy.get(`.${DownloadFile.styledComponentId}`)
              .should('have.length', 1)
              .should('have.text', 'file_other.txt');
          });
      });
  });

  it('should attach file and addto list if mode=multiple', function () {
    const _element = {
      ...cloneDeep(element),
      attribute: { ...cloneDeep(element.attribute), mode: 'multiple' },
    };

    cy.mount(
      <SetupTestsComponents>
        <UploadFileModalDynamic
          element={_element}
          index={0}
          handleChangeValue={function (): void {}}
          register={function (): void {}}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('UploadFileModalDynamic')
      .find('input[type="file"]')
      .selectFile(
        {
          contents: Cypress.Buffer.from('file contents'),
          fileName: 'file.txt',
          mimeType: 'text/plain',
          lastModified: Date.now(),
        },
        { force: true, action: 'drag-drop' },
      )
      .then(() => {
        cy.get(`.${DownloadFile.styledComponentId}`).should('have.length', 1);
        cy.get(`.${DownloadFile.styledComponentId}`)
          .eq(0)
          .should('have.text', 'file.txt');
        cy.react('UploadFileModalDynamic')
          .find('input[type="file"]')
          .selectFile(
            {
              contents: Cypress.Buffer.from('file contents'),
              fileName: 'file_other.txt',
              mimeType: 'text/plain',
              lastModified: Date.now(),
            },
            { force: true, action: 'drag-drop' },
          )
          .then(() => {
            cy.get(`.${DownloadFile.styledComponentId}`).should(
              'have.length',
              2,
            );
            cy.get(`.${DownloadFile.styledComponentId}`)
              .eq(1)
              .should('have.text', 'file_other.txt');
          });
      });
  });
});
