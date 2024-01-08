// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/DataGrid/AgDataGridFields/CustomSingleCheckBoxRenderer/CustomSingleCheckBoxRenderer.cy.tsx"

import React, { useState } from 'react';
import { SetupTestsComponents } from '../../../../../../../../../cypress/utils/SetupTestsComponents';
import CustomSingleCheckboxRender from './CustomSingleCheckBoxRenderer';

describe('<CustomSingleCheckboxRender />', () => {
  it('Should render', () => {
    const props = {
      data: { row_editable: true },
      value: '1',
      setValue: () => {
        return undefined;
      },
    };

    cy.mount(
      <SetupTestsComponents>
        <CustomSingleCheckboxRender props={props} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomSingleCheckboxRender').should('exist');
  });
  it('Should not render', () => {
    const props = {
      data: { row_editable: false },
      value: '1',
      setValue: () => {
        return undefined;
      },
    };

    cy.mount(
      <SetupTestsComponents>
        <CustomSingleCheckboxRender props={props} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomSingleCheckboxRender', { options: { timeout: 1 } }).should(
      'not.exist',
    );
  });

  it('Should be checked', () => {
    const props = {
      data: { row_editable: true },
      value: '1',
      setValue: () => {
        return undefined;
      },
    };

    cy.mount(
      <SetupTestsComponents>
        <CustomSingleCheckboxRender props={props} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomSingleCheckboxRender')
      .find('input[type="checkbox"]')
      .should('have.attr', 'checked');
  });
  it('Should not be checked', () => {
    const props = {
      data: { row_editable: true },
      value: '0',
      setValue: () => {
        return undefined;
      },
    };

    cy.mount(
      <SetupTestsComponents>
        <CustomSingleCheckboxRender props={props} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomSingleCheckboxRender')
      .find('input[type="checkbox"]')
      .should('not.have.attr', 'checked');
  });

  it('Should change value', () => {
    let val = '1';
    const DummyFC: React.FC = () => {
      const [value, setValue] = useState(val);
      const props = {
        data: { row_editable: true },
        value: value,
        setValue: (v: any) => {
          val = v;

          return setValue(v);
        },
      };

      return (
        <SetupTestsComponents>
          <CustomSingleCheckboxRender props={props} />
        </SetupTestsComponents>
      );
    };

    cy.mount(<DummyFC />);
    cy.waitReactApp();
    cy.react('CustomSingleCheckboxRender')
      .find('input[type="checkbox"]')
      .check()
      .then(() => {
        expect(val).to.equal('1');
      })
      .should('be.checked');
    cy.react('CustomSingleCheckboxRender')
      .find('input[type="checkbox"]')
      .uncheck()
      .then(() => {
        expect(val).to.equal('0');
      })
      .should('not.be.checked');
  });
});
