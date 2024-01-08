// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Shared/components/Loader/PageLoader.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../cypress/utils/SetupTestsComponents';

import { BPITheme } from '../../../Packages/Design';
import { PageLoader } from './PageLoader';

describe('<PageLoader />', () => {
  it('Should render', () => {
    cy.mount(
      <SetupTestsComponents>
        <PageLoader text="Loading..." />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('PageLoader').should('exist');
  });

  it('Should render StairsLoader & TextShineLoader', () => {
    cy.mount(
      <SetupTestsComponents>
        <PageLoader text="Loading..." />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('PageLoader').react('StairsLoader').should('exist');
    cy.react('PageLoader').react('TextShineLoader').should('exist');
  });

  it('Bars color should be applied', () => {
    const color = 'rgb(255, 0, 0)';
    const _BPITheme = {
      ...BPITheme,
      color: {
        ...BPITheme.color,
        primary: { ...BPITheme.color.primary, main: color },
      },
    };

    cy.mount(
      <SetupTestsComponents theme={_BPITheme}>
        <PageLoader text="Loading..." />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('PageLoader')
      .react('StairsLoader')
      .find('._LoaderStairsBar')
      .should('have.css', 'background-color', color);
  });
  it('Ball color should be applied', () => {
    const color = 'rgb(255, 0, 0)';
    const _BPITheme = {
      ...BPITheme,
      color: {
        ...BPITheme.color,
        secondary: { ...BPITheme.color.secondary, main: color },
      },
    };

    cy.mount(
      <SetupTestsComponents theme={_BPITheme}>
        <PageLoader text="Loading..." />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('PageLoader')
      .react('StairsLoader')
      .find('._LoaderStairsBall')
      .should('have.css', 'background-color', color);
  });
});
