import { rest } from 'msw';
import { GRID_DETAILS_ADD_ROW } from './fixtures/datagrid/datagrid';

export const handlers = [
  rest.get(
    'https://controle-api-test.deltarm.com:8082/control/data_grid/add_row',
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(GRID_DETAILS_ADD_ROW));
    },
  ),
];
