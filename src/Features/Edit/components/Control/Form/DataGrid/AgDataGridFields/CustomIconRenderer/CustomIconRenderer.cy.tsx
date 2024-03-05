// // @ts-check
// /// <reference types="cypress" />
// /// <reference types="../../../../../../../../../cypress/support/component" />

// // NOTE: Run CLI:
// // yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/DataGrid/AgDataGridFields/CustomIconRenderer/CustomIconRenderer.cy.tsx"

// import React from 'react';
// import { SetupTestsComponents } from '../../../../../../../../../cypress/utils/SetupTestsComponents';

// import CustomIconRenderer from './CustomIconRenderer';

// describe('<CustomIconRenderer', () => {
//   it('Should render', () => {
//     const props = {
//       colDef: {
//         field: 'col1.value',
//       },
//       data: {
//         col1: {
//           value: 'AddLocationOutlined;#00B456;24',
//         },
//       },
//     };

//     cy.mount(
//       <SetupTestsComponents>
//         <CustomIconRenderer props={props} />
//       </SetupTestsComponents>,
//     );
//     cy.waitReactApp();
//     cy.react('CustomIconRenderer').should('exist');
//   });

//   it('SVG icon should exist', () => {
//     const color = '#00B456';
//     const fontSize = 24;
//     const props = {
//       colDef: {
//         field: 'col1.value',
//       },
//       data: {
//         col1: {
//           value: `AddLocationOutlined;${color};${fontSize}`,
//         },
//       },
//     };

//     cy.mount(
//       <SetupTestsComponents>
//         <CustomIconRenderer props={props} />
//       </SetupTestsComponents>,
//     );
//     cy.waitReactApp();
//     cy.react('CustomIconRenderer').find('svg').should('exist');
//     cy.react('CustomIconRenderer')
//       .find('svg')
//       .should('have.css', 'color', 'rgb(0, 180, 86)')
//       .should('have.css', 'font-size', fontSize + 'px');
//   });

//   it('SVG icon should have default font-size', () => {
//     const color = '#00B456';
//     const props = {
//       colDef: {
//         field: 'col1.value',
//       },
//       data: {
//         col1: {
//           value: `AddLocationOutlined;${color}`,
//         },
//       },
//     };

//     cy.mount(
//       <SetupTestsComponents>
//         <CustomIconRenderer props={props} />
//       </SetupTestsComponents>,
//     );
//     cy.waitReactApp();
//     cy.react('CustomIconRenderer').find('svg').should('exist');
//     cy.react('CustomIconRenderer')
//       .find('svg')
//       .should('have.css', 'color', 'rgb(0, 180, 86)')
//       .should('have.css', 'font-size', '32px');
//   });

//   it('SVG icon should have default color & font-size', () => {
//     const props = {
//       colDef: {
//         field: 'col1.value',
//       },
//       data: {
//         col1: {
//           value: `AddLocationOutlined`,
//         },
//       },
//     };

//     cy.mount(
//       <SetupTestsComponents>
//         <CustomIconRenderer props={props} />
//       </SetupTestsComponents>,
//     );
//     cy.waitReactApp();
//     cy.react('CustomIconRenderer').find('svg').should('exist');
//     cy.react('CustomIconRenderer')
//       .find('svg')
//       .should('have.css', 'color', 'rgb(0, 0, 0)')
//       .should('have.css', 'font-size', '32px');
//   });

//   it('SVG icon should not render', () => {
//     const props = {
//       colDef: {
//         field: 'col1.value',
//       },
//       data: {
//         col1: {
//           value: ``,
//         },
//       },
//     };

//     cy.mount(
//       <SetupTestsComponents>
//         <CustomIconRenderer props={props} />
//       </SetupTestsComponents>,
//     );
//     cy.waitReactApp();
//     cy.react('CustomIconRenderer')
//       .find('svg', { timeout: 1 })
//       .should('not.exist');
//   });
// });
