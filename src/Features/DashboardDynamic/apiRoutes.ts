import { apiRouter } from 'Services';

apiRouter.registerRoute({
  name: 'dashboardControlPermanent',
  path: '/dashboard/contr_perm',
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
