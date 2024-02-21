// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/DashboardDynamic/components/Card/Card.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';

import { ICard } from '../types';
import { Card } from './Card';

describe('<Card />', () => {
  let card1: ICard;
  let card2: ICard;
  let card3: ICard;

  before(() => {
    cy.fixture('dashboardDyn-card-1.json').then((d) => (card1 = d));
    cy.fixture('dashboardDyn-card-2.json').then((d) => (card2 = d));
    cy.fixture('dashboardDyn-card-3.json').then((d) => (card3 = d));
  });

  beforeEach(() => {
    cy.viewport(1500, 600);
  });

  it('should render - card1', function () {
    const _card = {
      ...structuredClone(card1),
    };
    cy.mount(
      <SetupTestsComponents>
        <Card
          card={_card}
          triggerAction={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Card').should('exist');
  });
  it('should render - card1', function () {
    const _card = {
      ...structuredClone(card1),
    };
    // @ts-ignore
    delete _card.lines.values;
    cy.mount(
      <SetupTestsComponents>
        <Card
          card={_card}
          triggerAction={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Card').should('exist');
  });
  it('should render - card1', function () {
    const _card = {
      ...structuredClone(card1),
      lines: {
        ...structuredClone(card1.lines),
        values: [],
      },
    };
    cy.mount(
      <SetupTestsComponents>
        <Card
          card={_card}
          triggerAction={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Card').should('exist');
  });
  it('should render - card1', function () {
    const _card = {
      ...structuredClone(card1),
      lines: {
        ...structuredClone(card1.lines),
        values: [],
      },
    };
    cy.mount(
      <SetupTestsComponents>
        <Card
          card={_card}
          triggerAction={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Card').should('exist');
  });
  it('should render - card2', function () {
    const _card = {
      ...structuredClone(card2),
    };
    cy.mount(
      <SetupTestsComponents>
        <Card
          card={_card}
          triggerAction={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Card').should('exist');
  });
  it('should render - card3', function () {
    const _card = {
      ...structuredClone(card3),
    };
    cy.mount(
      <SetupTestsComponents>
        <Card
          card={_card}
          triggerAction={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Card').should('exist');
  });

  it('should render Header with title lib - card1', function () {
    const text = 'hello world';
    const _card = {
      ...structuredClone(card1),
      title: {
        ...structuredClone(card1.title),
        lib: text,
      },
    };
    cy.mount(
      <SetupTestsComponents>
        <Card
          card={_card}
          triggerAction={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Card').react('Header').should('have.text', text);
  });
  it('should render Header title undefined - card1', function () {
    const text = '';
    const _card = {
      ...structuredClone(card1),
      title: {
        ...structuredClone(card1.title),
        lib: text,
      },
    };
    // @ts-ignore
    delete _card.title;
    cy.mount(
      <SetupTestsComponents>
        <Card
          card={_card}
          triggerAction={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Card').react('Header').should('have.text', text);
  });
});
