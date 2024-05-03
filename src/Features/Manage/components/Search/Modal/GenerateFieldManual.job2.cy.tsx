// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Manage/components/Search/Modal/GenerateFieldManual.job2.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../cypress/utils/SetupTestsComponents';

import { GenerateFieldManual } from './GenerateFieldManual';

describe('<GenerateFieldManual />', function () {
  it('should render without crash', function () {
    cy.mount(
      <SetupTestsComponents>
        <GenerateFieldManual
          field={undefined}
          handleLeaveField={function (): void {
            throw new Error('Function not implemented.');
          }}
          setListMissingField={function (): void {
            throw new Error('Function not implemented.');
          }}
          // @ts-ignore
          control={undefined}
        />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('GenerateFieldManual').should('not.exist');
  });
});
