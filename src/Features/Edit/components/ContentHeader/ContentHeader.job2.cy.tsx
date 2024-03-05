// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/ContentHeader/ContentHeader.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';

import { EditValidationContext } from '../../../../Features';
import { ContentHeader } from './ContentHeader';
import { IData } from '../../types';
import { PreWrapStyled } from '../../../../Shared/components';

describe('<ContentHeader />', function () {
  it('should render', function () {
    cy.mount(
      <SetupTestsComponents
        appContextValue={{
          ForCompTests: {
            FileAudit: { canSend: false },
            FileComment: { canSend: false },
          },
        }}
      >
        <ContentHeader />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('ContentHeader').should('exist');
  });

  it('should render buttons if data.actions_contr_perm', function () {
    const btns = Array.from({ length: 3 }).map((v, i) => {
      return {
        bg_color: '#aaeeff',
        font_color: '#ddaacc',
        btn_lib: 'button' + i,
      };
    });
    const data = {
      actions_contr_perm: btns,
    } as IData;
    cy.mount(
      <SetupTestsComponents
        appContextValue={{
          ForCompTests: {
            FileAudit: { canSend: false },
            FileComment: { canSend: false },
          },
        }}
      >
        <EditValidationContext.Provider value={{ data: data, fileId: '' }}>
          <ContentHeader />
        </EditValidationContext.Provider>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.wrap(btns).each(
      (btn: { bg_color: string; font_color: string; btn_lib: string }) => {
        cy.react('ContentHeader').contains(btn.btn_lib).should('exist');
      },
    );
  });

  it('should render <FileComment />', function () {
    cy.mount(
      <SetupTestsComponents
        appContextValue={{
          ForCompTests: {
            FileAudit: { canSend: false },
            FileComment: { canSend: false },
          },
        }}
      >
        <ContentHeader />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('ContentHeader').find('.comment-icon').should('exist');
  });

  it('should render <FileAudit />', function () {
    const data = {} as IData;
    const audit1 = {
      id: 1,
      event_id: 1,
      event_lib: 'audit_1',
      params: {},
      date: '',
      event_ts: new Date().toString(),
    };

    cy.intercept(
      {
        url: '/file/audit*',
        method: 'GET',
      },
      (req) => {
        req.on('response', (resp) => {
          resp.send(200, {
            data: {
              is_audit: true,
              audit: [audit1],
            },
          });
        });
      },
    ).as('fileAuditRequest');

    cy.mount(
      <SetupTestsComponents
        appContextValue={{
          ForCompTests: {
            FileComment: { canSend: false },
          },
        }}
      >
        <EditValidationContext.Provider value={{ data: data, fileId: '' }}>
          <ContentHeader />
        </EditValidationContext.Provider>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('ContentHeader').find('.audit-icon').should('exist');
  });

  it('should not render <FileAudit />', function () {
    const data = {} as IData;
    const audit1 = {
      id: 1,
      event_id: 1,
      event_lib: 'audit_1',
      params: {},
      date: '',
      event_ts: new Date().getTime(),
    };

    cy.intercept(
      {
        url: '/file/audit*',
        method: 'GET',
      },
      (req) => {
        req.on('response', (resp) => {
          resp.send(200, {
            data: {
              is_audit: false,
              audit: [audit1],
            },
          });
        });
      },
    ).as('fileAuditRequest');

    cy.mount(
      <SetupTestsComponents
        appContextValue={{
          ForCompTests: {
            FileComment: { canSend: false },
          },
        }}
      >
        <EditValidationContext.Provider value={{ data: data, fileId: '' }}>
          <ContentHeader />
        </EditValidationContext.Provider>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('ContentHeader').find('.audit-icon').should('not.exist');
  });
  it('should not render <FileAudit />', function () {
    const data = {} as IData;
    const audit1 = {
      id: 1,
      event_id: 1,
      event_lib: 'audit_1',
      params: {},
      date: '',
      event_ts: new Date().getTime(),
    };

    cy.intercept(
      {
        url: '/file/audit*',
        method: 'GET',
      },
      (req) => {
        req.on('response', (resp) => {
          resp.send(200, {
            data: {
              // is_audit: false,
              audit: [audit1],
            },
          });
        });
      },
    ).as('fileAuditRequest');

    cy.mount(
      <SetupTestsComponents
        appContextValue={{
          ForCompTests: {
            FileComment: { canSend: false },
          },
        }}
      >
        <EditValidationContext.Provider value={{ data: data, fileId: '' }}>
          <ContentHeader />
        </EditValidationContext.Provider>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('ContentHeader').find('.audit-icon').should('not.exist');
  });

  it('should render sectionHeader alert', function () {
    const msg = 'hello world';
    const data = {
      sectionHeader: { type: 'alert', message: msg },
    } as IData;
    cy.mount(
      <SetupTestsComponents
        appContextValue={{
          ForCompTests: {
            FileAudit: { canSend: false },
            FileComment: { canSend: false },
          },
        }}
      >
        <EditValidationContext.Provider value={{ data: data, fileId: '' }}>
          <ContentHeader />
        </EditValidationContext.Provider>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.get(`.${PreWrapStyled.styledComponentId}`).should('have.text', msg);
  });
  it('should render sectionHeader info', function () {
    const msg = 'hello world';
    const data = {
      sectionHeader: { type: 'info', message: msg },
    } as IData;
    cy.mount(
      <SetupTestsComponents
        appContextValue={{
          ForCompTests: {
            FileAudit: { canSend: false },
            FileComment: { canSend: false },
          },
        }}
      >
        <EditValidationContext.Provider value={{ data: data, fileId: '' }}>
          <ContentHeader />
        </EditValidationContext.Provider>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.get(`.${PreWrapStyled.styledComponentId}`).should('have.text', msg);
  });
});
