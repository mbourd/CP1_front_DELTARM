import { apiRouter } from 'Services';

apiRouter.addRoute({
  name: 'login',
  path: '/session/open',
  method: 'post',
});

apiRouter.addRoute({
  name: 'refresh',
  path: '/session/refresh',
  method: 'post',
});
