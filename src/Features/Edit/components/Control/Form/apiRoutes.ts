import { apiRouter } from '../../../../../Packages/Api';

apiRouter.registerRoute({
  name: 'setCompliance',
  path: '/control/set_compliance',
  method: 'post',
});
