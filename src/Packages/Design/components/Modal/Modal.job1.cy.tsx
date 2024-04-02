// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Packages/Design/components/Modal/Modal.job1.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';

import { Modal } from './Modal';

describe('<Modal />', () => {
  it('Should render', () => {
    cy.mount(
      <SetupTestsComponents>
        <Modal open={true} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Modal').should('exist');
  });
  it('Should not render', () => {
    cy.mount(
      <SetupTestsComponents>
        <Modal open={false} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Modal', { options: { timeout: 1 } }).should('not.exist');
  });

  it('Should render text children', () => {
    const children = 'hello';
    cy.mount(
      <SetupTestsComponents>
        <Modal open={true}>{children}</Modal>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Modal').find('._ModalContent').contains(children);
  });
  it('Should render React.ReactNode children', () => {
    const DummyFC: React.FC<React.PropsWithChildren<unknown>> = () => {
      return <>hello</>;
    };
    cy.mount(
      <SetupTestsComponents>
        <Modal open={true}>
          <DummyFC />
        </Modal>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Modal').find('._ModalContent').react('DummyFC');
    cy.react('Modal').find('._ModalContent').contains('hello');
  });

  it('Should render the X logo', () => {
    cy.mount(
      <SetupTestsComponents>
        <Modal open={true} closable={true} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Modal').find('._ModalTitle').find(`._ModalClose`).find('svg');
  });
  it('Should not render the X logo', () => {
    cy.mount(
      <SetupTestsComponents>
        <Modal open={true} closable={false} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Modal')
      .find('._ModalTitle')
      .find(`._ModalClose`)
      .should('not.exist');
  });

  it('Should render React.ReactNode header', () => {
    const DummyFC: React.FC<React.PropsWithChildren<unknown>> = () => {
      return <>hello</>;
    };
    cy.mount(
      <SetupTestsComponents>
        <Modal open={true} header={<DummyFC />} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Modal').react('DummyFC');
  });

  it('Should render React.ReactNode footer', () => {
    const DummyFC: React.FC<React.PropsWithChildren<unknown>> = () => {
      return <>hello</>;
    };
    cy.mount(
      <SetupTestsComponents>
        <Modal open={true} footer={<DummyFC />} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Modal').react('DummyFC');
  });
});
