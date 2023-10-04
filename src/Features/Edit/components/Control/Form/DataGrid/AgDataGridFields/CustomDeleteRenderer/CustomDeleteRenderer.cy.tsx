// @ts-check

import React from 'react';
import { ThemeProvider } from 'styled-components/macro';

import 'cypress-react-selector';
import { mount } from 'cypress/react18';

import {
  BPITheme,
  BPIGlobalStyle,
} from '../../../../../../../../Packages/Design';
import CustomDeleteRenderer from './CustomDeleteRenderer';

describe('<CustomDeleteRenderer />', () => {
  it('Should render', () => {
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <CustomDeleteRenderer />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.get('svg').should('exist');
  });
});
