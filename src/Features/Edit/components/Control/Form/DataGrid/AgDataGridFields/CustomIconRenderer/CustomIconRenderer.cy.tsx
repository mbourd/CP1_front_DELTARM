// @ts-check

import React from 'react';
import { ThemeProvider } from 'styled-components/macro';

import 'cypress-react-selector';
import { mount } from 'cypress/react18';

import {
  BPITheme,
  BPIGlobalStyle,
} from '../../../../../../../../Packages/Design';
import CustomIconRenderer from './CustomIconRenderer';

describe('<CustomIconRenderer', () => {
  it('Should render', () => {
    const props = {
      colDef: {
        field: 'col1.value',
      },
      data: {
        col1: {
          value: 'AddLocationOutlined;#00B456;24',
        },
      },
    };

    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <CustomIconRenderer props={props} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(10000, '#root');
    cy.react('CustomIconRenderer').should('exist');
  });

  it('SVG icon should exist', () => {
    const color = '#00B456';
    const fontSize = 24;
    const props = {
      colDef: {
        field: 'col1.value',
      },
      data: {
        col1: {
          value: `AddLocationOutlined;${color};${fontSize}`,
        },
      },
    };

    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <CustomIconRenderer props={props} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(10000, '#root');
    cy.react('CustomIconRenderer').find('svg').should('exist');
    cy.react('CustomIconRenderer')
      .find('svg')
      .should('have.css', 'color', 'rgb(0, 180, 86)')
      .should('have.css', 'font-size', fontSize + 'px');
  });

  it('SVG icon should have default font-size', () => {
    const color = '#00B456';
    const props = {
      colDef: {
        field: 'col1.value',
      },
      data: {
        col1: {
          value: `AddLocationOutlined;${color}`,
        },
      },
    };

    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <CustomIconRenderer props={props} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(10000, '#root');
    cy.react('CustomIconRenderer').find('svg').should('exist');
    cy.react('CustomIconRenderer')
      .find('svg')
      .should('have.css', 'color', 'rgb(0, 180, 86)')
      .should('have.css', 'font-size', '32px');
  });

  it('SVG icon should have default color & font-size', () => {
    const props = {
      colDef: {
        field: 'col1.value',
      },
      data: {
        col1: {
          value: `AddLocationOutlined`,
        },
      },
    };

    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <CustomIconRenderer props={props} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(10000, '#root');
    cy.react('CustomIconRenderer').find('svg').should('exist');
    cy.react('CustomIconRenderer')
      .find('svg')
      .should('have.css', 'color', 'rgb(0, 0, 0)')
      .should('have.css', 'font-size', '32px');
  });

  it('SVG icon should not render', () => {
    const props = {
      colDef: {
        field: 'col1.value',
      },
      data: {
        col1: {
          value: ``,
        },
      },
    };

    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <CustomIconRenderer props={props} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(10000, '#root');
    cy.react('CustomIconRenderer')
      .find('svg', { timeout: 1 })
      .should('not.exist');
  });
});
