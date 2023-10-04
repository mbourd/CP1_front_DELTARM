import { router } from './Router';
import { IRouteDef } from './types';

import spok from 'cy-spok';

describe('Assert Packages/Router.ts', () => {
  const routeDef: IRouteDef = {
    name: 'ShowUser',
    path: '/user/:id/show',
    component: null,
    exact: true,
    strict: false,
    sensitive: false,
  };

  before(() => {
    router.registerRoute(routeDef);
  });

  it('should register route', () => {
    cy.wrap(router.getRoutes()).should(
      spok({
        ShowUser: routeDef,
      }),
    );
  });

  it('Should generate path without queries', () => {
    expect(router.generatePath('ShowUser', { id: 42 })).to.deep.equal(
      '/user/42/show',
    );
  });
  it('Should generate path with  queries', () => {
    expect(
      router.generatePath('ShowUser', { id: 42 }, { name: 'john', count: 42 }),
    ).to.deep.equal('/user/42/show?name=john&count=42');
  });
  it('Should return null if route is not defined', () => {
    expect(router.generatePath('NoRoute')).to.be.null;
  });
});
