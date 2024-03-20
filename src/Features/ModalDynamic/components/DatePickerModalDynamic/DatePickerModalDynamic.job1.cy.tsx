// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/ModalDynamic/components/DatePickerModalDynamic/DatePickerModalDynamic.job1.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';

import { DatePickerModalDynamic } from './DatePickerModalDynamic';
import { IElementModal } from '../types';

import { cloneDeep } from 'lodash';

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

  it('should render the default date as today', function () {
    const today = new Date();
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = today.getDate();

    cy.mount(
      <SetupTestsComponents>
        <DatePickerModalDynamic
          element={element}
          index={0}
          handleChangeValue={function (): void {}}
          register={function (): void {}}
          defaultDate={`${year}-${month}-${day}`}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('DatePickerModalDynamic')
      .find('input[type="date"]')
      .should('have.value', `${year}-${month}-${day}`);
  });

  // it('should render error message if mandatory', function () {
  //   const today = new Date();
  //   const year = today.getFullYear();
  //   const month = ('0' + (today.getMonth() + 1)).slice(-2);
  //   const day = today.getDate();

  //   cy.mount(
  //     <SetupTestsComponents>
  //       <DatePickerModalDynamic
  //         element={element}
  //         index={0}
  //         handleChangeValue={function (): void {}}
  //         register={function (): void {}}
  //         defaultDate={`${year}-${month}-${day}`}
  //       />
  //     </SetupTestsComponents>,
  //   );
  //   cy.waitReactApp();
  //   cy.get('._FormError', { timeout: 10 }).should('not.exist');
  //   cy.react('DatePickerModalDynamic')
  //     .find('input')
  //     .clear()
  //     .blur()
  //     .then(() => {
  //       cy.formErrorShouldBeVisible(['Valeur obligatoire']);
  //     });
  //   cy.react('DatePickerModalDynamic')
  //     .find('input')
  //     .typeThenWait('2024-01-03', {
  //       typeOptions: { parseSpecialCharSequences: false },
  //       triggers: { blur: { exec: true } },
  //     })
  //     .then(() => {
  //       cy.get('._FormError', { timeout: 10 }).should('not.exist');
  //     });
  // });
});
