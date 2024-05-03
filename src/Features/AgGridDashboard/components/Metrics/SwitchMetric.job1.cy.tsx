// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/AgGridDashboard/components/Metrics/SwitchMetric.job1.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';

import { SwitchMetric } from './SwitchMetric';
import { IIndicator } from '../types';

describe('<SwitchMetric />', function () {
  const indicator: IIndicator = {
    bg_color: '',
    color: '#ffaabb',
    hint: '',
    info: '',
    lib: '',
    value: 23,
    style: 'linear',
  };

  it('should not crash', function () {
    cy.mount(
      <SetupTestsComponents>
        {/* @ts-ignore */}
        <SwitchMetric indicator={undefined} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('LinearMetric').should('not.exist');
    cy.react('CircularMetric').should('not.exist');
  });

  it('should render <LinearMetric /> if indicator.style=linear', function () {
    const _indicator: IIndicator = {
      ...structuredClone(indicator),
      style: 'linear',
    };
    cy.mount(
      <SetupTestsComponents>
        <SwitchMetric indicator={_indicator} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('LinearMetric').should('exist');
    cy.react('LinearMetric')
      .invoke('attr', 'class')
      .then((classes) => {
        const splitClasses = classes?.split(' ') || [];
        expect(splitClasses.some((c) => /(determinate)$/.test(c))).to.be.true;
      });
  });

  it('should render <CircularMetric /> if indicator.style=circular', function () {
    const _indicator: IIndicator = {
      ...structuredClone(indicator),
      style: 'circular',
    };
    cy.mount(
      <SetupTestsComponents>
        <SwitchMetric indicator={_indicator} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CircularMetric').should('exist');
    cy.react('CircularMetric')
      .invoke('attr', 'class')
      .then((classes) => {
        const splitClasses = classes?.split(' ') || [];
        expect(splitClasses.some((c) => /(determinate)$/.test(c))).to.be.true;
      });
  });

  it('Should have a bar color applied', () => {
    const red = 'rgb(255, 0, 0)';
    const _indicator: IIndicator = {
      ...structuredClone(indicator),
      style: 'linear',
      color: red,
    };
    cy.mount(
      <SetupTestsComponents>
        <SwitchMetric indicator={_indicator} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('LinearMetric').should('have.css', 'color', red);
  });
  it('Should have a bar color applied', () => {
    const red = 'rgb(255, 0, 0)';
    const _indicator: IIndicator = {
      ...structuredClone(indicator),
      style: 'circular',
      color: red,
    };
    cy.mount(
      <SetupTestsComponents>
        <SwitchMetric indicator={_indicator} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CircularMetric').should('have.css', 'color', red);
  });

  it('Should have a bg color applied', () => {
    const red = 'rgb(255, 0, 0)';
    const _indicator: IIndicator = {
      ...structuredClone(indicator),
      style: 'linear',
      bg_color: red,
    };
    cy.mount(
      <SetupTestsComponents>
        <SwitchMetric indicator={_indicator} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('LinearMetric').should('have.css', 'background-color', red);
  });
  // it('Should have a bg color applied', () => {
  //   const red = 'rgb(255, 0, 0)';
  //   const _indicator: IIndicator = {
  //     ...structuredClone(indicator),
  //     style: 'circular',
  //     bg_color: red,
  //   };
  //   cy.mount(
  //     <SetupTestsComponents>
  //       <SwitchMetric indicator={_indicator} />
  //     </SetupTestsComponents>,
  //   );
  //   cy.waitReactApp();
  //   cy.react('CircularMetric').should('have.css', 'background-color', red);
  // });

  it('should render tooltip if info', function () {
    const info = 'info';
    const _indicator: IIndicator = {
      ...structuredClone(indicator),
      style: 'linear',
      info: info,
    };
    cy.mount(
      <SetupTestsComponents>
        <SwitchMetric indicator={_indicator} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.get('.help-icon').each(($el) => {
      cy.wrap($el).trigger('mouseover');
      cy.get('[role="tooltip"]').should('exist').should('be.visible');
      cy.get('[role="tooltip"]').should('have.text', info);
      cy.wrap($el).trigger('mouseout');
      cy.get('[role="tooltip"]').should('not.exist');
    });
  });
  it('should render tooltip if info', function () {
    const info = 'info';
    const _indicator: IIndicator = {
      ...structuredClone(indicator),
      style: 'circular',
      info: info,
    };
    cy.mount(
      <SetupTestsComponents>
        <SwitchMetric indicator={_indicator} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.get('.help-icon').each(($el) => {
      cy.wrap($el).trigger('mouseover');
      cy.get('[role="tooltip"]').should('exist').should('be.visible');
      cy.get('[role="tooltip"]').should('have.text', info);
      cy.wrap($el).trigger('mouseout');
      cy.get('[role="tooltip"]').should('not.exist');
    });
  });

  it('', function () {
    //
  });
});
