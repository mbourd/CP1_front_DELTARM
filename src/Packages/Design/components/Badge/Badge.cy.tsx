// @ts-check
/// <reference types="cypress" />

import React from 'react';
import { ThemeProvider } from 'styled-components/macro';

import 'cypress-react-selector';
import { mount } from 'cypress/react18';

import { BPITheme, BPIGlobalStyle } from '../../../../Packages/Design';
import { Badge } from './Badge';

describe('<Badge />', () => {
  it('Should render', () => {
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <Badge />
        </ThemeProvider>
      </div>,
    );
    cy.waitReactApp();
    cy.react('Badge').should('exist');
  });

  it('Should render the text children', () => {
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <Badge>Hello</Badge>
        </ThemeProvider>
      </div>,
    );
    cy.waitReactApp();
    cy.react('Badge').should('contain.text', 'Hello');
  });

  it('Should render the React.ReactNode children', () => {
    const MyFC = () => <div>Hello</div>;
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <Badge>
            <MyFC />
          </Badge>
        </ThemeProvider>
      </div>,
    );
    cy.waitReactApp();
    cy.react('Badge').react('MyFC').should('contain.text', 'Hello');
  });

  it('Should render the content prop', () => {
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <Badge content={1}>aaa</Badge>
        </ThemeProvider>
      </div>,
    );
    cy.waitReactApp();
    cy.react('Badge')
      .find('span')
      .should('be.visible')
      .should('contain.text', 1);
  });

  it('Should render the props content + background-color applied', () => {
    const bgc = 'rgb(0, 0, 0)';
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <Badge content={1} bgc={bgc}>
            Hello
          </Badge>
        </ThemeProvider>
      </div>,
    );
    cy.waitReactApp();
    cy.react('Badge')
      .find('span')
      .should('be.visible')
      .should('contain.text', 1);
    cy.react('Badge').find('span').should('have.css', 'background-color', bgc);
  });

  it('Should render the props content + color applied', () => {
    const color = 'rgb(255, 0, 0)';
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <Badge content={1} color={color}>
            Hello
          </Badge>
        </ThemeProvider>
      </div>,
    );
    cy.waitReactApp();
    cy.react('Badge')
      .find('span')
      .should('be.visible')
      .should('contain.text', 1);
    cy.react('Badge').find('span').should('have.css', 'color', color);
  });

  it('Should render the props content + font-family applied', () => {
    const fontFamily = '"Comic Sans MS", sans-serif';
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <Badge content={1} fontFamily={fontFamily}>
            Hello
          </Badge>
        </ThemeProvider>
      </div>,
    );
    cy.waitReactApp();
    cy.react('Badge')
      .find('span')
      .should('be.visible')
      .should('contain.text', 1);
    cy.react('Badge')
      .find('span')
      .should('have.css', 'font-family', fontFamily);
  });

  it('Should render the props content + bgc + color + font-family applied', () => {
    const content = 1;
    const bgc = 'rgb(33, 0, 0)';
    const color = 'rgb(255, 0, 0)';
    const fontFamily = '"Comic Sans MS", sans-serif';
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <Badge
            content={content}
            bgc={bgc}
            color={color}
            fontFamily={fontFamily}
          >
            Hello
          </Badge>
        </ThemeProvider>
      </div>,
    );
    cy.waitReactApp();
    cy.react('Badge')
      .find('span')
      .should('be.visible')
      .should('contain.text', content);
    cy.react('Badge').find('span').should('have.css', 'background-color', bgc);
    cy.react('Badge').find('span').should('have.css', 'color', color);
    cy.react('Badge')
      .find('span')
      .should('have.css', 'font-family', fontFamily);
  });
});
