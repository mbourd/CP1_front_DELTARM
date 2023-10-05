// @ts-check
/// <reference types="cypress" />

import '../../../../../cypress/support/commands';

import React from 'react';
import { ThemeProvider } from 'styled-components/macro';
import { BPITheme, BPIGlobalStyle } from '../../../../Packages/Design';

import 'cypress-react-selector';
import { mount } from 'cypress/react18';
import {
  _requestJWT,
  _getEnv,
  _escapeForRegExp,
} from '../../../../../cypress/utils';

import { TextEllipsis } from './TextEllipsis';
import { translation } from '../../../../Services';

describe('<TextEllipsis />', () => {
  it('Should render correctly', () => {
    mount(
      <ThemeProvider theme={BPITheme}>
        <BPIGlobalStyle />
        <TextEllipsis />
      </ThemeProvider>,
    );
    cy.waitReactApp('[data-cy-root]');
  });
});
