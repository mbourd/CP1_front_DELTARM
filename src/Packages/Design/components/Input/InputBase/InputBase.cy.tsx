// @ts-check

import React from 'react';
import { ThemeProvider } from 'styled-components/macro';

import 'cypress-react-selector';
import { mount } from 'cypress/react18';
import { BPITheme, BPIGlobalStyle } from '../../../../Design';
import { InputBase } from './InputBase';

describe('<InputBase />', () => {
  it('Should render', () => {
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <InputBase />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('InputBase').should('exist');
  });

  it('Border radius should be 0px', () => {
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <InputBase bdr="0px" />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('InputBase')
      .get(`label`)
      .should('have.css', 'border-radius', '0px');
  });

  it('Class name should contain "success"', () => {
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <InputBase status={'success'} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('InputBase')
      .get(`label`)
      .should('have.attr', 'class')
      .and('match', new RegExp('_Input-success', 'gu'));
  });

  it('Should render $ from icon props', () => {
    const icon = { currency_symbol: '$' };
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <InputBase icon={icon} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
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
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <InputBase icon={icon} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('InputBase').get(`label`).get('div').nthNode(0).contains(icon);
  });

  it('Should render a ReactNode from icon props', () => {
    const DummyFC: React.FC = () => {
      return <>hello</>;
    };

    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <InputBase icon={<DummyFC />} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('InputBase').get('label').find('div').eq(0).react('DummyFC');
  });

  it('Input should have a name', () => {
    const name = 'anyName';
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <InputBase name={name} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('InputBase').find(`input`).should('have.attr', 'name', name);
  });

  it('Input should have a default value', () => {
    const name = 'anyName';
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <InputBase defaultValue={name} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('InputBase').find(`input`).should('have.value', name);
  });

  it('Input should be disabled', () => {
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <InputBase disabled={true} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('InputBase').find(`input`).should('have.attr', 'disabled');
  });

  it('Input should not be disabled', () => {
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <InputBase disabled={false} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('InputBase').find(`input`).should('not.have.attr', 'disabled');
  });

  it('Input should have ID', () => {
    const id = 'anyID';
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <InputBase id={id} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('InputBase').find(`input`).should('have.attr', 'id', id);
  });

  it('Input should have placeholder', () => {
    const placeholder = 'any placeholder';
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <InputBase placeholder={placeholder} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('InputBase')
      .find(`input`)
      .should('have.attr', 'placeholder', placeholder);
  });

  it('Input should have required', () => {
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <InputBase required={true} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('InputBase').find(`input`).should('have.attr', 'required');
  });

  it('Input should not have required', () => {
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <InputBase required={false} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('InputBase').find(`input`).should('not.have.attr', 'required');
  });

  it('Input should be type email', () => {
    const type = 'email';
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <InputBase type={type} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('InputBase').find(`input`).should('have.attr', 'type', type);
  });

  it('Should have background color', () => {
    const bgc = 'rgb(255, 0, 0)';
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <InputBase bgc={bgc} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('InputBase')
      .get(`label`)
      .should('have.css', 'background-color', bgc);
  });

  it('Should render unit', () => {
    const unit = 'm';
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <InputBase unit={unit} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('InputBase').find(`span`).contains(unit);
  });

  it('Input should autofocus', () => {
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <InputBase autoFocus={true} />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('InputBase')
      .find(`input`)
      // .then(($el) => {
      //   cy.wrap($el.parent()[0])
      //     .should('have.attr', 'class')
      //     .and('match', new RegExp('Mui-focused', 'gu'));
      // })
      .should('be.focused');
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
    mount(
      <div id="root">
        <ThemeProvider theme={_BPITheme}>
          <BPIGlobalStyle />
          <InputBase
            // @ts-ignore
            color={'text'}
          />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('InputBase').get(`label`).should('have.css', 'color', textColor);
  });
});
