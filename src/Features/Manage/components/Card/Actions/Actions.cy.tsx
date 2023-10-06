// @ts-check

import React from 'react';
import { ThemeProvider } from 'styled-components/macro';
import { BPITheme, BPIGlobalStyle } from '../../../../../Packages/Design';

import 'cypress-react-selector';
import { mount } from 'cypress/react18';

import { Actions } from './Actions';
import { BrowserRouter } from 'react-router-dom';

describe('<Actions />', () => {
  it('Should render', () => {
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <BrowserRouter>
            <Actions id={'56'} context={'EDIT'} />
          </BrowserRouter>
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('Actions').should('exist').should('be.visible');
  });

  it('Should have the correct border-bottom value for <a>', () => {
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <BrowserRouter>
            <Actions id={'56'} context={'EDIT'} />
          </BrowserRouter>
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('Actions')
      .find('a')
      .should('have.css', 'border-bottom', '1px dotted rgb(255, 205, 0)');
  });
});
