import {
  IApiControl,
  DataGridDetailsRow,
  DataGridDetailsRowsCell,
  DataGridDetailsColumnType,
} from '../../../../../../types';

export function getData(_control: IApiControl) {
  const rows = _control.data_grid_detail?.rows || [];
  const columns = _control.data_grid_detail?.columns || [];

  return (
    numberRows: number | 'all',
    callback: (d: {
      indexRow: number;
      rows: DataGridDetailsRow[];
      row: DataGridDetailsRow;
      rowValues: DataGridDetailsRowsCell[];
      columns: DataGridDetailsColumnType[];
      getJqueryRowElement: (beforeSelector: string) => JQuery<HTMLElement>;
    }) => void,
  ): void => {
    const count = numberRows === 'all' ? rows.length : numberRows;

    cy.wrap(new Array(count)).each((i, indexRow: number) => {
      const getJqueryRowElement = (beforeSelector = '') =>
        Cypress.$(`${beforeSelector} .ag-row[row-index="${indexRow}"]:eq(0)`);
      const row = rows[indexRow];
      const rowValues: DataGridDetailsRowsCell[] = [];

      for (let i = 0; i < columns.length; i++) {
        const valRdg = columns[i].field.split('.')[0];
        rowValues.push(row[valRdg]);
      }

      callback({
        indexRow,
        rows,
        row,
        rowValues,
        columns,
        getJqueryRowElement,
      });
    });
  };
}
