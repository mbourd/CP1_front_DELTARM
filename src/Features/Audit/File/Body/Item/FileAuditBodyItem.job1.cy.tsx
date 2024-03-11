// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Audit/File/Body/Item/FileAuditBodyItem.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../cypress/utils/SetupTestsComponents';

import { FileAuditBodyItem } from './FileAuditBodyItem';
import { IFileAudit } from '../../../types';

describe('<FileAuditBodyItem />', function () {
  it('should render', function () {
    const audit: IFileAudit = {
      id: 0,
      event_id: 0,
      lib: '',
      params: {},
      date: '',
    };
    cy.mount(
      <SetupTestsComponents>
        <FileAuditBodyItem audit={audit} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('FileAuditBodyItem').should('exist');
  });

  it('should render audit.lib & audit.date', function () {
    const audit: IFileAudit = {
      id: 0,
      event_id: 0,
      lib: 'audit lib',
      params: {},
      date: '01/01/2023',
    };
    cy.mount(
      <SetupTestsComponents>
        <FileAuditBodyItem audit={audit} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('FileAuditBodyItem')
      .find('.author')
      .should('contain.text', audit.lib + ' - ' + audit.date);
  });

  it('should render audit.params', function () {
    const audit: IFileAudit = {
      id: 0,
      event_id: 0,
      lib: '',
      params: { key1: 'hello', key2: 'world' },
      date: '',
    };
    cy.mount(
      <SetupTestsComponents>
        <FileAuditBodyItem audit={audit} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('FileAuditBodyItem').should('contain.text', 'key1 : hello');
    cy.react('FileAuditBodyItem').should('contain.text', 'key2 : world');
  });
});
