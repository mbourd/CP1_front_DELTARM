import { router } from './Router';
import { IRouteDef } from './types';

describe('Router', () => {
  const routeDef: IRouteDef = {
    name: 'ShowUser',
    path: '/user/:id/show',
    component: null,
    exact: true,
    strict: false,
    sensitive: false,
  };

  router.registerRoute(routeDef);

  it('should register route', () => {
    expect(router.getRoutes()).toStrictEqual({ [routeDef.name]: routeDef });
  });

  it('should generate path without queries', () => {
    expect(router.generatePath('ShowUser', { id: 42 })).toStrictEqual('/user/42/show');
  });

  it('should generate path with  queries', () => {
    expect(router.generatePath('ShowUser', { id: 42 }, { name: 'john', count: 42 })).toStrictEqual(
      '/user/42/show?name=john&count=42',
    );
  });

  it('should return null if route is not defined', () => {
    expect(router.generatePath('NoRoute')).toBeNull();
  });
});
