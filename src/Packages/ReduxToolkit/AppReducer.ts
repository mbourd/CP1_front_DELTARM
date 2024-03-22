import {
  Reducer,
  combineReducers,
  ActionCreatorWithPayload,
  ActionCreatorWithoutPayload,
} from '@reduxjs/toolkit';
import { IAppReducer, IAppStore } from './types';

class AppReducer implements IAppReducer {
  private _appStore!: IAppStore;
  private _reducers: Record<string, Reducer<any>> = {};
  private _actions: Record<
    string,
    Record<
      string,
      | ActionCreatorWithPayload<any, string>
      | ActionCreatorWithoutPayload<string>
    >
  > = {};

  public setAppStore(store: IAppStore) {
    this._appStore = store;

    return this;
  }

  public getAppStore(): IAppStore {
    return this._appStore;
  }

  public registerReducer(
    name: string,
    reducer: Reducer<any>,
    actions: Record<
      string,
      | ActionCreatorWithPayload<any, string>
      | ActionCreatorWithoutPayload<string>
    > = {},
  ) {
    if (this._reducers?.[name]) {
      throw new Error(name + ' is already registered as reducer');
    }

    this._reducers[name] = reducer;
    this._actions[name] = { ...actions };

    this._appStore.replaceReducer({ ...this.getReducers() });

    return this;
  }

  public unregisterReducer(name: string): this {
    delete this._reducers[name];
    delete this._actions[name];

    this._appStore.replaceReducer({ ...this.getReducers() });

    return this;
  }

  public getReducers(): Record<string, Reducer<any>> {
    return this._reducers;
  }

  public getActions(
    reducerName: string,
  ): Record<
    string,
    ActionCreatorWithPayload<any, string> | ActionCreatorWithoutPayload<string>
  > {
    return this._actions[reducerName];
  }
}

const appReducer = new AppReducer();
export { appReducer };
