// @ts-check

import React from 'react';
import { ThemeProvider } from 'styled-components/macro';

import 'cypress-react-selector';
import { mount } from 'cypress/react18';
import { BPITheme, BPIGlobalStyle } from '../../../../../Packages/Design';
import { Error } from './Error';
// @ts-ignore
import icon from '../../../../../Shared/components/NotFoundComponent/error404.svg';

describe('<NotFoundComponent />', () => {
  it('Should render', () => {
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <Error />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('Error').should('exist');
  });

  it('Should render icon', () => {
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <Error icon={icon} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('Error').should('exist');
    cy.react('Error').find('._ErrorPicture');
  });

  it('Should render sm size', () => {
    const small = '3px';
    const _BPITheme = {
      ...BPITheme,
      spacing: { ...BPITheme.spacing, small },
    };

    mount(
      <div id="root">
        <ThemeProvider theme={_BPITheme}>
          <BPIGlobalStyle />
          <Error size="sm" icon={icon} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('Error').should('exist');
    cy.react('Error')
      .find('._ErrorIcon')
      .should('have.css', 'margin-bottom', small);
  });

  it('Should render md size', () => {
    const normal = '18px';
    const _BPITheme = {
      ...BPITheme,
      spacing: { ...BPITheme.spacing, normal },
    };

    mount(
      <div id="root">
        <ThemeProvider theme={_BPITheme}>
          <BPIGlobalStyle />
          <Error size="md" icon={icon} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('Error').should('exist');
    cy.react('Error')
      .find('._ErrorIcon')
      .should('have.css', 'margin-bottom', normal);
  });

  it('Should render default size', () => {
    const xLarge = '50px';
    const _BPITheme = {
      ...BPITheme,
      spacing: { ...BPITheme.spacing, xLarge },
    };

    mount(
      <div id="root">
        <ThemeProvider theme={_BPITheme}>
          <BPIGlobalStyle />
          <Error icon={icon} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('Error').should('exist');
    cy.react('Error')
      .find('._ErrorIcon')
      .should('have.css', 'margin-bottom', xLarge);
  });

  it('Should render title with sm size', () => {
    const title = 'PAGE NOT FOUND';
    const small = '50px';
    const _BPITheme = {
      ...BPITheme,
      spacing: { ...BPITheme.spacing, small },
    };

    mount(
      <div id="root">
        <ThemeProvider theme={_BPITheme}>
          <BPIGlobalStyle />
          <Error icon={icon} size="sm" title={title} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('Error').should('exist');
    cy.react('Error')
      .find('._ErrorIcon')
      .should('have.css', 'margin-bottom', small);
    cy.react('Error').find('._ErrorTitle').should('contain.text', title);
  });
  it('Should render title with md size', () => {
    const title = 'PAGE NOT FOUND';
    const normal = '50px';
    const _BPITheme = {
      ...BPITheme,
      spacing: { ...BPITheme.spacing, normal },
    };

    mount(
      <div id="root">
        <ThemeProvider theme={_BPITheme}>
          <BPIGlobalStyle />
          <Error icon={icon} size="md" title={title} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('Error').should('exist');
    cy.react('Error')
      .find('._ErrorIcon')
      .should('have.css', 'margin-bottom', normal);
    cy.react('Error').find('._ErrorTitle').should('contain.text', title);
  });
  it('Should render title with default size', () => {
    const title = 'PAGE NOT FOUND';
    const xLarge = '50px';
    const _BPITheme = {
      ...BPITheme,
      spacing: { ...BPITheme.spacing, xLarge },
    };

    mount(
      <div id="root">
        <ThemeProvider theme={_BPITheme}>
          <BPIGlobalStyle />
          <Error icon={icon} title={title} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('Error').should('exist');
    cy.react('Error')
      .find('._ErrorIcon')
      .should('have.css', 'margin-bottom', xLarge);
    cy.react('Error').find('._ErrorTitle').should('contain.text', title);
  });

  it('Should render message with sm size', () => {
    const title = 'PAGE NOT FOUND';
    const small = '50px';
    const _BPITheme = {
      ...BPITheme,
      spacing: { ...BPITheme.spacing, small },
    };

    mount(
      <div id="root">
        <ThemeProvider theme={_BPITheme}>
          <BPIGlobalStyle />
          <Error icon={icon} size={'sm'} message={title} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('Error').should('exist');
    cy.react('Error')
      .find('._ErrorIcon')
      .should('have.css', 'margin-bottom', small);
    cy.react('Error').find('._ErrorMessage').should('contain.text', title);
  });
  it('Should render message with md size', () => {
    const title = 'PAGE NOT FOUND';
    const normal = '50px';
    const _BPITheme = {
      ...BPITheme,
      spacing: { ...BPITheme.spacing, normal },
    };

    mount(
      <div id="root">
        <ThemeProvider theme={_BPITheme}>
          <BPIGlobalStyle />
          <Error icon={icon} size={'md'} message={title} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('Error').should('exist');
    cy.react('Error')
      .find('._ErrorIcon')
      .should('have.css', 'margin-bottom', normal);
    cy.react('Error').find('._ErrorMessage').should('contain.text', title);
  });
  it('Should render message with default size', () => {
    const title = 'PAGE NOT FOUND';
    const xLarge = '50px';
    const _BPITheme = {
      ...BPITheme,
      spacing: { ...BPITheme.spacing, xLarge },
    };

    mount(
      <div id="root">
        <ThemeProvider theme={_BPITheme}>
          <BPIGlobalStyle />
          <Error icon={icon} message={title} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('Error').should('exist');
    cy.react('Error')
      .find('._ErrorIcon')
      .should('have.css', 'margin-bottom', xLarge);
    cy.react('Error').find('._ErrorMessage').should('contain.text', title);
  });
});
