// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Shared/components/MainNav/MainNav.job2.cy.tsx"

import React, { useEffect } from 'react';
import { SetupTestsComponents } from '../../../../cypress/utils/SetupTestsComponents';
import {
  _getEnv,
  _getRandomNumberBetween,
  _translate,
} from '../../../../cypress/utils';
import { MainNav } from './MainNav';
import '../../apiRoutes';
import '../../../Shared/translations/default';
import { security } from '../../../Packages/Security';
import { useDashboardDynamicReducer } from '../../../Features/DashboardDynamic/dashboardDynamic.reducer';
import '../../../../src/Features/DashboardDynamic/reducer';
import { IDashboard } from '../../../Features/DashboardDynamic/components/types';

describe('<MainNav />', () => {
  const menus = [
    {
      action: {
        endpoint: '/dashboard/contr_perm',
        method: 'GET',
        params: null,
      },
      menu_lib: 'Test 1 AA',
      menu_order: 1,
    },
    {
      action: {
        endpoint: '/dashboard/contr_perm',
        method: 'GET',
        params: null,
      },
      menu_lib: 'Test 2 BB',
      menu_order: 2,
    },
    {
      action: {
        endpoint: '/dashboard/contr_perm',
        method: 'GET',
        params: null,
      },
      menu_lib: 'Test 3 CC',
      menu_order: 3,
    },
  ];

  // before(() => {
  //   _requestJWT();
  // });

  beforeEach(() => {
    const client_info = [
      {
        cli_app_name: 'Module Formulaire - ABC',
        cli_btn_faq_url: null,
        cli_btn_faq_visible: false,
        cli_file_name_regex: null,
        cli_id: 8,
        cli_logo_url:
          'https://s3-drm-cp1.s3.eu-west-3.amazonaws.com/ressources/logo_client/delta-rm.png',
        cli_name: 'Groupe ABC',
        cli_valid_mode: 'global',
        file_search_placeholder: 'Numéro de Dossier',
      },
    ];
    const security = {
      _roles: [],
      _email: null,
      _jwt: _getEnv('JWT'),
      _lang: 'fr',
      _username: 'anon',
      _expireAt: '2023-09-02T11:49:04.000Z',
    };
    window.localStorage.setItem('client_info', JSON.stringify(client_info));
    window.localStorage.setItem('security', JSON.stringify(security));
  });

  it('Should render', () => {
    cy.mount(
      <SetupTestsComponents
        securityContextValue={{
          user: security.getUser(),
          jwt: security.getUser().getJwt(),
          data: { context: 'CP1' },
          login: () => undefined,
          logout: () => undefined,
        }}
      >
        <MainNav />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.get('.menu-icon').should('be.visible');
  });

  /*  it('should make one request at a time and payload or queries not empty', function () {
    let reqCount = 0;

    cy.intercept('GET', '/user/info', (req) => {
      reqCount++;
      req.reply({});
    }).as('reqUserInfo');

    cy.then(() => {
      const security = {
        _roles: [],
        _email: null,
        _jwt: 'fake jwt',
        _lang: 'fr',
        _username: 'anon',
        _expireAt: '2023-09-02T11:49:04.000Z',
      };
      window.localStorage.setItem('security', JSON.stringify(security));
    }).then(() => {
      cy.mount(
        <SetupTestsComponents
          securityContextValue={{
            user: security.getUser(),
            jwt: security.getUser().getJwt(),
            data: { context: 'CP1' },
            login: () => undefined,
            logout: () => undefined,
          }}
        >
          <MainNav />
        </SetupTestsComponents>,
      );
      cy.waitReactApp();

      cy.wait('@reqUserInfo').then(() => {
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(255).then(() => {
          expect(reqCount).to.be.eq(1);
        });
      });
    });
  });*/

  it('should display <Popper /> on click menu and hide when click outside', () => {
    cy.mount(
      <SetupTestsComponents
        securityContextValue={{
          user: security.getUser(),
          jwt: security.getUser().getJwt(),
          data: { context: 'CP1' },
          login: () => undefined,
          logout: () => undefined,
        }}
      >
        <MainNav />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.get('.menu-icon').each(($el) => {
      cy.wrap($el).realClick();
      cy.react('Popper').should('be.visible');
      cy.react('Popper').clickOutside();
      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(1);
      cy.react('Popper', { options: { timeout: 1 } }).should('not.exist');
    });
  });

  it('should display <ListItem /> if context "CP1" or != contr_perm', () => {
    const transListKey = [
      'filesToBeProcessed',
      'filesInValidation',
      'rejectedFiles',
      'allFiles',
    ];
    cy.mount(
      <SetupTestsComponents
        securityContextValue={{
          user: security.getUser(),
          jwt: security.getUser().getJwt(),
          data: { context: 'CP1' },
          login: () => undefined,
          logout: () => undefined,
        }}
      >
        <MainNav />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.get('.menu-icon').each(($el) => {
      cy.wrap($el).realClick();
      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(255).then(() => {
        cy.wrap(transListKey).each((v: string) => {
          const en = _translate('en', 'Default', v) || v;
          const fr = _translate('fr', 'Default', v) || v;
          const de = _translate('de', 'Default', v) || v;
          const transes = [en, fr, de];

          cy.react('Popper').contains(new RegExp(transes.join('|'), 'gu'));
        });
      });
    });
  });

  it('should display logout', () => {
    cy.mount(
      <SetupTestsComponents
        securityContextValue={{
          user: security.getUser(),
          jwt: security.getUser().getJwt(),
          data: { context: 'CP1' },
          login: () => undefined,
          logout: () => undefined,
        }}
      >
        <MainNav />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.get('.menu-icon').each(($el) => {
      const en = _translate('en', 'Default', 'logout') || 'logout';
      const fr = _translate('fr', 'Default', 'logout') || 'logout';
      const de = _translate('de', 'Default', 'logout') || 'logout';
      const transes = [en, fr, de];

      cy.wrap($el).realClick();
      cy.react('Popper').contains(new RegExp(transes.join('|'), 'gu'));
    });
  });

  it('should have aditional menus if context=contr_perm', function () {
    const DummyFC: React.FC<React.PropsWithChildren<unknown>> = () => {
      const {
        dispatchDashboardDynamicUpdateDataApi_dashboardControlPermanent,
      } = useDashboardDynamicReducer();

      useEffect(() => {
        dispatchDashboardDynamicUpdateDataApi_dashboardControlPermanent({
          data: {
            menus,
          },
        } as any as IDashboard);
      }, [dispatchDashboardDynamicUpdateDataApi_dashboardControlPermanent]);

      return <MainNav />;
    };

    cy.mount(
      <SetupTestsComponents
        securityContextValue={{
          user: security.getUser(),
          jwt: security.getUser().getJwt(),
          data: { context: 'contr_perm' },
          login: () => undefined,
          logout: () => undefined,
        }}
      >
        <DummyFC />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.get('.menu-icon').each(($el) => {
      cy.wrap($el).realClick();
      cy.wrap(menus).each((menu: Record<any, any>) => {
        cy.react('Popper').contains(menu.menu_lib);
      });
    });
  });
  it('should NOT have aditional menus if context!=contr_perm', function () {
    const DummyFC: React.FC<React.PropsWithChildren<unknown>> = () => {
      const {
        dispatchDashboardDynamicUpdateDataApi_dashboardControlPermanent,
      } = useDashboardDynamicReducer();

      useEffect(() => {
        dispatchDashboardDynamicUpdateDataApi_dashboardControlPermanent({
          data: {
            menus,
          },
        } as any as IDashboard);
      }, [dispatchDashboardDynamicUpdateDataApi_dashboardControlPermanent]);

      return <MainNav />;
    };

    cy.mount(
      <SetupTestsComponents
        securityContextValue={{
          user: security.getUser(),
          jwt: security.getUser().getJwt(),
          data: { context: 'CP1' },
          login: () => undefined,
          logout: () => undefined,
        }}
      >
        <DummyFC />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.get('.menu-icon').each(($el) => {
      cy.wrap($el).realClick();
      cy.wrap(menus).each((menu: Record<any, any>) => {
        cy.react('Popper').should('not.have.text', menu.menu_lib);
      });
    });
  });

  it('should have the correct order for additional menus if context=contr_perm', function () {
    const _menus = Array.from({ length: _getRandomNumberBetween(6, 12) }).map(
      (v, i) => {
        return {
          action: {
            endpoint: '/dashboard/contr_perm',
            method: 'GET',
            params: null,
          },
          menu_lib: 'Test ' + i,
          menu_order: _getRandomNumberBetween(1, 12),
        };
      },
    );
    const sortedMenus = [..._menus].sort((m1, m2) => {
      if (m1.menu_order < m2.menu_order) return -1;
      if (m1.menu_order > m2.menu_order) return 1;

      return 0;
    });
    const DummyFC: React.FC<React.PropsWithChildren<unknown>> = () => {
      const {
        dispatchDashboardDynamicUpdateDataApi_dashboardControlPermanent,
      } = useDashboardDynamicReducer();

      useEffect(() => {
        dispatchDashboardDynamicUpdateDataApi_dashboardControlPermanent({
          data: {
            menus: _menus,
          },
        } as any as IDashboard);
      }, [dispatchDashboardDynamicUpdateDataApi_dashboardControlPermanent]);

      return <MainNav />;
    };

    cy.mount(
      <SetupTestsComponents
        securityContextValue={{
          user: security.getUser(),
          jwt: security.getUser().getJwt(),
          data: { context: 'contr_perm' },
          login: () => undefined,
          logout: () => undefined,
        }}
      >
        <DummyFC />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.get('.menu-icon').each(($el) => {
      cy.wrap($el).realClick();
      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(255).then(() => {
        cy.get('.contr_perm_menus').each(($menu, i) => {
          expect($menu.text()).to.be.eq(sortedMenus[i].menu_lib);
        });
      });
    });
  });
});
