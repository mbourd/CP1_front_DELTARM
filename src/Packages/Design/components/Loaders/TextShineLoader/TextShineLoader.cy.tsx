// @ts-check

import React from 'react';
import { ThemeProvider } from 'styled-components/macro';

import 'cypress-react-selector';
import { mount } from 'cypress/react18';
import { BPIGlobalStyle, BPITheme } from '../../../../Design';
import { TextShineLoader } from './TextShineLoader';

describe('<TextShineLoader />', () => {
  it('Should render', () => {
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <TextShineLoader text="Loading..." />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('TextShineLoader').should('exist');
    cy.react('TextShineLoader').contains('Loading...');
  });
});
