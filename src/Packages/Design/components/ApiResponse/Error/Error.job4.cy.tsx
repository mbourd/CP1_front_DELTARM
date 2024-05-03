// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Packages/Design/components/ApiResponse/Error/Error.cy.tsx"

import React from 'react';

import { BPITheme } from '../../../../../Packages/Design';
import { SetupTestsComponents } from '../../../../../../cypress/utils/SetupTestsComponents';
import { Error } from './Error';
// @ts-ignore
import icon from '../../../../../Shared/components/NotFoundComponent/error404.svg';

describe('<Error />', () => {
  it('Should render', () => {
    cy.mount(
      <SetupTestsComponents>
        <Error />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Error').should('exist');
  });

  it('Should render icon', () => {
    cy.mount(
      <SetupTestsComponents>
        <Error icon={icon} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Error').should('exist');
    cy.react('Error').find('._ErrorPicture');
  });

  it('Should render sm size', () => {
    const small = '3px';
    const _BPITheme = {
      ...BPITheme,
      spacing: { ...BPITheme.spacing, small },
    };

    cy.mount(
      <SetupTestsComponents theme={_BPITheme}>
        <Error size="sm" icon={icon} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
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

    cy.mount(
      <SetupTestsComponents theme={_BPITheme}>
        <Error size="md" icon={icon} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
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

    cy.mount(
      <SetupTestsComponents theme={_BPITheme}>
        <Error icon={icon} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
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

    cy.mount(
      <SetupTestsComponents theme={_BPITheme}>
        <Error icon={icon} size="sm" title={title} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
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

    cy.mount(
      <SetupTestsComponents theme={_BPITheme}>
        <Error icon={icon} size="md" title={title} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
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

    cy.mount(
      <SetupTestsComponents theme={_BPITheme}>
        <Error icon={icon} title={title} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
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

    cy.mount(
      <SetupTestsComponents theme={_BPITheme}>
        <Error icon={icon} size={'sm'} message={title} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
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

    cy.mount(
      <SetupTestsComponents theme={_BPITheme}>
        <Error icon={icon} size={'md'} message={title} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
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

    cy.mount(
      <SetupTestsComponents theme={_BPITheme}>
        <Error icon={icon} message={title} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Error').should('exist');
    cy.react('Error')
      .find('._ErrorIcon')
      .should('have.css', 'margin-bottom', xLarge);
    cy.react('Error').find('._ErrorMessage').should('contain.text', title);
  });
});
