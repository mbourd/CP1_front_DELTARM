// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Embedded/components/ReferentielControl/ReferentielControl.job3.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';

import { ReferentielControl } from './ReferentielControl';

describe('<ReferentielControl />', function () {
  it('should render without crash', function () {
    cy.mount(
      <SetupTestsComponents>
        <ReferentielControl />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('ReferentielControl').should('exist');
    cy.react('ReferentielControl').should(
      'have.text',
      'Embedded CP1 content referentiel control',
    );
  });
});
