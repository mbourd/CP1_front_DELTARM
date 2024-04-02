// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/RejectByPointControl/ModalRejectControl/ModalRejectControl.job1.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../../cypress/utils/SetupTestsComponents';

import { ModalRejectControl } from './ModalRejectControl';

describe('<ModalRejectControl />', function () {
  it('should render without crash', function () {
    cy.mount(
      <SetupTestsComponents>
        <ModalRejectControl
          open={false}
          onClose={function (): void {}}
          controlId={''}
          fileId={''}
          isRejected={false}
          setSuccessCallRejection={function (): void {}}
          setRejectComments={function (): void {}}
        />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('ModalRejectControl').should('not.exist');
  });

  it('should render without crash', function () {
    cy.viewport(1920, 1080);
    cy.mount(
      <SetupTestsComponents>
        <ModalRejectControl
          open={true}
          onClose={function (): void {}}
          controlId={''}
          fileId={''}
          isRejected={false}
          setSuccessCallRejection={function (): void {}}
          setRejectComments={function (): void {}}
        />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('ModalRejectControl').should('exist');
  });
});
