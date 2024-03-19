// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/ModalDynamic/components/DatePickerModalDynamic/DatePickerModalDynamic.job1.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';

import { DatePickerModalDynamic } from './DatePickerModalDynamic';
import { IElementModal } from '../types';

describe('<DatePickerModalDynamic />', function () {
  const element: IElementModal = {
    element: 'date_picker',
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
        <DatePickerModalDynamic
          element={element}
          index={0}
          handleChangeValue={function (): void {}}
          register={function (): void {}}
          defaultDate={''}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('DatePickerModalDynamic').should('exist');
  });

  it('should render the default date', function () {
    cy.mount(
      <SetupTestsComponents>
        <DatePickerModalDynamic
          element={element}
          index={0}
          handleChangeValue={function (): void {}}
          register={function (): void {}}
          defaultDate={'2024-01-02'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('DatePickerModalDynamic')
      .find('input[type="date"]')
      .should('have.value', '2024-01-02');
  });
});
