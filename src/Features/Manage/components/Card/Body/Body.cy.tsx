// @ts-check

import React from 'react';
import { ThemeProvider } from 'styled-components/macro';
import { BPITheme, BPIGlobalStyle } from '../../../../../Packages/Design';

import 'cypress-react-selector';
import { mount } from 'cypress/react18';

import { Body } from './Body';

describe('<Body />', () => {
  it('Should render', () => {
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <Body data={[]} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('Body').should('exist').should('be.visible');
  });

  it('Should render data', () => {
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <Body data={[{ label: 'label1', value: 'value1' }]} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('Body').react('FormLabel').should('exist').should('be.visible');
    cy.react('Body').react('FormText').should('exist').should('be.visible');
  });

  it('Should render the correct number of data', () => {
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <Body
            data={[
              { label: 'label1', value: 'value1' },
              { label: 'label2', value: 'value2' },
              { label: 'label3', value: 'value3' },
            ]}
          />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('Body')
      .react('FormLabel')
      .should('exist')
      .should('be.visible')
      .should('have.length', 3);
    cy.react('Body')
      .react('FormText')
      .should('exist')
      .should('be.visible')
      .should('have.length', 3);
  });
});
