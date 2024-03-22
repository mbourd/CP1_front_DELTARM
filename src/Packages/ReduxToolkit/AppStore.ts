import {
  configureStore,
  Reducer,
  combineReducers,
  Store,
  // Tuple,
  Action,
} from '@reduxjs/toolkit';
import defaultReducer from './default.reducer';
import { IAppStore } from './types';
// import { Middlewares } from '@reduxjs/toolkit/dist/configureStore';
import {
  persistStore,
  persistReducer,
  PersistConfig,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  Persistor,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import LZString from 'lz-string';

class AppStore implements IAppStore {
  private _reducer: Reducer<any, Action> = combineReducers({
    default: defaultReducer,
  });
  private _middleWares: any = [];
  private _enhancers?: any | undefined;
  private _configuredStore!: Store;
  private _persistConfig: PersistConfig<any> = {
    key: 'root',
    storage,
    transforms: [
      {
        in: (state: any) => LZString.compressToUTF16(JSON.stringify(state)),
        out: (state: string) => JSON.parse(LZString.decompressFromUTF16(state)),
      },
    ],
  };
  private _persistor?: Persistor;

  public replacePersistConfig(config: PersistConfig<any>) {
    this._persistConfig = config;

    return this;
  }

  public addOrReplacePropPersitConfig(key: string, value: any) {
    this._persistConfig = { ...this._persistConfig, [key]: value };

    return this;
  }

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
    const persistedReducer = persistReducer(this._persistConfig, this._reducer);

    this._configuredStore = configureStore({
      reducer: persistedReducer,
      // middleware: (getDefaultMiddleware): Tuple<Middlewares<any>> => {
      //   return [...this._middleWares, ...getDefaultMiddleware()] as Tuple<
      //     Middlewares<any>
      //   >;
      // },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
          ...this._middleWares,
        }),
      enhancers: this._enhancers,
    });
    this.persistStore();

    return this;
  }
  public getConfiguredStore() {
    if (!this._configuredStore) throw new Error('Store is not configured');

    return this._configuredStore;
  }

  public persistStore() {
    this._persistor = persistStore(this._configuredStore);
  }
  public getPersistor() {
    return this._persistor;
  }

  public replaceReducer(
    newReducers: Record<string, Reducer<any, Action>>,
  ): void {
    const persistedReducer = this._createPersistedReducer(newReducers);
    this._configuredStore.replaceReducer(persistedReducer);
  }

  private _createPersistedReducer(
    reducers?: Record<string, Reducer<any, Action>>,
  ): Reducer<any, Action> {
    const combinedReducers = reducers
      ? combineReducers(reducers)
      : this._reducer;

    return persistReducer(this._persistConfig, combinedReducers);
  }
}

export const appStore = new AppStore();
