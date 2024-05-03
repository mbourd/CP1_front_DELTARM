import { apiRouter } from 'Services';

apiRouter.registerRoute({
  name: 'dashboardExportCp1',
  path: '/dashboard/export_cp1',
  method: 'get',
  callState: (data, error, currentState) => {
    if (currentState === 'SUCCESS' && data.length === 0) {
      return 'NO_DATA';
    }

    return currentState;
  },
  handler: (data) => {
    return data;
  },
});
