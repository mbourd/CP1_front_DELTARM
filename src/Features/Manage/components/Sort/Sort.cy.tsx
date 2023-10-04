// @ts-check
/// <reference types="cypress" />

import React from 'react';
import { ThemeProvider } from 'styled-components/macro';
import { BPITheme, BPIGlobalStyle } from '../../../../Packages/Design';

import 'cypress-react-selector';
import { mount } from 'cypress/react18';

import { Sort } from './Sort';

describe('<Sort />', () => {
  it('Should render', () => {
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <Sort />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.get('svg').should('exist').should('be.visible');
  });
});
