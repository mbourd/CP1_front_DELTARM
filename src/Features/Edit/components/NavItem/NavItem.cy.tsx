// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/NavItem/NavItem.cy.tsx"

import React from 'react';

import { BPITheme } from '../../../../Packages/Design';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';
import { NavItem } from './NavItem';
import { ISection } from '../../types';

describe('<NavItem />', () => {
  it('Should render', () => {
    const item: ISection = {
      id: '',
      code: '',
      label: '',
      locked: false,
      tooltip: '',
    };

    cy.mount(
      <SetupTestsComponents>
        <NavItem item={item} active={false} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('NavItem').should('exist');
  });

  it('Should render with label', () => {
    const label = 'Section label';
    const item: ISection = {
      id: '',
      code: '',
      label: label,
      locked: false,
      tooltip: '',
    };

    cy.mount(
      <SetupTestsComponents>
        <NavItem item={item} active={false} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('NavItem').find('span').should('contain.text', label);
  });

  it('Should render lock', () => {
    const label = 'Section label';
    const item: ISection = {
      id: '',
      code: '',
      label: label,
      locked: true,
      tooltip: '',
    };

    cy.mount(
      <SetupTestsComponents>
        <NavItem item={item} active={false} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('NavItem').find('svg');
  });

  it('Should be active', () => {
    const activeColor = 'rgb(255, 0, 0)';
    const _BPITheme = {
      ...BPITheme,
      color: {
        ...BPITheme.color,
        white: { ...BPITheme.color.white, main: activeColor },
      },
    };
    const label = 'Section label';
    const item: ISection = {
      id: '',
      code: '',
      label: label,
      locked: false,
      tooltip: '',
    };

    cy.mount(
      <SetupTestsComponents theme={_BPITheme}>
        <NavItem item={item} active={true} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('NavItem')
      .find('span')
      .should('have.css', 'background-color', activeColor);
  });
});
