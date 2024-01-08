// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Packages/Design/components/Form/Error/FormError.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../cypress/utils/SetupTestsComponents';

import { FormError } from './FormError';

describe('<NotFoundComponent />', () => {
  it('Should render', () => {
    cy.mount(
      <SetupTestsComponents>
        <FormError />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('FormError').should('exist');
  });

  it('Should render a React.ReactNode as children', () => {
    const DummyFC: React.FC = () => {
      return <div id="dummyfc">Hello</div>;
    };

    cy.mount(
      <SetupTestsComponents>
        <FormError>
          <DummyFC />
        </FormError>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('FormError').react('DummyFC').should('exist');
    cy.react('FormError').find('#dummyfc').should('exist');
  });

  it('Should have class name', () => {
    const className = 'classs';

    cy.mount(
      <SetupTestsComponents>
        <FormError className={className} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('FormError')
      .should('have.attr', 'class')
      .and('contain', className);
  });

  it('Should have a background-color applied', () => {
    const bgc = 'rgb(255, 0, 0)';
    const className = 'classs';

    cy.mount(
      <SetupTestsComponents>
        <FormError className={className} style={{ backgroundColor: bgc }} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('FormError').should('have.css', 'background-color', bgc);
  });
});
