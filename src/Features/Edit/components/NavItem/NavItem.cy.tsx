// @ts-check

import React from 'react';
import { ThemeProvider } from 'styled-components/macro';

import 'cypress-react-selector';
import { mount } from 'cypress/react18';
import { BPITheme, BPIGlobalStyle } from '../../../../Packages/Design';
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
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <NavItem item={item} active={false} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
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
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <NavItem item={item} active={false} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
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
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <NavItem item={item} active={false} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
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
    mount(
      <div id="root">
        <ThemeProvider theme={_BPITheme}>
          <BPIGlobalStyle />
          <NavItem item={item} active={true} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('NavItem')
      .find('span')
      .should('have.css', 'background-color', activeColor);
  });
});
