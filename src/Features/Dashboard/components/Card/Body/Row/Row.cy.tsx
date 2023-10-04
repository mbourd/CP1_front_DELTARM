// @ts-check

import 'cypress-react-selector';

import React from 'react';
import { ThemeProvider } from 'styled-components/macro';
import { BPITheme, BPIGlobalStyle } from '../../../../../../Packages/Design';
import { mount } from 'cypress/react18';

import { Row } from './Row';

import '../../../../translations';
import { translation } from '../../../../../../Services';
import { BrowserRouter } from 'react-router-dom';

describe('<Row />', () => {
  it('Should render', () => {
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <BrowserRouter>
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
          </BrowserRouter>
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('Row').should('exist').should('be.visible');
  });

  it('Should render the count number', () => {
    const count = 1;
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <BrowserRouter>
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
          </BrowserRouter>
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
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
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <BrowserRouter>
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
          </BrowserRouter>
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
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
