// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Manage/components/Card/Actions/Actions.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../cypress/utils/SetupTestsComponents';

import { Actions } from './Actions';
import { BrowserRouter } from 'react-router-dom';

describe('<Actions />', () => {
  it('Should render', () => {
    cy.mount(
      <SetupTestsComponents>
        <BrowserRouter>
          <Actions id={'56'} context={'EDIT'} />
        </BrowserRouter>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Actions').should('exist').should('be.visible');
  });

  it('Should have the correct border-bottom value for <a>', () => {
    cy.mount(
      <SetupTestsComponents>
        <BrowserRouter>
          <Actions id={'56'} context={'EDIT'} />
        </BrowserRouter>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Actions')
      .find('a')
      .should('have.css', 'border-bottom', '1px dotted rgb(255, 205, 0)');
  });
});
