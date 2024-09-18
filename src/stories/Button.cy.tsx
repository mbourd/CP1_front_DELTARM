// @ts-check
/// <reference types="cypress" />
/// <reference types="../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec ""

import React from 'react';
import { composeStories } from '@storybook/react';
import * as stories from './Button.stories';

const { Default } = composeStories(stories);

describe('< />', function () {
  it('POC: should render story book component', function () {
    // cy.intercept('POST', '/control/set_value\\?*', {});
    cy.mount(<Default />).waitReactApp('main');
  });
});
