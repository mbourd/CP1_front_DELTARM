// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/Time/TimeControl.job4.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../cypress/utils/SetupTestsComponents';

import { TimeControl } from './TimeControl';
import { IApiControl } from '../../../../types';
import { apiRouter } from '../../../../../../Services/Api';

describe('<TimeControl />', () => {
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
    const _control: IApiControl = { ...control };
    cy.mount(
      <SetupTestsComponents>
        <TimeControl
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
    cy.react('TimeControl').should('exist');
  });

  it('should make one request at a time and payload/queries not empty', function () {
    const val = '23:23:23';
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

        req.on('response', (resp) => {
          resp.send(200, {});
        });
      },
    ).as('reqSaveValue');

    cy.mount(
      <SetupTestsComponents>
        <TimeControl
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
              'Features/Edit/Control/Form/Time/TimeControl'
            ].setApiRouteName(apiRouter.getRoutes()['setControlValue']?.name);
          })
          .then(() => {
            cy.get('input[type="time"]').type(val).blur().clickOutside();
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

  it('should render error message if mandatory', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
      mandatory: true,
      editable: true,
    };
    cy.mount(
      <SetupTestsComponents>
        <TimeControl
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
    cy.react('TimeControl')
      .find('._FormError')
      .invoke('text')
      .then((t) => expect(t).to.eq('Valeur obligatoire'));
  });

  it('should be disabled', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
    };
    cy.mount(
      <SetupTestsComponents>
        <TimeControl
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
    cy.react('TimeControl').find('input').should('be.disabled');
  });
  it('should be disabled', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
      editable: false,
    };
    cy.mount(
      <SetupTestsComponents>
        <TimeControl
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
    cy.react('TimeControl').find('input').should('be.disabled');
  });
  it('should not be disabled', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
      editable: true,
    };
    cy.mount(
      <SetupTestsComponents>
        <TimeControl
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
    cy.react('TimeControl').find('input').should('not.be.disabled');
  });

  it('should render <RejectControl /> if useRejection & control_rejectable', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
      useRejection: { isRejected: true, rejectComments: [] },
      control_rejectable: { is_rejected: true, control_reject_comment: [] },
    };
    cy.mount(
      <SetupTestsComponents>
        <TimeControl
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
    cy.react('TimeControl').react('RejectControl');
  });

  it('should render <ControlFooter />', () => {
    const _control: IApiControl = {
      ...structuredClone(control),
    };
    cy.mount(
      <SetupTestsComponents>
        <TimeControl
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
    cy.react('TimeControl').react('ControlFooter');
  });

  it('should render <ControlLabel /> with control_title', () => {
    const title = 'hello world';
    const _control: IApiControl = {
      ...structuredClone(control),
      control_title: title,
    };
    cy.mount(
      <SetupTestsComponents>
        <TimeControl
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
    cy.react('TimeControl')
      .react('ControlLabel')
      .find('span')
      .eq(0)
      .should('have.text', title);
  });
});
