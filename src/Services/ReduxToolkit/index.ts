import { appStore, appReducer } from 'Packages/ReduxToolkit';

appReducer.setAppStore(
  appStore
    // .setReducers({default: defaultReducer})
    // .setMiddleWare([...middlewares]);
    // .setEnhancers(enhancers);
    .configureStore(),
);

const store = appStore.getConfiguredStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { appStore, store, appReducer };
export { useReduxToolkit } from 'Packages/ReduxToolkit';
