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
          onClose={() => undefined}
          controlId={''}
          fileId={''}
          isRejected={false}
          setSuccessCallRejection={() => undefined}
          setRejectComments={() => undefined}
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
          onClose={() => undefined}
          controlId={''}
          fileId={''}
          isRejected={false}
          setSuccessCallRejection={() => undefined}
          setRejectComments={() => undefined}
        />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('ModalRejectControl').should('exist');
  });

  it('should make one request at a time and payload/queries not empty', function () {
    const contrId = 'contrIdqsipqdf';
    const fileId = 'fileIdqsipqdf9865';
    const rejectComment = 'pfdqsfjmflq';
    const isReject = false;
    let reqCount = 0;

    cy.viewport(1920, 1080);
    cy.mount(
      <SetupTestsComponents>
        <ModalRejectControl
          open={true}
          onClose={() => undefined}
          controlId={contrId}
          fileId={fileId}
          isRejected={isReject}
          setSuccessCallRejection={() => undefined}
          setRejectComments={() => undefined}
        />
      </SetupTestsComponents>,
    ).waitReactApp();

    cy.intercept('POST', '/control/reject/value\\?*', (req) => {
      reqCount++;
      req.reply({ statusCode: 200, body: {} });
    }).as('reqPostReject');

    cy.react('ModalRejectControl').find('textarea:visible').type(rejectComment);
    cy.react('ModalRejectControl')
      .find('button')
      .contains('Rejeter')
      .realClick();

    cy.wait('@reqPostReject').then((intercept) => {
      const { request } = intercept;
      const { query } = request;

      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(300).then(() => {
        expect(reqCount).to.eq(1);
        cy.wrap(query).should('have.property', 'file_id');
        cy.wrap(query).should('have.property', 'elm_id');
        cy.wrap(query).should('have.property', 'reject_value');
        cy.wrap(query).should('have.property', 'reject_comment');
        cy.then(() => {
          expect(query.file_id).to.eq(fileId);
          expect(query.elm_id).to.eq(contrId);
          expect(query.reject_value).to.eq(isReject + '');
          expect(query.reject_comment).to.eq(rejectComment);
        });
      });
    });
  });
});
