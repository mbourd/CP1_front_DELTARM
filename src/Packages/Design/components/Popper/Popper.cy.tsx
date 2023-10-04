// @ts-check
/// <reference types="cypress" />

import '../../../../../cypress/support/commands';

import React, { useRef, useState } from 'react';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';

import 'cypress-real-events';
import { mount } from 'cypress/react18';

import { Popper } from './Popper';

describe('<Popper />', () => {
  it('Should render', () => {
    const DummyFC: React.FC = () => {
      const ref = useRef<Element | null>(null);
      const [anchorEl, setAnchorEl] = useState<HTMLSpanElement | null>(null);

      return (
        <div>
          <span
            onClick={function (e) {
              ref.current = null;
              setAnchorEl(e.currentTarget);
            }}
          >
            dummy span
          </span>
          <Popper
            element={ref.current || anchorEl}
            onClickAway={() => setAnchorEl(null)}
          >
            Popper Body
          </Popper>
        </div>
      );
    };

    mount(
      <SetupTestsComponents>
        <DummyFC />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('DummyFC').get('span').realClick();
    cy.wait(1);
    cy.react('Popper').should('exist');
  });

  it('Should render children as text', () => {
    const children = 'Popper Body';
    const DummyFC: React.FC = () => {
      const ref = useRef<Element | null>(null);
      const [anchorEl, setAnchorEl] = useState<HTMLSpanElement | null>(null);

      return (
        <div>
          <span
            onClick={function (e) {
              ref.current = null;
              setAnchorEl(e.currentTarget);
            }}
          >
            dummy span
          </span>
          <Popper
            element={ref.current || anchorEl}
            onClickAway={() => setAnchorEl(null)}
          >
            {children}
          </Popper>
        </div>
      );
    };

    mount(
      <SetupTestsComponents>
        <DummyFC />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('DummyFC').get('span').realClick();
    cy.wait(1);
    cy.react('Popper').contains(children);
  });
  it('Should render children as React.FC', () => {
    const content = 'Dummy Children';
    const Children: React.FC = () => {
      return <>{content}</>;
    };
    const DummyFC: React.FC = () => {
      const ref = useRef<Element | null>(null);
      const [anchorEl, setAnchorEl] = useState<HTMLSpanElement | null>(null);

      return (
        <div>
          <span
            onClick={function (e) {
              ref.current = null;
              setAnchorEl(e.currentTarget);
            }}
          >
            dummy span
          </span>
          <Popper
            element={ref.current || anchorEl}
            onClickAway={() => setAnchorEl(null)}
          >
            <Children />
          </Popper>
        </div>
      );
    };

    mount(
      <SetupTestsComponents>
        <DummyFC />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('DummyFC').get('span').realClick();
    cy.wait(1);
    cy.react('Popper').contains(content);
  });

  it('Should be visible and not visible on click away', () => {
    const content = 'Dummy Children';
    const Children: React.FC = () => {
      return <>{content}</>;
    };
    const DummyFC: React.FC = () => {
      const ref = useRef<Element | null>(null);
      const [anchorEl, setAnchorEl] = useState<HTMLSpanElement | null>(null);

      return (
        <div>
          <span
            onClick={function (e) {
              ref.current = null;
              setAnchorEl(e.currentTarget);
            }}
          >
            dummy span
          </span>
          <Popper
            element={ref.current || anchorEl}
            onClickAway={() => setAnchorEl(null)}
          >
            <Children />
          </Popper>
        </div>
      );
    };

    mount(
      <SetupTestsComponents>
        <DummyFC />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('DummyFC').get('span').realClick();
    cy.wait(1);
    cy.react('Popper').should('be.visible');
    cy.react('Popper').clickOutside();
    cy.wait(1);
    cy.react('Popper', { options: { timeout: 1 } }).should('not.exist');
  });
});
