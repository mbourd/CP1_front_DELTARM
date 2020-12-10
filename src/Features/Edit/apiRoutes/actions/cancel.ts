import { apiRouter } from 'Services';

apiRouter.registerRoute({
  name: 'actionCancel',
  path: '/file/cancel',
  method: 'post',
});
