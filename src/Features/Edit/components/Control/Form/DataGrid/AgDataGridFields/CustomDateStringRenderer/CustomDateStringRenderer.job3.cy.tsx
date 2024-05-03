// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/DataGrid/AgDataGridFields/CustomDateStringRenderer/CustomDateStringRenderer.job3.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../../../cypress/utils/SetupTestsComponents';

import { CustomDateStringRenderer } from './CustomDateStringRenderer';

describe('<CustomDateStringRenderer />', function () {
  const props = {
    data: {
      field1: { action: {}, hint: 'hint' },
    },
    value: '23/03/2023 - 00:00:00',
  };

  it('should render without crash', function () {
    cy.mount(
      <SetupTestsComponents>
        <CustomDateStringRenderer props={undefined} fieldName={'field1'} />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('CustomDateStringRenderer').should('not.exist');
  });

  it('should render without crash', function () {
    const _props = { ...structuredClone(props), value: '20/02/2020' };

    cy.mount(
      <SetupTestsComponents>
        <CustomDateStringRenderer props={_props} fieldName={'field1'} />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('CustomDateStringRenderer')
      .should('exist')
      .should('have.text', '20/02/2020');
  });

  it('should have cursor if have action', function () {
    const _props = {
      ...structuredClone(props),
      value: '20/02/2020',
      data: {
        ...structuredClone(props.data),
        field1: { ...structuredClone(props.data.field1), hint: 'hint msg' },
      },
    };

    cy.mount(
      <SetupTestsComponents>
        <CustomDateStringRenderer props={_props} fieldName={'field1'} />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('CustomDateStringRenderer')
      .react('BPITooltip')
      .should('have.css', 'cursor', 'pointer');
  });
});
