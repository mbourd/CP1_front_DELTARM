// @ts-check

import React from 'react';
import { ThemeProvider } from 'styled-components/macro';

import 'cypress-react-selector';
import { mount } from 'cypress/react18';
import { BPITheme, BPIGlobalStyle } from '../../../Design';
import { Modal } from './Modal';

describe('<Modal />', () => {
  it('Should render', () => {
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <Modal open={true} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('Modal').should('exist');
  });
  it('Should not render', () => {
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <Modal open={false} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('Modal', { options: { timeout: 1 } }).should('not.exist');
  });

  it('Should render text children', () => {
    const children = 'hello';
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <Modal open={true}>{children}</Modal>
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('Modal').react('DialogContent').contains(children);
  });
  it('Should render React.ReactNode children', () => {
    const DummyFC: React.FC = () => {
      return <>hello</>;
    };
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <Modal open={true}>
            <DummyFC />
          </Modal>
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('Modal').react('DialogContent').react('DummyFC');
    cy.react('Modal').react('DialogContent').contains('hello');
  });

  it('Should render the X logo', () => {
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <Modal open={true} closable={true} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('Modal').react('DialogTitle').react('IconButton').find('svg');
  });
  it('Should not render the X logo', () => {
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <Modal open={true} closable={false} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('Modal')
      .react('DialogTitle')
      .react('IconButton', { options: { timeout: 1 } })
      .should('not.exist');
  });

  it('Should render React.ReactNode header', () => {
    const DummyFC: React.FC = () => {
      return <>hello</>;
    };
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <Modal open={true} header={<DummyFC />} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('Modal').react('DummyFC');
  });

  it('Should render React.ReactNode footer', () => {
    const DummyFC: React.FC = () => {
      return <>hello</>;
    };
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <Modal open={true} footer={<DummyFC />} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('Modal').react('DummyFC');
  });
});
