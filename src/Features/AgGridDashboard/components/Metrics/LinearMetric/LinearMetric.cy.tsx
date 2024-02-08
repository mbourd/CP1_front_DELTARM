// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/AgGridDashboard/components/Metrics/LinearMetric/LinearMetric.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../cypress/utils/SetupTestsComponents';

import { LinearMetric } from './LinearMetric';

describe('<LinearMetric />', function () {
  it('should render', function () {
    cy.mount(
      <SetupTestsComponents>
        <LinearMetric variant={undefined} value={0} hint={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('LinearMetric').should('exist');
  });

  it('Should render with variant = determinate', () => {
    cy.mount(
      <SetupTestsComponents>
        <LinearMetric variant={'determinate'} value={0} hint={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('LinearMetric')
      .invoke('attr', 'class')
      .then((classes) => {
        const splitClasses = classes?.split(' ') || [];
        expect(splitClasses.some((c) => /(determinate)$/.test(c))).to.be.true;
      });
  });

  it('Should render with variant = indeterminate', () => {
    cy.mount(
      <SetupTestsComponents>
        <LinearMetric variant={'indeterminate'} value={0} hint={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('LinearMetric')
      .invoke('attr', 'class')
      .then((classes) => {
        const splitClasses = classes?.split(' ') || [];
        expect(splitClasses.some((c) => /(indeterminate)$/.test(c))).to.be.true;
      });
  });

  it('Should have attribute with message', () => {
    const hintMsg = 'hello';
    cy.mount(
      <SetupTestsComponents>
        <LinearMetric variant={undefined} value={0} hint={hintMsg} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('LinearMetric').should('have.attr', 'title', hintMsg);
  });

  it('Should render hint tooltip', () => {
    const hintMsg = 'hello';
    cy.mount(
      <SetupTestsComponents>
        <LinearMetric variant={undefined} value={0} hint={hintMsg} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('LinearMetric').should('exist');
    cy.react('LinearMetric').each(($el) => {
      cy.wrap($el).trigger('mouseover');
      cy.get('[role="tooltip"]').should('exist').should('be.visible');
      cy.wrap($el).trigger('mouseout');
      cy.get('[role="tooltip"]').should('not.exist');
    });
  });

  it('Should have a background color applied', () => {
    const red = 'rgb(255, 0, 0)';
    const style = { backgroundColor: red };
    cy.mount(
      <SetupTestsComponents>
        <LinearMetric variant={undefined} value={0} hint={''} style={style} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('LinearMetric').should('exist');
    cy.react('LinearMetric').should('have.css', 'background-color', red);
  });

  it('Should have a bar color applied', () => {
    const red = 'rgb(255, 0, 0)';
    const style = { color: red };
    cy.mount(
      <SetupTestsComponents>
        <LinearMetric variant={undefined} value={0} hint={''} style={style} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('LinearMetric').should('exist');
    cy.react('LinearMetric').should('have.css', 'color', red);
  });
});
