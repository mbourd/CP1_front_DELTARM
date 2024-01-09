// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Packages/Design/components/Input/InputBase/InputBase.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../cypress/utils/SetupTestsComponents';

import { BPITheme } from '../../../../Design';
import { InputBase } from './InputBase';

describe('<InputBase />', () => {
  it('Should render', () => {
    cy.mount(
      <SetupTestsComponents>
        <InputBase />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('InputBase').should('exist');
  });

  it('Border radius should be 0px', () => {
    cy.mount(
      <SetupTestsComponents>
        <InputBase bdr="0px" />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('InputBase')
      .get(`label`)
      .should('have.css', 'border-radius', '0px');
  });

  it('Class name should contain "success"', () => {
    cy.mount(
      <SetupTestsComponents>
        <InputBase status={'success'} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('InputBase')
      .get(`label`)
      .should('have.attr', 'class')
      .and('match', new RegExp('_Input-success', 'gu'));
  });

  it('Should render $ from icon props', () => {
    const icon = { currency_symbol: '$' };
    cy.mount(
      <SetupTestsComponents>
        <InputBase icon={icon} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('InputBase')
      .get(`label`)
      .get('div')
      .nthNode(0)
      .get('p')
      .nthNode(0)
      .contains(icon.currency_symbol);
  });

  it('Should render a text from icon props', () => {
    const icon = 'any text';
    cy.mount(
      <SetupTestsComponents>
        <InputBase icon={icon} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('InputBase').get(`label`).get('div').nthNode(0).contains(icon);
  });

  it('Should render a ReactNode from icon props', () => {
    const DummyFC: React.FC = () => {
      return <>hello</>;
    };

    cy.mount(
      <SetupTestsComponents>
        <InputBase icon={<DummyFC />} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('InputBase').get('label').find('div').eq(0).react('DummyFC');
  });

  it('Input should have a name', () => {
    const name = 'anyName';

    cy.mount(
      <SetupTestsComponents>
        <InputBase name={name} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('InputBase').find(`input`).should('have.attr', 'name', name);
  });

  it('Input should have a default value', () => {
    const name = 'anyName';

    cy.mount(
      <SetupTestsComponents>
        <InputBase defaultValue={name} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('InputBase').find(`input`).should('have.value', name);
  });

  it('Input should be disabled', () => {
    cy.mount(
      <SetupTestsComponents>
        <InputBase disabled={true} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('InputBase').find(`input`).should('have.attr', 'disabled');
    cy.react('InputBase').find(`input`).should('be.disabled');
  });

  it('Input should not be disabled', () => {
    cy.mount(
      <SetupTestsComponents>
        <InputBase disabled={false} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('InputBase').find(`input`).should('not.have.attr', 'disabled');
    cy.react('InputBase').find(`input`).should('not.be.disabled');
  });

  it('Input should have ID', () => {
    const id = 'anyID';
    cy.mount(
      <SetupTestsComponents>
        <InputBase id={id} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('InputBase').find(`input`).should('have.attr', 'id', id);
  });

  it('Input should have placeholder', () => {
    const placeholder = 'any placeholder';
    cy.mount(
      <SetupTestsComponents>
        <InputBase placeholder={placeholder} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('InputBase')
      .find(`input`)
      .should('have.attr', 'placeholder', placeholder);
  });

  it('Input should have required', () => {
    cy.mount(
      <SetupTestsComponents>
        <InputBase required={true} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('InputBase').find(`input`).should('have.attr', 'required');
  });

  it('Input should not have required', () => {
    cy.mount(
      <SetupTestsComponents>
        <InputBase required={false} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('InputBase').find(`input`).should('not.have.attr', 'required');
  });

  it('Input should be type email', () => {
    const type = 'email';
    cy.mount(
      <SetupTestsComponents>
        <InputBase type={type} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('InputBase').find(`input`).should('have.attr', 'type', type);
  });

  it('Should have background color', () => {
    const bgc = 'rgb(255, 0, 0)';
    cy.mount(
      <SetupTestsComponents>
        <InputBase bgc={bgc} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('InputBase')
      .get(`label`)
      .should('have.css', 'background-color', bgc);
  });

  it('Should render unit', () => {
    const unit = 'm';
    cy.mount(
      <SetupTestsComponents>
        <InputBase unit={unit} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('InputBase').find(`span`).contains(unit);
  });

  it('Input should autofocus', () => {
    cy.mount(
      <SetupTestsComponents>
        <InputBase autoFocus={true} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.wait(255).then(() => {
      cy.react('InputBase')
        .find(`input`)
        // .then(($el) => {
        //   cy.wrap($el.parent()[0])
        //     .should('have.attr', 'class')
        //     .and('match', new RegExp('Mui-focused', 'gu'));
        // })
        .should('be.focused');
    });
  });

  it('Input should autofocus', () => {
    const textColor = 'rgb(0, 128, 0)';
    const _BPITheme = {
      ...BPITheme,
      color: {
        ...BPITheme.color,
        text: {
          ...BPITheme.color.text,
          main: textColor,
        },
      },
    };
    cy.mount(
      <SetupTestsComponents theme={_BPITheme}>
        <InputBase
          // @ts-ignore
          color={'text'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('InputBase').get(`label`).should('have.css', 'color', textColor);
  });
});
