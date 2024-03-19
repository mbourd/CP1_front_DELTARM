// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Packages/Design/components/Select/Select.job1.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';

import { Select } from './Select';
import { ISelectData } from './types';

describe('<Select />', function () {
  const data: Record<string, ISelectData> = {
    '11': {
      id: '11',
      label: 'value11',
      value: 'string',
      order: '1',
      key: 'string',
      isKo: false,
      font_color: '',
      font_style: '',
      background: '',
    },
  };

  it('should render without crash', function () {
    cy.mount(
      <SetupTestsComponents>
        <Select name={''} data={data} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Select').should('exist');
  });

  it('should ', function () {
    cy.mount(
      <SetupTestsComponents>
        <Select name={''} data={data} selectedValues={{ '11': true }} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Select').should('have.text', 'value11');
  });
});
