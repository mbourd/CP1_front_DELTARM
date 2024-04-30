// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Manage/components/Filter/Filter.job2.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';

import { Filter } from './Filter';
import { IApiStage, IApiState } from '../../apiRoutes/filters';

describe('<Filter />', function () {
  const stages: IApiStage[] = Array.from({ length: 3 }).map((v, i) => {
    const stage: IApiStage = {
      stage_code: 'code' + i,
      stage_id: i,
      stage_name: 'stage name' + i,
    };

    return stage;
  });
  const states: IApiState[] = Array.from({ length: 3 }).map((v, i) => {
    const state: IApiState = {
      state_code: 'code' + i,
      state_color: 'ffaaeedd',
      state_id: i,
      state_role: i,
      state_name: 'state name' + i,
    };

    return state;
  });
  const dataManageReference = {
    data: {
      stages,
      state_roles: [
        {
          state_role: 0,
          state_role_lib: 'Gestionnaire',
        },
        {
          state_role: 1,
          state_role_lib: 'Valideur',
        },
      ],
      states,
    },
  };

  it('should render without crash', function () {
    let reqCount = 0;

    cy.intercept('GET', '/manage/reference', (req) => {
      reqCount++;
      req.reply({ statusCode: 200, body: dataManageReference });
    }).as('reqGetManagefilters');
    cy.mount(
      <SetupTestsComponents>
        <Filter />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('Filter').should('exist');
    cy.wait('@reqGetManagefilters').then(() => {
      expect(reqCount).to.be.eq(1);
    });
  });

  //// TODO: continue
});
