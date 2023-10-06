// @ts-check
/// <reference types="cypress" />

import '../../../../../cypress/support/commands';

import React from 'react';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';

import 'cypress-react-selector';
import { mount } from 'cypress/react18';
import {
  _requestJWT,
  _getEnv,
  _escapeForRegExp,
} from '../../../../../cypress/utils';

import { IconsContainerRender } from './IconsContainerRender';
import { translation } from '../../../../Services';

describe('<IconsContainer />', () => {
  let defaultData;
  const getResourceTrans = (lng: string, ns: string, key: string): string => {
    return _escapeForRegExp(translation.getResource(lng, ns)?.[key]);
  };

  before('Should fetch JWT from CP1 back', () => {
    _requestJWT();
  });

  before(() => {
    cy.request({
      method: 'GET',
      url: `${_getEnv('url_cp1_back')}/interface/nav_btn`,
      headers: {
        'Content-type': 'application/json',
        Authorization: _getEnv('JWT'),
      },
    })
      .its('body')
      .then((body: { data: Record<any, any> }) => {
        defaultData = body.data.interface_btn;
      });
  });

  it('Should render', () => {
    mount(
      <SetupTestsComponents>
        <IconsContainerRender interfaceButtons={defaultData} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp('#root');
  });

  it('Should have title tooltip for AIV', () => {
    const _data = {
      ...defaultData,
      aiv: { ...defaultData.aiv, visible: true },
      faq: { ...defaultData.faq, visible: false },
    };
    const titleAIV_EN =
      getResourceTrans('en', 'MainHeader', 'reports') || 'reports';
    const titleAIV_FR =
      getResourceTrans('fr', 'MainHeader', 'reports') || 'reports';
    const titleAIV_DE =
      getResourceTrans('de', 'MainHeader', 'reports') || 'reports';
    const titlesAIV = [titleAIV_EN, titleAIV_FR, titleAIV_DE];

    mount(
      <SetupTestsComponents>
        <IconsContainerRender interfaceButtons={_data} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp('#root');
    cy.wait(1);
    cy.react('IconsContainerRender')
      .find('a')
      .should('have.attr', 'title')
      .and('match', new RegExp(titlesAIV.join('|'), 'gu'));
    cy.react('IconsContainerRender')
      .find('a')
      .each(($el) => {
        cy.wrap($el).trigger('mouseover');
        cy.get('[role="tooltip"]').should('exist').should('be.visible');
        cy.wrap($el).trigger('mouseout');
        cy.get('[role="tooltip"]').should('not.exist');
      });
  });

  it('Should have title tooltip for FAQ', () => {
    const _data = {
      ...defaultData,
      aiv: { ...defaultData.aiv, visible: false },
      faq: { ...defaultData.faq, visible: true },
    };
    const titleFAQ_EN =
      getResourceTrans('en', 'MainHeader', 'F.A.Q') ||
      _escapeForRegExp('F.A.Q');
    const titleFAQ_FR =
      getResourceTrans('fr', 'MainHeader', 'F.A.Q') ||
      _escapeForRegExp('F.A.Q');
    const titleFAQ_DE =
      getResourceTrans('de', 'MainHeader', 'F.A.Q') ||
      _escapeForRegExp('F.A.Q');
    const titlesFAQ = [titleFAQ_EN, titleFAQ_FR, titleFAQ_DE];

    mount(
      <SetupTestsComponents>
        <IconsContainerRender interfaceButtons={_data} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp('#root');
    cy.react('IconsContainerRender')
      .find('a')
      .should('have.attr', 'title')
      .and('match', new RegExp(titlesFAQ.join('|'), 'gu'));
    cy.react('IconsContainerRender')
      .find('a')
      .each(($el) => {
        cy.wrap($el).trigger('mouseover');
        cy.get('[role="tooltip"]').should('exist').should('be.visible');
        cy.wrap($el).trigger('mouseout');
        cy.get('[role="tooltip"]').should('not.exist');
      });
  });

  it('AIV & FAQ should not be visible', () => {
    const _data = {
      ...defaultData,
      aiv: { ...defaultData.aiv, visible: false },
      faq: { ...defaultData.faq, visible: false },
    };
    const nbNotVisible = Object.values(_data).reduce(
      (acc: number, curr: Record<any, any> | unknown) => {
        if (curr && curr['visible'] === false) return acc + 1;

        return acc;
      },
      0,
    );
    const keys = Object.keys(_data);
    const length = keys.length - nbNotVisible;

    mount(
      <SetupTestsComponents>
        <IconsContainerRender interfaceButtons={_data} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp('#root');
    cy.react('IconsContainerRender')
      .react('BPITooltip', { options: { timeout: 1 } })
      .get('a[title="Rapports"]', { timeout: 1 })
      .should('not.exist');
    cy.react('IconsContainerRender')
      .react('BPITooltip', { options: { timeout: 1 } })
      .get('a[title="F.A.Q"]', { timeout: 1 })
      .should('not.exist');

    if (length === 0) {
      cy.react('IconsContainerRender')
        .react('BPITooltip', {
          options: { timeout: 1 },
        })
        .should('not.exist');
    } else {
      cy.react('IconsContainerRender')
        .react('BPITooltip', { options: { timeout: 1 } })
        .should('have.length', length);
    }
  });

  it('AIV & FAQ should be visible', () => {
    const _data = {
      ...defaultData,
      aiv: { ...defaultData.aiv, visible: true },
      faq: { ...defaultData.faq, visible: true },
    };
    const nbNotVisible = Object.values(_data).reduce(
      (acc: number, curr: Record<any, any> | unknown) => {
        if (curr && curr['visible'] === false) return acc + 1;

        return acc;
      },
      0,
    );
    const keys = Object.keys(_data);
    const length = keys.length - nbNotVisible;

    mount(
      <SetupTestsComponents>
        <IconsContainerRender interfaceButtons={_data} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('IconsContainerRender')
      .react('BPITooltip')
      .should('have.length.at.least', length);
  });
});
