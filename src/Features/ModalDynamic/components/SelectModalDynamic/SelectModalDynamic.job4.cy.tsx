// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/ModalDynamic/components/SelectModalDynamic/SelectModalDynamic.job4.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';

import { SelectModalDynamic } from './SelectModalDynamic';
import { IElementModal } from '../types';
import { cloneDeep } from 'lodash';

describe('<SelectModalDynamic />', function () {
  const element: IElementModal = {
    element: 'select',
    items: [],
    attribute: {
      type: '',
      id: '',
      placeholder: '',
      mandatory: false,
      multiline: false,
      multilineRows: null,
      option: [
        {
          id: '0',
          value: 'None (Abort)',
          // label: '',
        },
        {
          id: '1',
          value: 'Close (Object will still appear in Historical Data)',
          // label: '',
        },
        {
          id: '2',
          value: 'Remove (Object will no longer appear)',
          // label: '',
        },
      ],
      mode: undefined,
    },
    value: null,
  };

  it('should render without crash', function () {
    const _element = { ...cloneDeep(element) };
    const options: Record<string, any> = {};
    element.attribute?.option?.map((option: any) => {
      options[option.id] = {
        id: '' + option.id,
        label: option.label,
        value: option.value,
      };

      return option;
    });

    cy.mount(
      <SetupTestsComponents>
        <SelectModalDynamic
          element={_element}
          options={options}
          selectedValue={undefined}
          handleChangeValue={() => undefined}
          register={() => undefined}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('SelectModalDynamic').should('exist');
  });
});
