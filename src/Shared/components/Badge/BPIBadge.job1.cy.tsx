// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Shared/components/Badge/BPIBadge.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../cypress/utils/SetupTestsComponents';

import { BPIBadge } from './BPIBadge';

describe('<BPIBadge />', () => {
  it('should render', () => {
    cy.mount(
      <SetupTestsComponents>
        <BPIBadge content={undefined} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('BPIBadge').should('exist');
  });

  it('should render content', () => {
    const content = 23;
    cy.mount(
      <SetupTestsComponents>
        <BPIBadge content={content}></BPIBadge>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('BPIBadge').get('._Badge').contains(content);
  });

  it('should render children as text', () => {
    const content = 'Hello world';
    cy.mount(
      <SetupTestsComponents>
        <BPIBadge content={undefined}>{content}</BPIBadge>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('BPIBadge').contains(content);
  });

  it('should render children as React.FC', () => {
    const text = 'Hello world';
    const DummyFC: React.FC<React.PropsWithChildren<unknown>> = () => {
      return <>{text}</>;
    };
    cy.mount(
      <SetupTestsComponents>
        <BPIBadge content={undefined}>
          <DummyFC />
        </BPIBadge>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('BPIBadge')
      .react('DummyFC')
      .invoke('text')
      .then((t) => {
        expect(t).to.be.equal(text);
      });
  });
});
