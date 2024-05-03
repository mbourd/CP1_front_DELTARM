import { apiRouter } from 'Services';

apiRouter.registerRoute({
  name: 'setControlValue',
  path: '/control/set_value',
  method: 'post',
});
apiRouter.registerRoute({
  name: 'rejectControlValue',
  path: '/control/reject/value',
  method: 'post',
});

apiRouter.registerRoute({
  name: 'downloadUploadedFile',
  path: '/control/get_upfile',
  method: 'get',
});
apiRouter.registerRoute({
  name: 'deleteUploadedFile',
  path: '/control/delete_upfile',
  method: 'post',
});

apiRouter.registerRoute({
  name: 'addRowControlDataGridAgGrid',
  method: 'post',
  path: '/control/data_grid/add_row',
});
apiRouter.registerRoute({
  name: 'deleteRowControlDataGridAgGrid',
  method: 'post',
  path: '/control/data_grid/delete_row',
});
apiRouter.registerRoute({
  name: 'refreshDataGridAgGrid',
  method: 'get',
  path: '/control/data_grid/refresh_values',
});
apiRouter.registerRoute({
  name: 'callDataGridAgGridDynamicRoute',
  method: 'post',
  path: '/control/data_grid:dynamicRoute',
});
apiRouter.registerRoute({
  name: 'saveDataGridAgGridValues',
  method: 'post',
  path: '/control/data_grid/save_value',
});

apiRouter.registerRoute({
  name: 'getControlValue',
  method: 'get',
  path: '/control/get_value',
});

apiRouter.registerRoute({
  name: 'setComplianceValue',
  method: 'post',
  path: '/control/set_compliance',
});
