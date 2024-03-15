// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/ModalDynamic/components/ModalDynamic.job4.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../cypress/utils/SetupTestsComponents';
import { ModalDynamic } from './ModalDynamic';
import { IDataModal } from './types';
import { _escapeForRegExp } from '../../../../cypress/utils';
import { DownloadFile } from '../../../Shared/components/UploadList/UploadList.style';

describe('<ModalDynamic />', function () {
  let import_TE_1_1: IDataModal;

  before(() => {
    cy.fixture('modalDynamic-import_TE-1-1.json').then((d) => {
      import_TE_1_1 = d;
    });
  });

  it('should render', function () {
    cy.mount(
      <SetupTestsComponents>
        <ModalDynamic
          setIsModalOpen={function (): void {
            throw new Error('Function not implemented.');
          }}
          open={true}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('ModalDynamic').should('exist');
  });

  it('should render title', function () {
    const data = {
      title: 'my test title',
    } as IDataModal;
    cy.mount(
      <SetupTestsComponents>
        <ModalDynamic
          setIsModalOpen={function (): void {
            throw new Error('Function not implemented.');
          }}
          open={true}
          data={data}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('ModalDynamic').react('Heading').should('have.text', data.title);
  });

  it('should render only 1 <DownloadFile /> styled components if mode=single', function () {
    const _data = {
      ...structuredClone(import_TE_1_1),
      content: [
        ...structuredClone(import_TE_1_1.content).filter(
          (c) => c?.attribute?.mode !== 'single',
        ),
        {
          attribute: {
            id: 'file',
            mandatory: true,
            mode: 'single',
          },
          element: 'upload',
        },
      ],
    } as IDataModal;
    cy.viewport(1920, 1080);
    cy.mount(
      <SetupTestsComponents>
        <ModalDynamic
          data={_data}
          setIsModalOpen={function (): void {
            //
          }}
          open={true}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();

    cy.react('ModalDynamic')
      .find('input[type="file"]')
      .selectFile(
        {
          contents: Cypress.Buffer.from('file contents'),
          fileName: 'file.txt',
          mimeType: 'text/plain',
          lastModified: Date.now(),
        },
        { force: true, action: 'drag-drop' },
      )
      .then(() => {
        cy.get(`.${DownloadFile.styledComponentId}`)
          .should('have.length', 1)
          .should('have.text', 'file.txt');
        cy.react('ModalDynamic')
          .find('input[type="file"]')
          .selectFile(
            {
              contents: Cypress.Buffer.from('file contents'),
              fileName: 'file_other.txt',
              mimeType: 'text/plain',
              lastModified: Date.now(),
            },
            { force: true, action: 'drag-drop' },
          )
          .then(() => {
            cy.get(`.${DownloadFile.styledComponentId}`)
              .should('have.length', 1)
              .should('have.text', 'file_other.txt');
          });
      });
  });

  it('should render the error msg if validate fails - import modal TE', function () {
    cy.viewport(1920, 1080);
    cy.mount(
      <SetupTestsComponents>
        <ModalDynamic
          data={import_TE_1_1}
          setIsModalOpen={function (): void {
            //
          }}
          open={true}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();

    const resp = {
      error_code: 476,
      error_msg:
        "An error occured during the UUID creation process : unsupported operand type(s) for /: 'str' and 'int'",
    };
    const btn = import_TE_1_1.btn.find((b) => b.action.method === 'POST');
    let reqCount = 0;

    cy.intercept('POST', btn?.action.endpoint + '?*', (req) => {
      reqCount++;
      req.reply(400, resp);
    });

    cy.react('ModalDynamic')
      .find('input[type="file"]')
      .selectFile(
        {
          contents: Cypress.Buffer.from('file contents'),
          fileName: 'file.txt',
          mimeType: 'text/plain',
          lastModified: Date.now(),
        },
        { force: true, action: 'drag-drop' },
      );
    cy.contains(btn?.btn_lib as string).realClick();
    cy.react('ModalDynamic').formErrorShouldBeVisible([
      _escapeForRegExp(resp.error_msg) as string,
    ]);
    cy.wait(10).then(() => {
      expect(reqCount).to.be.eq(1);
    });
  });
});
