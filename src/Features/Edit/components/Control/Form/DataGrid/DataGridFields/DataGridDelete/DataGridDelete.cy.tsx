// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/DataGrid/DataGridFields/DataGridDelete/DataGridDelete.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../../../cypress/utils/SetupTestsComponents';

import { DataGridDelete } from './DataGridDelete';

import '../../../../../../translations';
import { _translate } from '../../../../../../../../../cypress/utils';

describe('<DataGridDelete />', function () {
  const trans_EN = _translate('en', 'MainHeader', 'reports');
  const trans_FR = _translate('fr', 'MainHeader', 'reports');
  const trans_DE = _translate('de', 'MainHeader', 'reports');
  const translations = [trans_EN, trans_FR, trans_DE];

  it('should render', function () {
    cy.mount(
      <SetupTestsComponents>
        <DataGridDelete
          rowNum={0}
          fileId={''}
          controlId={''}
          setGridDetails={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('DataGridDelete').should('exist');
  });

  it('should have tooltip', function () {
    cy.mount(
      <SetupTestsComponents>
        <DataGridDelete
          rowNum={0}
          fileId={''}
          controlId={''}
          setGridDetails={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('DataGridDelete')
      .find('svg')
      .each(($e) => {
        //
      });
  });
});
