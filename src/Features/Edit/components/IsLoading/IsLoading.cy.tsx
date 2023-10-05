// @ts-check
/// <reference types="cypress" />

import '../../../../../cypress/support/commands';

import React from 'react';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';

import 'cypress-react-selector';
import 'cypress-real-events';
import { mount } from 'cypress/react18';

import { IsLoading } from './IsLoading';
import '../../../Edit/translations';
import '../../../../Shared/translations/default';

describe('<IsLoading />', () => {
  it('should render', () => {
    mount(
      <SetupTestsComponents>
        <IsLoading />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('IsLoading');
  });

  it('should render <HeadingOne /> if title', () => {
    mount(
      <SetupTestsComponents>
        <IsLoading title={'Hello'} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('IsLoading').react('HeadingOne');
  });
});
