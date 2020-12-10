import { apiRouter } from 'Services';

apiRouter.registerRoute({
  name: 'setControlValue',
  path: '/control/set_value',
  method: 'post',
});
