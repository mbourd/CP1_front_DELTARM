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
  it('should render (same number of cols/cells values) - card1', function () {
    const _card = {
      ...structuredClone(card1),
      cols: {
        ...structuredClone(card1.cols),
        values: [
          {
            border_right: true,
            dataKey: 'Contrôle',
            filter: true,
            floating_filter: true,
            header: 'Contrôle',
            label: 'Contrôle',
            width: 450,
          },
          {
            border_right: true,
            dataKey: 'Contrôle',
            filter: true,
            floating_filter: true,
            header: 'Contrôle',
            label: 'Contrôle',
            width: 450,
          },
          {
            border_right: false,
            dataKey: 'Période',
            filter: true,
            floating_filter: false,
            header: 'Période',
            label: 'Période',
            width: 120,
          },
          {
            border_right: false,
            dataKey: 'Période',
            filter: true,
            floating_filter: false,
            header: 'Période',
            label: 'Période',
            width: 120,
          },
          {
            border_right: true,
            dataKey: 'Dernier',
            filter: true,
            floating_filter: false,
            header: 'Dernier',
            label: 'Dernier',
            width: 85,
          },
          {
            border_right: true,
            dataKey: 'Dernier',
            filter: true,
            floating_filter: false,
            header: 'Dernier',
            label: 'Dernier',
            width: 85,
          },
          {
            border_right: false,
            dataKey: 'Nouveau',
            filter: true,
            floating_filter: false,
            header: 'Nouveau',
            label: 'Nouveau',
            width: 85,
          },
          {
            border_right: false,
            dataKey: 'Nouveau',
            filter: true,
            floating_filter: false,
            header: 'Nouveau',
            label: 'Nouveau',
            width: 85,
          },
          {
            border_right: false,
            dataKey: 'Liste',
            filter: true,
            floating_filter: false,
            header: 'Liste',
            label: 'Liste',
            width: 60,
          },
          {
            border_right: false,
            dataKey: 'Liste',
            filter: true,
            floating_filter: false,
            header: 'Liste',
            label: 'Liste',
            width: 60,
          },
        ],
      },
      lines: {
        ...structuredClone(card1.lines),
        values: [
          {
            id: 'e4685ad1-5776-4f0e-a979-478b3a21696c',
            item: [
              {
                action: null,
                content:
                  '<p style="color:#5a4749; font-weight:bold;">Export Finance</p>CP-00004-Contrôle de la correcte préparation du dossier pour décision...',
                hint: 'Contrôle de la correcte préparation du dossier pour décision en comité',
                icon: null,
              },
              {
                action: null,
                content: '--/--/--',
                hint: 'Aucune saisie pour ce contrôle',
                icon: null,
              },
              {
                action: null,
                content: null,
                hint: null,
                icon: {
                  color: null,
                  ref: null,
                  size: null,
                },
              },
              {
                action: {
                  endpoint: '/edit/new_ctrl_file',
                  method: 'GET',
                  params: {
                    cp_uuid: 'e4685ad1-5776-4f0e-a979-478b3a21696c',
                  },
                },
                content: null,
                hint: 'Nouvelle Saisie',
                icon: {
                  color: '#66499c',
                  ref: 'CreateNewFolder',
                  size: 12,
                },
              },
              {
                action: null,
                content: null,
                hint: null,
                icon: null,
              },
              {
                action: null,
                content: null,
                hint: null,
                icon: null,
              },
              {
                action: null,
                content: null,
                hint: null,
                icon: null,
              },
              {
                action: null,
                content: null,
                hint: null,
                icon: null,
              },
              {
                action: null,
                content: null,
                hint: null,
                icon: null,
              },
              {
                action: null,
                content: null,
                hint: null,
                icon: null,
              },
            ],
          },
        ],
      },
    };
    cy.mount(
      <SetupTestsComponents>
        <Card
          // @ts-ignore
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
