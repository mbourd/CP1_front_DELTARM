import { apiRouter } from 'Services';

apiRouter.registerRoute({
  name: 'actionRejectValidation',
  path: '/validate/reject',
  method: 'post',
});
