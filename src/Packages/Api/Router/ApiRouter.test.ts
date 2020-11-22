import { apiRouter } from './ApiRouter';
import { IApiRouteDef } from './types';

describe('ApiRouter', () => {
  const userRouteDef: IApiRouteDef = {
    name: 'GetUser',
    method: 'get',
    path: '/user/:id',
  };

  apiRouter.registerRoute(userRouteDef);

  it('should register route', () => {
    expect(apiRouter.getRoutes()).toStrictEqual({ [userRouteDef.name]: userRouteDef });
  });

  it('should generate path without queries', () => {
    expect(apiRouter.generatePath('GetUser', { id: 2 })).toStrictEqual('/user/2');
  });

  it('should generate path with  queries', () => {
    expect(apiRouter.generatePath('GetUser', { id: 2 }, { name: 'john', count: 42 })).toStrictEqual(
      '/user/2?name=john&count=42',
    );
  });

  it('should return null if route is not defined', () => {
    expect(apiRouter.generatePath('NoRoute')).toBeNull();
  });
});
