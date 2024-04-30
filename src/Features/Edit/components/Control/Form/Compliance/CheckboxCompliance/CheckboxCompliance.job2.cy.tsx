// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/Compliance/CheckboxCompliance/CheckboxCompliance.job2.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../../cypress/utils/SetupTestsComponents';

import { CheckboxCompliance } from './CheckboxCompliance';
import {
  EditValidationContext,
  IEditValidationContext,
} from '../../../../../EditValidationContext';

describe('<CheckboxCompliance />', () => {
  it('should render', () => {
    cy.mount(
      <SetupTestsComponents>
        <CheckboxCompliance
          label={''}
          checked={false}
          controlId={''}
          setIsResolved={function (): void {
            throw new Error('Function not implemented.');
          }}
          checkedColor={'text'}
          uncheckedColor={'text'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CheckboxCompliance');
  });

  it('should make one request at a time and queries not empty when onChange', function () {
    let reqCount = 0;
    const valueContext: IEditValidationContext = {
      data: null,
      fileId: 'fileId',
    };

    cy.intercept('POST', '/control/set_compliance?*', (req) => {
      reqCount++;
      req.reply({});
    }).as('reqCheckComplianceChange');
    cy.mount(
      <SetupTestsComponents>
        <EditValidationContext.Provider value={valueContext}>
          <CheckboxCompliance
            label={''}
            checked={false}
            controlId={'controlId'}
            setIsResolved={() => undefined}
            checkedColor={'text'}
            uncheckedColor={'text'}
          />
        </EditValidationContext.Provider>
      </SetupTestsComponents>,
    )
      .waitReactApp()
      .then(() => {
        cy.react('Checkbox').find('input[type="checkbox"]').realClick();
        cy.wait('@reqCheckComplianceChange').then((interception) => {
          const { request } = interception;
          const { query } = request;

          // eslint-disable-next-line cypress/no-unnecessary-waiting
          cy.wait(255).then(() => {
            expect(reqCount).to.be.eq(1);
            cy.wrap(query).should('have.property', 'file_id');
            cy.wrap(query).should('have.property', 'elm_id');
            cy.wrap(query)
              .should('have.property', 'compliance_resolved')
              .then(() => {
                expect(query.file_id).to.be.eq(valueContext.fileId);
                expect(query.elm_id).to.be.eq('controlId');
                expect(query.compliance_resolved).to.be.eq('true');
              });
          });
        });
      });
  });

  it('should make one request at a time and queries not empty when onChange', function () {
    let reqCount = 0;
    const valueContext: IEditValidationContext = {
      data: null,
      fileId: 'fileId',
    };

    cy.intercept('POST', '/control/set_compliance?*', (req) => {
      reqCount++;
      req.reply({});
    }).as('reqCheckComplianceChange');
    cy.mount(
      <SetupTestsComponents>
        <EditValidationContext.Provider value={valueContext}>
          <CheckboxCompliance
            label={''}
            checked={true}
            controlId={'controlId'}
            setIsResolved={() => undefined}
            checkedColor={'text'}
            uncheckedColor={'text'}
          />
        </EditValidationContext.Provider>
      </SetupTestsComponents>,
    )
      .waitReactApp()
      .then(() => {
        cy.react('Checkbox').find('input[type="checkbox"]').realClick();
        cy.wait('@reqCheckComplianceChange').then((interception) => {
          const { request } = interception;
          const { query } = request;

          // eslint-disable-next-line cypress/no-unnecessary-waiting
          cy.wait(255).then(() => {
            expect(reqCount).to.be.eq(1);
            cy.wrap(query).should('have.property', 'file_id');
            cy.wrap(query).should('have.property', 'elm_id');
            cy.wrap(query)
              .should('have.property', 'compliance_resolved')
              .then(() => {
                expect(query.file_id).to.be.eq(valueContext.fileId);
                expect(query.elm_id).to.be.eq('controlId');
                expect(query.compliance_resolved).to.be.eq('false');
              });
          });
        });
      });
  });

  it('should render with label', () => {
    const label = 'Hello';
    cy.mount(
      <SetupTestsComponents>
        <CheckboxCompliance
          label={label}
          checked={false}
          controlId={''}
          setIsResolved={function (): void {
            throw new Error('Function not implemented.');
          }}
          checkedColor={'text'}
          uncheckedColor={'text'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CheckboxCompliance')
      .find('input[type="checkbox"] ~ span:nth-of-type(2)')
      .invoke('text')
      .then((t) => expect(t).to.be.equal(label));
  });

  it('should be checked', () => {
    cy.mount(
      <SetupTestsComponents>
        <CheckboxCompliance
          label={''}
          checked={true}
          controlId={''}
          setIsResolved={function (): void {
            throw new Error('Function not implemented.');
          }}
          checkedColor={'text'}
          uncheckedColor={'text'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CheckboxCompliance')
      .find('input[type="checkbox"]')
      .should('be.checked');
  });
  it('should not be checked', () => {
    cy.mount(
      <SetupTestsComponents>
        <CheckboxCompliance
          label={''}
          checked={false}
          controlId={''}
          setIsResolved={function (): void {
            throw new Error('Function not implemented.');
          }}
          checkedColor={'text'}
          uncheckedColor={'text'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CheckboxCompliance')
      .find('input[type="checkbox"]')
      .should('not.be.checked');
  });
});
