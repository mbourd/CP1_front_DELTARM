// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/AgGridDashboard/components/Metrics/CircularMetric/CircularMetric.job1.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../cypress/utils/SetupTestsComponents';

import { CircularMetric } from './CircularMetric';

describe('<CircularMetric />', function () {
  it('should render', function () {
    cy.mount(
      <SetupTestsComponents>
        <CircularMetric variant={undefined} value={0} hint={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CircularMetric').should('exist');
  });

  it('Should render with variant = determinate', () => {
    cy.mount(
      <SetupTestsComponents>
        <CircularMetric variant={'determinate'} value={0} hint={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CircularMetric')
      .invoke('attr', 'class')
      .then((classes) => {
        const splitClasses = classes?.split(' ') || [];
        expect(splitClasses.some((c) => /(determinate)$/.test(c))).to.be.true;
      });
  });

  it('Should render with variant = indeterminate', () => {
    cy.mount(
      <SetupTestsComponents>
        <CircularMetric variant={'indeterminate'} value={0} hint={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CircularMetric')
      .invoke('attr', 'class')
      .then((classes) => {
        const splitClasses = classes?.split(' ') || [];
        expect(splitClasses.some((c) => /(indeterminate)$/.test(c))).to.be.true;
      });
  });

  it('Should render hint tooltip', () => {
    const hintMsg = 'hello';
    cy.mount(
      <SetupTestsComponents>
        <CircularMetric variant={undefined} value={0} hint={hintMsg} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CircularMetric').should('exist');
    cy.react('CircularMetric').each(($el) => {
      cy.wrap($el).trigger('mouseover');
      cy.get('[role="tooltip"]').should('exist').should('be.visible');
      cy.get('[role="tooltip"]').should('have.text', hintMsg);
      cy.wrap($el).trigger('mouseout');
      cy.get('[role="tooltip"]').should('not.exist');
    });
  });

  it('Should have a background color applied', () => {
    const red = 'rgb(255, 0, 0)';
    const style = { backgroundColor: red };
    cy.mount(
      <SetupTestsComponents>
        <CircularMetric variant={undefined} value={0} hint={''} style={style} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CircularMetric').should('exist');
    cy.react('CircularMetric').should('have.css', 'background-color', red);
  });

  it('Should have a bar color applied', () => {
    const red = 'rgb(255, 0, 0)';
    const style = { color: red };
    cy.mount(
      <SetupTestsComponents>
        <CircularMetric variant={undefined} value={0} hint={''} style={style} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CircularMetric').should('exist');
    cy.react('CircularMetric').should('have.css', 'color', red);
  });
});
