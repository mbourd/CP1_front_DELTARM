export type onSuccessParamType = ((value: any) => void) | null;
export type onErrorParamType = ((error: Error) => void) | null;
export type removeCallbackType = (error: Error) => void;
export type clearCallbackType = (error: Error) => void;
export type lengthCallbackType = (error: Error, numberOfKeys: number) => void;
export type keysCallbackType = (error: Error, keys: string[]) => void;
export type createEventCallbackType = (key: string, value: any) => void;
export type removeEventCallbackType = (key: string) => void;

export type UseStorageReturnType = {
  getError: Error | null;
  isGetting: boolean;
  value: any;
  get: (key: string) => void;
  setError: Error | null;
  isSetting: boolean;
  set: <T>(key: string, value: T) => void;
  removeError: Error | null;
  isRemoving: boolean;
  remove: (key: string) => void;
};

export interface IStorage {
  onSuccess: (callback: onSuccessParamType) => IStorage;
  onError: (callback: onErrorParamType) => IStorage;
  set: <T>(key: string, value: T, callback?: (error: Error, value: T) => void) => IStorage;
  onSet: (keys: string | string[], callback: createEventCallbackType) => IStorage;
  get: <T>(key: string, callback?: (error: Error, value: T | null) => void) => IStorage;
  remove: (key: string, callback?: removeCallbackType) => IStorage;
  onRemove: (keys: string | string[], callback: removeEventCallbackType) => IStorage;
  clear: (callback?: clearCallbackType) => IStorage;
  length: (callback?: lengthCallbackType) => IStorage;
  keys: (callback?: keysCallbackType) => IStorage;
  iterate: <T, U>(
    iteratee: (value: T, key: string, iterationNumber: number) => U,
    callback?: (error: Error, result: U) => void,
  ) => IStorage;
  setData: (key: string, value: any) => IStorage;
  getData: <T>(key: string) => T | undefined;
  removeData: (key: string) => IStorage;
}
