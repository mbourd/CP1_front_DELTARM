// @ts-check

import React from 'react';
import { ThemeProvider } from 'styled-components/macro';

import 'cypress-react-selector';
import { mount } from 'cypress/react18';
import { BPITheme, BPIGlobalStyle } from '../../../../Packages/Design';
import { SwitchMetric } from './SwitchMetric';
import { IIndicator } from '../types';

describe('<SwitchMetric />', () => {
  it('Should render linear metric', () => {
    const indicator: IIndicator = {
      bg_color: '',
      color: '',
      hint: '',
      info: '',
      lib: '',
      value: 23,
      style: 'linear',
    };

    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <SwitchMetric indicator={indicator} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('LinearMetric').should('exist');
  });
  it('Should render circular metric', () => {
    const indicator: IIndicator = {
      bg_color: '',
      color: '',
      hint: '',
      info: '',
      lib: '',
      value: 23,
      style: 'circular',
    };

    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <SwitchMetric indicator={indicator} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('CircularMetric').should('exist');
  });

  it('Should have attribute with message hint', () => {
    const hint = 'hello';
    const indicator: IIndicator = {
      bg_color: '',
      color: '',
      hint: hint,
      info: '',
      lib: '',
      value: 23,
      style: 'circular',
    };
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <SwitchMetric indicator={indicator} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('CircularMetric').should('have.attr', 'title', hint);
  });
  it('Should have attribute with message hint', () => {
    const hint = 'hello';
    const indicator: IIndicator = {
      bg_color: '',
      color: '',
      hint: hint,
      info: '',
      lib: '',
      value: 23,
      style: 'linear',
    };
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <SwitchMetric indicator={indicator} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('LinearMetric').should('have.attr', 'title', hint);
  });

  it('Should render message hint', () => {
    const hint = 'hello';
    const indicator: IIndicator = {
      bg_color: '',
      color: '',
      hint: hint,
      info: '',
      lib: '',
      value: 23,
      style: 'linear',
    };
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <SwitchMetric indicator={indicator} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('LinearMetric').should('have.attr', 'title', hint);
    cy.react('LinearMetric').each(($el) => {
      cy.wrap($el).trigger('mouseover');
      cy.get('[role="tooltip"]').should('exist').should('be.visible');
      cy.wrap($el).trigger('mouseout');
      cy.get('[role="tooltip"]').should('not.exist');
    });
  });
  it('Should render message hint', () => {
    const hint = 'hello';
    const indicator: IIndicator = {
      bg_color: '',
      color: '',
      hint: hint,
      info: '',
      lib: '',
      value: 23,
      style: 'circular',
    };
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <SwitchMetric indicator={indicator} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('CircularMetric').should('have.attr', 'title', hint);
    cy.react('CircularMetric').each(($el) => {
      cy.wrap($el).trigger('mouseover');
      cy.get('[role="tooltip"]').should('exist').should('be.visible');
      cy.wrap($el).trigger('mouseout');
      cy.get('[role="tooltip"]').should('not.exist');
    });
  });

  it('Should render lib', () => {
    const indicator: IIndicator = {
      bg_color: '',
      color: '',
      hint: '',
      info: '',
      lib: 'anytext',
      value: 23,
      style: 'circular',
    };
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <SwitchMetric indicator={indicator} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.get('p').should('contain.text', 'anytext');
  });

  it('Should have a background color applied', () => {
    const red = 'rgb(255, 0, 0)';
    const indicator: IIndicator = {
      bg_color: red,
      color: '',
      hint: '',
      info: '',
      lib: '',
      value: 23,
      style: 'linear',
    };
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <SwitchMetric indicator={indicator} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('LinearMetric').should('have.css', 'background-color', red);
  });
  it('Should have a bar color applied', () => {
    const red = 'rgb(255, 0, 0)';
    const indicator: IIndicator = {
      bg_color: '',
      color: red,
      hint: '',
      info: '',
      lib: '',
      value: 23,
      style: 'linear',
    };
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <SwitchMetric indicator={indicator} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('LinearMetric').should('have.css', 'color', red);
  });

  it('Should have a bar color applied', () => {
    const red = 'rgb(255, 0, 0)';
    const indicator: IIndicator = {
      bg_color: '',
      color: red,
      hint: '',
      info: 'info',
      lib: '',
      value: 23,
      style: 'circular',
    };
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <SwitchMetric indicator={indicator} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('CircularMetric').should('have.css', 'color', red);
  });

  it('Should have title attribute for info', () => {
    const info = 'info';
    const indicator: IIndicator = {
      bg_color: '',
      color: '',
      hint: '',
      info: info,
      lib: '',
      value: 23,
      style: 'linear',
    };
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <SwitchMetric indicator={indicator} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.get('span._Tooltip').should('have.attr', 'title', info);
    cy.get('span._Tooltip').each(($el) => {
      cy.wrap($el).trigger('mouseover');
      cy.get('[role="tooltip"]').should('exist').should('be.visible');
      cy.wrap($el).trigger('mouseout');
      cy.get('[role="tooltip"]').should('not.exist');
    });
  });
});
