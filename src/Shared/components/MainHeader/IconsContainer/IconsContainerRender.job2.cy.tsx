// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Shared/components/MainHeader/IconsContainer/IconsContainerRender.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';
import { _translate } from '../../../../../cypress/utils';

import { IconsContainerRender } from './IconsContainerRender';

describe('<IconsContainer />', () => {
  it('Should render', () => {
    const interfaceButtons = {
      aiv: {
        url: 'https://aiv-v5.deltarm.com/aiv/embed/external/6354524f3461322532424c49424359314e67677a4f784a65345932724a394a7841714a4a7677396a7636514c63253344/a_u__1015140&a_p__&a_t__&a_d__Default&a_ex__&a_af__true/aivg_aivg_deltarm_cli_id___8&aivg_aivg_deltarm_client_id___8&aivg_aivg_deltarm_lang_id___1&aivg_aivg_deltarm_user_id___1015140&aivg_environ___staging_cp1&aivToken___7376446f3635626d363437507167663933617067445256424e48756357494436645535373636666a61487754674144635a446e6d6663764d4b766d74555463666a7a6e5572334e4b732b6e65713151506b5a5237715443516642674d47374943754d55514659336579614d4f513175306753457335314e3276754d36774b6a2f4f6642746a4975586c6e78454a7a59346769736b315857455634735575395046514a626d6c684264793436785446674979636d766c6e544e596252384234774a76725976507a3446627a342f5973446c5334524a342f414c65706343634431354d556d386951685042674b593731436f7762636e30425330723353504c434973',
        visible: true,
      },
      faq: {
        url: null,
        visible: false,
      },
    };
    cy.mount(
      <SetupTestsComponents>
        <IconsContainerRender interfaceButtons={interfaceButtons} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
  });

  it('Should have title tooltip for AIV', () => {
    const _data = {
      aiv: {
        url: 'https://aiv-v5.deltarm.com/aiv/embed/external/6354524f3461322532424c49424359314e67677a4f784a65345932724a394a7841714a4a7677396a7636514c63253344/a_u__1015140&a_p__&a_t__&a_d__Default&a_ex__&a_af__true/aivg_aivg_deltarm_cli_id___8&aivg_aivg_deltarm_client_id___8&aivg_aivg_deltarm_lang_id___1&aivg_aivg_deltarm_user_id___1015140&aivg_environ___staging_cp1&aivToken___7376446f3635626d363437507167663933617067445256424e48756357494436645535373636666a61487754674144635a446e6d6663764d4b766d74555463666a7a6e5572334e4b732b6e65713151506b5a5237715443516642674d47374943754d55514659336579614d4f513175306753457335314e3276754d36774b6a2f4f6642746a4975586c6e78454a7a59346769736b315857455634735575395046514a626d6c684264793436785446674979636d766c6e544e596252384234774a76725976507a3446627a342f5973446c5334524a342f414c65706343634431354d556d386951685042674b593731436f7762636e30425330723353504c434973',
        visible: true,
      },
      faq: {
        url: null,
        visible: false,
      },
    };
    const titleAIV_EN = _translate('en', 'MainHeader', 'reports');
    const titleAIV_FR = _translate('fr', 'MainHeader', 'reports');
    const titleAIV_DE = _translate('de', 'MainHeader', 'reports');
    const titlesAIV = [titleAIV_EN, titleAIV_FR, titleAIV_DE];

    cy.mount(
      <SetupTestsComponents>
        <IconsContainerRender interfaceButtons={_data} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
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
      aiv: {
        url: 'https://aiv-v5.deltarm.com/aiv/embed/external/6354524f3461322532424c49424359314e67677a4f784a65345932724a394a7841714a4a7677396a7636514c63253344/a_u__1015140&a_p__&a_t__&a_d__Default&a_ex__&a_af__true/aivg_aivg_deltarm_cli_id___8&aivg_aivg_deltarm_client_id___8&aivg_aivg_deltarm_lang_id___1&aivg_aivg_deltarm_user_id___1015140&aivg_environ___staging_cp1&aivToken___7376446f3635626d363437507167663933617067445256424e48756357494436645535373636666a61487754674144635a446e6d6663764d4b766d74555463666a7a6e5572334e4b732b6e65713151506b5a5237715443516642674d47374943754d55514659336579614d4f513175306753457335314e3276754d36774b6a2f4f6642746a4975586c6e78454a7a59346769736b315857455634735575395046514a626d6c684264793436785446674979636d766c6e544e596252384234774a76725976507a3446627a342f5973446c5334524a342f414c65706343634431354d556d386951685042674b593731436f7762636e30425330723353504c434973',
        visible: false,
      },
      faq: {
        url: null,
        visible: true,
      },
    };
    const titleFAQ_EN = _translate('en', 'MainHeader', 'F.A.Q', 'F.A.Q');
    const titleFAQ_FR = _translate('fr', 'MainHeader', 'F.A.Q', 'F.A.Q');
    const titleFAQ_DE = _translate('de', 'MainHeader', 'F.A.Q', 'F.A.Q');
    const titlesFAQ = [titleFAQ_EN, titleFAQ_FR, titleFAQ_DE];

    cy.mount(
      <SetupTestsComponents>
        <IconsContainerRender interfaceButtons={_data} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
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
      aiv: {
        url: 'https://aiv-v5.deltarm.com/aiv/embed/external/6354524f3461322532424c49424359314e67677a4f784a65345932724a394a7841714a4a7677396a7636514c63253344/a_u__1015140&a_p__&a_t__&a_d__Default&a_ex__&a_af__true/aivg_aivg_deltarm_cli_id___8&aivg_aivg_deltarm_client_id___8&aivg_aivg_deltarm_lang_id___1&aivg_aivg_deltarm_user_id___1015140&aivg_environ___staging_cp1&aivToken___7376446f3635626d363437507167663933617067445256424e48756357494436645535373636666a61487754674144635a446e6d6663764d4b766d74555463666a7a6e5572334e4b732b6e65713151506b5a5237715443516642674d47374943754d55514659336579614d4f513175306753457335314e3276754d36774b6a2f4f6642746a4975586c6e78454a7a59346769736b315857455634735575395046514a626d6c684264793436785446674979636d766c6e544e596252384234774a76725976507a3446627a342f5973446c5334524a342f414c65706343634431354d556d386951685042674b593731436f7762636e30425330723353504c434973',
        visible: false,
      },
      faq: {
        url: null,
        visible: false,
      },
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

    cy.mount(
      <SetupTestsComponents>
        <IconsContainerRender interfaceButtons={_data} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
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
      aiv: {
        url: 'https://aiv-v5.deltarm.com/aiv/embed/external/6354524f3461322532424c49424359314e67677a4f784a65345932724a394a7841714a4a7677396a7636514c63253344/a_u__1015140&a_p__&a_t__&a_d__Default&a_ex__&a_af__true/aivg_aivg_deltarm_cli_id___8&aivg_aivg_deltarm_client_id___8&aivg_aivg_deltarm_lang_id___1&aivg_aivg_deltarm_user_id___1015140&aivg_environ___staging_cp1&aivToken___7376446f3635626d363437507167663933617067445256424e48756357494436645535373636666a61487754674144635a446e6d6663764d4b766d74555463666a7a6e5572334e4b732b6e65713151506b5a5237715443516642674d47374943754d55514659336579614d4f513175306753457335314e3276754d36774b6a2f4f6642746a4975586c6e78454a7a59346769736b315857455634735575395046514a626d6c684264793436785446674979636d766c6e544e596252384234774a76725976507a3446627a342f5973446c5334524a342f414c65706343634431354d556d386951685042674b593731436f7762636e30425330723353504c434973',
        visible: true,
      },
      faq: {
        url: null,
        visible: true,
      },
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

    cy.mount(
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
