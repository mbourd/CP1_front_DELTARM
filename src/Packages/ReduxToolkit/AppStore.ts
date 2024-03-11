import {
  configureStore,
  Reducer,
  combineReducers,
  Store,
  Tuple,
  Action,
} from '@reduxjs/toolkit';
import defaultReducer from './default.reducer';
import { IAppStore } from './types';
import { Middlewares } from '@reduxjs/toolkit/dist/configureStore';

class AppStore implements IAppStore {
  private _reducer: Reducer<any, Action> = combineReducers({
    default: defaultReducer,
  });
  private _middleWares: any = [];
  private _enhancers?: any | undefined;
  private _configuredStore!: Store;

  public setReducer(reducers: Record<string, Reducer<any, Action>>): this {
    this._reducer = combineReducers(reducers);

    return this;
  }

  public setMiddleWares(middleware): this {
    this._middleWares = middleware;

    return this;
  }
  public getMiddleWares() {
    return this._middleWares;
  }

  public setEnhancers(enhancers: any): this {
    this._enhancers = enhancers;

    return this;
  }
  public getEnhancers() {
    return this._enhancers;
  }

  public configureStore(): this {
    this._configuredStore = configureStore({
      reducer: this._reducer,
      middleware: (getDefaultMiddleware): Tuple<Middlewares<any>> => {
        return [...this._middleWares, ...getDefaultMiddleware()] as Tuple<
          Middlewares<any>
        >;
      },
      enhancers: this._enhancers,
    });

    return this;
  }
  public getConfiguredStore() {
    if (!this._configuredStore) throw new Error('Store is not configured');

    return this._configuredStore;
  }
}

export const appStore = new AppStore();
