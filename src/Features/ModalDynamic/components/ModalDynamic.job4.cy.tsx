// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/ModalDynamic/components/ModalDynamic.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../cypress/utils/SetupTestsComponents';
import { ModalDynamic } from './ModalDynamic';
import { IDataModal } from './types';

describe('<ModalDynamic />', function () {
  it('should render', function () {
    cy.mount(
      <SetupTestsComponents>
        <ModalDynamic
          setIsModalOpen={function (): void {
            throw new Error('Function not implemented.');
          }}
          open={true}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('ModalDynamic').should('exist');
  });

  it('should render title', function () {
    const data = {
      title: 'my test title',
    } as IDataModal;
    cy.mount(
      <SetupTestsComponents>
        <ModalDynamic
          setIsModalOpen={function (): void {
            throw new Error('Function not implemented.');
          }}
          open={true}
          data={data}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('ModalDynamic').react('Heading').should('have.text', data.title);
  });
});
