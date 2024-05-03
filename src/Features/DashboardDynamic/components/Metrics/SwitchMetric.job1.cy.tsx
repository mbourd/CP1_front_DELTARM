// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/DashboardDynamic/components/Metrics/SwitchMetric.job1.cy.tsx"

import React from 'react';

import { SwitchMetric } from './SwitchMetric';
import { IIndicator } from '../types';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';

describe('<SwitchMetric />', () => {
  it('Should render linear metric', () => {
    const indicator: IIndicator = {
      bg_color: '',
      color: '',
      hint: '',
      info: '',
      lib: '',
      value: 23,
      style: 'linear',
    };

    cy.mount(
      <SetupTestsComponents>
        <SwitchMetric indicator={indicator} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('LinearMetric').should('exist');
  });
  it('Should render circular metric', () => {
    const indicator: IIndicator = {
      bg_color: '',
      color: '',
      hint: '',
      info: '',
      lib: '',
      value: 23,
      style: 'circular',
    };

    cy.mount(
      <SetupTestsComponents>
        <SwitchMetric indicator={indicator} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CircularMetric').should('exist');
  });

  it('Should display tooltip with message hint', () => {
    const hint = 'hello';
    const indicator: IIndicator = {
      bg_color: '',
      color: '',
      hint: hint,
      info: '',
      lib: '',
      value: 23,
      style: 'circular',
    };
    cy.mount(
      <SetupTestsComponents>
        <SwitchMetric indicator={indicator} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CircularMetric').each(($el) => {
      cy.wrap($el).trigger('mouseover');
      cy.get('[role="tooltip"]').should('exist').should('be.visible');
      cy.get('[role="tooltip"]').should('have.text', hint);
      cy.wrap($el).trigger('mouseout');
      cy.get('[role="tooltip"]').should('not.exist');
    });
  });

  it('Should have attribute with message hint', () => {
    const hint = 'hello';
    const indicator: IIndicator = {
      bg_color: '',
      color: '',
      hint: hint,
      info: '',
      lib: '',
      value: 23,
      style: 'linear',
    };
    cy.mount(
      <SetupTestsComponents>
        <SwitchMetric indicator={indicator} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('LinearMetric').each(($el) => {
      cy.wrap($el).trigger('mouseover');
      cy.get('[role="tooltip"]').should('exist').should('be.visible');
      cy.get('[role="tooltip"]').should('have.text', hint);
      cy.wrap($el).trigger('mouseout');
      cy.get('[role="tooltip"]').should('not.exist');
    });
  });

  it('Should render message hint', () => {
    const hint = 'hello';
    const indicator: IIndicator = {
      bg_color: '',
      color: '',
      hint: hint,
      info: '',
      lib: '',
      value: 23,
      style: 'linear',
    };
    cy.mount(
      <SetupTestsComponents>
        <SwitchMetric indicator={indicator} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('LinearMetric').each(($el) => {
      cy.wrap($el).trigger('mouseover');
      cy.get('[role="tooltip"]').should('exist').should('be.visible');
      cy.get('[role="tooltip"]').should('have.text', hint);
      cy.wrap($el).trigger('mouseout');
      cy.get('[role="tooltip"]').should('not.exist');
    });
  });
  it('Should render message hint', () => {
    const hint = 'hello';
    const indicator: IIndicator = {
      bg_color: '',
      color: '',
      hint: hint,
      info: '',
      lib: '',
      value: 23,
      style: 'circular',
    };
    cy.mount(
      <SetupTestsComponents>
        <SwitchMetric indicator={indicator} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CircularMetric').each(($el) => {
      cy.wrap($el).trigger('mouseover');
      cy.get('[role="tooltip"]').should('exist').should('be.visible');
      cy.get('[role="tooltip"]').should('have.text', hint);
      cy.wrap($el).trigger('mouseout');
      cy.get('[role="tooltip"]').should('not.exist');
    });
  });

  it('Should render lib', () => {
    const indicator: IIndicator = {
      bg_color: '',
      color: '',
      hint: '',
      info: '',
      lib: 'anytext',
      value: 23,
      style: 'circular',
    };
    cy.mount(
      <SetupTestsComponents>
        <SwitchMetric indicator={indicator} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.get('p').should('contain.text', 'anytext');
  });

  it('Should have a background color applied', () => {
    const red = 'rgb(255, 0, 0)';
    const indicator: IIndicator = {
      bg_color: red,
      color: '',
      hint: '',
      info: '',
      lib: '',
      value: 23,
      style: 'linear',
    };
    cy.mount(
      <SetupTestsComponents>
        <SwitchMetric indicator={indicator} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('LinearMetric').should('have.css', 'background-color', red);
  });
  it('Should have a bar color applied', () => {
    const red = 'rgb(255, 0, 0)';
    const indicator: IIndicator = {
      bg_color: '',
      color: red,
      hint: '',
      info: '',
      lib: '',
      value: 23,
      style: 'linear',
    };
    cy.mount(
      <SetupTestsComponents>
        <SwitchMetric indicator={indicator} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('LinearMetric').should('have.css', 'color', red);
  });

  it('Should have a bar color applied', () => {
    const red = 'rgb(255, 0, 0)';
    const indicator: IIndicator = {
      bg_color: '',
      color: red,
      hint: '',
      info: 'info',
      lib: '',
      value: 23,
      style: 'circular',
    };
    cy.mount(
      <SetupTestsComponents>
        <SwitchMetric indicator={indicator} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CircularMetric').should('have.css', 'color', red);
  });

  it('Should have title attribute for info', () => {
    const info = 'info';
    const indicator: IIndicator = {
      bg_color: '',
      color: '',
      hint: '',
      info: info,
      lib: '',
      value: 23,
      style: 'linear',
    };
    cy.mount(
      <SetupTestsComponents>
        <SwitchMetric indicator={indicator} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.get('span._Tooltip svg').each(($el) => {
      cy.wrap($el).trigger('mouseover');
      cy.get('[role="tooltip"]').should('exist').should('be.visible');
      cy.get('[role="tooltip"]').should('have.text', info);
      cy.wrap($el).trigger('mouseout');
      cy.get('[role="tooltip"]').should('not.exist');
    });
  });
});
