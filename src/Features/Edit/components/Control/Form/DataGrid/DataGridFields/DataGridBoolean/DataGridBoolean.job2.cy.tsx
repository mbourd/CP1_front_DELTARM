// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/DataGrid/DataGridFields/DataGridBoolean/DataGridBoolean.job2.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../../../cypress/utils/SetupTestsComponents';

import { DataGridBoolean } from './DataGridBoolean';

describe('<DataGridBoolean />', function () {
  it('should render without crash', function () {
    cy.mount(
      <SetupTestsComponents>
        <DataGridBoolean
          value={''}
          fileId={''}
          controlId={''}
          columnId={0}
          rowNum={0}
          regex={null}
          regexMsg={null}
          editable={false}
          mandatory={false}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('DataGridBoolean').should('exist');
  });
});
