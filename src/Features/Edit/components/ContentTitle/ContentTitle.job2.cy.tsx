// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/ContentTitle/ContentTitle.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';

import { ContentTitle } from './ContentTitle';

describe('<ContentTitle />', () => {
  it('should render', () => {
    cy.mount(
      <SetupTestsComponents>
        <ContentTitle></ContentTitle>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('ContentTitle').should('exist');
  });

  it('should render React.FC as children', () => {
    const DummyFC: React.FC<React.PropsWithChildren<unknown>> = () => {
      return <div id="dummyfcc">Hello world</div>;
    };
    cy.mount(
      <SetupTestsComponents>
        <ContentTitle>
          <DummyFC />
        </ContentTitle>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('ContentTitle').react('DummyFC');
  });

  it('should render text as children', () => {
    const text = 'Hello world';
    cy.mount(
      <SetupTestsComponents>
        <ContentTitle>{text}</ContentTitle>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('ContentTitle').contains(text);
  });
});
