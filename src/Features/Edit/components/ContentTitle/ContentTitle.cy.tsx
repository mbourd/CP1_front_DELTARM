// @ts-check
/// <reference types="cypress" />

import '../../../../../cypress/support/commands';

import React from 'react';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';

import 'cypress-react-selector';
import 'cypress-real-events';
import { mount } from 'cypress/react18';

import { ContentTitle } from './ContentTitle';

describe('<ContentTitle />', () => {
  it('should render', () => {
    mount(
      <SetupTestsComponents>
        <ContentTitle></ContentTitle>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('ContentTitle');
  });

  it('should render React.FC as children', () => {
    const DummyFC: React.FC = () => {
      return <div id="dummyfcc">Hello world</div>;
    };
    mount(
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
    mount(
      <SetupTestsComponents>
        <ContentTitle>{text}</ContentTitle>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('ContentTitle').contains(text);
  });
});
