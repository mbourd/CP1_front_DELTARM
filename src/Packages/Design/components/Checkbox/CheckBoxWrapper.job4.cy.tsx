// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Packages/Design/components/Checkbox/CheckBoxWrapper.job4.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';

import { CheckboxWrapper } from './CheckboxWrapper';
import { ISelectData } from '../Select';

describe('<CheckboxWrapper />', function () {
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

  // it('should render without crash', function () {
  //   cy.mount(
  //     <SetupTestsComponents>
  //       {/*@ts-ignore*/}
  //       <CheckboxWrapper name={''} data={undefined} />
  //     </SetupTestsComponents>,
  //   ).waitReactApp();
  //   cy.react('CheckboxWrapper').should('exist');
  // });
  it('should render without crash', function () {
    cy.mount(
      <SetupTestsComponents>
        <CheckboxWrapper name={''} data={data} />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('CheckboxWrapper').should('exist');
  });
  it('should render without crash', function () {
    cy.mount(
      <SetupTestsComponents>
        <CheckboxWrapper name={''} data={data} selectedValues={{ '2': true }} />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('CheckboxWrapper').should('exist');
  });

  //// TODO: continue
});
