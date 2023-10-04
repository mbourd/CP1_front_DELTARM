// @ts-check

import React from 'react';
import { ThemeProvider } from 'styled-components/macro';

import 'cypress-react-selector';
import { mount } from 'cypress/react18';
import { BPITheme, BPIGlobalStyle } from '../../../Packages/Design';
import { NotFoundComponent } from './NotFoundComponent';

describe('<NotFoundComponent />', () => {
  it('Should render', () => {
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <NotFoundComponent />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('NotFoundComponent').should('exist');
    cy.react('NotFoundComponent').react('Error').should('exist');
  });
});
