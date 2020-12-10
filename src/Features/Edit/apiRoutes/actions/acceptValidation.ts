import { apiRouter } from 'Services';

apiRouter.registerRoute({
  name: 'actionAcceptValidation',
  path: '/validate/accept',
  method: 'post',
});
