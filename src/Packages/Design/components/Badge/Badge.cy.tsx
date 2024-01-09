// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Packages/Design/components/Badge/Badge.cy.tsx"

import React from 'react';

import { Badge } from './Badge';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';

describe('<Badge />', () => {
  it('Should render', () => {
    cy.mount(
      <SetupTestsComponents>
        <Badge />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Badge').should('exist');
  });

  it('Should render the text children', () => {
    cy.mount(
      <SetupTestsComponents>
        <Badge>Hello</Badge>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Badge').should('contain.text', 'Hello');
  });

  it('Should render the React.ReactNode children', () => {
    const MyFC = () => <div>Hello</div>;
    cy.mount(
      <SetupTestsComponents>
        <Badge>
          <MyFC />
        </Badge>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Badge').react('MyFC').should('contain.text', 'Hello');
  });

  it('Should render the content prop', () => {
    cy.mount(
      <SetupTestsComponents>
        <Badge content={1}>aaa</Badge>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Badge')
      .find('span')
      .should('be.visible')
      .should('contain.text', 1);
  });

  it('Should render the props content + background-color applied', () => {
    const bgc = 'rgb(0, 0, 0)';
    cy.mount(
      <SetupTestsComponents>
        <Badge content={1} bgc={bgc}>
          Hello
        </Badge>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Badge')
      .find('span')
      .should('be.visible')
      .should('contain.text', 1);
    cy.react('Badge').find('span').should('have.css', 'background-color', bgc);
  });

  it('Should render the props content + color applied', () => {
    const color = 'rgb(255, 0, 0)';
    cy.mount(
      <SetupTestsComponents>
        <Badge content={1} color={color}>
          Hello
        </Badge>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Badge')
      .find('span')
      .should('be.visible')
      .should('contain.text', 1);
    cy.react('Badge').find('span').should('have.css', 'color', color);
  });

  it('Should render the props content + font-family applied', () => {
    const fontFamily = '"Comic Sans MS", sans-serif';
    cy.mount(
      <SetupTestsComponents>
        <Badge content={1} fontFamily={fontFamily}>
          Hello
        </Badge>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Badge')
      .find('span')
      .should('be.visible')
      .should('contain.text', 1);
    cy.react('Badge')
      .find('span')
      .should('have.css', 'font-family', fontFamily);
  });

  it('Should render the props content + bgc + color + font-family applied', () => {
    const content = 1;
    const bgc = 'rgb(33, 0, 0)';
    const color = 'rgb(255, 0, 0)';
    const fontFamily = '"Comic Sans MS", sans-serif';
    cy.mount(
      <SetupTestsComponents>
        <Badge
          content={content}
          bgc={bgc}
          color={color}
          fontFamily={fontFamily}
        >
          Hello
        </Badge>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Badge')
      .find('span')
      .should('be.visible')
      .should('contain.text', content);
    cy.react('Badge').find('span').should('have.css', 'background-color', bgc);
    cy.react('Badge').find('span').should('have.css', 'color', color);
    cy.react('Badge')
      .find('span')
      .should('have.css', 'font-family', fontFamily);
  });
});
