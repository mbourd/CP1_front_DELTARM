import { apiRouter } from 'Services';

apiRouter.registerRoute({
  name: 'actionCancelDisbursement',
  path: '/file/cancel_dec',
  method: 'post',
});
