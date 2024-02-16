// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Packages/Design/components/Form/Text/FormText.cy.tsx"

import React from 'react';

import { SetupTestsComponents } from '../../../../../../cypress/utils/SetupTestsComponents';
import { FormText } from './FormText';

describe('<NotFoundComponent />', () => {
  it('Should render', () => {
    cy.mount(
      <SetupTestsComponents>
        <FormText />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('FormText').should('exist');
  });

  it('Should render a React.ReactNode as children', () => {
    const DummyFC: React.FC<React.PropsWithChildren<unknown>> = () => {
      return <div id="dummyfc">Hello</div>;
    };

    cy.mount(
      <SetupTestsComponents>
        <FormText>
          <DummyFC />
        </FormText>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('FormText').react('DummyFC').should('exist');
    cy.react('FormText').find('#dummyfc').should('exist');
  });

  it('Should have class name', () => {
    const className = 'classs';
    cy.mount(
      <SetupTestsComponents>
        <FormText className={className} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('FormText').should('have.attr', 'class').and('contain', className);
  });
});
