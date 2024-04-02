// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/Compliance/Compliance.job3.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../cypress/utils/SetupTestsComponents';

import { Compliance } from './Compliance';
import { ICompliance } from '../../../../types';

describe('<Compliance />', function () {
  const compliance: ICompliance = {
    resolved: null,
    complianceUncheckColor: 'text',
    complianceCheckColor: 'text',
    complianceLib: '',
    complianceCheckboxResolved: false,
    modaleTitle: '',
  };

  it('should render without crash', function () {
    cy.mount(
      <SetupTestsComponents>
        <Compliance
          label={''}
          checked={false}
          controlId={''}
          fileId={''}
          setIsResolved={() => undefined}
          choiceIsKo={false}
          // @ts-ignore
          compliance={undefined}
        />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('Compliance').should('exist');
  });

  it('should render', function () {
    cy.mount(
      <SetupTestsComponents>
        <Compliance
          label={''}
          checked={false}
          controlId={''}
          fileId={''}
          setIsResolved={() => undefined}
          choiceIsKo={false}
          compliance={compliance}
        />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('Compliance').should('exist');
  });

  it('should render', function () {
    cy.mount(
      <SetupTestsComponents>
        <Compliance
          label={'label'}
          checked={true}
          controlId={'controlId'}
          fileId={'fileId'}
          setIsResolved={() => undefined}
          choiceIsKo={true}
          compliance={compliance}
        />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('Compliance').should('exist');
  });
});
