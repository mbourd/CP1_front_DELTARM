// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Embedded/EmbeddedContent.job3.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../cypress/utils/SetupTestsComponents';

import { EmbeddedContent } from './EmbeddedContent';

describe('<EmbeddedContent />', function () {
  it('should render without crash if no mode', function () {
    cy.mount(
      <SetupTestsComponents>
        <EmbeddedContent mode={''} />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('EmbeddedContent').should('not.exist');
  });
  it('should render without crash if mode=referential', function () {
    cy.mount(
      <SetupTestsComponents>
        <EmbeddedContent mode={'referential'} />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('EmbeddedContent').should('exist');
    cy.react('EmbeddedContent').should(
      'have.text',
      'Embedded CP1 content referential',
    );
  });
  it('should render without crash if mode=control-points', function () {
    cy.mount(
      <SetupTestsComponents>
        <EmbeddedContent mode={'control-points'} />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('EmbeddedContent').should('exist');
    cy.react('EmbeddedContent').should(
      'have.text',
      'Embedded CP1 content points control',
    );
  });
});
