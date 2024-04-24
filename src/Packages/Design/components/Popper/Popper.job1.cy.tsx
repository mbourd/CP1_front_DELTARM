// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Packages/Design/components/Popper/Popper.job1.cy.tsx"

import React, { useRef, useState } from 'react';

import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';
import { Popper } from './Popper';

describe('<Popper />', () => {
  it('Should render', () => {
    const DummyFC: React.FC<React.PropsWithChildren<unknown>> = () => {
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

    cy.mount(
      <SetupTestsComponents>
        <DummyFC />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('DummyFC').get('span').realClick();
    cy.react('Popper').should('exist');
  });

  it('Should render children as text', () => {
    const children = 'Popper Body';
    const DummyFC: React.FC<React.PropsWithChildren<unknown>> = () => {
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

    cy.mount(
      <SetupTestsComponents>
        <DummyFC />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('DummyFC').get('span').realClick();
    cy.react('Popper').contains(children);
  });
  it('Should render children as React.FC', () => {
    const content = 'Dummy Children';
    const Children: React.FC<React.PropsWithChildren<unknown>> = () => {
      return <>{content}</>;
    };
    const DummyFC: React.FC<React.PropsWithChildren<unknown>> = () => {
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

    cy.mount(
      <SetupTestsComponents>
        <DummyFC />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('DummyFC').get('span').realClick();
    cy.react('Popper').contains(content);
  });

  it('Should be visible and not visible on click away', () => {
    const content = 'Dummy Children';
    const Children: React.FC<React.PropsWithChildren<unknown>> = () => {
      return <>{content}</>;
    };
    const DummyFC: React.FC<React.PropsWithChildren<unknown>> = () => {
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

    cy.mount(
      <SetupTestsComponents>
        <DummyFC />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('DummyFC').get('span').realClick();
    cy.react('Popper').should('be.visible');
    cy.react('Popper').clickOutside();
    cy.react('Popper', { options: { timeout: 1 } }).should('not.exist');
  });
});
