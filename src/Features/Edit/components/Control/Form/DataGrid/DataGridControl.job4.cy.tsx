// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/DataGrid/DataGridControl.job4.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../cypress/utils/SetupTestsComponents';

import { DataGridControl } from './DataGridControl';
import { IApiControl } from '../../../../types';

describe('<DataGridControl />', function () {
  let controlExample1: IApiControl;

  before(() => {
    cy.fixture('controlDataGridAgGrid-1.json').then(
      (d) => (controlExample1 = d),
    );
  });

  beforeEach(() => {
    cy.viewport(1600, 720);
  });

  it('should render without crash', function () {
    const _control = { ...structuredClone(controlExample1) } as IApiControl;

    cy.mount(
      <SetupTestsComponents>
        <DataGridControl control={_control} fileId={''} />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('DataGridControl').should('exist');
  });
});
