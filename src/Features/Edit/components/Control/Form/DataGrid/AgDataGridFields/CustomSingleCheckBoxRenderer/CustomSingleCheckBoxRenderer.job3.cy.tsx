// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/DataGrid/AgDataGridFields/CustomSingleCheckBoxRenderer/CustomSingleCheckBoxRenderer.cy.tsx"

import React, { useState } from 'react';
import { SetupTestsComponents } from '../../../../../../../../../cypress/utils/SetupTestsComponents';
import CustomSingleCheckboxRender from './CustomSingleCheckBoxRenderer';
import { RowNode } from 'ag-grid-community';

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
    const node = {} as RowNode;
    const props = {
      data: { row_editable: true },
      value: '1',
      setValue: () => {
        return undefined;
      },
      node,
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

  it('Should be able to change to checked/unchecked', () => {
    let val = '1';
    // let selected: RowNode[] = [];
    const node = {} as RowNode;
    const DummyFC: React.FC<React.PropsWithChildren<unknown>> = () => {
      const [value, setValue] = useState(val);
      const props = {
        data: { row_editable: true },
        value: value,
        setValue: (v: any) => {
          val = v;

          return setValue(v);
        },
        node,
      };

      // useEffect(() => {
      //   selected = selectedRows;
      // }, [selectedRows]);

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
        // expect(selected).to.include(node);
      })
      .should('be.checked');
    cy.react('CustomSingleCheckboxRender')
      .find('input[type="checkbox"]')
      .uncheck()
      .then(() => {
        // expect(selected).to.not.include(node);
      })
      .should('not.be.checked');
  });
});
