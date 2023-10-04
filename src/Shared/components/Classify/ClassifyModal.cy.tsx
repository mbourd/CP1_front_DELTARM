// @ts-check

import React from 'react';
import { ThemeProvider } from 'styled-components/macro';
import { BPITheme, BPIGlobalStyle } from '../../../Packages/Design';

import 'cypress-react-selector';
import { mount } from 'cypress/react18';

import { ClassifyModal } from './ClassifyModal';

describe('<ClassifyModal />', () => {
  it('Should not render', () => {
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <ClassifyModal
            open={false}
            onClose={function (): void {
              throw new Error('Function not implemented.');
            }}
            fileId={''}
          />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('ClassifyModal', { options: { timeout: 1 } }).should('not.exist');
  });
  it('Should render', () => {
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <ClassifyModal
            open={true}
            onClose={function (): void {
              throw new Error('Function not implemented.');
            }}
            fileId={''}
          />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('ClassifyModal').should('exist').should('be.visible');
  });
});
