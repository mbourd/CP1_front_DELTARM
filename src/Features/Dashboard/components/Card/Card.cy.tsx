// @ts-check

import React from 'react';
import { ThemeProvider } from 'styled-components/macro';
import { BPITheme, BPIGlobalStyle } from '../../../../Packages/Design';

import 'cypress-react-selector';
import { mount } from 'cypress/react18';

import { Card } from './Card';
import { ICardBody, ICardFooter, ICardHeader } from './types';
import { BrowserRouter } from 'react-router-dom';

import '../../../Manage/routes';

describe('<Card />', () => {
  it('Should render', () => {
    const header: ICardHeader = {
      color: 'red',
      children: <>children header</>,
    };
    const body: ICardBody = {
      data: [
        {
          count: 1,
          text: 'text text text text',
          stage: 1,
          state: 1,
          role: 0,
          stageName: 'stage name',
          color: 'green',
          workflow: 0,
        },
      ],
    };
    const footer: ICardFooter = {
      color: 'green',
      state: 0,
      children: <>children footer</>,
      role: 0,
    };
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <BrowserRouter>
            <Card
              header={header}
              body={body}
              footer={footer}
              context={'EDIT'}
            />
          </BrowserRouter>
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('Card').should('exist').should('be.visible');
    cy.react('Card')
      .react('Header')
      .should('have.length', 1)
      .should('exist')
      .should('be.visible');
    cy.react('Card')
      .react('Body')
      .should('have.length', 1)
      .should('exist')
      .should('be.visible');
    cy.react('Card')
      .react('Footer')
      .should('have.length', 1)
      .should('exist')
      .should('be.visible');
  });

  it('Should render the correct number of data', () => {
    const header: ICardHeader = {
      color: 'red',
      children: <>children header</>,
    };
    const body: ICardBody = {
      data: [
        {
          count: 1,
          text: 'text text text text',
          stage: 1,
          state: 1,
          role: 0,
          stageName: 'stage name',
          color: 'green',
          workflow: 0,
        },
        {
          count: 1,
          text: 'text text text text',
          stage: 1,
          state: 1,
          role: 0,
          stageName: 'stage name',
          color: 'red',
          workflow: 0,
        },
      ],
    };
    const footer: ICardFooter = {
      color: 'green',
      state: 0,
      children: <>children footer</>,
      role: 0,
    };
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <BrowserRouter>
            <Card
              header={header}
              body={body}
              footer={footer}
              context={'EDIT'}
            />
          </BrowserRouter>
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('Card').should('exist').should('be.visible');
    cy.react('Card').react('Header').should('exist').should('be.visible');
    cy.react('Card').react('Body').should('exist').should('be.visible');
    cy.react('Card')
      .react('Body')
      .react('Row')
      .should('exist')
      .should('be.visible')
      .should('have.length', 2);
    cy.react('Card').react('Footer').should('exist').should('be.visible');
  });

  it('Should render the React.ReactNode for header', () => {
    const DummyFCHeader: React.FC = () => {
      return <div id="dummy-cy-header">children header</div>;
    };
    const header: ICardHeader = {
      color: 'red',
      children: <DummyFCHeader />,
    };
    const body: ICardBody = {
      data: [
        {
          count: 1,
          text: 'text text text text',
          stage: 1,
          state: 1,
          role: 0,
          stageName: 'stage name',
          color: 'green',
          workflow: 0,
        },
      ],
    };
    const footer: ICardFooter = {
      color: 'green',
      state: 0,
      children: <>children footer</>,
      role: 0,
    };
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <BrowserRouter>
            <Card
              header={header}
              body={body}
              footer={footer}
              context={'EDIT'}
            />
          </BrowserRouter>
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('Card').should('exist').should('be.visible');
    cy.react('Card').react('Header').should('exist').should('be.visible');
    cy.react('Card')
      .react('Header')
      .should('have.length', 1)
      .react('DummyFCHeader')
      .should('exist')
      .should('be.visible');
  });

  it('Should render the React.ReactNode for footer', () => {
    const DummyFCFooter: React.FC = () => {
      return <div id="dummy-cy-footer">children footer</div>;
    };
    const header: ICardHeader = {
      color: 'red',
      children: <>header</>,
    };
    const body: ICardBody = {
      data: [
        {
          count: 1,
          text: 'text text text text',
          stage: 1,
          state: 1,
          role: 0,
          stageName: 'stage name',
          color: 'green',
          workflow: 0,
        },
      ],
    };
    const footer: ICardFooter = {
      color: 'green',
      state: 0,
      children: <DummyFCFooter />,
      role: 0,
    };
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <BrowserRouter>
            <Card
              header={header}
              body={body}
              footer={footer}
              context={'EDIT'}
            />
          </BrowserRouter>
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('Card').should('exist').should('be.visible');
    cy.react('Card').react('Header').should('exist').should('be.visible');
    cy.react('Card')
      .react('Footer')
      .should('have.length', 1)
      .react('DummyFCFooter')
      .should('exist')
      .should('be.visible');
  });
});
