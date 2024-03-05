// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Shared/components/Classify/ClassifyModal.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../cypress/utils/SetupTestsComponents';

import { ClassifyModal } from './ClassifyModal';

describe('<ClassifyModal />', () => {
  it('Should not render', () => {
    cy.mount(
      <SetupTestsComponents>
        <ClassifyModal
          open={false}
          onClose={function (): void {
            throw new Error('Function not implemented.');
          }}
          fileId={''}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('ClassifyModal', { options: { timeout: 1 } }).should('not.exist');
  });
  it('Should render', () => {
    cy.mount(
      <SetupTestsComponents>
        <ClassifyModal
          open={true}
          onClose={function (): void {
            throw new Error('Function not implemented.');
          }}
          fileId={''}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('ClassifyModal').should('exist').should('be.visible');
  });
});
