// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Dashboard/components/Card/Body/Row/Row.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../cypress/utils/SetupTestsComponents';

import { Row } from './Row';

import '../../../../translations';

describe('<Row />', () => {
  it('Should render', () => {
    cy.mount(
      <SetupTestsComponents>
        <Row
          count={0}
          text={''}
          stage={0}
          state={0}
          role={0}
          stageName={''}
          color={''}
          workflow={undefined}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Row').should('exist').should('be.visible');
  });

  it('Should render the count number', () => {
    const count = 1;
    cy.mount(
      <SetupTestsComponents>
        <Row
          count={count}
          text={''}
          stage={0}
          state={0}
          role={0}
          stageName={''}
          color={''}
          workflow={undefined}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Row').should('exist').should('be.visible');
    cy.react('Row')
      .find('span.number')
      .should('exist')
      .should('be.visible')
      .should('contain', count);
  });

  it('Should render the stage name', () => {
    const count = 1;
    const stageName = 'stagename';
    cy.mount(
      <SetupTestsComponents>
        <Row
          count={count}
          text={''}
          stage={0}
          state={0}
          role={0}
          stageName={stageName}
          color={''}
          workflow={undefined}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Row').should('exist').should('be.visible');
    cy.react('Row')
      .find('span.number')
      .should('exist')
      .should('be.visible')
      .should('contain', count);
    cy.react('Row')
      .find('span.stage')
      .should('exist')
      .should('be.visible')
      .should('contain', stageName);
  });
});
