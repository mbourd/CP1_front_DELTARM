// @ts-check
/// <reference types="cypress" />

import '../../../../cypress/support/commands';

import React from 'react';
import { SetupTestsComponents } from '../../../../cypress/utils/SetupTestsComponents';

import 'cypress-real-events';
import { mount } from 'cypress/react18';

import { BPIBadge } from './BPIBadge';

describe('<BPIBadge />', () => {
  it('should render', () => {
    mount(
      <SetupTestsComponents>
        <BPIBadge content={undefined} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('BPIBadge').should('exist');
  });

  it('should render content', () => {
    const content = 23;
    mount(
      <SetupTestsComponents>
        <BPIBadge content={content}></BPIBadge>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('BPIBadge').get('._Badge').contains(content);
  });

  it('should render children as text', () => {
    const content = 'Hello world';
    mount(
      <SetupTestsComponents>
        <BPIBadge content={undefined}>{content}</BPIBadge>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('BPIBadge').contains(content);
  });

  it('should render children as React.FC', () => {
    const text = 'Hello world';
    const DummyFC: React.FC = () => {
      return <>{text}</>;
    };
    mount(
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
