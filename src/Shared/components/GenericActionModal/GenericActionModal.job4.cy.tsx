// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec ""

import React from 'react';
import { SetupTestsComponents } from '../../../../cypress/utils/SetupTestsComponents';

import { GenericActionModal } from './GenericActionModal';
import { apiRouter } from '../../../Packages/Api';
import { Method } from 'cypress/types/net-stubbing';

describe('<GenericActionModal />', function () {
  it('should render without crash', function () {
    cy.mount(
      <SetupTestsComponents>
        <GenericActionModal
          open={false}
          onClose={function (): void {
            throw new Error('Function not implemented.');
          }}
          actionLabel={''}
          successMessage={''}
          message={''}
          postRouteName={''}
        />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('GenericActionModal').should('not.exist');
  });

  it('should render', function () {
    cy.mount(
      <SetupTestsComponents>
        <GenericActionModal
          open={true}
          onClose={function (): void {
            throw new Error('Function not implemented.');
          }}
          actionLabel={''}
          successMessage={''}
          message={''}
          postRouteName={''}
        />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('GenericActionModal').should('exist');
  });

  it('should make one request at a time', function () {
    const fileId = 'fileqsd';
    let reqCount = 0;

    cy.intercept(
      apiRouter.getRoutes()['actionClassify']?.method as Method,
      apiRouter.getRoutes()['actionClassify']?.path + '\\?*',
      (req) => {
        reqCount++;

        req.on('response', (resp) => {
          resp.send(200, {});
        });
      },
    ).as('reqSaveValue');

    cy.mount(
      <SetupTestsComponents>
        <GenericActionModal
          open={true}
          onClose={function (): void {
            throw new Error('Function not implemented.');
          }}
          successMessage={''}
          message={''}
          postRouteName={'actionClassify'}
          fileId={fileId}
          actionLabel="actionLabel"
          comment
          commentParam="commentParam"
        />
      </SetupTestsComponents>,
    ).waitReactApp();

    cy.window().then((w) => {
      w[
        'Shared/components/GenericActionModal/GenericActionModal'
      ].storage.setData('validation.reject.comments', 'valueKey');
    });
    cy.then(() => {
      cy.get('button').contains('actionLabel').realClick();
      cy.wait('@reqSaveValue').then((interception) => {
        const { request } = interception;
        const { query } = request;

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(255).then(() => {
          expect(reqCount).to.eq(1);
          cy.wrap(query).should('have.property', 'file_id');
          cy.wrap(query).should('have.property', 'commentParam');
          cy.then(() => {
            expect(query.file_id).to.eq(fileId);
            expect(query.commentParam).to.eq('valueKey');
          });
        });
      });
    });
  });
});
