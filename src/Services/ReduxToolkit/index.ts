import { appStore as store, appReducer } from 'Packages/ReduxToolkit';

store
  // .setReducers({default: defaultReducer})
  // .setMiddleWare([...middlewares]);
  // .setEnhancers(enhancers);
  .configureStore();
const appStore = store.getConfiguredStore();
appReducer.setAppStore(store);

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
export { appStore, appReducer };
export { useReduxToolkit } from 'Packages/ReduxToolkit';
