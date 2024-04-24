// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Packages/ReduxToolkit/useReduxToolkit.job1.cy.tsx"

import React, { useEffect } from 'react';
import { SetupTestsComponents } from '../../../cypress/utils/SetupTestsComponents';

import { createSlice } from '@reduxjs/toolkit';
import { appStore, appReducer, useReduxToolkit } from '.';

const name = 'test';
const initialState = {};
const reducers = {
  reducerAction1: (state, action) => {
    state.propTest = action.payload;
  },
};
const testSlice = createSlice({ name, initialState, reducers });
const { reducerAction1 } = testSlice.actions;
const testReducer = testSlice.reducer;

appStore.configureStore();
const store = appStore.getConfiguredStore();
appReducer.setAppStore(appStore);

describe('useReduxToolkit', function () {
  beforeEach(() => {
    appReducer.unregisterReducer(name);
  });

  it('should register the reducer', function () {
    cy.viewport(0, 0).then(() => {
      appReducer.registerReducer(name, testReducer, { reducerAction1 });
      expect(store.getState()[name]).to.not.null;
      expect(store.getState()[name]).to.not.undefined;
    });
  });

  it('should unregister the reducer', function () {
    cy.viewport(0, 0).then(() => {
      appReducer.unregisterReducer(name);
      expect(store.getState()?.[name]).to.be.undefined;
    });
  });

  it('should have the dispatch action in Function Component', function () {
    appReducer.registerReducer(name, testReducer, { reducerAction1 });

    let actionDispatch;
    let stateSelected;
    const DummyFC: React.FC<any> = () => {
      const { selected, dispatch } = useReduxToolkit(name);

      useEffect(() => {
        actionDispatch = dispatch;
        stateSelected = selected;

        dispatch('reducerAction1', 'Hello World');
      }, [dispatch, selected]);

      return null;
    };

    cy.mount(
      <SetupTestsComponents altReduxStore={store}>
        <DummyFC />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.then(() => {
      expect(actionDispatch).to.not.null;
      expect(actionDispatch).to.not.undefined;

      expect(stateSelected).to.not.null;
      expect(stateSelected).to.not.undefined;

      expect(stateSelected?.propTest).to.be.eq('Hello World');
    });
  });
});
