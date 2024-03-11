import {
  IApiControl,
  DataGridDetailsRowsCell,
  DataGridDetailsColumnType,
} from 'Features/Edit/types';
import { RowNode, GridApi } from 'ag-grid-community';
import BigNumber from 'bignumber.js';
import { create as mathCreate, all as mathAll } from 'mathjs';

export function _assertSorting(_control: IApiControl) {
  cy.wait(500).then(() => {
    cy.window().then((w) => {
      w[
        'Features_Edit_Control_DataGridControlAgGrid' + _control.control_id
      ].setCanSendApi(false);
    });
    const columns = _control.data_grid_detail?.columns || [];
    const processRowData = (rowNode: RowNode) => {
      const row = {};

      for (const col of columns) {
        if (col.field_type === 'formula') {
          const math = mathCreate(mathAll);
          const ids = new Set<string>(
            rowNode.data[col.field.split('.')[0]].value.match(/#\d+/g),
          );
          let equation: string = rowNode.data[col.field.split('.')[0]].value;

          Object.values<DataGridDetailsRowsCell>(rowNode.data).forEach(
            (obj) => {
              const colElmId = '#' + obj.col_elm_id;
              const objValue = obj.value;

              if (ids.has(colElmId))
                equation = equation.replace(
                  new RegExp(colElmId, 'g'),
                  objValue ? objValue : '@@@',
                );
            },
          );
          math.config({ number: 'BigNumber' });

          try {
            const result = math.evaluate(equation);
            row[col.field] = math.format(result, {
              notation: 'fixed',
              precision: 0,
            });
          } catch (error) {
            row[col.field] = '';
          }
        } else
          row[col.field] = rowNode.data[col.field.split('.')[0]].value ?? '';
      }

      return row;
    };

    cy.window().then((cyWindow) => {
      const unsortedData: Record<string, any>[] = [];
      const { api: gridApi }: { api: GridApi } =
        cyWindow[
          'Features_Edit_Control_DataGridControlAgGrid' + _control.control_id
        ].gridRef.current;

      gridApi.forEachNode((rowNode) => {
        unsortedData.push(processRowData(rowNode));
      });
      cy.wrap(columns).each((col: DataGridDetailsColumnType) => {
        if (col.sortable) {
          let expectedSortedDataASC: Record<string, any>[] = [];
          let expectedSortedDataDESC: Record<string, any>[] = [];

          switch (col.field_type) {
            case 'date':
              expectedSortedDataASC = [...unsortedData].sort((a, b) => {
                const dateA = new Date(
                  a[col.field] ? a[col.field] : '1970-01-01',
                );
                const dateB = new Date(
                  b[col.field] ? b[col.field] : '1970-01-01',
                );

                return dateA.getTime() - dateB.getTime();
              });
              expectedSortedDataDESC = [...unsortedData].sort((a, b) => {
                const dateA = new Date(
                  a[col.field] ? a[col.field] : '1970-01-01',
                );
                const dateB = new Date(
                  b[col.field] ? b[col.field] : '1970-01-01',
                );

                return dateB.getTime() - dateA.getTime();
              });
              break;
            case 'checkbox':
            case 'icon':
            case 'action_button':
            case 'text':
            case 'long_text':
            case 'text_alt':
            case 'comment':
            case 'select_list':
            case 'dynamic_select_list':
              expectedSortedDataASC = [...unsortedData].sort((a, b) => {
                const valueA = a[col.field] ? a[col.field] : '';
                const valueB = b[col.field] ? b[col.field] : '';

                return valueA.localeCompare(valueB, undefined, {
                  sensitivity: 'base',
                });
              });
              expectedSortedDataDESC = [...unsortedData].sort((a, b) => {
                const valueA = a[col.field] ? a[col.field] : '';
                const valueB = b[col.field] ? b[col.field] : '';

                return valueB.localeCompare(valueA, undefined, {
                  sensitivity: 'base',
                });
              });
              break;
            case 'date_string':
              expectedSortedDataASC = [...unsortedData].sort((a, b) => {
                const valA = a[col.field] ? a[col.field] : '--/--/--';
                const valB = b[col.field] ? b[col.field] : '--/--/--';
                const [dayA, monthA, yearA] = valA.split(' ')[0].split('/');
                const [dayB, monthB, yearB] = valB.split(' ')[0].split('/');
                const strDateA = `${monthA}-${dayA}-${yearA} ${
                  /^\d{2}\/\d{2}\/\d{2} - \d{2}:\d{2}:\d{2}$/.test(valA)
                    ? valA.split(' - ')[1]
                    : '00:00:00'
                }`;
                const strDateB = `${monthB}-${dayB}-${yearB} ${
                  /^\d{2}\/\d{2}\/\d{2} - \d{2}:\d{2}:\d{2}$/.test(valB)
                    ? valB.split(' - ')[1]
                    : '00:00:00'
                }`;
                const dateA = new Date(
                  valA !== '--/--/--' ? strDateA : '1970-01-01',
                );
                const dateB = new Date(
                  valB !== '--/--/--' ? strDateB : '1970-01-01',
                );

                if (dateA.getTime() > dateB.getTime()) return 1;
                if (dateA.getTime() < dateB.getTime()) return -1;

                return 0;
              });
              expectedSortedDataDESC = [...unsortedData].sort((a, b) => {
                const valA = a[col.field] ? a[col.field] : '--/--/--';
                const valB = b[col.field] ? b[col.field] : '--/--/--';
                const [dayA, monthA, yearA] = valA.split(' ')[0].split('/');
                const [dayB, monthB, yearB] = valB.split(' ')[0].split('/');
                const strDateA = `${monthA}-${dayA}-${yearA} ${
                  /^\d{2}\/\d{2}\/\d{2} - \d{2}:\d{2}:\d{2}$/.test(valA)
                    ? valA.split(' - ')[1]
                    : '00:00:00'
                }`;
                const strDateB = `${monthB}-${dayB}-${yearB} ${
                  /^\d{2}\/\d{2}\/\d{2} - \d{2}:\d{2}:\d{2}$/.test(valB)
                    ? valB.split(' - ')[1]
                    : '00:00:00'
                }`;
                const dateA = new Date(
                  valA !== '--/--/--' ? strDateA : '1970-01-01',
                );
                const dateB = new Date(
                  valB !== '--/--/--' ? strDateB : '1970-01-01',
                );

                if (dateA.getTime() > dateB.getTime()) return -1;
                if (dateA.getTime() < dateB.getTime()) return 1;

                return 0;
              });
              break;
            case 'innerHTML':
              expectedSortedDataASC = [...unsortedData].sort((a, b) => {
                const _valA = a[col.field] ? a[col.field] : '';
                const _valB = b[col.field] ? b[col.field] : '';
                const strippedStringA = _valA.replace(/(<([^>]+)>)/gi, ' ');
                const strippedStringB = _valB.replace(/(<([^>]+)>)/gi, ' ');

                if (strippedStringA == strippedStringB) return 0;

                return strippedStringA > strippedStringB ? 1 : -1;
              });
              expectedSortedDataDESC = [...unsortedData].sort((a, b) => {
                const _valA = a[col.field] ? a[col.field] : '';
                const _valB = b[col.field] ? b[col.field] : '';
                const strippedStringA = _valA.replace(/(<([^>]+)>)/gi, ' ');
                const strippedStringB = _valB.replace(/(<([^>]+)>)/gi, ' ');

                if (strippedStringA == strippedStringB) return 0;

                return strippedStringB > strippedStringA ? 1 : -1;
              });
              break;
            case 'integer':
            case 'decimal':
            case 'financial':
            case 'percent':
            case 'formula':
              expectedSortedDataASC = [...unsortedData].sort((a, b) => {
                const vA = a[col.field];
                const vB = b[col.field];

                // Handling null values
                if (vA === null || vA === undefined || vA === '')
                  return vB === null || vB === undefined || vB === '' ? 0 : -1;
                if (vB === null || vB === undefined || vB === '') return 1;

                const v1 = new BigNumber(vA.replace(/[^0-9.-]+/g, ''));
                const v2 = new BigNumber(vB.replace(/[^0-9.-]+/g, ''));

                return v1.isEqualTo(v2) ? 0 : v1.isLessThan(v2) ? -1 : 1;
              });
              expectedSortedDataDESC = [...unsortedData].sort((a, b) => {
                const vA = a[col.field];
                const vB = b[col.field];

                // Handling null values
                if (vB === null || vB === undefined || vB === '')
                  return vA === null || vA === undefined || vA === '' ? 0 : -1;
                if (vA === null || vA === undefined || vA === '') return 1;

                const v1 = new BigNumber(vA.replace(/[^0-9.-]+/g, ''));
                const v2 = new BigNumber(vB.replace(/[^0-9.-]+/g, ''));

                return v1.isEqualTo(v2) ? 0 : v1.isLessThan(v2) ? 1 : -1;
              });
              break;
            default:
              expectedSortedDataASC = [...unsortedData];
              expectedSortedDataDESC = [...unsortedData];
              break;
          }

          expectedSortedDataASC = expectedSortedDataASC.slice(
            0,
            _control.data_grid_detail?.datagrid_options?.pagination_row_size ??
              20,
          );
          expectedSortedDataDESC = expectedSortedDataDESC.slice(
            0,
            _control.data_grid_detail?.datagrid_options?.pagination_row_size ??
              20,
          );

          cy.then(() => {
            cy.waitUntil(() => {
              return cy
                .react('DataGridControlAgGrid')
                .react('AgGridReact')
                .find(`.ag-header-cell[col-id="${col.field}"]`)
                .click()
                .then(
                  () =>
                    Cypress.$(`.ag-header-cell[col-id="${col.field}"]`).attr(
                      'aria-sort',
                    ) === 'ascending',
                );
            }).then(() => {
              const actualTableData = gridApi
                .getRenderedNodes()
                .map(processRowData);
              // console.log('u', unsortedData);
              // console.log('a', actualTableData);
              // console.log('asc', expectedSortedDataASC);
              expect(actualTableData).to.deep.equal(expectedSortedDataASC);
            });
          }).then(() => {
            cy.waitUntil(() => {
              return cy
                .react('DataGridControlAgGrid')
                .react('AgGridReact')
                .find(`.ag-header-cell[col-id="${col.field}"]`)
                .click()
                .then(
                  () =>
                    Cypress.$(`.ag-header-cell[col-id="${col.field}"]`).attr(
                      'aria-sort',
                    ) === 'descending',
                );
            }).then(() => {
              const actualTableData = gridApi
                .getRenderedNodes()
                .map(processRowData);
              // console.log('u', unsortedData);
              // console.log('a', actualTableData);
              // console.log('desc', expectedSortedDataDESC);
              expect(actualTableData).to.deep.equal(expectedSortedDataDESC);
            });
          });
        } else {
          gridApi.paginationSetPageSize(
            _control.data_grid_detail?.datagrid_options?.pagination_row_size ??
              9999,
          );
          cy.react('DataGridControlAgGrid')
            .react('AgGridReact')
            .find(`.ag-header-cell[col-id="${col.field}"]`)
            .realClick()
            .then(() => {
              const actualTableData = cyWindow[
                'Features_Edit_Control_DataGridControlAgGrid' +
                  _control.control_id
              ].gridRef.current.api
                .getRenderedNodes()
                .map((rowNode: RowNode) => processRowData(rowNode));
              // console.log('u', unsortedData);
              // console.log('a', actualTableData);
              expect(actualTableData).to.deep.equal(
                unsortedData.slice(
                  0,
                  _control.data_grid_detail?.datagrid_options
                    ?.pagination_row_size ?? 9999,
                ),
              );
            });
        }
      });
    });
  });
}
