// @ts-check

import React from 'react';
import { ThemeProvider } from 'styled-components/macro';

import 'cypress-react-selector';
import { mount } from 'cypress/react18';
import { BPITheme, BPIGlobalStyle } from '../../../Packages/Design';
import { PageLoader } from './PageLoader';

describe('<PageLoader />', () => {
  it('Should render', () => {
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <PageLoader text="Loading..." />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('PageLoader').should('exist');
  });

  it('Should render StairsLoader & TextShineLoader', () => {
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <PageLoader text="Loading..." />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
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

    mount(
      <div id="root">
        <ThemeProvider theme={_BPITheme}>
          <BPIGlobalStyle />
          <PageLoader text="Loading..." />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
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

    mount(
      <div id="root">
        <ThemeProvider theme={_BPITheme}>
          <BPIGlobalStyle />
          <PageLoader text="Loading..." />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('PageLoader')
      .react('StairsLoader')
      .find('._LoaderStairsBall')
      .should('have.css', 'background-color', color);
  });
});
