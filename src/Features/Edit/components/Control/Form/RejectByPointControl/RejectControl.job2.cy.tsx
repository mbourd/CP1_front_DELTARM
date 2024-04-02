// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/RejectByPointControl/RejectControl.job2.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../cypress/utils/SetupTestsComponents';

import { RejectControl } from './RejectControl';
import { ControlRejectable } from '../../../../types';
import { IFileComment } from '../../../../../Comments';

describe('<RejectControl />', function () {
  it('should render without crash', function () {
    cy.mount(
      <SetupTestsComponents>
        <RejectControl
          isRejected={false}
          controlId={''}
          setIsRejected={function (): void {
            //
          }}
          context={'edit'}
          // @ts-ignore
          controlRejectable={undefined}
        />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('RejectControl').should('exist');
  });
  it('should render', function () {
    const ctrlRejectable: ControlRejectable = {
      isRejected: null,
      rejectComments: Array.from({ length: 3 }).map((v, i) => {
        const fileComm: IFileComment = {
          id: i,
          message: 'msg' + i,
          date: '',
          user: 'user' + i,
        };

        return fileComm;
      }),
    };
    cy.mount(
      <SetupTestsComponents>
        <RejectControl
          isRejected={false}
          controlId={''}
          setIsRejected={function (): void {
            //
          }}
          context={'edit'}
          controlRejectable={ctrlRejectable}
        />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('RejectControl').should('exist');
  });
});
