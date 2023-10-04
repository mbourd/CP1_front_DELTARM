// @ts-check

import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components/macro';

import 'cypress-react-selector';
import { mount } from 'cypress/react18';

import {
  BPITheme,
  BPIGlobalStyle,
} from '../../../../../../../../Packages/Design';
import CustomSingleCheckboxRender from './CustomSingleCheckBoxRenderer';

describe('<CustomSingleCheckboxRender />', () => {
  it('Should render', () => {
    const props = {
      data: { row_editable: true },
      value: '1',
      setValue: (v: any) => {
        return undefined;
      },
    };

    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <CustomSingleCheckboxRender props={props} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(10000, '#root');
    cy.react('CustomSingleCheckboxRender').should('exist');
  });
  it('Should not render', () => {
    const props = {
      data: { row_editable: false },
      value: '1',
      setValue: (v: any) => {
        return undefined;
      },
    };

    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <CustomSingleCheckboxRender props={props} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(10000, '#root');
    cy.react('CustomSingleCheckboxRender', { options: { timeout: 1 } }).should(
      'not.exist',
    );
  });

  it('Should be checked', () => {
    const props = {
      data: { row_editable: true },
      value: '1',
      setValue: (v: any) => {
        return undefined;
      },
    };

    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <CustomSingleCheckboxRender props={props} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(10000, '#root');
    cy.react('CustomSingleCheckboxRender')
      .find('input[type="checkbox"]')
      .should('have.attr', 'checked');
  });
  it('Should not be checked', () => {
    const props = {
      data: { row_editable: true },
      value: '0',
      setValue: (v: any) => {
        return undefined;
      },
    };

    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <CustomSingleCheckboxRender props={props} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(10000, '#root');
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
        <div id="root">
          <ThemeProvider theme={BPITheme}>
            <BPIGlobalStyle />
            <CustomSingleCheckboxRender props={props} />
          </ThemeProvider>
        </div>
      );
    };

    mount(<DummyFC />);
    cy.waitForReact(10000, '#root');
    cy.react('CustomSingleCheckboxRender')
      .get('input[type="checkbox"]')
      .check()
      .then(($el) => {
        expect(val).to.equal('1');
      })
      .should('be.checked');
    cy.react('CustomSingleCheckboxRender')
      .get('input[type="checkbox"]')
      .uncheck()
      .then(($el) => {
        expect(val).to.equal('0');
      })
      .should('not.be.checked');
  });
});
