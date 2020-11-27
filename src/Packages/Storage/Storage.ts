import localforage from 'localforage';

import {
  IStorage,
  onSuccessParamType,
  onErrorParamType,
  removeCallbackType,
  clearCallbackType,
  lengthCallbackType,
  keysCallbackType,
  createEventCallbackType,
  removeEventCallbackType,
} from './types';
import { getByKey } from './getByKey';

export class Storage implements IStorage {
  private _successCallback: onSuccessParamType = null;
  private _errorCallback: onErrorParamType = null;
  private _createEventCallbacks: Record<string, createEventCallbackType> = {};
  private _removeEventCallbacks: Record<string, removeEventCallbackType> = {};
  private _runtimeData: Record<string, any> = {};

  public setRuntimeData(key: string, value: any): this {
    this._runtimeData[key] = value;

    return this;
  }

  public getRuntimeData<T>(key: string): T | undefined {
    return getByKey<T>(this._runtimeData, key);
  }

  public removeRuntimeData(key: string): this {
    delete this._runtimeData[key];

    return this;
  }

  public onSuccess(callback: onSuccessParamType): this {
    this._successCallback = callback;

    return this;
  }

  public onError(callback: onErrorParamType): this {
    this._errorCallback = callback;

    return this;
  }

  public set<T>(key: string, value: T, callback?: (error: Error, value: T) => void): this {
    this.buildResponse(
      localforage.setItem<T>(key, value, (error, value) => {
        if (!error) {
          const hasProperty = Object.prototype.hasOwnProperty.call(this._createEventCallbacks, key);
          if (hasProperty) {
            this._createEventCallbacks[key](key, value);
          }
        }

        if (callback) {
          callback(error, value);
        }
      }),
    );

    return this;
  }

  public onSet(keys: string | string[], callback: createEventCallbackType): this {
    if (!Array.isArray(keys)) {
      keys = [keys];
    }

    keys.map((key) => {
      this._createEventCallbacks[key] = callback;

      return key;
    });

    return this;
  }

  public get<T>(key: string, callback?: (error: Error, value: T | null) => void): this {
    this.buildResponse(localforage.getItem<T>(key, callback));

    return this;
  }

  public remove(key: string, callback?: removeCallbackType): this {
    this.buildResponse(
      localforage.removeItem(key, (error: Error) => {
        if (!error) {
          const hasProperty = Object.prototype.hasOwnProperty.call(this._removeEventCallbacks, key);
          if (hasProperty) {
            this._removeEventCallbacks[key](key);
          }
        }

        if (callback) {
          callback(error);
        }
      }),
    );

    return this;
  }

  public onRemove(keys: string | string[], callback: removeEventCallbackType): this {
    if (!Array.isArray(keys)) {
      keys = [keys];
    }

    keys.map((key) => {
      this._removeEventCallbacks[key] = callback;

      return key;
    });

    return this;
  }

  public clear(callback?: clearCallbackType): this {
    this.buildResponse(localforage.clear(callback));

    return this;
  }

  public length(callback?: lengthCallbackType): this {
    this.buildResponse(localforage.length(callback));

    return this;
  }

  public keys(callback?: keysCallbackType): this {
    this.buildResponse(localforage.keys(callback));

    return this;
  }

  public iterate<T, U>(
    iteratee: (value: T, key: string, iterationNumber: number) => U,
    callback?: (error: Error, result: U) => void,
  ): this {
    this.buildResponse(localforage.iterate<T, U>(iteratee, callback));

    return this;
  }

  public setFlashMessage(key: string, value: any): this {
    // Todo

    return this;
  }

  private buildResponse<T>(promise: Promise<T>): void {
    promise
      .then((value) => {
        if (this._successCallback) {
          this._successCallback(value);
        }
      })
      .catch((error) => {
        if (this._errorCallback) {
          this._errorCallback(error);
        }
      });
  }
}

export const storage = new Storage();
