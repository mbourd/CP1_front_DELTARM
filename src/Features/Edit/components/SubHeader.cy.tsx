// @ts-check
/// <reference types="cypress" />

import '../../../../cypress/support/commands';

import React from 'react';
import { ThemeProvider } from 'styled-components/macro';
import { BPITheme, BPIGlobalStyle } from '../../../Packages/Design';
import { _decodeHtmlUnicode } from '../../../../cypress/utils';

import { mount } from 'cypress/react18';

import { SubHeader } from './SubHeader';
import { IData } from '../types';

describe('<Subheader />', () => {
  it('should render', () => {
    const data: IData = {
      number: null,
      contrepartie: null,
      productType: '',
      title: null,
      // @ts-ignore
      currentSection: undefined,
      sections: [],
      // @ts-ignore
      state: undefined,
      file: [],
      countComments: 0,
      linked_files: [],
      valid_mode: 'global',
      context: 'edit',
    };
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <SubHeader data={data} />
        </ThemeProvider>
      </div>,
    );
    cy.waitReactApp();
    cy.react('SubHeader').should('exist').should('be.visible');
  });

  it('should render the title', () => {
    const title = 'Test title';
    const data: IData = {
      number: null,
      contrepartie: null,
      productType: '',
      title,
      // @ts-ignore
      currentSection: undefined,
      sections: [],
      // @ts-ignore
      state: undefined,
      file: [],
      countComments: 0,
      linked_files: [],
      valid_mode: 'global',
      context: 'edit',
    };
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <SubHeader data={data} />
        </ThemeProvider>
      </div>,
    );
    cy.waitReactApp();
    cy.react('SubHeader').should('contain.text', title);
  });

  it('should render the number + contrepartie + productType', () => {
    const number = 'number';
    const contrepartie = 'contrepartie';
    const productType = 'productType';
    const data: IData = {
      number: number,
      contrepartie: contrepartie,
      productType: productType,
      title: null,
      // @ts-ignore
      currentSection: undefined,
      sections: [],
      // @ts-ignore
      state: undefined,
      file: [],
      countComments: 0,
      linked_files: [],
      valid_mode: 'global',
      context: 'edit',
    };
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <SubHeader data={data} />
        </ThemeProvider>
      </div>,
    );
    cy.waitReactApp();
    cy.react('SubHeader').should(
      'contain.text',
      `${number} ${_decodeHtmlUnicode(
        '&ndash;',
      )} ${contrepartie} / ${productType}`,
    );
  });
});
