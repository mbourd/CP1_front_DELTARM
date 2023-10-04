// @ts-check

import React from 'react';
import { ThemeProvider } from 'styled-components/macro';

import 'cypress-react-selector';
import { mount } from 'cypress/react18';
import { BPITheme, BPIGlobalStyle } from '../..';
import { Radio } from './Radio';

describe('<Radio />', () => {
  it('Should render', () => {
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <Radio />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('Radio').should('exist');
  });

  it('Should be type radio', () => {
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <Radio type="radio" />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('Radio')
      .find('input._CheckboxRadioInput')
      .should('have.attr', 'type', 'radio');
  });
  it('Should be type checkbox', () => {
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <Radio type="checkbox" />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('Radio')
      .find('input._CheckboxRadioInput')
      .should('have.attr', 'type', 'checkbox');
  });

  it('Should have name = anyName', () => {
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <Radio name="anyName" />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('Radio')
      .find('input._CheckboxRadioInput')
      .should('have.attr', 'name', 'anyName');
  });
  it('Should have value = anyName', () => {
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <Radio value="anyName" />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('Radio')
      .find('input._CheckboxRadioInput')
      .should('have.attr', 'value', 'anyName');
  });

  it('Should be checked', () => {
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <Radio checked={true} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('Radio').find('input._CheckboxRadioInput:checked');
  });

  it('Checked color should be applied', () => {
    const color = 'rgb(255, 0, 0)';
    const _BPITheme = {
      ...BPITheme,
      color: {
        ...BPITheme.color,
        primary: { ...BPITheme.color.primary, main: color },
      },
    };

    mount(
      <div id="root">
        <ThemeProvider theme={_BPITheme}>
          <BPIGlobalStyle />
          <Radio checked={true} checkedColor={'primary'} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('Radio')
      .find('input._CheckboxRadioInput:checked ~ ._CheckboxRadioCheckmark')
      .should('have.css', 'border-color', color);
    cy.react('Radio')
      .find('input._CheckboxRadioInput:checked ~ ._CheckboxRadioCheckmark')
      .then(($els) => {
        // get Window reference from element
        const win = $els[0].ownerDocument.defaultView!;
        // use getComputedStyle to read the pseudo selector
        const after = win.getComputedStyle($els[0], 'after');
        // read the value of the `content` CSS property
        const contentValue = after.getPropertyValue('background-color');
        // the returned value will have double quotes around it, but this is correct
        expect(contentValue).to.eq(color);
      });
  });

  it('Should render label', () => {
    const label = 'Hello';
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <Radio label={label} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('Radio').contains(label);
  });

  it('Should render children', () => {
    const DummyFC: React.FC = () => {
      return <div>Hello</div>;
    };
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <Radio>
            <DummyFC />
          </Radio>
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('Radio').react('DummyFC').should('exist');
  });

  it('Text color should be applied', () => {
    const color = 'rgb(255, 0, 0)';
    const _BPITheme = {
      ...BPITheme,
      color: {
        ...BPITheme.color,
        text: { ...BPITheme.color.text, main: color },
      },
    };

    mount(
      <div id="root">
        <ThemeProvider theme={_BPITheme}>
          <BPIGlobalStyle />
          <Radio color="text" />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('Radio')
      .should('have.css', 'color', color)
      .should('have.css', 'border-color', color);
  });
});
