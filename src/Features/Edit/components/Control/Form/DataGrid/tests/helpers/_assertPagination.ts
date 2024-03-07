import { IApiControl } from 'Features/Edit/types';

export function _assertPagination(
  _control: IApiControl,
  paginationSize: number,
) {
  cy.wait(155).then(() => {
    cy.window().then((w) => {
      expect(
        w[
          'Features_Edit_Control_DataGridControlAgGrid' + _control.control_id
        ].gridRef.current.api.getRenderedNodes().length,
      ).to.be.lte(paginationSize);
      expect(
        w[
          'Features_Edit_Control_DataGridControlAgGrid' + _control.control_id
        ].gridRef.current.api.paginationGetPageSize(),
      ).to.be.equal(paginationSize);
    });
  });
}
