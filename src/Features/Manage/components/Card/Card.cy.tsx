// @ts-check

import React from 'react';
import { ThemeProvider } from 'styled-components/macro';
import { BPITheme, BPIGlobalStyle } from '../../../../Packages/Design';

import 'cypress-react-selector';
import { mount } from 'cypress/react18';

import { Card } from './Card';
import { BrowserRouter } from 'react-router-dom';

describe('<Card />', () => {
  it('Should render', () => {
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <BrowserRouter>
            <Card id={''} color={''} data={[]} context={undefined} />
          </BrowserRouter>
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('Card').should('exist').should('be.visible');
  });

  it('Should render data', () => {
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <BrowserRouter>
            <Card
              id={''}
              color={''}
              data={[{ value: 'value1', label: 'label1' }]}
              context={undefined}
              comments={1}
            />
          </BrowserRouter>
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('Card')
      .react('Body')
      .react('FormLabel')
      .should('exist')
      .should('be.visible');
    cy.react('Card')
      .react('Body')
      .react('FormText')
      .should('exist')
      .should('be.visible');
  });

  it('Should render the correct number of data', () => {
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <BrowserRouter>
            <Card
              id={''}
              color={''}
              data={[
                { value: 'value1', label: 'label1' },
                { value: 'value2', label: 'label2' },
                { value: 'value3', label: 'label3' },
              ]}
              context={undefined}
              comments={0}
            />
          </BrowserRouter>
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('Card')
      .react('Body')
      .react('FormLabel')
      .should('exist')
      .should('be.visible')
      .should('have.length', 3);
    cy.react('Card')
      .react('Body')
      .react('FormText')
      .should('exist')
      .should('be.visible')
      .should('have.length', 3);
  });
});
