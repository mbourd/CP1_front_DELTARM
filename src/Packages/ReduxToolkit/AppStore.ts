import {
  configureStore,
  Reducer,
  AnyAction,
  combineReducers,
  Store,
} from '@reduxjs/toolkit';
import defaultReducer from './default.reducer';
import { IAppStore } from './types';

class AppStore implements IAppStore {
  private _reducer: Reducer<any, AnyAction> = combineReducers({
    default: defaultReducer,
  });
  private _middleWares: any[] = [];
  private _enhancers?: any | undefined;
  private _configuredStore!: Store;

  public setReducer(reducers: Record<string, Reducer<any, AnyAction>>): this {
    this._reducer = combineReducers(reducers);

    return this;
  }

  public setMiddleWares(middleware: any[]): this {
    this._middleWares = middleware;

    return this;
  }
  public getMiddleWares(): any[] {
    return this._middleWares;
  }

  public setEnhancers(enhancers: any): this {
    this._enhancers = enhancers;

    return this;
  }
  public getEnhancers(): any {
    return this._enhancers;
  }

  public configureStore(): this {
    this._configuredStore = configureStore({
      reducer: this._reducer,
      middleware: (getDefaultMiddleware) => {
        return [...this._middleWares, ...getDefaultMiddleware()];
      },
      enhancers: this._enhancers,
    });

    return this;
  }
  public getConfiguredStore(): Store {
    if (!this._configuredStore) throw new Error('Store is not configured');

    return this._configuredStore;
  }
}

export const appStore = new AppStore();
