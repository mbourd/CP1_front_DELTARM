// @ts-check

import React from 'react';
import { ThemeProvider } from 'styled-components/macro';

import 'cypress-react-selector';
import { mount } from 'cypress/react18';
import { BPITheme, BPIGlobalStyle } from '../../../../../Packages/Design';
import { FormError } from './FormError';

describe('<NotFoundComponent />', () => {
  it('Should render', () => {
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <FormError />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('FormError').should('exist');
  });

  it('Should render a React.ReactNode as children', () => {
    const DummyFC: React.FC = () => {
      return <div id="dummyfc">Hello</div>;
    };

    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <FormError>
            <DummyFC />
          </FormError>
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('FormError').react('DummyFC').should('exist');
    cy.react('FormError').find('#dummyfc').should('exist');
  });

  it('Should have class name', () => {
    const className = 'classs';
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <FormError className={className} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('FormError')
      .should('have.attr', 'class')
      .and('contain', className);
  });

  it('Should have a background-color applied', () => {
    const bgc = 'rgb(255, 0, 0)';
    const className = 'classs';
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <FormError className={className} style={{ backgroundColor: bgc }} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('FormError').should('have.css', 'background-color', bgc);
  });
});
