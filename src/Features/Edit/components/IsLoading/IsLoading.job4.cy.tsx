// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/IsLoading/IsLoading.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';

import { IsLoading } from './IsLoading';
import '../../../Edit/translations';
import '../../../../Shared/translations/default';

describe('<IsLoading />', () => {
  it('should render', () => {
    cy.mount(
      <SetupTestsComponents>
        <IsLoading />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('IsLoading').should('exist');
  });

  it('should render <HeadingOne /> if title', () => {
    cy.mount(
      <SetupTestsComponents>
        <IsLoading title={'Hello'} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('IsLoading').react('HeadingOne');
  });
});
