// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/ModalDynamic/components/TextAreaModalDynamic/TextAreaModalDynamic.job2.cy.tsx"

import React, { useRef } from 'react';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';

import { TextAreaModalDynamic } from './TextAreaModalDynamic';

describe('<TextAreaModalDynamic />', function () {
  it('should render without crash', function () {
    const DummFC: React.FC<any> = () => {
      const ref = useRef<HTMLDivElement>(null);

      return (
        <div ref={ref}>
          <SetupTestsComponents>
            <TextAreaModalDynamic modalRef={ref} />
          </SetupTestsComponents>
        </div>
      );
    };
    cy.mount(<DummFC />).waitReactApp();
    cy.react('TextAreaModalDynamic').should('exist');
    cy.react('TextAreaModalDynamic').find('textarea').should('exist');
  });

  it('should render default value', function () {
    const value = 'Hello world';
    const DummFY: React.FC<any> = () => {
      const ref = useRef<HTMLDivElement>(null);

      return (
        <div ref={ref}>
          <SetupTestsComponents>
            <TextAreaModalDynamic modalRef={ref} defaultValue={value} />
          </SetupTestsComponents>
        </div>
      );
    };
    cy.mount(<DummFY />).waitReactApp();
    cy.react('TextAreaModalDynamic')
      .find('textarea')
      .should('have.value', value);
  });

  it('should not be able to edit, but not disabled', function () {
    const value = 'Hello world';
    const DummFC: React.FC<any> = () => {
      const ref = useRef<HTMLDivElement>(null);

      return (
        <div ref={ref}>
          <SetupTestsComponents>
            <TextAreaModalDynamic
              modalRef={ref}
              defaultValue={value}
              keepContentFixed
            />
          </SetupTestsComponents>
        </div>
      );
    };
    cy.mount(<DummFC />).waitReactApp();
    cy.react('TextAreaModalDynamic')
      .find('textarea')
      .should('not.be.disabled')
      .focus();
    cy.realType('new string value').clickOutside();
    cy.react('TextAreaModalDynamic')
      .find('textarea')
      .should('have.value', value);
  });
});
