// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/SubHeader.cy.tsx"

import React from 'react';

import { _decodeHtmlUnicode } from '../../../../cypress/utils';

import { SubHeader } from './SubHeader';
import { IData } from '../types';
import { SetupTestsComponents } from '../../../../cypress/utils/SetupTestsComponents';

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
    cy.mount(
      <SetupTestsComponents>
        <SubHeader data={data} />
      </SetupTestsComponents>,
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
    cy.mount(
      <SetupTestsComponents>
        <SubHeader data={data} />
      </SetupTestsComponents>,
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
    cy.mount(
      <SetupTestsComponents>
        <SubHeader data={data} />
      </SetupTestsComponents>,
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
