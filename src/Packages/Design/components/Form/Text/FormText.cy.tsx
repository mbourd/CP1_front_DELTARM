// @ts-check

import React from 'react';
import { ThemeProvider } from 'styled-components/macro';

import 'cypress-react-selector';
import { mount } from 'cypress/react18';
import { BPITheme, BPIGlobalStyle } from '../../../../../Packages/Design';
import { FormText } from './FormText';

describe('<NotFoundComponent />', () => {
  it('Should render', () => {
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <FormText />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('FormText').should('exist');
  });

  it('Should render a React.ReactNode as children', () => {
    const DummyFC: React.FC = () => {
      return <div id="dummyfc">Hello</div>;
    };

    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <FormText>
            <DummyFC />
          </FormText>
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('FormText').react('DummyFC').should('exist');
    cy.react('FormText').find('#dummyfc').should('exist');
  });

  it('Should have class name', () => {
    const className = 'classs';
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <FormText className={className} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('FormText').should('have.attr', 'class').and('contain', className);
  });
});
