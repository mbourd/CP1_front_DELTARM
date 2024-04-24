// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/ModalDynamic/components/ModalDynamic.job4.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../cypress/utils/SetupTestsComponents';
import { ModalDynamic } from './ModalDynamic';
import { IDataModal, IElementModal } from './types';
import { _escapeForRegExp } from '../../../../cypress/utils';
import { DownloadFile } from '../../../Shared/components/UploadList/UploadList.style';
import { IButtons } from '../../DashboardDynamic/components/types';

describe('<ModalDynamic />', function () {
  let import_TE_1_1: IDataModal;
  let import_TE_1_2_error: IDataModal;
  let import_TE_1_2_error_: IDataModal;
  // let import_TE_1_2_success_validate: IDataModal;

  before(() => {
    cy.fixture('modalDynamic-import_TE-1-1.json').then((d) => {
      import_TE_1_1 = d;
    });
    cy.fixture('modalDynamic-import_TE-1-2-error.json').then((d) => {
      import_TE_1_2_error = d;
    });
    cy.fixture('modalDynamic-import_TE-1-2-error_.json').then((d) => {
      import_TE_1_2_error_ = d;
    });
    // cy.fixture('modalDynamic-import_TE-1-2-validate-success.json').then((d) => {
    //   import_TE_1_2_success_validate = d;
    // });
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

  it('should render a loading logo if POST request takes some times (validate) - import modal TE 1 1', function () {
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
    ).waitReactApp();

    cy.intercept(
      'POST',
      _data.btn.find((b) => b.action.method === 'POST')?.action.endpoint + '?*',
      { delay: 500, statusCode: 200, body: {} },
    );

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
        cy.react('ModalDynamic')
          .contains(
            _data.btn.find((b) => b.action.method === 'POST')
              ?.btn_lib as string,
          )
          .realClick()
          .then(() => {
            cy.react('ModalDynamic')
              .react('Button')
              .eq(_data.btn.findIndex((b) => b.action.method === 'POST'))
              .react('CircularMetric')
              .should('exist');
          });
      });
  });

  it('should render the error msg if validate fails (validate) - import modal TE 1 1', function () {
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
    const btn = import_TE_1_1.btn.find(
      (b) => b.action.method === 'POST',
    ) as IButtons;
    let reqCount = 0;
    btn.action.endpoint = btn?.action.endpoint + 'bis';

    cy.intercept('POST', btn?.action.endpoint + '\\?*', (req) => {
      reqCount++;
      // req.on('response', (_resp) => _resp.send(404, resp)); // not working
      req.reply(400, resp);
    }).as('reqPostBtnEndpoint');

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
    cy.contains(btn?.btn_lib as string).click();
    cy.wait('@reqPostBtnEndpoint').then((interception) => {
      const { request } = interception;
      const { query } = request;
      const reqBody = parseMultipartFormData(request.body);

      cy.react('ModalDynamic').formErrorShouldBeVisible([
        _escapeForRegExp(resp.error_msg) as string,
      ]);
      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(255).then(() => {
        expect(reqCount).to.be.eq(1);
        cy.wrap(query).should('have.property', 'deubg_mod');
        cy.wrap(query).should('have.property', 'file');
        cy.wrap(query).should('have.property', 'import_mode');
        cy.then(() => {
          expect(JSON.parse(reqBody)?.['file.txt']).to.not.null;
          expect(JSON.parse(reqBody)?.['file.txt']).to.not.undefined;
          expect(JSON.parse(reqBody)?.['file.txt']).to.not.eq('');
          expect(query.deubg_mod).to.eq('False');
          expect(query.file).to.eq('file.txt');
          expect(query.import_mode).to.eq('create');
        });
      });
    });
  });

  it('should render textarea (validate) - import modal TE 1 2 error', function () {
    let contentStr = '';

    for (const element of import_TE_1_2_error.content) {
      const format = (element as IElementModal).format;
      const items = (element as IElementModal).items;

      items.forEach((item, i) => {
        contentStr +=
          format?.replace(/{([^}]*)}/g, (match, key) => {
            return item[key] || '';
          }) + (i < items.length - 1 ? '\r\n' : '');
      });
    }

    cy.viewport(1920, 1080);
    cy.mount(
      <SetupTestsComponents>
        <ModalDynamic
          data={import_TE_1_2_error}
          setIsModalOpen={function (): void {
            //
          }}
          open={true}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();

    cy.react('ModalDynamic').find('textarea').should('exist');
    cy.react('ModalDynamic')
      .find('textarea')
      .invoke('text')
      .then((t) => {
        expect(t).to.be.deep.eq(contentStr);
      });
    cy.react('ModalDynamic')
      .contains(import_TE_1_2_error.btn[0].btn_lib)
      .realClick()
      .then(() => {
        cy.react('ModalDynamic').should('not.exist');
      });
  });
  it('should render textarea (validate) - import modal TE 1 2 error (changed format)', function () {
    let contentStr = '';

    for (const element of import_TE_1_2_error_.content) {
      const format = (element as IElementModal).format;
      const items = (element as IElementModal).items;

      items.forEach((item, i) => {
        contentStr +=
          format?.replace(/{([^}]*)}/g, (match, key) => {
            return item[key] || '';
          }) + (i < items.length - 1 ? '\r\n' : '');
      });
    }

    cy.viewport(1920, 1080);
    cy.mount(
      <SetupTestsComponents>
        <ModalDynamic
          data={import_TE_1_2_error_}
          setIsModalOpen={function (): void {
            //
          }}
          open={true}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();

    cy.react('ModalDynamic').find('textarea').should('exist');
    cy.react('ModalDynamic')
      .find('textarea')
      .invoke('text')
      .then((t) => {
        expect(t).to.be.deep.eq(contentStr);
      });
  });

  //// TODO: workflow import modal TE
  // it('should render textarea (validate) - import modal TE 1 2 success', function () {
  //   let contentStr = '';

  //   for (const element of import_TE_1_2_success_validate.content) {
  //     const format = (element as IElementModal).format;
  //     const items = (element as IElementModal).items;

  //     if (items)
  //       items.forEach((item, i) => {
  //         contentStr +=
  //           format?.replace(/{([^}]*)}/g, (match, key) => {
  //             return item[key] || '';
  //           }) + (i < items.length - 1 ? '\r\n' : '');
  //       });
  //   }

  //   const _data = {
  //     ...structuredClone(import_TE_1_1),
  //     content: [
  //       ...structuredClone(import_TE_1_1.content).filter(
  //         (c) => c?.attribute?.mode !== 'single',
  //       ),
  //       {
  //         attribute: {
  //           id: 'file',
  //           mandatory: true,
  //           mode: 'single',
  //         },
  //         element: 'upload',
  //       },
  //     ],
  //   } as IDataModal;
  //   const btn = import_TE_1_1.btn.find(
  //     (b) => b.action.method === 'POST',
  //   ) as IButtons;

  //   cy.viewport(1920, 1080);
  //   cy.mount(
  //     <SetupTestsComponents>
  //       <ModalDynamic
  //         data={_data}
  //         setIsModalOpen={function (): void {
  //           //
  //         }}
  //         open={true}
  //       />
  //     </SetupTestsComponents>,
  //   ).waitReactApp();

  //   cy.intercept('POST', btn?.action.endpoint + '?*', {
  //     statusCode: 200,
  //     body: import_TE_1_2_success_validate,
  //   }).as('reqValidate');

  //   cy.react('ModalDynamic')
  //     .find('input[type="file"]')
  //     .selectFile(
  //       {
  //         contents: Cypress.Buffer.from('file contents'),
  //         fileName: 'file.txt',
  //         mimeType: 'text/plain',
  //         lastModified: Date.now(),
  //       },
  //       { force: true, action: 'drag-drop' },
  //     );
  //   cy.contains(btn?.btn_lib as string).click();
  //   cy.wait('@reqValidate').then(() => {
  //     cy.react('ModalDynamic').find('textarea').should('exist');
  //     cy.react('ModalDynamic')
  //       .find('textarea')
  //       .invoke('text')
  //       .then((t) => {
  //         expect(t).to.be.deep.eq(contentStr);
  //       });
  //   });
  // });
});

function parseMultipartFormData(multipartFormData) {
  if (!multipartFormData.includes('------WebKitFormBoundary'))
    return multipartFormData;

  const formDataObject = {};

  // Split the multipart content into individual parts
  const parts = multipartFormData.split(/------WebKitFormBoundary.*/);

  // Remove the first and last empty parts
  parts.shift();
  parts.pop();

  // Iterate over each part to extract key-value pairs
  parts.forEach((part) => {
    const match = /name="([^"]+)"(?:\r\n|\r|\n)([\s\S]*)/.exec(part);
    if (match) {
      const key = match[1].replace(/\[\]$/, '');
      const value = match[2].trim();

      // If the key already exists, convert the value to an array
      if (Object.hasOwnProperty.call(formDataObject, key)) {
        if (Array.isArray(formDataObject[key])) {
          formDataObject[key].push(value);
        } else {
          formDataObject[key] = [formDataObject[key], value];
        }
      } else {
        formDataObject[key] = value;
      }
    }
  });

  return JSON.stringify(formDataObject);
}
