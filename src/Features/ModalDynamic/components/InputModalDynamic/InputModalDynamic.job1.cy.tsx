// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/ModalDynamic/components/InputModalDynamic/InputModalDynamic.job1.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';

import { InputModalDynamic } from './InputModalDynamic';
import { IElementModal } from '../types';

describe('<InputModalDynamic />', function () {
  const element: IElementModal = {
    element: 'input',
    items: [],
    attribute: {
      type: '',
      id: '',
      placeholder: '',
      mandatory: false,
      multiline: false,
      multilineRows: null,
      option: undefined,
      mode: undefined,
    },
    value: null,
  };

  it('should render without crash', function () {
    cy.mount(
      <SetupTestsComponents>
        <InputModalDynamic
          element={element}
          index={0}
          handleChangeValue={function (): void {}}
          register={function (): void {}}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('InputModalDynamic').should('exist');
  });
});
