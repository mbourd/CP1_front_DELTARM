import {
  ActionCreatorWithPayload,
  ActionCreatorWithoutPayload,
  Reducer,
  AnyAction,
  Store,
} from '@reduxjs/toolkit';

export type UseReduxToolkitType = <T, A extends string>(
  reducerName: string,
) => UseReduxToolkitReturnType<T, A>;
export type UseReduxToolkitReturnType<T, A extends string> = {
  selected: T;
  dispatch: (actionName: A, payload?: any | undefined) => void;
  // actions: Record<
  //   string,
  //   ActionCreatorWithPayload<any, string> | ActionCreatorWithoutPayload<string>
  // >;
  actions: string[];
  // [key: `dispatch_${string}`]: (p?: any | undefined) => void;
};

export interface IAppStore {
  setReducer: (reducer: Record<string, Reducer<any, AnyAction>>) => IAppStore;
  setMiddleWares: (middleware: any[]) => IAppStore;
  getMiddleWares: () => any[];
  setEnhancers: (enhancers: any) => IAppStore;
  getEnhancers: () => any;
  configureStore: () => IAppStore;
  getConfiguredStore: () => Store;
}

export interface IAppReducer {
  setAppStore: (store: IAppStore) => IAppReducer;
  getAppStore: () => IAppStore;
  registerReducer: (
    name: string,
    reducer: Reducer<any>,
    actions: Record<
      string,
      | ActionCreatorWithPayload<any, string>
      | ActionCreatorWithoutPayload<string>
    >,
  ) => IAppReducer;
  getReducers: () => Record<string, Reducer<any>>;
  getActions: (
    reducerName: string,
  ) => Record<
    string,
    ActionCreatorWithPayload<any, string> | ActionCreatorWithoutPayload<string>
  >;
}
