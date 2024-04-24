// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/ModalDynamic/components/InputModalDynamic/InputModalDynamic.job1.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';

import { InputModalDynamic } from './InputModalDynamic';
import { IElementModal } from '../types';
import { cloneDeep } from 'lodash';

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
          handleChangeValue={() => undefined}
          register={() => undefined}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('InputModalDynamic').should('exist');
  });

  it('should render default value', function () {
    const _element = { ...cloneDeep(element), value: 'hello world' };

    cy.mount(
      <SetupTestsComponents>
        <InputModalDynamic
          element={_element}
          index={0}
          handleChangeValue={() => undefined}
          register={() => undefined}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('InputModalDynamic')
      .find('input')
      .should('have.value', 'hello world');
  });

  it('should render error message if mandatory', function () {
    const _element = {
      ...cloneDeep(element),
      value: '',
      attribute: {
        ...cloneDeep(element.attribute),
        mandatory: true,
      },
    };

    cy.mount(
      <SetupTestsComponents>
        <InputModalDynamic
          element={_element}
          index={0}
          handleChangeValue={() => undefined}
          register={() => undefined}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.formErrorShouldBeVisible(['Valeur obligatoire']);
    cy.react('InputModalDynamic')
      .find('input')
      .typeThenWait('hello world', {
        typeOptions: { parseSpecialCharSequences: false },
        triggers: { blur: { exec: true } },
      })
      .then(() => {
        cy.get('._FormError', { timeout: 10 }).should('not.exist');
      });
    cy.react('InputModalDynamic')
      .find('input')
      .clear()
      .blur()
      .then(() => {
        cy.formErrorShouldBeVisible(['Valeur obligatoire']);
      });
  });
});
