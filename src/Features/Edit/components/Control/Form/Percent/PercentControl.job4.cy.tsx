// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/Percent/PercentControl.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../cypress/utils/SetupTestsComponents';
import {
  _escapeForRegExp,
  _translate,
} from '../../../../../../../cypress/utils';

import { PercentControl } from './PercentControl';
import { IApiControl } from '../../../../types';
import '../../../../../Edit/translations';
import RandExp from 'randexp';
import { apiRouter } from '../../../../../../Services/Api';

describe('<PercentControl />', () => {
  const trans_EN =
    _translate('en', 'Edit', 'mandatoryValue') ||
    'mandatoryValue|Valeur obligatoire';
  const trans_FR =
    _translate('fr', 'Edit', 'mandatoryValue') ||
    'mandatoryValue|Valeur obligatoire';
  const trans_DE =
    _translate('de', 'Edit', 'mandatoryValue') ||
    'mandatoryValue|Valeur obligatoire';
  const translations_mandatoryValue = [trans_EN, trans_FR, trans_DE];
  const control: IApiControl = {
    control_desc_1: null,
    control_desc_2: null,
    control_editable: false,
    control_conditional: false,
    control_id: '',
    control_mandatory: false,
    mandatory: false,
    control_previous_value: null,
    control_title: '',
    control_type: 'boolean',
    control_value: null,
    control_family: '',
    control_regex: null,
    control_regex_msg: null,
    control_manage_compliance: false,
    control_options: undefined,
    upload_detail: null,
    rich_text_detail: null,
    control_rejectable: null,
  };
  const fileId = '1234';
  const formState = [{ controls: [control] }];
  const setFormState = () => {
    return undefined;
  };

  it('should render', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
    };

    cy.mount(
      <SetupTestsComponents>
        <PercentControl
          control={_control}
          fileId={''}
          context={'edit'}
          formState={[]}
          setFormState={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('PercentControl');
  });

  it('should make one request at a time and payload/queries not empty', function () {
    const val = '123456';
    const fileId = 'fileddd';
    const _control: IApiControl = {
      ...structuredClone(control),
      control_editable: true,
      editable: true,
      control_id: 'control_idd',
      control_family: 'cont_fam',
    };
    let reqCount = 0;

    cy.intercept(
      'POST',
      apiRouter.getRoutes()['setControlValue']?.path + '?*',
      (req) => {
        reqCount++;
        req.reply({ statusCode: 200, body: {} });
      },
    ).as('reqSaveValue');

    cy.mount(
      <SetupTestsComponents>
        <PercentControl
          control={_control}
          context={'edit'}
          fileId={fileId}
          formState={[]}
          setFormState={() => undefined}
        />
      </SetupTestsComponents>,
    )
      .waitReactApp()
      .then(() => {
        cy.window()
          .then((window) => {
            window['Features_Edit_Control_PercentControl'].setApiRouteName(
              apiRouter.getRoutes()['setControlValue']?.name,
            );
          })
          .then(() => {
            cy.get('input[type="text"]').type(val).blur().clickOutside();
            cy.wait('@reqSaveValue').then((interception) => {
              const { request } = interception;
              const { query } = request;

              // eslint-disable-next-line cypress/no-unnecessary-waiting
              cy.wait(500).then(() => {
                expect(reqCount).to.be.eq(1);
                cy.wrap(query).should('have.property', 'file_id');
                cy.wrap(query).should('have.property', 'elm_id');
                cy.wrap(query).should('have.property', 'elm_val');
                cy.wrap(query)
                  .should('have.property', 'control_family')
                  .then(() => {
                    expect(query.file_id).to.be.eq(fileId);
                    expect(query.elm_id).to.be.eq(_control.control_id);
                    expect(query.elm_val).to.be.eq(val);
                    expect(query.control_family).to.be.eq(
                      _control.control_family,
                    );
                  });
              });
            });
          });
      });
  });

  it('should render <ControlLabel /> and <ControlFooter/>', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
    };
    cy.mount(
      <SetupTestsComponents>
        <PercentControl
          control={_control}
          fileId={''}
          formState={[]}
          setFormState={function (): void {
            throw new Error('Function not implemented.');
          }}
          context={'edit'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('PercentControl').react('ControlLabel');
    cy.react('PercentControl').react('ControlFooter');
  });

  it('should be disabled', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
      editable: false,
    };
    cy.mount(
      <SetupTestsComponents>
        <PercentControl
          control={_control}
          fileId={''}
          formState={[]}
          setFormState={function (): void {
            throw new Error('Function not implemented.');
          }}
          context={'edit'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('PercentControl').find('input[type="text"]').should('be.disabled');
  });
  it('should be disabled', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
    };
    cy.mount(
      <SetupTestsComponents>
        <PercentControl
          control={_control}
          fileId={''}
          formState={[]}
          setFormState={function (): void {
            throw new Error('Function not implemented.');
          }}
          context={'edit'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('PercentControl').find('input[type="text"]').should('be.disabled');
  });
  it('should not be disabled', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
      editable: true,
    };
    cy.mount(
      <SetupTestsComponents>
        <PercentControl
          control={_control}
          fileId={''}
          formState={[]}
          setFormState={function (): void {
            throw new Error('Function not implemented.');
          }}
          context={'edit'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('PercentControl')
      .find('input[type="text"]')
      .should('not.be.disabled');
  });

  it('should render error message if mandatory', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
      mandatory: true,
      editable: true,
    };
    const trans_EN =
      _translate('en', 'Edit', 'mandatoryValue') ||
      'mandatoryValue|Valeur obligatoire';
    const trans_FR =
      _translate('fr', 'Edit', 'mandatoryValue') ||
      'mandatoryValue|Valeur obligatoire';
    const trans_DE =
      _translate('de', 'Edit', 'mandatoryValue') ||
      'mandatoryValue|Valeur obligatoire';
    const translations = [trans_EN, trans_FR, trans_DE];
    cy.mount(
      <SetupTestsComponents>
        <PercentControl
          control={_control}
          fileId={''}
          formState={[]}
          setFormState={function (): void {
            throw new Error('Function not implemented.');
          }}
          context={'edit'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('PercentControl')
      .find('._FormError')
      .invoke('text')
      .and('match', new RegExp(translations.join('|'), 'gu'));
  });

  it('should have default value', () => {
    const value = '1987';
    const _control: IApiControl = {
      ...structuredClone(control),
      control_value: value,
    };
    cy.mount(
      <SetupTestsComponents>
        <PercentControl
          control={_control}
          fileId={''}
          formState={[]}
          setFormState={function (): void {
            throw new Error('Function not implemented.');
          }}
          context={'edit'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('PercentControl')
      .find('input[type="text"]')
      .should('have.attr', 'value', '1987.00');
  });
  it('should not have default value', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
    };
    cy.mount(
      <SetupTestsComponents>
        <PercentControl
          control={_control}
          fileId={''}
          formState={[]}
          setFormState={function (): void {
            throw new Error('Function not implemented.');
          }}
          context={'edit'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('PercentControl')
      .find('input[type="text"]')
      .should('have.attr', 'value', '');
  });

  it('should render <RejectControl /> if useRejection & control_rejectable', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
      useRejection: { isRejected: true, rejectComments: [] },
      control_rejectable: { is_rejected: true, control_reject_comment: [] },
    };
    cy.mount(
      <SetupTestsComponents>
        <PercentControl
          control={_control}
          fileId={''}
          formState={[]}
          setFormState={function (): void {
            throw new Error('Function not implemented.');
          }}
          context={'edit'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('PercentControl').react('RejectControl');
  });

  it('Should match the value with regex', () => {
    const trans_EN =
      _translate('en', 'Edit', 'errorRecording') || 'errorRecording';
    const trans_FR =
      _translate('fr', 'Edit', 'errorRecording') || 'errorRecording';
    const trans_DE =
      _translate('de', 'Edit', 'errorRecording') || 'errorRecording';
    const translations = [trans_EN, trans_FR, trans_DE];
    const regex = '^-?[0-9]\\d*(\\.\\d+)?$';
    const _control = {
      ...structuredClone(control),
      editable: true,
      control_value: null,
      control_regex: regex,
      control_regex_msg: 'Value do not match with regex',
    };
    const randExp = new RandExp(new RegExp(regex, 'i'));
    let generated = randExp.gen();

    while (generated === '' || !new RegExp(regex, 'i').test(generated)) {
      generated = randExp.gen();
    }

    cy.mount(
      <SetupTestsComponents>
        <PercentControl
          context={'edit'}
          control={_control}
          fileId={fileId}
          formState={formState}
          setFormState={setFormState}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.window().then((w) => {
      w['Features_Edit_Control_PercentControl'].setCanSendApi(false);
    });
    cy.react('PercentControl')
      .find('input[type="text"]')
      .type(generated, { parseSpecialCharSequences: false })
      .blur();
    cy.wait(100).then(() => {
      cy.react('PercentControl').formErrorMessageShouldNotMatch([
        ...translations,
        ...translations_mandatoryValue,
        _escapeForRegExp(_control.control_regex_msg as string) as string,
      ]);
    });
  });
  it('Should render error message if value do not match with regex', () => {
    const regex = '^-?[0-9]\\d*(\\.\\d+)?$';
    const oppositeRegex = new RegExp(`^(?!.*${regex}).*`, 'i');
    const _control = {
      ...structuredClone(control),
      editable: true,
      control_value: null,
      control_regex: regex,
      control_regex_msg: 'Value do not match with regex',
    };
    const randExpOpposite = new RandExp(oppositeRegex);
    let generated = randExpOpposite.gen();

    while (generated === '' || !oppositeRegex.test(generated)) {
      generated = randExpOpposite.gen();
    }

    cy.mount(
      <SetupTestsComponents>
        <PercentControl
          context={'edit'}
          control={_control}
          fileId={fileId}
          formState={formState}
          setFormState={setFormState}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('PercentControl')
      .find('input[type="text"]')
      .type(generated, { parseSpecialCharSequences: false })
      .blur();
    cy.wait(100).then(() => {
      cy.react('PercentControl')
        .find('._FormError')
        .should('have.text', _control.control_regex_msg);
    });
  });
});
