// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Shared/components/UploadList/UploadList.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../cypress/utils/SetupTestsComponents';
import { UploadList } from './UploadList';
import { IUploadDetail } from '../../../Features/Edit/types';

describe('<UploadList />', () => {
  it('Should render', () => {
    cy.mount(
      <SetupTestsComponents>
        <UploadList
          files={null}
          handleDeleteFile={function (): void {
            throw new Error('Function not implemented.');
          }}
          handleDownloadFile={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('UploadList').should('exist');
  });

  it('Should render the correct number of upload files', () => {
    const currentUploadFile: IUploadDetail[] = [
      { file_id: 'a', file_name: 'file A' },
      { file_id: 'b', file_name: 'file B' },
      { file_id: 'c', file_name: 'file C '.repeat(7) },
    ];
    cy.mount(
      <SetupTestsComponents>
        <UploadList
          files={currentUploadFile}
          handleDeleteFile={function (): void {
            throw new Error('Function not implemented.');
          }}
          handleDownloadFile={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('UploadList')
      .find('a')
      .each(($el, i) => {
        cy.wrap($el).should('attr', 'href', currentUploadFile[i].file_id);
      })
      .find('span')
      .each(($el, i) => {
        if (currentUploadFile[i].file_name.length > 30) {
          cy.wrap($el)
            .invoke('text')
            .then((t) => {
              expect(t).to.be.equal(
                currentUploadFile[i].file_name.substring(0, 45) + '...',
              );
            });
          // cy.wrap($el).contains(
          //   currentUploadFile[i].file_name.substring(0, 45) + '...',
          // );
        } else {
          cy.wrap($el)
            .invoke('text')
            .then((t) => {
              expect(t).to.be.equal(currentUploadFile[i].file_name);
            });
          // cy.wrap($el).contains(currentUploadFile[i].file_name);
        }
      });
    cy.react('UploadList')
      .find('a span')
      .should('have.length', currentUploadFile.length);
  });
});
