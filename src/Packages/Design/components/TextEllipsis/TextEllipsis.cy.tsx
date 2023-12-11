// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../cypress/support/component" />

import React from 'react';

import 'cypress-react-selector';
import { mount } from 'cypress/react18';

import { TextEllipsis } from './TextEllipsis';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';

describe('<TextEllipsis />', () => {
  it('Should render correctly', () => {
    mount(
      <SetupTestsComponents>
        <TextEllipsis />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
  });
});
