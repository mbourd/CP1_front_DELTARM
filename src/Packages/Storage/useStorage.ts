import { useCallback, useState } from 'react';
import { storage } from './Storage';
import { UseStorageReturnType } from './types';

/**
 * Hook to use to communicate with Storage.
 *
 * @example
 *    // ...
 *    const {
 *      isGetting, getError, value, get,
 *      isSetting, setError, set,
 *      isRemoving, removeError, remove
 *    } = useStorage();
 *
 *    if (isGetting) {
 *      console.log('getting ...');
 *    }
 *
 *   if (getError) {
 *      console.log('An error occurred when getting value from storage');
 *    }
 *
 *    if (value) {
 *      console.log(value);
 *    }
 *    // ...
 *    <p onClick={() => get('hello')}>Get from storage</p>
 *    // ...
 */
export const useStorage = (): UseStorageReturnType => {
  const [getError, setGetError] = useState<Error | null>(null);
  const [isGetting, setIsGetting] = useState(false);
  const [value, setValue] = useState<any>(null);
  const [setError, setSetError] = useState<Error | null>(null);
  const [isSetting, setIsSetting] = useState(false);
  const [removeError, setRemoveError] = useState<Error | null>(null);
  const [isRemoving, setIsRemoving] = useState(false);

  const get = useCallback(<T>(key: string) => {
    setIsGetting(true);
    storage.get(key, (error, val) => {
      setIsGetting(false);
      if (error) {
        setGetError(error);

        return;
      }

      setValue(val as T);

      return;
    });
  }, []);

  const set = useCallback(<T>(key: string, value: T) => {
    setIsSetting(true);
    storage.set<T>(key, value, (error) => {
      setIsSetting(false);
      if (error) {
        setSetError(error);
      }

      return;
    });
  }, []);

  const remove = useCallback((key: string) => {
    setIsRemoving(true);
    storage.remove(key, (error) => {
      setIsRemoving(false);
      if (error) {
        setRemoveError(error);
      }

      return;
    });
  }, []);

  return {
    getError,
    isGetting,
    value,
    get,
    setError,
    isSetting,
    set,
    removeError,
    isRemoving,
    remove,
  };
};
