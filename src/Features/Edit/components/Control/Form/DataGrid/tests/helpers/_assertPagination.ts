// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../../cypress/support/component" />

import { IApiControl } from '../../../../../../types';

export function _assertPagination(
  _control: IApiControl,
  paginationSize: number,
  waitMs = 50,
) {
  cy.wait(waitMs).then(() => {
    cy.window().then((w) => {
      expect(
        w[
          'Features_Edit_Control_DataGridControlAgGrid' + _control.control_id
        ].gridRef.current.api.getRenderedNodes().length,
      ).to.be.lte(paginationSize);
      // expect(
      //   w[
      //     'Features_Edit_Control_DataGridControlAgGrid' + _control.control_id
      //   ].gridRef.current.api.paginationGetPageSize(),
      // ).to.be.equal(paginationSize);
    });
  });
}
