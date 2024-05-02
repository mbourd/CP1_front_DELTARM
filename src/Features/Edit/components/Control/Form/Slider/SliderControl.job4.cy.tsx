// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../cypress/support/component" />

/* NOTE: Run CLI:
yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/Slider/SliderControl.job4.cy.tsx"
*/

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../cypress/utils/SetupTestsComponents';
import { _translate } from '../../../../../../../cypress/utils';

import { SliderControl } from './SliderControl';
import { IApiControl } from '../../../../types';
import '../../../../../Edit/translations';
import { apiRouter } from '../../../../../../Services/Api';

describe('<SliderControl />', () => {
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

  it('should render', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
    };
    cy.mount(
      <SetupTestsComponents>
        <SliderControl
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
    cy.react('SliderControl');
  });

  it('should make one request at a time and payload/queries not empty', function () {
    let val = '';
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
        <SliderControl
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
            window[
              'Features_Edit_Control_Form_Slider_SliderControl'
            ].setApiRouteName(apiRouter.getRoutes()['setControlValue']?.name);
          })
          .then(() => {
            cy.get('.MuiSlider-rail')
              // .click(10, 0, { force: true })
              .realClick({ x: 10, y: 0 })
              .then(() => {
                cy.get('input[type="range"]')
                  .invoke('val')
                  .then((v) => (val = v + ''));
              })
              .then(() => {
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
  });

  it('should render <ControlLabel /> with control_title', () => {
    const title = 'hello world';
    const _control: IApiControl = {
      ...structuredClone(control),
      control_title: title,
    };
    cy.mount(
      <SetupTestsComponents>
        <SliderControl
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
    cy.react('SliderControl')
      .react('ControlLabel')
      .find('span')
      .eq(0)
      .should('have.text', title);
  });

  it('should render <RejectControl /> if useRejection & control_rejectable', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
      useRejection: { isRejected: true, rejectComments: [] },
      control_rejectable: { is_rejected: true, control_reject_comment: [] },
    };
    cy.mount(
      <SetupTestsComponents>
        <SliderControl
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
    cy.react('SliderControl').react('RejectControl');
  });

  it('should render with value', () => {
    const value = '23';
    const _control: IApiControl = {
      ...structuredClone(control),
      control_value: value,
    };
    cy.mount(
      <SetupTestsComponents>
        <SliderControl
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
    cy.react('SliderControl')
      .find('input[type="range"]')
      .should('have.attr', 'value', value);
  });

  it('should be disabled', () => {
    const value = '23';
    const _control: IApiControl = {
      ...structuredClone(control),
      control_value: value,
      control_options: { disabled: true },
    };
    cy.mount(
      <SetupTestsComponents>
        <SliderControl
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
    cy.react('SliderControl')
      .find('input[type="range"]')
      .should('have.attr', 'value', value)
      .should('be.disabled');
  });
  it('should not be disabled', () => {
    const value = '23';
    const _control: IApiControl = {
      ...structuredClone(control),
      control_value: value,
      control_options: { disabled: false },
    };
    cy.mount(
      <SetupTestsComponents>
        <SliderControl
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
    cy.react('SliderControl')
      .find('input[type="range"]')
      .should('have.attr', 'value', value)
      .should('not.be.disabled');
  });
  it('should not be disabled', () => {
    const value = '23';
    const _control: IApiControl = {
      ...structuredClone(control),
      control_value: value,
    };
    cy.mount(
      <SetupTestsComponents>
        <SliderControl
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
    cy.react('SliderControl')
      .find('input[type="range"]')
      .should('have.attr', 'value', value)
      .should('not.be.disabled');
  });

  it('should render error message if mandatory', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
      mandatory: true,
      editable: true,
    };
    const trans_EN = _translate(
      'en',
      'Edit',
      'mandatoryValue',
      'Valeur obligatoire',
    );
    const trans_FR = _translate(
      'fr',
      'Edit',
      'mandatoryValue',
      'Valeur obligatoire',
    );
    const trans_DE = _translate(
      'de',
      'Edit',
      'mandatoryValue',
      'Valeur obligatoire',
    );
    const translations = [trans_EN, trans_FR, trans_DE];
    cy.mount(
      <SetupTestsComponents>
        <SliderControl
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
    cy.react('SliderControl')
      .find('._FormError')
      .invoke('text')
      .and('match', new RegExp(translations.join('|'), 'gu'));
  });

  it('should render error message recording', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
      mandatory: true,
      editable: true,
    };
    const trans_EN = _translate(
      'en',
      'Edit',
      'errorRecording',
      "Une erreur s'est produite durant l'enregistrement",
    );
    const trans_FR = _translate(
      'fr',
      'Edit',
      'errorRecording',
      "Une erreur s'est produite durant l'enregistrement",
    );
    const trans_DE = _translate(
      'de',
      'Edit',
      'errorRecording',
      "Une erreur s'est produite durant l'enregistrement",
    );
    const translations = [trans_EN, trans_FR, trans_DE];
    cy.mount(
      <SetupTestsComponents>
        <SliderControl
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
    cy.react('SliderControl')
      .find('input[type="range"]')
      .parent('span')
      .click({ multiple: true, force: true });
    cy.realPress('ArrowRight');
    cy.realPress('ArrowRight');
    cy.react('SliderControl')
      .find('._FormError')
      .invoke('text')
      .and('match', new RegExp(translations.join('|'), 'gu'));
  });
});
