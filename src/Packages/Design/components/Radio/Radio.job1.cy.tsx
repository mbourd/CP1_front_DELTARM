// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Packages/Design/components/Radio/Radio.cy.tsx"

import React from 'react';

import { BPITheme } from '../..';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';
import { Radio } from './Radio';

describe('<Radio />', () => {
  it('Should render', () => {
    cy.mount(
      <SetupTestsComponents>
        <Radio />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Radio').should('exist');
  });

  it('Should be type radio', () => {
    cy.mount(
      <SetupTestsComponents>
        <Radio type="radio" />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Radio')
      .find('input._CheckboxRadioInput')
      .should('have.attr', 'type', 'radio');
  });
  it('Should be type checkbox', () => {
    cy.mount(
      <SetupTestsComponents>
        <Radio type="checkbox" />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Radio')
      .find('input._CheckboxRadioInput')
      .should('have.attr', 'type', 'checkbox');
  });

  it('Should have name = anyName', () => {
    cy.mount(
      <SetupTestsComponents>
        <Radio name="anyName" />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Radio')
      .find('input._CheckboxRadioInput')
      .should('have.attr', 'name', 'anyName');
  });
  it('Should have value = anyName', () => {
    cy.mount(
      <SetupTestsComponents>
        <Radio value="anyName" />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Radio')
      .find('input._CheckboxRadioInput')
      .should('have.attr', 'value', 'anyName');
  });

  it('Should be checked', () => {
    cy.mount(
      <SetupTestsComponents>
        <Radio checked={true} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
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

    cy.mount(
      <SetupTestsComponents theme={_BPITheme}>
        <Radio checked={true} checkedColor={'primary'} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Radio')
      .find('input._CheckboxRadioInput:checked ~ ._CheckboxRadioCheckmark')
      .should('have.css', 'border-color', color);
    cy.react('Radio')
      .find('input._CheckboxRadioInput:checked ~ ._CheckboxRadioCheckmark')
      .then(($els) => {
        // get Window reference from element
        const win = $els[0].ownerDocument.defaultView;
        // use getComputedStyle to read the pseudo selector
        const after = win?.getComputedStyle($els[0], 'after');
        // read the value of the `content` CSS property
        const contentValue = after?.getPropertyValue('background-color');
        // the returned value will have double quotes around it, but this is correct
        expect(contentValue).to.eq(color);
      });
  });

  it('Should render label', () => {
    const label = 'Hello';
    cy.mount(
      <SetupTestsComponents>
        <Radio label={label} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Radio').contains(label);
  });

  it('Should render children', () => {
    const DummyFC: React.FC<React.PropsWithChildren<unknown>> = () => {
      return <div>Hello</div>;
    };
    cy.mount(
      <SetupTestsComponents>
        <Radio>
          <DummyFC />
        </Radio>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
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

    cy.mount(
      <SetupTestsComponents theme={_BPITheme}>
        <Radio color="text" />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Radio')
      .should('have.css', 'color', color)
      .should('have.css', 'border-color', color);
  });
});
