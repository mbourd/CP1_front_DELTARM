// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/Compliance/ModalCompliance/ModalCompliance.job3.cy.tsx"

import React, { useState } from 'react';
import { SetupTestsComponents } from '../../../../../../../../cypress/utils/SetupTestsComponents';

import { ModalCompliance } from './ModalCompliance';

describe('<ModalCompliance />', function () {
  const dataCompliance = {
    compliance_fields: [
      {
        compliance_elm_desc_1:
          'Commentaire expliquant les op\u00e9rations r\u00e9alis\u00e9es pour la mise en conformit\u00e9 du contr\u00f4le',
        compliance_elm_desc_2: null,
        compliance_elm_family: 'compliance',
        compliance_elm_lib:
          'Explication relative \u00e0 la mise en conformit\u00e9',
        compliance_elm_mandatory: true,
        compliance_elm_regex: null,
        compliance_elm_regex_msg: null,
        compliance_elm_type: 'comment',
        compliance_elm_value: '',
        compliance_id: '1',
      },
      {
        compliance_elm_desc_1:
          'Indiquer le co\u00fbt relatif \u00e0 la mise en conformit\u00e9 du contr\u00f4le',
        compliance_elm_desc_2: null,
        compliance_elm_family: 'compliance',
        compliance_elm_lib: 'Co\u00fbt Financier de la mise en Conformit\u00e9',
        compliance_elm_mandatory: true,
        compliance_elm_regex: null,
        compliance_elm_regex_msg: null,
        compliance_elm_type: 'financial',
        compliance_elm_value: '',
        compliance_id: '2',
      },
      {
        compliance_elm_desc_1:
          "Permet d'attacher un fichier relatif \u00e0 la mise en conformit\u00e9 du contr\u00f4le",
        compliance_elm_desc_2: null,
        compliance_elm_family: 'compliance',
        compliance_elm_lib: 'Attachement',
        compliance_elm_mandatory: false,
        compliance_elm_regex: null,
        compliance_elm_regex_msg: null,
        compliance_elm_type: 'file_upload',
        compliance_elm_value: null,
        compliance_file_detail: null,
        compliance_id: '3',
      },
      {
        compliance_elm_desc_1: null,
        compliance_elm_desc_2: null,
        compliance_elm_family: 'compliance',
        compliance_elm_lib: 'Date Mandatory',
        compliance_elm_mandatory: true,
        compliance_elm_regex: null,
        compliance_elm_regex_msg: null,
        compliance_elm_type: 'date',
        compliance_elm_value: '',
        compliance_id: '4',
      },
    ],
    compliance_modal_title:
      'Information sur la r\u00e9solution de la Non-Conformit\u00e9',
  };

  it('should not render', function () {
    cy.mount(
      <SetupTestsComponents>
        <ModalCompliance
          open={false}
          onClose={function (): void {
            //
          }}
          controlId={''}
          fileId={''}
        />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('ModalCompliance').should('not.exist');
  });
  it('should render without crash', function () {
    cy.viewport(1500, 800);
    cy.intercept('GET', '/control/get_compliance_values?*', {
      statusCode: 200,
      body: { data: dataCompliance },
    });

    cy.mount(
      <SetupTestsComponents>
        <ModalCompliance
          open={true}
          onClose={() => undefined}
          controlId={''}
          fileId={''}
        />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('ModalCompliance').should('exist');
  });

  it('should make one request at a time and payload/queries not empty', function () {
    const fileId = 'fielqsdjqps';
    const controlId = 'qspdkfdklsgnnkqsd';
    let reqCount = 0;

    cy.viewport(1500, 800);
    cy.intercept('GET', '/control/get_compliance_values?*', (req) => {
      reqCount++;
      req.reply({ statusCode: 200, body: { data: dataCompliance } });
    }).as('reqGetDataCompliance');

    cy.mount(
      <SetupTestsComponents>
        <ModalCompliance
          open={true}
          onClose={() => undefined}
          controlId={controlId}
          fileId={fileId}
        />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.wait('@reqGetDataCompliance').then((interception) => {
      const { request } = interception;
      const { query } = request;

      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(255).then(() => {
        expect(reqCount).to.be.eq(1);
        cy.wrap(query).should('have.property', 'file_id');
        cy.wrap(query)
          .should('have.property', 'elm_id')
          .then(() => {
            expect(query.file_id).to.be.eq(fileId);
            expect(query.elm_id).to.be.eq(controlId);
          });
      });
    });
  });

  it('should close', function () {
    cy.viewport(1920, 1080);

    const DummyFC: React.FC<any> = () => {
      const [open, setOpen] = useState(true);

      return (
        <SetupTestsComponents>
          <ModalCompliance
            open={open}
            onClose={function (): void {
              setOpen(false);
            }}
            controlId={''}
            fileId={''}
          />
        </SetupTestsComponents>
      );
    };

    cy.intercept('GET', '/control/get_compliance_values?*', {
      statusCode: 200,
      body: { data: dataCompliance },
    });

    cy.mount(<DummyFC />).waitReactApp();
    cy.react('ModalCompliance').find('._ModalClose').find('svg').click();
    cy.wait(123).then(() => {
      cy.react('ModalCompliance').should('not.exist');
    });
  });
});
