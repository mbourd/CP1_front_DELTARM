// @ts-check

import React from 'react';
import { ThemeProvider } from 'styled-components/macro';

import 'cypress-react-selector';
import { mount } from 'cypress/react18';
import { BPITheme, BPIGlobalStyle } from '../../../../../Packages/Design';
import { LinearMetric } from './LinearMetric';

describe('<LinearMetric />', () => {
  it('Should render', () => {
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <LinearMetric variant={undefined} value={0} hint={''} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('LinearMetric').should('exist');
  });

  it('Should render with variant = determinate', () => {
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <LinearMetric variant={'determinate'} value={0} hint={''} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('LinearMetric').should('exist');
  });

  it('Should render with variant = buffer', () => {
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <LinearMetric variant={'buffer'} value={0} hint={''} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('LinearMetric').should('exist');
  });

  it('Should render with variant = query', () => {
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <LinearMetric variant={'query'} value={0} hint={''} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('LinearMetric').should('exist');
  });

  it('Should render with variant = indeterminate', () => {
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <LinearMetric variant={'indeterminate'} value={0} hint={''} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('LinearMetric').should('exist');
  });

  it('Should have attribute with message', () => {
    const hintMsg = 'hello';
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <LinearMetric variant={undefined} value={0} hint={hintMsg} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('LinearMetric').should('have.attr', 'title', hintMsg);
  });

  it('Should render hint', () => {
    const hintMsg = 'hello';
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <LinearMetric variant={undefined} value={0} hint={hintMsg} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('LinearMetric').should('exist');
    cy.react('LinearMetric').each(($el) => {
      cy.wrap($el).trigger('mouseover');
      cy.get('[role="tooltip"]').should('exist').should('be.visible');
      cy.wrap($el).trigger('mouseout');
      cy.get('[role="tooltip"]').should('not.exist');
    });
  });

  it('Should have a background color applied', () => {
    const red = 'rgb(255, 0, 0)';
    const style = { backgroundColor: red };
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <LinearMetric variant={undefined} value={0} hint={''} style={style} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('LinearMetric').should('exist');
    cy.react('LinearMetric').should('have.css', 'background-color', red);
  });

  it('Should have a bar color applied', () => {
    const red = 'rgb(255, 0, 0)';
    const style = { color: red };
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <LinearMetric variant={undefined} value={0} hint={''} style={style} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('LinearMetric').should('exist');
    cy.react('LinearMetric').should('have.css', 'color', red);
  });
});
