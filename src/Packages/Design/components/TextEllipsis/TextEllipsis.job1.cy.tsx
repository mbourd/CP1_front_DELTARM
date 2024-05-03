// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Packages/Design/components/TextEllipsis/TextEllipsis.cy.tsx"

import React from 'react';

import { TextEllipsis } from './TextEllipsis';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';

describe('<TextEllipsis />', () => {
  it('Should render correctly', () => {
    cy.mount(
      <SetupTestsComponents>
        <TextEllipsis />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('TextEllipsis').should('exist');
  });
  it('Sould render text as children and truncated', function () {
    cy.viewport(500, 500);
    const txt =
      'qsdjqsldklqsdlqshdqsd qsdiohqsdqkls ndsqhdqshdo ds uohqsduoqsd hqsd qhsodqsd qsdqsdqklsdn dqsdklqsdhklqsdhlqshdlqs dlqshdqshdl hdshqsdlkq hsldhqsldhlqsdhqsdpohdjklqshdioqsgbdokj dqsidhoiqgsdbqdjkqbsdjbqs dqsdàpo';
    cy.mount(
      <SetupTestsComponents>
        <TextEllipsis>{txt}</TextEllipsis>
        <hr />
        <span
          data-testid="fakeSpan"
          style={{
            display: 'inherit',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            width: '100%',
          }}
        >
          {txt}
        </span>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('TextEllipsis').then(($span) => {
      const offsetWidth = $span[0].offsetWidth;
      const scrollWidth = $span[0].scrollWidth;
      const isEllipsisActive =
        offsetWidth < scrollWidth &&
        $span[0].offsetHeight ===
          Cypress.$('[data-testId="fakeSpan"]')[0].offsetHeight;
      expect(isEllipsisActive).to.eq(true);
    });
  });
});
