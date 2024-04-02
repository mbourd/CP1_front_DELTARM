// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Packages/Design/components/Select/Body/SelectBody.job3.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../cypress/utils/SetupTestsComponents';

import { SelectBody } from './SelectBody';
import { SelectContext } from '../SelectContext';
import { ISelectData } from '../types';

describe('<SelectBody />', function () {
  const entry1: ISelectData = {
    id: '1',
    label: 'label1',
    value: 'string1',
    order: '1',
    key: '1',
    isKo: false,
    font_color: '',
    font_style: '',
    background: '',
  };
  const entry2: ISelectData = {
    id: '2',
    label: 'label2',
    value: 'string2',
    order: '2',
    key: '2',
    isKo: false,
    font_color: '',
    font_style: '',
    background: '',
  };
  const entry3: ISelectData = {
    id: '3',
    label: 'label3',
    value: 'string13',
    order: '3',
    key: '3',
    isKo: false,
    font_color: '',
    font_style: '',
    background: '',
  };
  const data: Record<string, ISelectData> = {
    '1': entry1,
    '2': entry2,
    '3': entry3,
  };

  it('should render without crash', function () {
    cy.mount(
      <SetupTestsComponents>
        {/* @ts-ignore */}
        <SelectContext.Provider value={{}}>
          <SelectBody />
        </SelectContext.Provider>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('SelectBody').should('exist');
  });
  it('should render without crash', function () {
    cy.mount(
      <SetupTestsComponents>
        {/* @ts-ignore */}
        <SelectContext.Provider
          value={{
            data,
            multiple: true,
            selectedValues: {},
            onChange: () => undefined,
            name: '',
          }}
        >
          <SelectBody />
        </SelectContext.Provider>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('SelectBody').should('exist');
  });
});
