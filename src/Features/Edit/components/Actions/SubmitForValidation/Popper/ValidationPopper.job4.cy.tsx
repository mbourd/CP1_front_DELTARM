// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Actions/SubmitForValidation/Popper/ValidationPopper.job4.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../cypress/utils/SetupTestsComponents';

import { ValidationPopper } from './ValidationPopper';
import {
  EditValidationContext,
  IEditValidationContext,
} from '../../../../EditValidationContext';
import { IData } from '../../../../types';

describe('<ValidationPopper />', function () {
  it('should render without crash', function () {
    cy.mount(
      <SetupTestsComponents>
        <ValidationPopper />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('ValidationPopper').should('exist');
  });

  it('should make one request at a time and payload/queries not empty', function () {
    const contextEdit: IEditValidationContext = {
      data: null,
      fileId: 'oqsdfdksfhplqsh ioqsdh',
    };
    let reqCount = 0;

    cy.intercept('GET', '/validate/validator\\?*', (req) => {
      reqCount++;
      req.reply({ statusCode: 200, body: {} });
    }).as('reqGetValidators');

    cy.mount(
      <SetupTestsComponents>
        <EditValidationContext.Provider value={contextEdit}>
          <ValidationPopper />
        </EditValidationContext.Provider>
      </SetupTestsComponents>,
    ).waitReactApp();

    cy.wait('@reqGetValidators').then((interception) => {
      const { request } = interception;
      const { query } = request;

      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(255).then(() => {
        expect(reqCount).to.eq(1);
        cy.wrap(query).should('have.property', 'file_id');
        cy.then(() => {
          expect(query.file_id).to.eq(contextEdit.fileId);
        });
      });
    });
  });

  it('should make one request at a time and payload/queries not empty', function () {
    const contextEdit: IEditValidationContext = {
      data: { validationCount: 'validCont' } as IData,
      fileId: 'oqsdfdksfhplqsh ioqsdh',
    };
    let reqCount = 0;

    cy.intercept('GET', '/validate/validator\\?*', (req) => {
      reqCount++;
      req.reply({ statusCode: 200, body: {} });
    }).as('reqGetValidators');

    cy.mount(
      <SetupTestsComponents>
        <EditValidationContext.Provider value={contextEdit}>
          <ValidationPopper />
        </EditValidationContext.Provider>
      </SetupTestsComponents>,
    ).waitReactApp();

    cy.wait('@reqGetValidators').then((interception) => {
      const { request } = interception;
      const { query } = request;

      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(255).then(() => {
        expect(reqCount).to.eq(1);
        cy.wrap(query).should('have.property', 'file_id');
        cy.wrap(query).should('have.property', 'valid_num');
        cy.then(() => {
          expect(query.file_id).to.eq(contextEdit.fileId);
          expect(query.valid_num).to.eq(contextEdit.data?.validationCount);
        });
      });
    });
  });
});
