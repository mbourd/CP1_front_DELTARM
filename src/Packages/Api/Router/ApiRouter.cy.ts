// @ts-check
/// <reference types="cypress"/>

import spok from 'cy-spok';
import { apiRouter } from './ApiRouter';
import { IApiRouteDef } from './types';

describe('Assert Packages/Api/Router/ApiRouter.ts', () => {
  const userRouteDef: IApiRouteDef = {
    name: 'GetUser',
    method: 'get',
    path: '/user/:id',
  };

  before(() => {
    apiRouter.registerRoute(userRouteDef);
  });

  it('should register route', () => {
    cy.wrap(apiRouter.getRoutes()).should(
      spok({
        GetUser: userRouteDef,
      }),
    );
  });

  it('should generate path without queries', () => {
    expect(apiRouter.generatePath('GetUser', { id: 2 })).to.deep.equal(
      '/user/2',
    );
  });

  it('should generate path with  queries', () => {
    expect(
      apiRouter.generatePath('GetUser', { id: 2 }, { name: 'john', count: 42 }),
    ).to.deep.equal('/user/2?name=john&count=42');
  });

  it('should return null if route is not defined', () => {
    expect(apiRouter.generatePath('NoRoute')).to.be.null;
  });
});
