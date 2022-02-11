import { apiRouter } from 'Services';

apiRouter.registerRoute({
  name: 'AIVUrl',
  path: '/aiv_url',
  method: 'get',
});

apiRouter.registerRoute({
  name: 'interfaceButtons',
  path: '/interface/nav_btn',
  method: 'get',
});

apiRouter.registerRoute({
  name: 'userInfo',
  path: '/user/info',
  method: 'get',
});

apiRouter.registerRoute({
  name: 'clientInfo',
  path: '/client/info',
  method: 'get',
});
