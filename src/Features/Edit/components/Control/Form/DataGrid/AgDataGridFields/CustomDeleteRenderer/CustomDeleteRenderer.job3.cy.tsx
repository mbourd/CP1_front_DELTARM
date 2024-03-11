// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/DataGrid/AgDataGridFields/CustomDeleteRenderer/CustomDeleteRenderer.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../../../cypress/utils/SetupTestsComponents';
import CustomDeleteRenderer from './CustomDeleteRenderer';

describe('<CustomDeleteRenderer />', () => {
  it('Should render', () => {
    cy.mount(
      <SetupTestsComponents>
        <CustomDeleteRenderer />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.get('svg').should('exist');
  });
});
