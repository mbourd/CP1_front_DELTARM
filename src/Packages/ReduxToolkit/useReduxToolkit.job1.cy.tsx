// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Packages/ReduxToolkit/useReduxToolkit.cy.tsx"

import React, { useEffect } from 'react';
import { SetupTestsComponents } from '../../../cypress/utils/SetupTestsComponents';

import { createSlice } from '@reduxjs/toolkit';
import { appStore as _store, appReducer } from '.';

const name = 'test';
const initialState = {};
const reducers = {
  reducerAction1: (state, action) => {
    action;
    state;
  },
};
const testSlice = createSlice({ name, initialState, reducers });
const { reducerAction1 } = testSlice.actions;
const testReducer = testSlice.reducer;

_store.configureStore();
const appStore = _store.getConfiguredStore();
appReducer.setAppStore(_store);

describe('useReduxToolkit', function () {
  it('should register the reducer', function () {
    cy.viewport(0, 0).then(() => {
      appReducer.registerReducer(name, testReducer, { reducerAction1 });
      expect(appStore.getState()[name]).to.not.null;
      expect(appStore.getState()[name]).to.not.undefined;
    });
  });
});
