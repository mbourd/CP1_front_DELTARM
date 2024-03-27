// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Packages/Design/components/Tooltip/Tooltip.job1.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';

// import { Tooltip } from './Tooltip';

describe('<Tooltip />', function () {
  //// TODO: this component has an issue (maybe should update material-ui)
  // it('should render without crash', function () {
  //   cy.mount(
  //     <SetupTestsComponents>
  //       <Tooltip title={''}>Hello world</Tooltip>
  //     </SetupTestsComponents>,
  //   );
  //   cy.waitReactApp();
  //   cy.react('Tooltip').should('exist');
  // });
});
